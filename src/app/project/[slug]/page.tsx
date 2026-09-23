/* eslint-disable @typescript-eslint/no-explicit-any */
import ContactMe from '@/components/homeCompnents/ContactMe';
import { client, urlFor } from '@/lib/sanity';
import { ProjectLink, ProjectType } from '@/types/project';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RenderImageGroup from './components/RenderImageGroup';
import MainLayout from '@/layouts/MainLayout';

const getProject = async (slug: string): Promise<ProjectType> => {
  const project = await client.fetch(
    `*[_type == 'portfolio' && slug.current == $slug][0] {
      title,
      category,
      summary,
      period,
      links,
      slug,
      tags,
      featuredImage,
      content
    }`,
    { slug }
  );
  return project;
};

// Older projects store their live URLs as plain text, so turn those into link annotations
const linkifyContent = (content: any[] = []) =>
  content.map((block) => {
    if (block._type !== 'block') return block;
    const markDefs = [...(block.markDefs || [])];
    const children = block.children.flatMap((span: any) => {
      if (span._type !== 'span' || !/https?:\/\//.test(span.text)) return [span];
      return span.text
        .split(/(https?:\/\/[^\s)]+)/g)
        .filter(Boolean)
        .map((part: string, i: number) => {
          if (!/^https?:\/\//.test(part)) return { ...span, _key: `${span._key}-${i}`, text: part };
          const key = `${span._key}-link-${i}`;
          markDefs.push({ _type: 'link', _key: key, href: part });
          return { ...span, _key: `${span._key}-${i}`, text: part, marks: [...(span.marks || []), key] };
        });
    });
    return { ...block, markDefs, children };
  });

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold pt-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-medium">{children}</h4>,
    normal: ({ children }) => <p className="text-base leading-relaxed text-gray-300 whitespace-pre-line">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="ml-6 list-disc space-y-2 text-gray-300">{children}</ul>,
    number: ({ children }) => <ol className="ml-6 list-decimal space-y-2 text-gray-300">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    link: ({ value, children }) => (
      <a className="underline text-green-400" href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  hardBreak: () => <br />,
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).auto('format').url()}
        alt={value?.altText || 'Project image'}
        width={800}
        height={600}
        className="rounded-xl shadow-lg my-4"
      />
    ),
    imageGroup: ({ value }) => <RenderImageGroup block={value} />,
  },
};

const linkIcon = (kind: ProjectLink['kind']) => {
  if (kind === 'playstore') return faGooglePlay;
  if (kind === 'appstore') return faApple;
  if (kind === 'website') return faGlobe;
  return faArrowUpRightFromSquare;
};

export default async function Page({ params }: { params: any }) {
  const { slug } = await params;
  const project: ProjectType = await getProject(slug);

  return (
    <MainLayout>
      <main className="px-4 sm:px-10 py-16 text-white bg-[#0d0d0d]">
        {/* Hero Image */}
        <div className="max-w-4xl mx-auto">
          <Image
            src={urlFor(project.featuredImage).width(1600).height(900).auto('format').url()}
            alt={project.title}
            width={1600}
            height={900}
            priority
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Title, category and links */}
        <div className="max-w-4xl mx-auto mt-10 space-y-3">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-green-400">
            Category: {project.category}
            {project.period && <span className="text-gray-400"> | {project.period}</span>}
          </p>
          {project.summary && <p className="text-lg text-gray-300 leading-relaxed">{project.summary}</p>}

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((link) => (
                <a
                  key={link._key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-green-600 text-sm hover:bg-green-600/20 transition"
                >
                  <FontAwesomeIcon icon={linkIcon(link.kind)} className="text-green-400" />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Content Rendering */}
        <div className="max-w-4xl mx-auto mt-8 space-y-6">
          <PortableText value={linkifyContent(project.content)} components={components} />
        </div>

        {/* Tags */}
        <div className="max-w-4xl mx-auto mt-10">
          <h4 className="text-lg font-semibold">Tags:</h4>
          <ul className="flex flex-wrap gap-3 mt-2">
            {project.tags?.map((tag) => (
              <li key={tag}>
                <Link
                  href={`/myprojects?tag=${tag}`}
                  className="px-3 py-1 rounded-full text-sm bg-[#1e293b] text-primary hover:bg-primary/10 transition"
                >
                  #{tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Contact */}
      <ContactMe />
    </MainLayout>
  );
}
