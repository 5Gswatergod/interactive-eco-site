import React from 'react'
import NavBar from '../components/NavBar'
import ResourcesSection from '../sections/ResourcesSection.jsx'
import bgImg from '/images/bg.png'

const Resources = () => {
  return (
    <main id="resources" className="relative min-h-screen">
      <NavBar />
      <div className="absolute top-0 left-0 z-10">
        <img
          src={bgImg}
          alt="Background"
          className="relative top-30"/>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ResourcesSection />
      </div>
    </main>
  )
}

export default Resources