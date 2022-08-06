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
import Newsletter from './views/Newsletter';
import Impact from './views/Impact';
import Give from './views/Give';
import ScrollToTop from './components/shared/ScrollTop';
import Register from './views/Register';
import Dashboard from './views/Admin/dashboard/Dashboard';
import DashHome from './views/Admin/dashboard/home/DashHome';
import DashImages from './views/Admin/dashboard/image/DashImages';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className="App">
      
      <ScrollToTop/>
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/impact" element={<Impact />} />
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/newsletter" element={<Newsletter />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/portal" element={<LandingPage />} />
      <Route exact path="/give" element={<Give />} />
      <Route exact path="/register" element={<Register />} />

      {/* DASHBOARD PAGES */}
      <Route exact path="/dashboard" element={<Dashboard />}>
          <Route exact path="/dashboard/" element={<DashHome />} />
          <Route exact path="/dashboard/images" element={<DashImages/>} />
          {/* <Route exact path="/dashboard/research" element={<DashResearch />} /> */}
          {/* <Route exact path="/dashboard/training" element={<DashTraining />} /> */}
          {/* <Route exact path="/dashboard/pages" element={<Login />} /> */}

        </Route>
      
      </Routes>
    </div>
  );
}

export default App;
