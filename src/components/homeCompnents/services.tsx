"use client"
import { motion, inView } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'

export default function Services() {
      
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element enters the viewport
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div 
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3 }}
            
             className='p-5 shadow-lg bg-primary rounded-lg text-white mt-5'>
                <div className='flex flex-row justify-center'>
                  <Image src={'/frontend_icon.png'} alt={''} height={100} width={100}/>
                </div>
                  <div className='py-10'>
                     <h3 className='text-center text-xl'>Frontend Development</h3>
                  </div>
                  <div>
                    <p className='text-center text-sm'>
                    In the realm of full-stack development, I excel at creating seamless user experiences by leveraging 
                    my skills in HTML, CSS, JavaScript, and various front-end frameworks. On the front end, 
                    I am particularly adept at crafting intuitive and visually appealing user interfaces using modern technologies. 

                    </p>
                  </div>
                  <div>

                  </div>
             </motion.div>

             <motion.div 
              ref={ref2}
              initial="hidden"
              animate={inView2 ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3 }}
            
             className='p-5 shadow-lg bg-primary rounded-lg text-white mt-5 clear-both'>
               <div>
               <div className='flex flex-row justify-center'>
                  <Image src={'/backend_icon.png'} alt={''} height={100} width={100}/>
                </div>
                  <div className='py-10'>
                     <h3 className='text-center text-xl'>Backend Development</h3>
                  </div>
                  <div>
                    <p className='text-center text-sm'>
                    On the back end, I am adept at architecting and implementing scalable server-side solutions, utilizing technologies like Node.js, Php, and C#. 
                    My goal is to deliver not only clean and efficient code but also pixel-perfect designs that resonate with users.. 

                    </p>
                  </div>
                  <div>

                  </div>
               </div>
             </motion.div>

             <motion.div 
              ref={ref3}
              initial="hidden"
              animate={inView3 ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3 }}
            
             className='p-5 shadow-lg bg-primary rounded-lg text-white mt-5'>
                <div className='flex flex-row justify-center'>
                  <Image src={'/devops_icon.png'} alt={''} height={100} width={100}/>
                </div>
                  <div className='py-10'>
                     <h3 className='text-center text-xl'>Devops Engineering</h3>
                  </div>
                  <div>
                    <p className='text-center text-sm'>
                    I specialize in automating and streamlining the software development and deployment lifecycle. 
                    From version control to continuous integration and deployment, I ensure that the development pipeline is 
                    efficient and reliable. Proficient in tools like Docker, Kubernetes, Jenkins, and Terraform, 
                    I orchestrate the deployment and management of applications in a cloud-native environment. 

                    </p>
                  </div>
                  <div>

                  </div>
             </motion.div>
    </>
  )
}