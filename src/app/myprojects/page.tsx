import ContactMe from '@/components/homeCompnents/ContactMe';
import ProjectsCompoent from '@/components/ProjectsCompoent';
import MainLayout from '@/layouts/MainLayout';
import { client } from '@/lib/sanity';
import { ProjectType } from '@/types/project';
import React from 'react';

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

  return projects;
}

export default async function Page() {
  const projects: ProjectType[] = await getProjects();

  return (
    <MainLayout>
      <main className="px-4 sm:px-10 py-20  text-white">
        {/* Header */}
        <section className="max-w-6xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            My <span className="text-green-400">Projects</span> Showcase
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            Explore a diverse portfolio of real-world work — from beautiful UI designs and scalable full-stack
            applications to finely-crafted backend services. Every project blends creativity, technology, and problem-solving.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="max-w-6xl mx-auto mt-14">
          {projects && (
            <>
              <ProjectsCompoent projects={projects.slice(0, 20)} />
            </>
          )}
        </section>
      </main>

      {/* Contact Me */}
      <ContactMe />
    </MainLayout>
  );
}
