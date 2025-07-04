import { urlFor } from '@/lib/sanity';
import { ProjectType } from '@/types/project';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProjectsCompoent({ projects }: { projects: ProjectType[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: ProjectType, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-lg group"
        >
          <Image
            src={urlFor(project.featuredImage).width(600).height(400).url()}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-60 object-cover"
          />

          {/* Overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
            <div className="text-sm text-gray-300 mb-1">
                <ul className='flex flex-wrap gap-2'>
                          {project.tags &&
                            project.tags.map(tag =><li key={tag} className=' text-white'><Link href={`/myprojects?tag=${tag}`}>#{tag}</Link></li>)
                          }
                        </ul>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-green-400 font-semibold text-lg leading-snug">
                {project.title}
              </h3>
              <Link href={`/project/${project.slug.current}`}>
                <div className="w-8 h-8 flex justify-center items-center border border-green-600 rounded-md hover:bg-green-600/20 transition">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-green-500 text-sm" />
                </div>
              </Link>
            </div>
            <p className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded-full mt-2 inline-block">May 2024</p>
          </div>
        </div>
      ))}
    </div>
  );
}
