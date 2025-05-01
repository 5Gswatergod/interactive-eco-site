import React from 'react'
import { counterItems } from '../constants/index.js'
import Countup from 'react-countup'

const AnimatedCounter = () => {
return (
    <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-3-cols'>
            {counterItems.map((item) => (
                <div className='counter-number bg-zinc-900 rounded-lg p-10 flex flex-col justify-center gap-12' key={item.label}>
                    <div className='counter-number text-white text-5xl font-bold mb-2'>
                        <Countup end={item.count} duration={2} delay={0} className='text-5xl font-bold mb-2' />
                    </div>
                    <div className="counter-image relative w-40 h-40 rounded-full overflow-hidden shadow-lg bg-[#134e4a]">
                        <img
                            src={`/images/${encodeURIComponent(item.name)}.jpg`}
                            alt={`${item.name}`}
                            className="w-full h-full object-cover object-top"
                        />
                        </div>
                    <div className='text-white/50 text-lg'>{item.job}</div>
                    <div className='text-white-50 text-lg'>{`${item.name} ${item.surname}`}</div>
                </div>
            ))}
        </div>
    </div>
)
}

export default AnimatedCounter