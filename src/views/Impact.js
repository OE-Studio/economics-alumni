import React from 'react'
import ImpactHero from '../components/Impact/ImpactHero'
import ImpactList from '../components/Impact/ImpactList'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const Impact = () => {
  return (
    <>
    <div className="relative w-screen overflow-hidden font-inter">
        <div className="impactGradient w-full h-[100%] absolute -z-10"></div>
        <Navbar />
        <ImpactHero />
      </div>
<ImpactList/>
      <Footer />
    </>
  )
}

export default Impact