'use client'
import { motion } from 'framer-motion'
import { CircleDot } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import Globe3D from '../Globe3D'
import AnimatedHeading from '../AnimatedHeading'


 const calculateAge = (birthdate: string) => {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }

const aboutItems = [
   

  { label: 'First Name', value: 'Emmanuel' },
  { label: 'Last Name', value: 'Micah' },
  { label: 'Age', value: `${calculateAge('1998-05-09')} years` },
  { label: 'Languages', value: 'English, Japanese, Duetche' }
]


export default function AboutSection() {
 



    
  return (
    <section className="px-6 md:px-16 py-20 bg-black" id="about" >
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="flex items-center gap-2 text-green-400 font-mono text-xl">
          <CircleDot className="w-3 h-3" /> About Me
        </span>
        <AnimatedHeading
        text="Hi, I'm Emmanuel Francis"
        gradientOnScroll={true}
        />


        <p className="mt-4 text-slate-400 text-lg max-w-3xl">
          I’m a Full Stack and DevOps Engineer with a passion for creating fast, modern web applications.
          I specialize in scalable architecture, thoughtful UI/UX design, and cloud-native deployment.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.6 }} 
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-start"
      >
        {/* Left: 3D or decorative spinner placeholder */}
        <div className="w-full max-w-[calc(100%-1rem)] h-64 flex items-center justify-center bg-[#111111] rounded-xl shadow-inner spin-container-dark">
          <Globe3D />
        </div>

        {/* Right: Info List */}
        <div className="space-y-4">
          {aboutItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <FontAwesomeIcon icon={faDotCircle} size="sm" className="text-green-400" />
              <span className="text-slate-400 text-lg">{item.label}:</span>
              <span className="text-white text-lg font-medium">{item.value}</span>
            </div>
          ))}

          {/* Resume Button */}
          <div className="pt-6">
            <a 
              href="/my_resume.pdf" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg transition-all"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
