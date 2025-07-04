'use client'
import { CircleDot } from 'lucide-react'
import React from 'react'
import Services from './services'
import AnimatedHeading from '../AnimatedHeading'
import { motion } from 'framer-motion'

const skills = [
  'JavaScript', 'HTML/CSS', 'React Native', 'React', 'Next.js',
  'Node.js', 'NestJS', 'Express.js', 'PHP', 'Laravel', 'C#','python','framer','figma'
]

function MyskillsSection() {
  return (
    <section className="px-6 md:px-16 py-20 bg-black text-white">
      <div className="mb-8">
        <span className="flex items-center gap-2 text-green-400 font-mono animate-pulse text-xl">
          <CircleDot className="w-3 h-3" /> My Skills
        </span>
      </div>

      <AnimatedHeading
  text="Crafting ideas with Precision, Delivered with Passion."
  gradientOnScroll={true}
/>


     

      {/* Services Section */}
      <div className="mt-3">
        <Services />
      </div>

      {/* Skills Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-bold text-2xl mb-4">About My Skills</h3>
          <p className="text-slate-400 leading-relaxed">
            My expertise extends to optimizing system performance, monitoring, and troubleshooting to ensure the reliability 
            and scalability of applications. I stay updated with the latest technologies and best practices to deliver 
            cutting-edge solutions with precision and care.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <p className="text-sm font-medium text-slate-300 mb-1">{skill}</p>
              <div className="bg-gray-800 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full animate-[fillGrow_1s_ease-in-out_forwards]"
                  style={{ width: `${90 + Math.random() * 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes fillGrow {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default MyskillsSection
