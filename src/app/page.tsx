import Image from 'next/image'
import { MainHeader } from '../components/mainHeader'
import Typewriter from '../components/TypeWritter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBook, faBriefcase, faDotCircle } from '@fortawesome/free-solid-svg-icons';

import { client } from '@/lib/sanity';
import { ProjectType } from '@/types/project';
import Services from '../homeCompnents/services';
import { ScrollDownButton } from '../homeCompnents/ScrollDownButton';
import Link from 'next/link';
import ProjectsCompoent from '@/components/ProjectsCompoent';
import ContactMe from '@/homeCompnents/ContactMe';

 async function getProjects() {
  const projects = await client.fetch(
    `*[_type == 'portfolio2'] {
      title,
      category,
      slug,
      featuredImage,
      tags,
      content
    }`,
    { cache: 'no-store' }
  );

  return projects 
}



export default async function Page() {
 const projects:ProjectType[] = await getProjects();
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
                   <span className='text-primary'><Typewriter texts={['Emmanuel Francis','Fullstack Developer','DevOps Engineer']}/> </span>
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
              <ScrollDownButton />
            
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
               <a  href='/my_resume.pdf' className='btn bg-primary text-white' download={true}>Download Resume</a>
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
             <Services/>
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
        <section className='p-10' id='resume'>
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
      {/* Portfolio Start */}
      <section className='p-10' id='works'>
          <div>
            <h1 className='font-bold text-2xl'>My Works</h1>
          </div>
          <div className=' w-36'>
            <div className='spin-container-dark my-5 '>

            </div>
          </div>
          {
            projects && 
            <>
            <ProjectsCompoent projects={projects.slice(0,5)}/>
            <div className='mt-10 text-center'>
                <Link href={'/myprojects'} className='btn bg-primary text-white'>View More</Link>
             </div>
              </>
          }
          
          
        
        </section>
        {/* Portfolio End */}
        {/* Contact me */}
        <ContactMe/>
        {/* Contact me start */}
    </main></>
  )
}

