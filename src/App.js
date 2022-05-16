import React, { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import LandingPage from './views/LandingPage';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './views/About';
import ContactUs from './views/ContactUs';
import Projects from './views/Projects';
import Events from './views/Events';
import Gallery from './views/Gallery';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/about-us" element={<About />} />
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/portal" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
