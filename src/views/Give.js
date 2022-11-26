import React from 'react'
import GiveHero from '../components/Give/GiveHero'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import DepartmentalNeeds from './DepartmentalNeeds'




const Give = () => {
  return (
    <>
    <div className="relative w-screen overflow-hidden">
        <div className="heroGradient w-full h-[100%] absolute -z-10"></div>
        <Navbar />
        <GiveHero/>
      </div>
        <DepartmentalNeeds/>
      <Footer />
    </>
  )
}

export default Give