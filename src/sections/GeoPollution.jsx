import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const GeoPollution = () => {
  const listRef = useRef(null)

  useEffect(() => {
    const items = listRef.current.querySelectorAll('li')
    gsap.fromTo(items, { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    })
  }, [])

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
        How Polluted is the River?
      </h2>
      <ul ref={listRef} className="list-disc pl-5 space-y-2 text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <li>In the past, rapid urbanization led to contamination from domestic wastewater, industrial effluents, garbage dumping, and agricultural pollution.</li>
        <li>The Xindian River experienced severe pollution as a result of these factors.</li>
        <li>Government-led restoration efforts have significantly improved water quality in many areas.</li>
        <li>Some river sections improved from "heavily polluted" to "lightly polluted" or "moderate quality."</li>
        <li>Water quality can still deteriorate after heavy rainfall or in specific problem areas.</li>
      </ul>
    </section>
  )
}

export default GeoPollution