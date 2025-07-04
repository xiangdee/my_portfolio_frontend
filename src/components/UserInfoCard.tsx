import { faInstagram, faXTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SettingsSvg from './svg/SettingsSvg'
import Typewriter from './TypeWritter'
import Image from 'next/image'

function UserInfoCard() {
  return (
    <>
       <div className="relative m-8 lg:fixed lg:left-12 top-1/2 lg:-translate-y-1/2 
        lg:max-w-[437px] lg:min-w-[300px]">
        {/* Glowing head line */}
        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 pointer-events-none z-30">
          <div className="w-full h-full relative animate-move-line">
            <div className="absolute after:w-2 after:h-2 after:content-[''] h-10  w-1 bg-white rounded-full opacity-90 animate-glow" />
          </div>
        </div>
     
        <div className=" rounded-[24px] p-10 
        bg-[#111111] backdrop-blur-[36px] 
        shadow-[inset_0px_0px_20px_0px_rgba(103,103,103,0.25)] 
        z-20 max-h-screen overflow-y-auto flex-col justify-center relative">
          {/* Sidebar content */}
          <div className="perspective-1000">
            <SettingsSvg className="transform animate-spin-3d origin-center" />
          </div>
          <div className='flex justify-center'>
              <div className='rounded-[24px]'>
                <Image src="/my_photo.jpg" alt="Logo" width={200} height={200} className=' w-48 h-48 object-center '
                style={{
                  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                  borderRadius: '24px'
                }}
                />
              </div>
          </div>

          <div className='w-full grid justify-center text-center mt-2 min-h-20'> 
            <span className='block sm:inline text-lg font-mono'> Hi! i am,</span>
                    <span className='text-primary lg:max-w-50 break-all text-2xl font-semibold font-mono'>
                      <Typewriter texts={['Emmanuel Francis','Fullstack Developer','DevOps Engineer']}/> </span>
          </div>
          <div className='mt-5'>
            <a href='mailto:emmanuelfrancismicah@gmail.com' className='text-center text-slate-400 block break-all text-sm md:text-lg'>
              Emmanuelfrancismicah@gmail.com</a>
          </div>
          {/* Available for work */}
          <div className='flex justify-center mt-2'>
            <div className='py-2 px-4 rounded-2xl bg-primary/10 items-center'>
                <a href='mailto:emmanuelfrancismicah@gmail.com' className='text-center text-white  break-all text-sm md:text-lg
                flex flex-row justify-center items-center gap-2 animate-pulse 
                '>
                  <span className=' '><FontAwesomeIcon icon={faCircle} size='xs' color='white'/> </span>
              Available for work</a>
            </div>
            
          </div>
          <div className='mt-5 flex flex-row justify-between'>
              <div className=' border rounded-md border-primary bg-primary/20 p-2 hover:scale-125'>
                  <a href="https://www.instagram.com/planetxiangd33/" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} size='lg' className='text-primary'/>
                  </a>
              </div>
              <div className='border rounded-md border-primary bg-primary/20 p-2 hover:scale-125'>
                  <a href="https://x.com/youngelmatee" target='_blank'>
                    <FontAwesomeIcon icon={faXTwitter} size='lg' className='text-primary'/>
                  </a>
              </div>
              <div className='border rounded-md border-primary bg-primary/20 p-2 hover:scale-125'>
                  <a href="https://www.linkedin.com/in/xiangdee/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn} size='lg' className='text-primary'/>
                  </a>
              </div>
              <div className='border rounded-md border-primary bg-primary/20 p-2 hover:scale-125'>
                  <a href="https://twitter.com/youngelmatee" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} size='lg' className='text-primary'/>
                  </a>
              </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default UserInfoCard
