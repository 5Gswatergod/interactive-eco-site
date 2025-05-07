import React, { useState, useEffect, useRef } from 'react'
import { navLinks } from '../constants/index.js'
import { Link, useNavigate } from "react-router-dom"
import { FiMenu, FiX } from 'react-icons/fi'
import gsap from 'gsap'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const mobileNavRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () =>{
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll); }
    }, [])

    useEffect(() => {
      if (menuOpen && mobileNavRef.current) {
        gsap.fromTo(
          mobileNavRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    }, [menuOpen]);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner flex justify-between items-center px-4 py-3 md:px-8'>
                <a className='logo text-xl font-bold' href='#intro'>
                    Eco Chemists
                </a>

                {/* Desktop Menu */}
                <nav className='hidden lg:block'>
                    <ul className='flex gap-6'>
                        {navLinks.map(({ name, link }) => (
                            <li key={name} className='group'>
                                <Link to={link} className='nav-link'>
                                    <span>{name}</span>
                                    <span className='underline'></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className='lg:hidden text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* External Link Button */}
                <a href="https://readymag.website/u703636081/5472204/" className="contact-btn group hidden lg:inline-block">
                    <div className="inner">
                        <span>Eco Current</span>
                    </div>
                </a>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <nav
                ref={mobileNavRef}
                className='lg:hidden bg-white dark:bg-gray-900 px-4 py-4 shadow-md'
              >
                <ul className='flex flex-col gap-4'>
                  {navLinks.map(({ name, link }) => (
                    <li key={name}>
                      <Link
                        to={link}
                        className='nav-link'
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                          navigate(link);
                        }}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a href="https://readymag.website/u703636081/5472204/" className="nav-link">
                      Eco Current
                    </a>
                  </li>
                </ul>
              </nav>
            )}
        </header>
    )
}

export default NavBar