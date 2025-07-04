

import ContactMe from '@/components/homeCompnents/ContactMe';


import MainLayout from '@/layouts/MainLayout';
import HomeBanner from '@/components/homeCompnents/HomeBanner';
import AboutSection from '@/components/homeCompnents/AboutSection';
import MyskillsSection from '@/components/homeCompnents/MyskillsSection';
import ResumeSection from '@/components/homeCompnents/ResumeSection';
import PortfolioSection from '@/components/homeCompnents/PortfolioSection';





export default async function Page() {

  return (
    <MainLayout variant='show-info-card'>
  
    <main className="min-h-screen  pt-2">

      {/* home banner */}
      <HomeBanner/>
      {/* About Me */}
        <AboutSection/>
      {/* End About Me */}

      {/* Skills Secion */}
      <MyskillsSection/>
      {/* End About Me */}

      {/* Resume state */}
        <ResumeSection/>
      {/* Resume End */}
      {/* Portfolio Start */}
      <PortfolioSection/>
        {/* Portfolio End */}
        {/* Contact me */}
        <ContactMe/>
        {/* Contact me start */}
    </main>
    
    </MainLayout>
  )
}
