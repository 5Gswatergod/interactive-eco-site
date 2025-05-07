import React from 'react'
import NavBar from '../components/NavBar'
import bgImg from '/images/bg.png'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import BioGraphy from '../sections/BioGraphy.jsx'

const Resources = () => {
  return (
    <section id="resources-page-section" className="relative overflow-hidden">
      <NavBar />
      <div className='absolute top-0 left-0 z-0 w-full'>
        <img src={bgImg} alt="Background" className="w-full object-cover" loading="lazy"/>
      </div>
      <div className="hero-layout relative z-20 max-w-screen-xl mx-auto">
        {/* LEFT: Hero Content */}
        <header className="w-full flex justify-center px-4 md:px-20 py-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Biography</h1>
            <BioGraphy />
          </div>
        </header>
      </div>
    <Footer />
    </section>
  )
}

export default Resources