import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import GlowCardNoCh from '../components/GlowCardNoCh.jsx'
import TitleHeader from '../components/TitleHeader'
import { reflectioncards } from '../constants/index.js'

const ReflectSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.exp-card-wrapper')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
    )
  }, [])

  return (
    <section ref={sectionRef} >
        <div className="mt-32 relative">
          <TitleHeader title="Reflection" subtitle="What We Learned" />
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {reflectioncards.map((card) => (
              <div key={card.title} className="flex-center">
                <div className="xl:w-2/6">
                  <GlowCardNoCh card={card}>
                    <div>
                      <h3 className='text-2xl font-bold text-white mt-2 underline'>{card.title}</h3>
                      <p className='text-white mt-2'>{card.description}</p>
                    </div>
                  </ GlowCardNoCh>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default ReflectSection