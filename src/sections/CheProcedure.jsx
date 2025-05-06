import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CheProcedure = () => {
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
        How Does TiO₂ Work?
      </h2>
      <ol ref={listRef} className="list-decimal pl-5 space-y-2 text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {[
          "Plastic is exposed to TiO₂ and sunlight.",
          "Harmful UV light activates the TiO₂ particles.",
          "Activated TiO₂ generates reactive oxygen species, such as hydroxyl radicals (•OH).",
          "These radicals attack the polymer chains of the plastic.",
          "The plastic breaks down into smaller molecules.",
          "Over time, these molecules are further degraded into carbon dioxide (CO₂) and water (H₂O)."
        ].map((step, index) => (
          <li key={index}>
            {step}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default CheProcedure