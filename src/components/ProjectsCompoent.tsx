import { urlFor } from '@/lib/sanity';
import { ProjectType } from '@/types/project';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function ProjectsCompoent({projects}:{projects:ProjectType[]}) {
  return (
    <div className='md:flex md:flex-row gap-10 md:grid-cols-3'>
        {
             projects.map((project: ProjectType, index) => {
                return (
                    
                  <div key={index} className='projectItem'>
                    <Image
                      src={urlFor(project.featuredImage).width(300).height(300).url()}
                      alt={project.title}
                      width={300}
                      height={300} />
                    <div className='mt-2'>
                      <h3 className='text-xl'>{project.title}</h3>
                      <h4 className='text-lg'>Category:{project.category}</h4>
                    </div>
        
                    <div className='overlay'>
                       <div className='flex flex-row gap-5'>
                            <div className='p-1 rounded-full w-10 h-10 bg-primary flex justify-center items-center'>
                                <Link href={`/project/${project.slug.current}`}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} size='lg' className='text-white'/>
                                </Link>
                            </div>
                            
                       </div>
                    </div>
                  </div>
                );
              })
        }
              
    </div>
   
  )
}
