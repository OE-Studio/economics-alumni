import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import './App.css';
import LandingPage from './views/LandingPage';
import {
  Routes,
  Route,
} from "react-router-dom";

import { fetchNewsletter } from './features/newsletter/newsletterSlice';
import { fetchImage } from './features/image/imageSlice';
import { useDispatch, useSelector } from 'react-redux'

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
import DashNewsletter from './views/Admin/dashboard/newsletter/DashNewsletter';
import DashImpact from './views/Admin/dashboard/impact/DashImpact';
import { fetchImpacts } from './features/impact/impactSlice';
import DashEvents from './views/Admin/dashboard/events/DashEvents';
import { fetchEvent } from './features/event/eventSlice';
import DashMember from './views/Admin/dashboard/members/DashMember';
import { fetchMember } from './features/member/memberSlice';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])


  const dispatch = useDispatch()

  const newsletterStatus = useSelector(state => state.newsletter.status)
  const impactStatus = useSelector(state => state.impact.status)
  const imageStatus = useSelector(state => state.image.status)
  const eventStatus = useSelector(state => state.event.status)
  const memberStatus = useSelector(state => state.member.status)

  useEffect(() => {

    if (impactStatus === "idle") {
      dispatch(fetchImpacts())
    }
    if (newsletterStatus === "idle") {
      dispatch(fetchNewsletter())
    }
    if (imageStatus === "idle") {
      dispatch(fetchImage())
    }
    if (eventStatus === "idle") {
      dispatch(fetchEvent())
    }
    if (memberStatus === "idle") {
      dispatch(fetchMember())
    }
    return () => { }
  }, [dispatch, impactStatus, newsletterStatus, imageStatus, eventStatus, memberStatus])


  return (
    <div className="App">

      <ScrollToTop />
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
          <Route exact path="/dashboard/images" element={<DashImages />} />
          <Route exact path="/dashboard/newsletter" element={<DashNewsletter />} />
          <Route exact path="/dashboard/impacts" element={<DashImpact />} />
          <Route exact path="/dashboard/events" element={<DashEvents />} />
          <Route exact path="/dashboard/members" element={<DashMember />} />
          {/* <Route exact path="/dashboard/events" element={<Login />} /> */}

        </Route>

      </Routes>
    </div>
  );
}

export default App;
