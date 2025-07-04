/* eslint-disable @typescript-eslint/no-explicit-any */
import ContactMe from '@/components/homeCompnents/ContactMe';
import { client, urlFor } from '@/lib/sanity';
import { ProjectType } from '@/types/project';
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
      slug,
      tags,
      featuredImage,
      content
    }`,
    { slug }
  );
  return project;
};

const renderSpan = (text: string) => {
  const links = [
    'https://surfmeal-frontend.vercel.app/',
    'https://takerslogistics-web.vercel.app/',
  ];

  for (const url of links) {
    if (text.includes(url)) {
      const cleaned = text.replace(url, '').trim();
      return (
        <span>
          {cleaned}{' '}
          <a className="underline text-green-400" href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </span>
      );
    }
  }

  return <span>{text}</span>;
};

export default async function Page({ params }: { params: any }) {
  const slug = params?.slug as string;
  const project: ProjectType = await getProject(slug);

  return (
    <MainLayout>
      <main className="px-4 sm:px-10 py-16 text-white bg-[#0d0d0d]">
        {/* Hero Image */}
        <div className="max-w-4xl mx-auto">
          <Image
            src={urlFor(project.featuredImage).width(800).height(400).auto('format').url()}
            alt={project.title}
            width={800}
            height={400}
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Title & Category */}
        <div className="max-w-4xl mx-auto mt-10 space-y-2">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-green-400">Category: {project.category}</p>
        </div>

        {/* Content Rendering */}
        <div className="max-w-4xl mx-auto mt-8 space-y-6">
          {project.content.map((block) => {
            if (block._type === 'block') {
              const children = block.children.map((child) => (
                <span key={child._key}>{renderSpan(child.text)}</span>
              ));

              if (block.style === 'h3') {
                return <h3 key={block._key} className="text-2xl font-semibold">{children}</h3>;
              }

              if (block.style === 'h4') {
                return <h4 key={block._key} className="text-xl font-medium">{children}</h4>;
              }

              if (block.listItem) {
                const listStyle = block.level === 2 ? 'list-circle' : 'list-disc';
                return (
                  <li key={block._key} className={`ml-6 ${listStyle}`}>
                    {children}
                  </li>
                );
              }

              return <p key={block._key} className="text-base leading-relaxed text-gray-300">{children}</p>;
            }

            if (block._type === 'image') {
              return (
                <Image
                  key={block._key}
                  src={urlFor(project.featuredImage).auto('format').url()}
                  alt="Project Image"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg my-4"
                />
              );
            }

            if (block._type === 'imageGroup') {
              return <RenderImageGroup key={block._key} block={block} />;
            }

            return null;
          })}
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
