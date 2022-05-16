import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Tradition from '../components/LandingPage/Tradition'
import Message from '../components/LandingPage/Message'
import Projects from '../components/LandingPage/Projects'

const About = () => {
  return (
    <>
    <Navbar/>
    <Tradition/>
    <Message/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default About