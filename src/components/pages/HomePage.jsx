import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import CarFleet from '@/components/CarFleet';
import TourPackages from '@/components/TourPackages';
import Testimonials from '@/components/Testimonials';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const HomePage = ({ handleBooking }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>KSK Travels Vizag - Premium Car Rentals & Tour Packages</title>
        <meta
          name="description"
          content="Explore Vizag with KSK Travels. We offer airport pickups, local sightseeing, premium car rentals, and curated tour packages for your perfect journey."
        />
      </Helmet>

      <main id="home">
        {/* Hero Section */}
        <Hero onBookNow={() => handleBooking('car', null)} />

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* About Us Section */}
        <section id="about">
          <AboutUs />
        </section>

        {/* Car Fleet Section */}
        <section id="fleet">
          <CarFleet
            onBookCar={(car) => handleBooking('car', car)}
            isHomePage={true}
          />
        </section>

        {/* Tour Packages Section */}
        <section id="tours">
          <TourPackages
            onBookPackage={(pkg) => handleBooking('package', pkg)}
            isHomePage={true}
          />
        </section>

        {/* Testimonials / Reviews Section */}
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
    </motion.div>
  );
};

export default HomePage;
