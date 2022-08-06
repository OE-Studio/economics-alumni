import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

import GalleryHero from '../components/Gallery/GalleryHero'
import GalleryList from '../components/Gallery/GalleryList'



const Gallery = () => {
  return (
    <>
      <div className="relative w-screen overflow-hidden font-inter">
        <div className="heroGradient w-full h-[100%] absolute -z-10"></div>
        <Navbar />
        <GalleryHero />
      </div>
      <GalleryList />
      <Footer />
    </>
  )
}

export default Gallery