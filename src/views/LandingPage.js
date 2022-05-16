import React from 'react'
import ContactUs from '../components/LandingPage/ContactUs'
import Gallery from '../components/LandingPage/Gallery'
import Hero from '../components/LandingPage/Hero'
import Message from '../components/LandingPage/Message'
import Projects from '../components/LandingPage/Projects'
import Testimonials from '../components/LandingPage/Testimonials'
import Tradition from '../components/LandingPage/Tradition'
import UpcomingEvents from '../components/LandingPage/UpcomingEvents'
import Update from '../components/LandingPage/Update'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Update/>
    <Tradition/>
    <Message/>
    <UpcomingEvents/>
    <Gallery/>
    <Projects/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default LandingPage