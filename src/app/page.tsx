"use client"
import Image from 'next/image'
import { MainHeader } from './components/mainHeader'
import Typewriter from './components/TypeWritter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faBook, faBriefcase, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { scrollToElement } from './utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Home() {
  
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element enters the viewport
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
    <MainHeader />
    <main className="min-h-screen  pt-2">

      <div className="px-5 md:flex md:flex-wrap md:flex-row md:grid-cols-2 gap-10">
        <div className='md:w-1/2'>
            <div className='flex justify-center'>
              <div className="headerImage " >
                <div className='spinning-container'>
                  <Image src={'/my_photo.png'} height={100} width={100} alt={''}/>
                </div>
              </div>
            </div>
              <div className='flex justify-center'>
                <h3 className='text-3xl text-center'>
                    <span className='block sm:inline'> Hi i am,</span>
                   <span className='text-primary'><Typewriter texts={['Emmnuel Francis','Fullstack Developer','DevOps Engineer']}/> </span>
                </h3>
                
              </div>
              <div className='mt-2'>
              <p className='text-center'>
                I am a versatile Full Stack and DevOps Engineer dedicated to delivering high-quality software solutions, 
                combining innovative front-end design with robust back-end architecture and efficient deployment strategies.
                </p>
              </div>
              <div className='mt-5 flex flex-row justify-between'>
                  <div className=' border rounded-md border-primary p-2 hover:scale-125'>
                      <a href="https://www.instagram.com/planetxiangd33/" target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} size='lg' className='text-primary'/>
                      </a>
                  </div>
                  <div className='border rounded-md border-primary p-2 hover:scale-125'>
                      <a href="https://twitter.com/youngelmatee" target='_blank'>
                        <FontAwesomeIcon icon={faXTwitter} size='lg' className='text-primary'/>
                      </a>
                  </div>
                  <div className='border rounded-md border-primary p-2 hover:scale-125'>
                      <a href="https://www.linkedin.com/in/xiangdee/" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} size='lg' className='text-primary'/>
                      </a>
                  </div>
                  <div className='border rounded-md border-primary p-2 hover:scale-125'>
                      <a href="https://twitter.com/youngelmatee" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} size='lg' className='text-primary'/>
                      </a>
                  </div>
              </div>
              <div className='mt-5 flex flex-row justify-center gap-5 p-2 cursor-pointer' onClick={()=>scrollToElement('about')}>
                  <div>
                     <FontAwesomeIcon icon={faArrowDown} size='sm'/>
                  </div>
                  <div>
                    <span className='text-sm'>SCROLL DOWN</span>
                  </div>
              </div>
            
        </div>

        <div className='mt-10'>
          <div>
          <h3 className='text-lg font-bold'>This website was made with</h3>
          </div>
          <div className='mt-5 flex flex-row gap-4'>
            <div>
                <Image src={'/next.svg'} alt={''} width={100} height={100}/>
            </div>
            <div>
                <Image src={'/sanity_logo.svg'} alt={''} width={100} height={10}/>
            </div>
            <div>
                <Image src={'/tailwind_css_logo.svg'} alt={''} width={100} height={100}/>
            </div>
          </div>
        </div>
      
      </div>
      {/* About Me */}
        <section className='p-10' id='about'>
          <div>
            <h1 className='font-bold text-2xl'>About me.</h1>
          </div>
          <div className=' w-36'>
            <div className='spin-container-dark my-5 '>

            </div>
          </div>
          
          <div>
            <h1 className='text-xl'>Hi, I am Emmanuel Francis</h1>
          </div>
          <div className='mt-5'>
            <div className='flex flex-row mb-2 gap-5'>
                <div>
                   <FontAwesomeIcon icon={faDotCircle} size='sm' className='text-primary'/>
                </div>
                <div>
                  <span className='text-lg'>First Name:</span>
                </div>
                <div>
                  <span className='text-lg'>Emmanuel </span>
                </div>
            </div>
            
            <div className='flex flex-row mb-2 gap-5'>
                <div>
                   <FontAwesomeIcon icon={faDotCircle} size='sm' className='text-primary'/>
                </div>
                <div>
                  <span className='text-lg'>Last Name:</span>
                </div>
                <div>
                  <span className='text-lg'>Micah </span>
                </div>
            </div>

            <div className='flex flex-row mb-2 gap-5'>
                <div>
                   <FontAwesomeIcon icon={faDotCircle} size='sm' className='text-primary'/>
                </div>
                <div>
                  <span className='text-lg'>Age:</span>
                </div>
                <div>
                  <span className='text-lg'>25 years </span>
                </div>
            </div>

            <div className='flex flex-row mb-2 gap-5'>
                <div>
                   <FontAwesomeIcon icon={faDotCircle} size='sm' className='text-primary'/>
                </div>
                <div>
                  <span className='text-lg'>Nationality:</span>
                </div>
                <div>
                  <span className='text-lg'>Nigerian </span>
                </div>
            </div>

            <div className='flex flex-row mb-2 gap-5'>
                <div>
                   <FontAwesomeIcon icon={faDotCircle} size='sm' className='text-primary'/>
                </div>
                <div>
                  <span className='text-lg'>Languages:</span>
                </div>
                <div>
                  <span className='text-lg'>English,Japanese </span>
                </div>
            </div>

            <div className='mt-5'>
               <a  href='/my_resume.pdf' className=' p-3 bg-primary shadow-md rounded-md text-white' download={true}>Download Resume</a>
            </div>
          </div>
        </section>
      {/* End About Me */}

      {/* Skills Secion */}
      <section className='p-10'>
          <div>
            <h1 className='font-bold text-2xl'>My skills</h1>
          </div>
          <div className=' w-36'>
            <div className='spin-container-dark my-5 '>

            </div>
          </div>
          
          <div className='mt-5 md:flex md:flex-row gap-10 md:col-span-4'>
             <motion.div 
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3 }}
            
             className='p-5 shadow-lg bg-primary rounded-lg text-white mb-5'>
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
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3 }}
            
             className='p-5 shadow-lg bg-primary rounded-lg text-white mb-5'>
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
             </motion.div>

             <motion.div 
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3 }}
            
             className='p-5 shadow-lg bg-primary rounded-lg text-white mb-5'>
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
          </div>

          <div className='mt-5 md:flex md:flex-row md:col-span-2 gap-10'>
              <div className='md:w-1/2'>
                <h3 className='font-bold text-2xl'>
                  skills
                </h3>
                 <p>
                 My expertise extends to optimizing system performance, monitoring, and troubleshooting to ensure the reliability 
                 and scalability of applications. I am committed to staying abreast of the latest technologies and industry best practices, allowing me to provide cutting-edge solutions.
                 </p>
              </div>
              <div className="md:w-1/2">
                <div className="mb-4 mt-4">
                  <p className="text-lg font-bold">JavaScript</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold">Html/css</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-lg font-bold">React Native</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-lg font-bold">React</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold">Nextjs</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold">Nodejs</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold">Nestjs</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold">Expressjs</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold">Php</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold">Laravel</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold">C#</p>
                  <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: '100%'}}></div>
                  </div>
                </div>

              </div>
          </div>
        </section>
      {/* End About Me */}

      {/* Resume state */}
        <section className='p-10'>
          <div>
            <h1 className='font-bold text-2xl'>My Resume</h1>
          </div>
          <div className=' w-36'>
            <div className='spin-container-dark my-5 '>
                <div>
               
                </div>
            </div>
          </div>
          <div className='md:flex md:flex-row  md:justify-between'>
              {/* Educational qualification */}
              <div className='mb-10'>
                <div className='flex flex-row gap-5'>
                    <div>
                        <FontAwesomeIcon icon={faBook} size='lg' className='text-primary'/>
                    </div>
                    <div>
                        <h5 className='text-lg'>Educational Qualification</h5>
                    </div>
                </div>
                <div className="timeline mt-5 md:ml-32">
                    <div className="event">
                      <div className='eventDate'>
                          <h4>2014 - 2015</h4>
                      </div>
                      <div className="eventContent">
                        <h3 className='text-xl text-primary'>Web design</h3>
                        <h4 className='text-xl'>Linet Paul Institute</h4>
                        <p>
                        Throughout my academic journey, I gained hands-on experience in 
                        programming, algorithms, data structures, software development, and various computational concepts. 
                        </p>
                      </div>
                    </div>

                    <div className="event">
                      <div className='eventDate'>
                          <h4>2015 - 2019</h4>
                      </div>
                      <div className="eventContent">
                        <h3 className='text-xl text-primary'>Bachelor of Sciences</h3>
                        <h4 className='text-xl'>Novena  University</h4>
                        <p>
                        Throughout my academic journey, I gained hands-on experience in 
                        programming, algorithms, data structures, software development, and various computational concepts. 
                        </p>
                      </div>
                    </div>
                        
                </div>
              </div>
              {/* Work Experiances */}
              <div className='md:mr-56'>
                <div className='flex flex-row gap-5'>
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} size='lg' className='text-primary'/>
                    </div>
                    <div>
                        <h5 className='text-lg'>Working Experience</h5>
                    </div>
                </div>
                <div className="timeline mt-5 md:ml-32">
                    <div className="event">
                      <div className='eventDate'>
                          <h4>2021 - 2023</h4>
                      </div>
                      <div className="eventContent">
                        <h3 className='text-xl text-primary'>Software Engineer</h3>
                        <h4 className='text-xl'>DAV_INCHI INVESTMENT LIMITED</h4>
                        <p className='text-sm'>
                        As a software engineer at Dav_inchi International, I played a pivotal role in developing and maintaining a 
                        comprehensive on-premise distributed system using Windows Server and Python Flask. 

                        One notable accomplishment was the successful integration of Salesforce API into the on-premise portal, enhancing 
                        the platform&lsquo;s functionalities. Additionally, I contributed to the company&lsquo;s online presence by designing, 
                        developing, and deploying a user-friendly WordPress website. 
 
                        </p>
                      </div>
                    </div>

                    <div className="event">
                      <div className='eventDate'>
                          <h4>2022 - 2023</h4>
                      </div>
                      <div className="eventContent">
                        <h3 className='text-xl text-primary'>Back End Developer</h3>
                        <h4 className='text-xl'>Pykup</h4>
                        <p className='text-sm'>
                          In the backend operations of Pykup, I played a key role in integrating third-party APIs, addressing scalability and 
                          security concerns, and writing unit tests. My responsibilities included 
                          creating documentation using tools like Postman and Swagger, and ensuring code adhered to standards like 
                          SOLID and DRY principles. I effectively communicated software requirements across teams and managed tasks 
                          following the waterfall model on Trello. I actively contributed to the development of authentication in a 
                          microservices environment using NestJS, performing daily business logic implementation, and conducting code reviews using Git version control. 
                        </p>
                      </div>
                    </div>

                    <div className="event">
                      <div className='eventDate'>
                          <h4>2023 - 2024</h4>
                      </div>
                      <div className="eventContent">
                        <h3 className='text-xl text-primary'>Fullstack Engineer</h3>
                        <h4 className='text-xl'>Takerslogistics</h4>
                        <p className='text-sm'>
                          Developed a robust delivery hailing service, Takers Logistics, involving the creation of React Native apps 
                          for users and drivers, and a visually appealing landing page using Next.js and Tailwind CSS. 
                          Implemented a microservices architecture with PHP and NestJS web sockets for efficient communication, 
                          addressing security and concurrency challenges. Deployed the system using Docker and GitHub Actions on
                           Google Cloud Platform, showcasing proficiency in infrastructure and deployment practices. 
                        </p>
                      </div>
                    </div>
                        
                </div>
              </div>
          </div>
        </section>
      {/* Resume End */}
    </main></>
  )
}
