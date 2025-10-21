import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Zap, Clock, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import car1 from '@/components/assets/swicth-hback.webp';
import car2 from '@/components/assets/desire-1.jpg';
import car3 from '@/components/assets/fronx.avif';

const allcars = [
  {
    id: 1,
    name: 'Swift H-Back',
    category: 'H-Back',
    seats: 4,
    luggage: 2,
    baseRate: '₹2,500',
    package: '10 Hours / 100 KM',
    extraKm: '₹12/km',
    extraHr: '₹150/hr',
    features: ['AC', 'Music System', 'GPS'],
    description: 'Perfect for city tours and short trips',
    image: car1,
  },
  {
    id: 2,
    name: 'Swift Dzire',
    category: 'Sedan',
    seats: 4,
    luggage: 4,
    baseRate: '₹3,000',
    package: '10 Hours / 100 KM',
    extraKm: '₹13/km',
    extraHr: '₹250/hr',
    features: ['AC', 'Music System', 'GPS', 'Spacious'],
    description: 'Ideal for family trips and group travel',
    image: car2,
  },
  {
    id: 3,
    name: 'Fronx',
    category: 'Sedan',
    seats: 4,
    luggage: 4,
    baseRate: '₹3,000',
    package: '10 Hours / 100 KM',
    extraKm: '₹13/km',
    extraHr: '₹250/hr',
    features: ['AC', 'Premium Sound', 'GPS', 'Leather Seats'],
    description: 'Luxury comfort for business travel',
    image: car3,
  },
  {
    id: 4,
    name: 'Mahindra Scorpio',
    category: 'SUV',
    seats: 7,
    luggage: 5,
    baseRate: '₹4,000',
    package: '10 Hours / 100 KM',
    extraKm: '₹14/km',
    extraHr: '₹300/hr',
    features: ['AC', '4WD', 'GPS', 'Rugged'],
    description: 'Adventure-ready for hill stations',
    image: 'https://images.unsplash.com/photo-1701080460393-8327b0eaf285',
  },
  {
    id: 5,
    name: 'Hyundai Creta',
    category: 'SUV',
    seats: 5,
    luggage: 3,
    baseRate: '₹3,800',
    package: '10 Hours / 100 KM',
    extraKm: '₹14/km',
    extraHr: '₹250/hr',
    features: ['AC', 'Sunroof', 'GPS', 'Premium'],
    description: 'Modern SUV with premium features',
    image: 'https://images.unsplash.com/photo-1612935459247-3f90353c6c50',
  },
  {
    id: 6,
    name: 'Toyota Fortuner',
    category: 'Premium SUV',
    seats: 7,
    luggage: 5,
    baseRate: '₹6,500',
    package: '10 Hours / 100 KM',
    extraKm: '₹16/km',
    extraHr: '₹400/hr',
    features: ['AC', 'Leather', 'GPS', '4WD', 'Luxury'],
    description: 'Ultimate luxury for special occasions',
    image: 'https://images.unsplash.com/photo-1687758265380-4538899a1b3b',
  },
];

const CarFleet = ({isHomePage}) => {
    const cars = isHomePage ? allcars.slice(0, 3) : allcars;

  const phoneNumber = '+919948357755'; // Replace with your number
  const whatsappNumber = '+919948357755'; // Replace with your WhatsApp number

  return (
    <section
      id="cars"
      className="py-20 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 relative overflow-hidden"
    >
      {/* Background blur */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold inline-block mb-4">
            Our Fleet
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Premium Cars</span> for Every Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse fleet of well-maintained vehicles
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 bg-white/80 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                <img
                  className="w-full h-full object-cover"
                  alt={`${car.name} car for rent`}
                  src={car.image}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <span className="text-sm font-semibold text-gray-800">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{car.name}</h3>
                  <p className="text-gray-600 text-sm">{car.description}</p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-xl">
                    <Users className="w-5 h-5 text-cyan-600 mb-1" />
                    <span className="text-xs text-gray-600">{car.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl">
                    <Briefcase className="w-5 h-5 text-blue-600 mb-1" />
                    <span className="text-xs text-gray-600">{car.luggage} Bags</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-orange-50 rounded-xl">
                    <Zap className="w-5 h-5 text-orange-600 mb-1" />
                    <span className="text-xs text-gray-600">Power AC</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & Contact */}
                <div className="pt-4 border-t border-gray-200">
                  {/* Price neatly formatted */}
                  <div className="text-center sm:text-left mb-3">
                    <p className="text-3xl font-bold text-gradient">{car.baseRate}</p>
                    <p className="text-sm text-gray-600 font-medium">{car.package}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Extra: <span className="font-semibold">{car.extraKm}</span> &nbsp; | &nbsp;{' '}
                      <span className="font-semibold">{car.extraHr}</span>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
                    <Button
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in renting the ${car.name} with ${car.category} ${car.baseRate}`,
                          '_blank'
                        )
                      }
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </Button>
                    <Button
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2"
                      onClick={() => (window.location.href = `tel:${phoneNumber}`)}
                    >
                      <Phone className="w-4 h-4" /> Call
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
         {isHomePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link to="/Fleet">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-orange-500 hover:from-cyan-600 hover:via-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View All Cars
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CarFleet;
