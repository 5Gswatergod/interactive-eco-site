import React from 'react'
import gsap from 'gsap'
import { GeographyWords } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import Button from '../components/Button.jsx'
import NavBar from '../components/NavBar'
import Huajiang from '/images/HuaJiang Bridge.jpeg'
import TitleHeader from '../components/TitleHeader.jsx'
import Footer from '../components/Footer.jsx'
import GeoRiver from '../sections/GeoRiver.jsx'
import GeoPollution from '../sections/GeoPollution.jsx'

const Geography = () => {
  useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out'
            },
        )
        gsap.fromTo('.hero-text p',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                delay: 0.5,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            },
        )
        gsap.fromTo('.hero-text p',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                delay: 0.5,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            },
        )
    })

  return (
    <section id='geography' className='relative overflow-hidden'>
      <NavBar />
      <div className="absolute top-0 left-0 z-10">
        <img
          src={Huajiang}
          alt="Huajiang"
          className="w-full object-cover"/>
      </div>
      <div className="hero-layout">
          {/*LEFT: CONTENTS */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
              <div className="flex flex-col gap-7">
                  <div className="hero-text">
                      <h1>XinDian</h1>
                      <h1>
                        River
                        <span className="slide">
                              <span className="wrapper">
                                  {GeographyWords.map((word) => (
                                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                          <img
                                              src={word.imgPath}
                                              alt={word.text}
                                              className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                          />
                                          <span>{word.text}</span>
                                      </span>
                                  ))}
                              </span>
                        </span>
                      </h1>
                  </div>
                  <Button 
                  className='md:w-80 md:h-16 w-60 h-12' 
                  id="river"
                  text="Explore River!"
                  />
              </div>
          </header>
      </div>
      <div className="relative z-50">
        <TitleHeader title={"XinDian River"} />
        <GeoRiver />
        <TitleHeader title={"Pollution"} />
        <GeoPollution />
        <Footer />
      </div>
    </section>
  )
}

export default Geography