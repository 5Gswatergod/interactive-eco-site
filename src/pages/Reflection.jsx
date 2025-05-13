import React from 'react'
import NavBar from '../components/NavBar'
import ReflectSection from '../sections/ReflectSection'
import TitleHeader from '../components/TitleHeader'

const Reflection = () => {
  return (
    <main id='reflection' className='relative'>
      <NavBar />
      <div className="flex-center flex-col">
        <ReflectSection />
      </div>
    </main>
  )
}

export default Reflection