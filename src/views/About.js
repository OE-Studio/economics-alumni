import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import AboutHero from '../components/About/AboutHero'
import History from '../components/About/History'
import Actions from '../components/LandingPage/Actions'
import AboutContent from '../components/About/AboutContent'
import Council from '../components/About/Council'

const About = () => {
  return (
    <>
      <div className="relative w-screen overflow-hidden">
        <div className="heroGradient w-full h-[75%] absolute -z-10"></div>
        <Navbar />
        <AboutHero />
        <History/>
      </div>
      <div className="h-20"></div>
      <AboutContent/>
      <Council/>
      <Actions/>
      <Footer />
    </>
  )
}

export default About