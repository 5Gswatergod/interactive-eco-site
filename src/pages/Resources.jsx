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
      <div className='absolute top-0 left-0 z-10'>
        <img src={bgImg} alt="Background" className="w-full object-cover" loading="lazy"/>
      </div>
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text flex-center">
              <h1>Biography</h1>
            </div>
            <Button 
            id="biography"
            text="Explore"
            />
          </div>
        </header>
      </div>
    <BioGraphy />
    <Footer />
    </section>
  )
}

export default Resources