import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GeoRiver = () => {
  const textRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    )

    gsap.fromTo(mapRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    )
  }, [])

  return (
    <section id='river' className="py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div ref={textRef} className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            River Introduction
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>Xindian River is located in northern Taiwan and is a major tributary of the Tamsui River.</li>
            <li>It stretches for 81 kilometers and has a drainage area of 921 square kilometers.</li>
            <li>The river originates in the Wulai District and gathers water from the Nanshi and Beishi Rivers.</li>
            <li>It flows through Xindian, Yonghe, and Zhonghe Districts before merging with the Dahan River.</li>
            <li>It eventually forms the Tamsui River and empties into the Taiwan Strait.</li>
            <li>Its banks feature parks, bike paths, and public facilities used by residents for recreation.</li>
          </ul>
        </div>

        {/* Map Section */}
        <div ref={mapRef} className="md:w-1/2 w-full h-[300px] md:h-[400px]">
          <iframe
            title="Huajiang Bridge Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18376.006123177885!2d121.47603152594841!3d25.03569854651968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a85222836697%3A0xebfe0089b7d32e2a!2sHuajiang%20Bridge!5e1!3m2!1sen!2stw!4v1746502036087!5m2!1sen!2stw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default GeoRiver