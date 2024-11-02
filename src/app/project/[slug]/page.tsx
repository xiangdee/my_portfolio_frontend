import { MainHeader } from '@/components/mainHeader';
import ContactMe from '@/homeCompnents/ContactMe';
import { client, urlFor } from '@/lib/sanity';
import { ProjectType } from '@/types/project';
import { GetStaticPaths } from 'next';
import Image  from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import React from 'react'
import RenderImageGroup from './components/RenderImageGroup';

interface Params extends ParsedUrlQuery {
  slug: string,
}


export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const projects = await client.fetch(
    `*[_type == 'portfolio'] {
      title,
      category,
      slug,
      featuredImage,
      content
    }`
  );

  const paths = projects.map((project: ProjectType) => ({
    params: { slug: project.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};

  const getProject = async (slug: any):Promise<ProjectType> => {
  
    // Fetch data for the specific project using the slug
    const project = await client.fetch(
      `*[_type == 'portfolio' && slug.current == $slug] {
        title,
        category,
        slug,
        tags,
        featuredImage,
        content
      }`,
      { slug }
    );
  
    return project[0]
  }
  function isLink(text:string) {
    const urlPattern = /^([a-zA-Z0-9-]?:\/\/)?([a-zA-Z0-9-]\.)?([a-zA-Z0-9-]+\.[a-z]{2,})(\/[^\s]*)?$/;
    return urlPattern.test(text);
  }
  function renderSpan(text: string) {
    const url = 'https://surfmeal-frontend.vercel.app/';
    const url2 = 'https://takerslogistics-web.vercel.app/';

    const returnUrl = (urlToUse: string) => {
        const newText = text.replace(urlToUse, '').trim(); // Remove the URL from the original text
        return (
            <span>
                {newText} <a className='underline caret-blue-700' href={urlToUse} target="_blank" rel="noopener noreferrer">{urlToUse}</a>
            </span>
        );
    };

    if (text.includes(url)) { 
        return returnUrl(url); // Return the modified span with the first URL
    }

    if (text.includes(url2)) { 
        return returnUrl(url2); // Return the modified span with the second URL
    }

    return <span>{text}</span>; // Return the original text if no URLs are found
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
                      src={urlFor(project.featuredImage).width(400).height(400).auto('format').url()}
                      alt={project.title}
                      width={350}
                      height={350}
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
          if (block.style==='h3') {
            return (
              <h3 key={block._key} className=' text-2xl'>
                {block.children.map((child) => (
              
                  <span key={child._key}>{renderSpan(child.text)}</span>
                ))}
              </h3>
            );
          }

          if (block.style==='h4') {
            return (
              <h4 key={block._key} className=' text-3xl mt-2'>
                {block.children.map((child) => (
              
                  <span key={child._key}>{renderSpan(child.text)}</span>
                ))}
              </h4>
            );
          }
          if (block.listItem) {
            if (block.level ===1) {
              return (
                <ul key={block._key} className=' list-item list-disc ml-6 '>
                  {block.children.map((child) => (
                
                    <span key={child._key}>{renderSpan(child.text)}</span>
                  ))}
                </ul>
              );
            }else if (block.level ===2) {
              return (
                <li key={block._key} className=' list-item ml-4' style={{listStyleType:'circle'}}>
                  {block.children.map((child) => {
                    
                    return(
                
                    <span key={child._key}>{renderSpan(child.text)}</span>
                  )})}
                </li>
              );
            }else{
              return null;
            }
            
          }
          return (
            <p key={block._key} className='text-justify'>
              {block.children.map((child) => (
            
                <span key={child._key}>{renderSpan(child.text)}</span>
              ))}
            </p>
          );
        }

        
        
        else if (block._type === 'image') {
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

        else if (block._type === 'imageGroup') {
          // Render image block
          return (
            
                <RenderImageGroup block={block} key={block._key}/>
              
           
          );
        }
        // Add more block types as needed
        return null;
      })}
      
        </div>

        <div className='mt-3'>
          <p>tags:</p>
          <ul className='flex flex-wrap gap-2'>
            {
              project.tags && project.tags.map(tag =><li key={tag} className=' text-blue-700'><Link href={`/myprojects?tag=${tag}`}>#{tag}</Link></li>)
            }
          </ul>
        </div>
        
      </main>
       {/* Contact me */}
       <ContactMe/>
        {/* Contact me start */}
    </>
  )
}
