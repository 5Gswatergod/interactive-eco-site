import { HomeWords } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModel/HeroExperience.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import BgImg from '/images/bg.png';
import NavBar from '../components/NavBar.jsx';
import Timeline from '../sections/Timeline.jsx';
import Footer from '../components/Footer.jsx';
import IntroHome from '../sections/IntroHome.jsx';
import TitleHeader from '../components/TitleHeader.jsx';

const Home = () => {
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
                    start: 'top 80%',
                    toggleActions: 'play none none reset',
                }
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
                    start: 'top 80%',
                    toggleActions: 'play none none reset',
                }
            },
        )
    })

    return (
        <section id="intro" className="relative overflow-hidden">
            <NavBar />
            <div className="absolute top-0 left-0 z-10">
                <img src={BgImg} alt="Background" />
            </div>

            <div className="hero-layout">
                {/*LEFT: CONTENTS */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Eco
                                <span className="slide">
                                    <span className="wrapper">
                                        {HomeWords.map((word) => (
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
                            <h1>Chemists</h1>
                            <p className='text-white-50 md:text-xl relative z-10 pointer-none'>How can we mitigate plastic pollution in the Xindian River with Titanium Dioxide and sunlight?</p>
                        </div>
                        <Button 
                        className='md:w-80 md:h-16 w-60 h-12' 
                        id="introHome"
                        text="Explore Project!"
                        />
                    </div>
                </header>
                {/*RIGHT: 3D MODEL */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience/>       
                    </div>
                </figure>
            </div>
            <IntroHome />
            <TitleHeader title={"Team Member"} />
            <AnimatedCounter/>
            <Timeline />
            <Footer />
        </section>
    )
}

export default Home;