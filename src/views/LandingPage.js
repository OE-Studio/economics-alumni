import React from "react";
import Actions from "../components/LandingPage/Actions";
// import ContactUs from '../components/LandingPage/ContactUs'
import Director from "../components/LandingPage/Director";
// import Gallery from '../components/LandingPage/Gallery'
import Hero from "../components/LandingPage/Hero";
import Impact from "../components/LandingPage/Impact";
// import Message from '../components/LandingPage/Message'
// import Projects from '../components/LandingPage/Projects'
// import Testimonials from '../components/LandingPage/Testimonials'
import Tradition from "../components/LandingPage/Tradition";
import UpcomingEvents from "../components/LandingPage/UpcomingEvents";
import Update from "../components/LandingPage/Update";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const LandingPage = () => {
  return (
    <>
      <div className="relative w-screen overflow-hidden">
        <div className="heroGradient w-full h-[90%] absolute -z-10"></div>
        <Navbar />
        <Hero />
        <Update />
      </div>
      <Tradition />
      <Director />
      {/* <Message/> */}
      <UpcomingEvents />
      <Impact />
      <Actions />
      {/* <Gallery/> */}
      {/* <Projects/> */}
      {/* <Testimonials/> */}
      {/* <ContactUs/> */}
      <Footer />
    </>
  );
};

export default LandingPage;
