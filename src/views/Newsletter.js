import React from 'react'
import NewsLetterHero from '../components/Newsletter/NewsletterHero'
import NewsletterList from '../components/Newsletter/NewsletterList'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const Newsletter = () => {
    return (
        <>
            <div className="relative w-screen overflow-hidden">
                <div className="heroGradient w-full h-[100%] absolute -z-10"></div>
                <Navbar />
                <NewsLetterHero />
            </div>
            <NewsletterList />
            <Footer />
        </>
    )
}

export default Newsletter