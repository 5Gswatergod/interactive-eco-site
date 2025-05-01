import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { expCards } from '../constants/index.js'

const Timeline = () => {
  return (
    <section id="timeline" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader 
            title="Project Timeline" 
            sub="2025 Spring"/>
        </div>

        <div className='mt-32 relative'>
            <div className='relative z-50 xl:space-y-32 space-y-10'>
                {expCards.map((card) => (
                    <div key={card.title} className='exp-card-wrapper'>
                        {card.title}
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Timeline