'use client'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const services = [
  {
    title: 'Frontend Development',
    icon: '/frontend_icon.png',
    description: `Crafting responsive, high-performance interfaces using modern frameworks like React, Tailwind CSS, and Next.js.`,
    color: 'from-green-400 to-blue-500',
  },
  {
    title: 'Backend Development',
    icon: '/backend_icon.png',
    description: `Building secure, scalable APIs with Node.js, C#,python and PHP. I focus on clean architecture and performance.`,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'DevOps Engineering',
    icon: '/devops_icon.png',
    description: `Automating infrastructure and deployment using Docker, Kubernetes, Jenkins, and Terraform for reliability.`,
    color: 'from-yellow-400 to-red-500',
  }
  
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Services() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return (
    <section id="services" className="relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.03, rotateX: 1, rotateY: -2 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className={clsx(
              'rounded-[24px] p-6 bg-[#111111]/70 backdrop-blur-xl relative group overflow-hidden',
              'shadow-[inset_0_0_20px_rgba(103,103,103,0.25)] border border-white/10 hover:border-white/20',
              'hover:shadow-xl transition-all duration-500 flex flex-row gap-4'
            )}
          >
            {/* Colored Gradient Edge Glow */}
            <div
              className={clsx(
                'absolute -inset-px rounded-[24px] z-0',
                `bg-gradient-to-tr ${service.color}`,
                'opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500'
              )}
            />

            {/* Icon */}
            <div className="relative z-10 w-20 h-20 mx-auto mb-5">
              <Image
                src={service.icon}
                alt={service.title}
                layout="fill"
                objectFit="contain"
                className="drop-shadow-[0_0_12px_rgba(0,255,255,0.3)]"
              />
            </div>

            <div>
              {/* Title */}
            <h3 className="relative z-10 text-xl text-white font-semibold   tracking-tight">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-sm text-slate-400  leading-relaxed">
              {service.description}
            </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-500/10 blur-[180px] rounded-full z-0 pointer-events-none" />
    </section>
  )
}
