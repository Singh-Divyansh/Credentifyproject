import React from 'react'
import HeroSection from './HeroSection';
import Features from './Features';
import Testimonials from './Testimonials';
import DigitalIdentityInfo from './DigitalIdentityInfo';
import ImpactDashboard from '../components/ImpactDashboard';
import DigitalPassportStats from '../components/DigitalPassportStats';


function Dashboard() {
  return (
    <div>
       <HeroSection />
      <Features />
      <div>
      <ImpactDashboard />
      {/* Add other components or sections as needed */}
    </div>
    <DigitalPassportStats/>
    <DigitalIdentityInfo/>
    
      
      <Testimonials />
      
    </div>
  )
}

export default Dashboard
