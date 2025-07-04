'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  gradientOnScroll?: boolean
  gradientClass?: string
  className?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1},
}

export default function AnimatedHeading({
  text,
  gradientOnScroll = true,
  gradientClass = 'text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text',
  className = 'text-4xl md:text-5xl font-bold flex flex-wrap',
}: AnimatedHeadingProps) {
  const sectionRef = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(sectionRef, { margin: '-100px 0px -40%' })
  const [showFill, setShowFill] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      setShowFill(true)
    }
  }, [isInView, controls])

  const characters = text.split('')

  return (
    <motion.h1
      ref={sectionRef}
      className={`${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className={`transition-all duration-700 ${
            gradientOnScroll
              ? showFill
                ? gradientClass
                : 'text-white'
              : ''
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
