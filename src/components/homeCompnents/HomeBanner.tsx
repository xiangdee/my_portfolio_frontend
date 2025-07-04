
import { CircleDot } from 'lucide-react'
import { ScrollDownButton } from './ScrollDownButton'
import Cone3D from '../Cone3D'


export default function HomeBanner() {
  return (
    <section className="px-6 py-16 md:flex md:items-center gap-12">
      {/* 3D Cone */}
      <div className="absolute top-0 right-0">
        <Cone3D />
      </div>

      {/* About Content */}
      <div className="w-full z-1">
        <span className="flex items-center gap-2 text-green-400 font-mono animate-pulse text-lg">
          <CircleDot className="w-2 h-2" /> Introduction
        </span>
        <h1 className="text-4xl md:text-5xl font-bold py-4 text-white">
          Making a difference through code
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          I’m a versatile Full Stack and DevOps Engineer passionate about building high-quality digital experiences. 
          I blend clean front-end design with scalable back-end architecture and smart CI/CD workflows.
        </p>
        <div className="mt-6">
          <ScrollDownButton />
        </div>
      </div>
    </section>
  )
}
