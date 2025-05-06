import React from 'react'
import NavBar from '../components/NavBar'
import ReflectSection from '../sections/ReflectSection'

const Reflection = () => {
  return (
    <main id='reflection' className='relative min-h-screen'>
      <NavBar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ReflectSection />
      </div>
    </main>
  )
}

export default Reflection