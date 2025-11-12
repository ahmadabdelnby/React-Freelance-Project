import React from 'react'
import FeaturesSection from '../Components/home-components/FeaturesSection'
import HeroSection from '../Components/home-components/HeroSection'
import CTASection from '../Components/home-components/CTASection'

function Home() {
  return (
    <div className="page-content">
      <HeroSection/>
      <FeaturesSection/>
      <CTASection/>
    </div>

  )
}

export default Home