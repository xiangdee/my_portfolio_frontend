import { MainHeader } from '@/components/mainHeader';
import ContactMe from '@/homeCompnents/ContactMe';
import { client, urlFor } from '@/lib/sanity';
import { ProjectType } from '@/types/project';
import Image  from 'next/image';
import React from 'react'


export async function getStaticPaths () {
  
    const projects = await client.fetch(
        `*[_type == 'portfolio'] {
          title,
          category,
          slug,
          featuredImage,
          content
        }`
      );
    
    const path = projects.map((project:ProjectType) => {
       return {params: { slug : project.slug.current }}
    });    
    console.log(path);

    return {
      paths:path,
      fallback: 'blocking'
    }
  
  }

  const getProject = async (slug: any):Promise<ProjectType> => {
  
    // Fetch data for the specific project using the slug
    const project = await client.fetch(
      `*[_type == 'portfolio' && slug.current == $slug] {
        title,
        category,
        slug,
        featuredImage,
        content
      }`,
      { slug }
    );
  console.log(project);
  
    return project[0]
  }
  
export default async function Page({params}:{params:any}) {
  const slug = params?.slug as string;
  const project:ProjectType =  await getProject(slug)
  return (
    <>
      <MainHeader/>
      <main className='p-6'>
        <div className='flex justify-center'>
        <Image
                      src={urlFor(project.featuredImage).width(300).height(300).auto('format').url()}
                      alt={project.title}
                      width={800}
                      height={800}
                      />
        </div>
        <div className='my-5'>
            <h3 className='text-2xl'>Project name:{project.title}</h3>
            <h4 className='text-xl'>Category:{project.category}</h4>
        </div>
        <div>
        {project.content.map((block, index) => {
        if (block._type === 'block') {
          // Render text block
          return (
            <p key={block._key}>
              {block.children.map((child) => (
                <span key={child._key}>{child.text}</span>
              ))}
            </p>
          );
        } else if (block._type === 'image') {
          // Render image block
          return (
            <Image
              key={block._key}
              src={urlFor(project.featuredImage).auto('format').url()}
              alt="Image Alt Text"
              width={800}
              height={800}
            />
          );
        }
        // Add more block types as needed
        return null;
      })}
      
        </div>
         {/* Contact me */}
         <ContactMe/>
        {/* Contact me start */}
      </main>
    </>
  )
}
