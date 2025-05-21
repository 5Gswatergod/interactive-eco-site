import React from 'react'
import gsap from 'gsap'
import { ChemistryWords, GeographyWords } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import Button from '../components/Button.jsx'
import NavBar from '../components/NavBar'
import bgImg from '/images/bg.png'
import Testimonials from '../components/Testimonials.jsx'
import ComExperience from '../components/ComModel/ComExperience.jsx'
import Footer from '../components/Footer.jsx'
import TitleHeader from '../components/TitleHeader.jsx'
import CheProcedure from '../sections/CheProcedure.jsx'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Plastic from '../sections/Plastic.jsx'

gsap.registerPlugin(ScrollTrigger);

const Chemistry = () => {
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
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: '.hero-text',
                  start: 'top 95%',
                  toggleActions: 'play none none reset',
                },
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
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.hero-text',
                start: 'top 90%',
                toggleActions: 'play none none reset',
              },
            }
        );
    })

  return (
    <section id='chemistry' className='relative overflow-hidden pt-0 pb-0'>
      <NavBar />
      <div className="absolute top-0 left-0 z-10">
        <img src={bgImg} alt="Background" className='relative top-30'/>
      </div>
      <div className="hero-layout">
        {/*LEFT: CONTENTS */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
                <div className="hero-text">
                    <h1>Titanium Dioxide</h1>
                    <h1>
                      PET
                      <span className="slide">
                            <span className="wrapper">
                                {ChemistryWords.map((word) => (
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
                id="testimonials"
                text="Explore Experiment!"
                />
            </div>
        </header>
        {/*RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <ComExperience />
          </div>
        </figure>
      </div>
      <Testimonials />
      <TitleHeader title={'Experiement'} />
      <CheProcedure />
      <Plastic />
      <Footer />
    </section>
  )
}

export default Chemistry