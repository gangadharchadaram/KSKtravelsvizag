import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import image1 from '@/components/assets/KSKTravels.png';
import image2 from '@/components/assets/KSKTravels1.png';
import image3 from '@/components/assets/KSKTravels2.png';
import image4 from '@/components/assets/services3.jpg';
import image5 from '@/components/assets/services3.jpg';
import image6 from '@/components/assets/image4.webp';

const OurServices = () => {
  // Your WhatsApp number (without + or spaces)
  const whatsappNumber = '919948357755'; // change this to your number

  const services = [
    {
      id: 1,
      title: "Airport Taxi Service",
      highlight: "Visakhapatnam",
      description:
        "KSK Travels offers reliable and punctual airport taxi service in Visakhapatnam. Whether you need a pickup from the airport or a drop-off for your flight, our dedicated airport transfer service ensures a smooth and hassle-free journey.",
      points: [
        "24/7 Service Availability",
        "Flight Tracking",
        "Safe & Sanitized Vehicles",
        "Professional Drivers",
        "Transparent Pricing",
        "Meet & Greet Service",
      ],
      image: image1,
      button: "Book Airport Taxi",
      message: "Hi, I’d like to book an Airport Taxi from KSK Travels.",
    },
    {
      id: 2,
      title: "Local Sightseeing",
      highlight: "Vizag",
      description:
        "Explore the scenic beauty and cultural heritage of Visakhapatnam with our curated sightseeing packages. From pristine beaches to lush hills and historic temples, experience the best of Vizag comfortably with our professional drivers.",
      points: [
        "Customizable Itineraries",
        "Experienced Local Drivers",
        "Comfortable AC Vehicles",
        "Affordable Full-Day / Half-Day Plans",
        "Pickup & Drop from any location",
        "On-time Service",
      ],
      image: image2,
      button: "Book Sightseeing Tour",
      message: "Hi, I’m interested in a Local Sightseeing tour in Vizag.",
    },
    {
      id: 3,
      title: "Corporate Travel",
      highlight: "Solutions",
      description:
        "Streamline your business travel needs with KSK Travels. We provide dependable and professional cab services tailored for corporate clients — ideal for airport pickups, meetings, and city commutes.",
      points: [
        "Dedicated Corporate Accounts",
        "Professional Chauffeurs",
        "Luxury & Executive Fleet",
        "Transparent Billing & Reports",
        "Flexible Monthly Contracts",
        "On-Time Service Guarantee",
      ],
      image: image3,
      button: "Book Corporate Ride",
      message: "Hi, I’d like to inquire about Corporate Travel services.",
    },
    {
      id: 4,
      title: "Outstation Trips",
      highlight: "from Vizag",
      description:
        "Plan your weekend getaways or long-distance travels from Visakhapatnam with our reliable outstation taxi services. Choose from a range of vehicles to match your comfort and travel preferences.",
      points: [
        "One-Way & Round-Trip Options",
        "Clean & Comfortable Vehicles",
        "Experienced Drivers for Long Routes",
        "Competitive Per-Km Rates",
        "Real-Time Tracking",
        "24/7 Customer Support",
      ],
      image: image4,
      button: "Plan Outstation Trip",
      message: "Hi, I’d like to plan an Outstation Trip from Vizag.",
    },
  ];

  // Function to open WhatsApp chat
  const handleWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  const TourBanner = () => (
    <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-r from-blue-500 to-orange-500 overflow-hidden">
      {/* Background Image */}
      <img
        src={image5} // you can replace with a scenic tour image
        alt="Tours Banner"
        className="absolute inset-0 w-full h-70 object-cover opacity-30"
      />
  
      {/* Decorative Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />
  
      {/* Banner Text */}
      <h1 className="relative text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl">
        Explore Our <span className="text-yellow-300">Services</span>
      </h1>
  
      {/* Curved Bottom */}
      <div className="absolute bottom-0 w-full h-16 bg-white/30 backdrop-blur-md rounded-t-full"></div>
    </div>
  );

  return (
    <div className="bg-white">
                <TourBanner />

      {/* Header */}
    
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${index % 2 === 1 ? "md:order-2" : ""}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}{" "}
                <span className="text-cyan-600">{service.highlight}</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.points.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="text-cyan-600 w-5 h-5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  onClick={() => handleWhatsApp(service.message)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full"
                >
                  {service.button}
                </Button>
                <p className="text-gray-700">
                  or Call Us at{" "}
                  <span className="text-red-500 font-semibold">
                    +91 98765 43210
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${index % 2 === 1 ? "md:order-1" : ""}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-3xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </section>
      ))}
      {/* Out Station Cab Service Section */}
<section className="relative py-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-500 overflow-hidden">
  {/* Decorative gradient blurs */}
  <div className="absolute top-20 left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl opacity-40 animate-pulse" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl opacity-30 animate-pulse" />

  <div className="relative z-10 text-center text-white px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-lg">
      Out Station <span className="text-yellow-300">Cab Service</span>
    </h2>

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        {
          route: 'VIZAG TO KAKINADA',
          fare: 'Price Starts from 3000 INR',
        },
        {
          route: 'VIZAG TO VIZIANAGARAM',
          fare: 'Price Starts from 1500 INR',
        },
        {
          route: 'VIZAG TO SRIKAKULAM',
          fare: 'Price Starts from 2400 INR',
        },
        {
          route: 'VIZAG TO RAJAHMUNDRY',
          fare: 'Price Starts from 3500 INR',
        },
        {
          route: 'VIZAG TO HYDERABAD',
          fare: 'Price Starts from 10000 INR',
        },
        {
          route: 'ANY OTHER OUTSTATION CABS',
          fare: 'As Low As Possible',
        },
      ].map((cab, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white/15 backdrop-blur-lg rounded-3xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-300"
        >
          {/* Taxi Icon */}
          <div className="relative mx-auto mb-4">
            <div className="absolute inset-0 blur-xl bg-yellow-300/50 rounded-full opacity-70 animate-pulse" />
            <img
              src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
              alt="Taxi Icon"
              className="w-20 h-20 mx-auto relative drop-shadow-lg"
            />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-2">
            {cab.route} TAXI FARE (ONE WAY OR ROUND TRIP)
          </h3>
          <p className="text-yellow-100 mb-6 font-medium">{cab.fare}</p>

          {/* Button */}
          <Button
            onClick={() =>
              window.open(
                `https://wa.me/919948357755?text=Hi, I’d like to enquire about ${cab.route} taxi fare.`,
                '_blank'
              )
            }
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold rounded-full px-5 py-2 mx-auto shadow-md"
          >
            Enquiry Now
          </Button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default OurServices;
