import ProjectsCompoent from '@/components/ProjectsCompoent'
import { MainHeader } from '@/components/mainHeader'
import ContactMe from '@/homeCompnents/ContactMe';
import { client } from '@/lib/sanity';
import { ProjectType } from '@/types/project';
import Link from 'next/link'
import React from 'react'

async function getProjects() {
  const projects = await client.fetch(
    `*[_type == 'portfolio'] {
      title,
      category,
      slug,
      featuredImage,
      content
    }`
  );

  return projects 
}

export default async function Page() {
  const projects:ProjectType[] = await getProjects();
  return (
    <>
    <MainHeader/>
    <main className='p-6'>
    <div className=''>
            <h3 className='text-2xl'>View all my projects</h3>
            <p>
            Explore a showcase of my diverse projects on the &lsquo;View My Projects&lsquo; page. 
            From captivating frontend designs that enhance user experiences to robust backend solutions 
            ensuring scalability and efficiency, each project is a testament to my proficiency in technologies 
            like HTML, CSS, JavaScript, React, Node.js, PHP, and more. Whether it&lsquo;s crafting pixel-perfect UIs 
            or architecting scalable server-side solutions, this page provides insights into my skills as a 
            full-stack developer. Dive into the portfolio to witness a fusion of creativity, functionality, and technical excellence.
            </p>
    </div>
    <div className='my-10'>
    {
            projects && 
            <>
            <ProjectsCompoent projects={projects.slice(0,20)}/>
            <div className='mt-10 text-center'>
                {/* <Link href={'/myprojects'} className='btn bg-primary text-white'>View More</Link> */}
             </div>
              </>
    }
    </div>
 
    
    </main>
     {/* Contact me */}
     <ContactMe/>
     {/* Contact me start */}
    </>
  )
}
