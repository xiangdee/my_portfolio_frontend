"use client"

import { faBook, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircleDot } from 'lucide-react'
import React, { useState } from 'react'

const workExperience = [
  {
    company: 'DAV_INCHI INVESTMENT LIMITED',
    position: 'Software Engineer',
    year: '2021 - 2023',
    description:
      'Developed and maintained a comprehensive on-premise distributed system using Windows Server and Python Flask. Integrated Salesforce API into the on-premise portal, enhancing functionalities. Designed and deployed the company’s WordPress website.',
  },
  {
    company: 'Pykup',
    position: 'Back End Developer',
    year: '2022 - 2023',
    description:
      'Integrated third-party APIs, ensured scalability and security, and created thorough documentation with Postman and Swagger. Contributed to microservices-based authentication with NestJS and followed development best practices using Git and Trello.',
  },
  {
    company: 'Takerslogistics',
    position: 'Fullstack Engineer',
    year: '2023 - 2024',
    description:
      'Developed React Native apps for delivery hailing service and a landing page using Next.js. Built a microservices backend using PHP and NestJS with WebSockets. Deployed using Docker and GitHub Actions on GCP.',
  },
  {
    company: 'Surfmeal',
    position: 'Fullstack Engineer',
    year: '2024 - Present',
    description:
      'Created a full food delivery platform with a React Native app and a Next.js landing page. Implemented a NestJS backend with Prisma for robust APIs, including user auth and real-time order tracking. Integrated multiple payment methods and deployed via Docker on AWS.',
  },
]

function ResumeSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="px-6 md:px-16 py-20 bg-black text-white" id="resume">
      <div className="mb-8">
        <span className="flex items-center gap-2 text-green-400 font-mono animate-pulse text-xl">
          <CircleDot className="w-3 h-3" /> My Resume
        </span>
      </div>

      {/* Education */}
      <div className="mb-16">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faBook} className="text-green-400" />
          <h5 className="text-xl font-semibold">Educational Qualification</h5>
        </div>

        <div className="mt-6 space-y-6 md:ml-10">
          <div>
            <h4 className="text-lg font-bold text-green-400">Web Design — Linet Paul Institute</h4>
            <p className="text-sm text-slate-400">2014 - 2015</p>
            <p className="text-slate-300 mt-2">
              Built foundational skills in design thinking, web standards, and responsive HTML/CSS design.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-green-400">B.Sc Computer Science — Novena University</h4>
            <p className="text-sm text-slate-400">2015 - 2019</p>
            <p className="text-slate-300 mt-2">
              Gained deep experience in data structures, software engineering, algorithm design, and collaborative development.
            </p>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <FontAwesomeIcon icon={faBriefcase} className="text-green-400" />
          <h5 className="text-xl font-semibold">Work Experience</h5>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {workExperience.map((item, idx) =>
         { 
        const isActive = activeCard === idx;    
        return(
            <div
              key={idx}
              className="rounded-[24px] p-5 bg-[#111111] backdrop-blur-[36px] shadow-[inset_0px_0px_20px_0px_rgba(103,103,103,0.25)] flex flex-col gap-4"
            >
              <div className='flex justify-between'>
                <div>
                <p className="text-green-400 text-xs font-medium">{item.position}</p>
                    <h4 className="text-sm font-semibold text-white">{item.company}</h4>

                </div>

                <div>
                    <p className="text-sm text-slate-400">{item.year}</p>
                </div>
                
              </div>

              <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-300 text-sm mt-2">{item.description}</p>
                </div>

                <button
                  onClick={() => setActiveCard(isActive ? null : idx)}
                  className={`self-start text-xs font-medium transition-all duration-300 rounded-full px-4 py-1.5 focus:outline-none focus:ring-2 
                    focus:ring-primary focus:ring-offset-2 focus:ring-offset-black ${
                    isActive
                      ? 'bg-primary text-white hover:bg-primary'
                      : 'bg-slate-800 text-green-300 hover:bg-primary hover:text-white'
                  }`}
                >
                  {isActive ? 'Hide Details ▲' : 'Show Details ▼'}
                </button>

            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default ResumeSection