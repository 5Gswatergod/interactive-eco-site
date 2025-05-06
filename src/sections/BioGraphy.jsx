import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const BioGraphy = () => {
  const bioRef = useRef(null)

  useEffect(() => {
    const paragraphs = bioRef.current.querySelectorAll('p')
    gsap.fromTo(paragraphs, { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    })
  }, [])

  return (
    <section id='biography' className="py-16 px-6 md:px-20">
      <div ref={bioRef} className="space-y-6 text-gray-700 dark:text-gray-300 text-md md:text-lg leading-relaxed">
        <p>
          Costanza, Robert, and et al. 1998. “The value of the world's ecosystem services and natural capital.” <em>25</em>, no. 1 (April): 3–15.{' '}
          <a
            href="https://doi.org/10.1016/S0921-8009(98)00020-2"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.1016/S0921-8009(98)00020-2
          </a>.
        </p>
        <p>
          Executive Yuan. 2024. “Marine Conservation Act.” Executive Yuan.{' '}
          <a
            href="https://english.ey.gov.tw/News3/9E5540D592A5FECD/aa15bed5-4e21-4eda-a3c6-2e490e8ba981"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://english.ey.gov.tw/News3/9E5540D592A5FECD/aa15bed5-4e21-4eda-a3c6-2e490e8ba981
          </a>.
        </p>
        <p>
          New Taipei City Government. n.d. “Introduction.” New Taipei City Government. Accessed March 26, 2025.{' '}
          <a
            href="https://foreigner.ntpc.gov.tw/home.jsp?id=e5831b43d08c98e5#:~:text=Situated%20in%20the%20northern%20part,an%20area%20of%202052%20km2"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://foreigner.ntpc.gov.tw/home.jsp?id=e5831b43d08c98e5
          </a>.
        </p>
        <p>
          Ministry of Environment. 2025. “Environmental Water Quality Information.” Ministry of Environment.{' '}
          <a
            href="https://wq.moenv.gov.tw/EWQP/en/EnvWaterMonitoring/River.aspx"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://wq.moenv.gov.tw/EWQP/en/EnvWaterMonitoring/River.aspx
          </a>.
        </p>
      </div>
    </section>
  )
}

export default BioGraphy