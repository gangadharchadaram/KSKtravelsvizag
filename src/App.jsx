import React, { useState } from 'react';
    import { Helmet } from 'react-helmet';
    import Header from '@/components/Header';
    import Hero from '@/components/Hero';
    import Services from '@/components/Services';
    import AboutUs from '@/components/AboutUs';
    import CarFleet from '@/components/CarFleet';
    import TourPackages from '@/components/TourPackages';
    import Testimonials from '@/components/Testimonials';
    import BookingModal from '@/components/BookingModal';
    import Footer from '@/components/Footer';
    import { Toaster } from '@/components/ui/toaster';

    function App() {
      const [bookingModalOpen, setBookingModalOpen] = useState(false);
      const [bookingType, setBookingType] = useState(null);
      const [selectedItem, setSelectedItem] = useState(null);

      const handleBooking = (type, item) => {
        setBookingType(type);
        setSelectedItem(item);
        setBookingModalOpen(true);
      };

      return (
        <>
          <Helmet>
            <title>KSK Travels Vizag - Premium Car Rentals & Tour Packages</title>
            <meta name="description" content="Explore Vizag with KSK Travels. We offer airport pickups, local sightseeing, premium car rentals, and curated tour packages for your perfect journey." />
          </Helmet>
          
          <div className="min-h-screen">
            <Header />
            <main>
              <Hero onBookNow={() => handleBooking('car', null)} />
              <Services />
              <AboutUs />
              <CarFleet onBookCar={(car) => handleBooking('car', car)} />
              <TourPackages onBookPackage={(pkg) => handleBooking('package', pkg)} />
              <Testimonials />
            </main>
            <Footer />
            
            <BookingModal
              open={bookingModalOpen}
              onOpenChange={setBookingModalOpen}
              bookingType={bookingType}
              selectedItem={selectedItem}
            />
            
            <Toaster />
          </div>
        </>
      );
    }

    export default App;