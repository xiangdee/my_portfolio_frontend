import { CircleDot } from 'lucide-react'
import React from 'react'
import ProjectsCompoent from '../ProjectsCompoent'
import { ProjectType } from '@/types/project';
import { client } from '@/lib/sanity';
import Link from 'next/link';

async function getProjects() {
  const projects = await client.fetch(
    `*[_type == 'portfolio'] {
      title,
      category,
      slug,
      featuredImage,
      tags,
      content
    }`
  );

  return projects 
}

export default async function PortfolioSection() {
  const projects: ProjectType[] = await getProjects();

  return (
    <section id="works" className="py-16 px-4 sm:px-10  text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="flex items-center gap-3 text-green-400 animate-pulse text-lg font-mono">
            <CircleDot className="w-3 h-3 animate-pulse" /> My Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Selected Projects</h2>
          <p className="text-gray-400 mt-2 max-w-xl">Here are some of the projects I&apos;ve worked on. From design to deployment, each one reflects my passion and skill.</p>
        </div>

        {projects && (
          <>
            <ProjectsCompoent projects={projects.slice(0, 8)} />

            <div className="mt-12 text-center">
              <Link href="/myprojects" className="inline-block px-6 py-3 bg-primary text-white rounded-xl hover:bg-opacity-90 transition">
                View More Projects
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
