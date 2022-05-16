import React, { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import LandingPage from './views/LandingPage';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/about-us" element={<LandingPage />} />
      <Route exact path="/contact-us" element={<LandingPage />} />
      <Route exact path="/projects" element={<LandingPage />} />
      <Route exact path="/events" element={<LandingPage />} />
      <Route exact path="/gallery" element={<LandingPage />} />
      <Route exact path="/portal" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
