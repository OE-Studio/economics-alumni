import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

import UpcomingEvents from '../components/LandingPage/UpcomingEvents'

const Events = () => {
  return (
    <>
      <Navbar />
      <UpcomingEvents />
      <Footer />
    </>
  )
}

export default Events