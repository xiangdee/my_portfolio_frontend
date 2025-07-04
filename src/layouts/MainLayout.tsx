'use client'
import ParticlesBackground from '@/components/ParticlesBackground'
import ResponsiveSidebar from '@/components/ResponsiveSidebar'


import UserInfoCard from '@/components/UserInfoCard'

import React from 'react'

function MainLayout({children,variant='no-info-card'}:{children:React.ReactNode,variant?:string}) {
  const config = {
    particleCount: 50,
    interactive: true,
    connections: true,
    speed: 0.8,
    connectionDistance: 950
  }
  return (
    <>
    <ParticlesBackground
        particleCount={config.particleCount}
        interactive={config.interactive}
        connections={config.connections}
        speed={config.speed}
        colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
        maxSize={2}
      />
      <div className="relative lg:flex lg:items-center lg:justify-between">
      {/* Left Sidebar */}
      {
        variant === 'show-info-card' && (
         <UserInfoCard/>
        )
      }
      

      {/* Center Content - Responsive based on left sidebar visibility */}
      <div className={`w-full lg:pt-10  ${
        variant === 'show-info-card' 
          ? 'lg:pl-[calc(407px+3rem)] lg:max-w-[97%] lg:px-0' 
          : 'lg:max-w-[calc(100%-337px-3rem)] lg:px-20'
      }`}>
        {children}
      </div>

      {/* Right Sidebar/Menu */}
      <ResponsiveSidebar/>
    </div>

    </>
  )
}

export default MainLayout
