import React from 'react'
import Footer from '../components/Footer'

const ResourcesSection = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
        Bibliography
      </h2>
      <div className="text-md md:text-lg text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Costanza, Robert, and et al. 1998. “The value of the world's ecosystem services and natural capital.” <em>25</em>, no. 1 (April): 3-15. <a href="https://doi.org/10.1016/S0921-8009(98)00020-2" className="text-blue-600 underline">https://doi.org/10.1016/S0921-8009(98)00020-2</a>.
        </p>
        <p>
          Executive Yuan. 2024. “Marine Conservation Act.” Executive Yuan. <a href="https://english.ey.gov.tw/News3/9E5540D592A5FECD/aa15bed5-4e21-4eda-a3c6-2e490e8ba981" className="text-blue-600 underline">https://english.ey.gov.tw/News3/9E5540D592A5FECD/aa15bed5-4e21-4eda-a3c6-2e490e8ba981</a>.
        </p>
        <p>
          New Taipei City Government. n.d. “Introduction.” New Taipei City Government. Accessed March 26, 2025. <a href="https://foreigner.ntpc.gov.tw/home.jsp?id=e5831b43d08c98e5#:~:text=Situated%20in%20the%20northern%20part,an%20area%20of%202052%20km2" className="text-blue-600 underline">https://foreigner.ntpc.gov.tw/home.jsp?id=e5831b43d08c98e5</a>.
        </p>
        <p>
          Ministry of Environment. 2025. “Environmental Water Quality Information.” Ministry of Environment. <a href="https://wq.moenv.gov.tw/EWQP/en/EnvWaterMonitoring/River.aspx" className="text-blue-600 underline">https://wq.moenv.gov.tw/EWQP/en/EnvWaterMonitoring/River.aspx</a>.
        </p>
      </div>
      <Footer />
    </section>
  )
}

export default ResourcesSection