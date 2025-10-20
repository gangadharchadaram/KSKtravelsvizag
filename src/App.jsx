import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import Fleet from './components/pages/Fleet';
import Home from './components/Hero';
import Services from './components/Services';
import About from './components/pages/About';
import Tour from './components/pages/Tour';
import Testimonials from './components/pages/Reviews';
import Footer from './components/Footer';
import AirportTransfers from './components/pages/OurServices';
import LocalSightseeing from './components/pages/OurServices';
import CorporateTravel from './components/pages/OurServices';
import OutstationTrips from './components/pages/OurServices';
import OurServices from './components/pages/OurServices';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<OurServices />} />
                <Route path="/services/airport-transfers" element={<AirportTransfers />} />
<Route path="/services/local-sightseeing" element={<LocalSightseeing />} />
        <Route path="/services/corporate-travel" element={<CorporateTravel />} />
        <Route path="/services/outstation-trips" element={<OutstationTrips />} />
        <Route path="/about" element={<About />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/tours" element={<Tour />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
