import React from 'react'
import RegisterHero from '../components/Register/RegisterHero'
import RegistrationForm from '../components/Register/RegistrationForm'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const Register = () => {
  return (
    <>
    <div className="relative w-screen overflow-hidden">
        <div className="giveGradient w-full h-[100%] absolute -z-10"></div>
        <Navbar />
        <RegisterHero/>
        
      </div>
      <RegistrationForm/>
      <Footer />
    </>
  )
}

export default Register