import NavBar from '../components/NavBar'
import BgImg from '/images/bg.png'
import Footer from '../components/Footer.jsx'
import { HomeWords } from '../constants/index.js'

const Resources = () => {
  return (
    <section id="resources-page-section" className="relative overflow-hidden">
      <NavBar />
        <div className="absolute top-0 left-0 z-10">
            <img src={BgImg} alt="Background" />
        </div>

        <div className="hero-layout grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 w-full items-start top-30">
            {/*LEFT: CONTENTS */}
            <header className="flex flex-col justify-center items-start md:items-start">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1 className="text-left md:text-left space-y-2">
                            Biography
                        </h1>
                    </div>
                </div>
            </header>
            {/*RIGHT: 3D MODEL */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md md:text-lg leading-relaxed w-full md:max-w-xl mx-auto md:mx-0">
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
              <p>
                Certified Germ, Control, ed. “How Photocatalysis Works with TiO2.” YouTube, December 21, 2020.{' '}
                <a
                href="https://youtu.be/6PIPXIyL_ms?feature=shared"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
                >
                https://youtu.be/6PIPXIyL_ms?feature=shared
                </a>.
              </p>
            </div>
        </div>
        <Footer />
    </section>
  )
}

export default Resources