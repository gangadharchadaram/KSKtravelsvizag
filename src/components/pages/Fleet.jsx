import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Zap, Phone, MessageCircle, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import car1 from '@/components/assets/swicth-hback.webp';
import car2 from '@/components/assets/desire-1.jpg';
import car3 from '@/components/assets/fronx.avif';
import car4 from '@/components/assets/baleno.jpg';
import car5 from '@/components/assets/amaze.webp';
import car6 from '@/components/assets/ertiga.jpg';
import car7 from '@/components/assets/crysta-2.avif';
import car8 from '@/components/assets/tavera.jpg';
import car9 from '@/components/assets/12seater.avif';
import car10 from '@/components/assets/17seater.webp';
import car11 from '@/components/assets/tiago.jpg';
import car12 from '@/components/assets/wagonR.avif';



// Car Data
const cars = [
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
    name: 'Wagon R',
    category: 'H-Back',
    seats: 4,
    luggage: 2,
    baseRate: '₹2,500',
    package: '10 Hours / 100 KM',
    extraKm: '₹12/km',
    extraHr: '₹150/hr',
    features: ['AC', 'Music System', 'GPS'],
    description: 'Perfect for city tours and short trips',
    image: car12,
  },
  {
    id: 3,
    name: 'TATA Tiago',
    category: 'H-Back',
    seats: 4,
    luggage: 2,
    baseRate: '₹2,500',
    package: '10 Hours / 100 KM',
    extraKm: '₹12/km',
    extraHr: '₹150/hr',
    features: ['AC', 'Music System', 'GPS'],
    description: 'Perfect for city tours and short trips',
    image: car11,
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    name: 'Baleno',
    category: 'Sedan',
    seats: 4,
    luggage: 4,
    baseRate: '₹3,000',
    package: '10 Hours / 100 KM',
    extraKm: '₹13/km',
    extraHr: '₹250/hr',
    features: ['AC', 'Premium Sound', 'GPS', 'Leather Seats'],
    description: 'Luxury comfort for business travel',
    image: car4,
  },
  {
    id: 7,
    name: 'Honda Amaze',
    category: 'Sedan',
    seats: 4,
    luggage: 4,
    baseRate: '₹3,000',
    package: '10 Hours / 100 KM',
    extraKm: '₹13/km',
    extraHr: '₹250/hr',
    features: ['AC', 'Premium Sound', 'GPS', 'Leather Seats'],
    description: 'Luxury comfort for business travel',
    image: car5,
  },
  {
    id: 8,
    name: 'Ertiga',
    category: 'SUV',
    seats: 6,
    luggage: 5,
    baseRate: '₹3,500',
    package: '10 Hours / 100 KM',
    extraKm: '₹14/km',
    extraHr: '₹300/hr',
    features: ['AC', '4WD', 'GPS', 'Rugged'],
    description: 'Adventure-ready for hill stations',
    image: car6,
  },
  {
    id: 9,
    name: 'Innova Crysta',
    category: 'SUV',
    seats: 7,
    luggage: 5,
    baseRate: '₹4,500',
    package: '10 Hours / 100 KM',
    extraKm: '₹14/km',
    extraHr: '₹250/hr',
    features: ['AC', 'Sunroof', 'GPS', 'Premium'],
    description: 'Modern SUV with premium features',
    image: car7,
  },
    {
    id: 10,
    name: 'Tavera',
    category: 'SUV',
    seats: 9,
    luggage: 7,
    baseRate: '₹4,500',
    package: '10 Hours / 100 KM',
    extraKm: '₹14/km',
    extraHr: '₹250/hr',
    features: ['AC', 'Sunroof', 'GPS', 'Premium'],
    description: 'Modern SUV with premium features',
    image: car8,
  },
  {
    id: 11,
    name: '12 Seater',
    category: 'Bus',
    seats: 12,
    luggage: 8,
    baseRate: '₹6,000',
    package: '10 Hours / 100 KM',
    extraKm: '₹16/km',
    extraHr: '₹400/hr',
    features: ['AC', 'Leather', 'GPS', '4WD', 'Luxury'],
    description: 'Ultimate luxury for special occasions',
    image: car9,
  },
    {
    id: 12,
    name: '17 Seater',
    category: 'Bus',
    seats: 17,
    luggage: 13,
    baseRate: '₹7,000',
    package: '10 Hours / 100 KM',
    extraKm: '₹16/km',
    extraHr: '₹400/hr',
    features: ['AC', 'Leather', 'GPS', '4WD', 'Luxury'],
    description: 'Ultimate luxury for special occasions',
    image: car10,
  },
];

// Fleet Banner
const FleetBanner = () => (
  <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-r from-blue-500 to-orange-500 overflow-hidden">
    <img
      src={car1}
      alt="Fleet Banner"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-40 animate-pulse" />
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />
    <h1 className="relative text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl">
      Explore Our <span className="text-yellow-300">Cars</span>
    </h1>
    <div className="absolute bottom-0 w-full h-16 bg-white/30 backdrop-blur-md rounded-t-full"></div>
  </div>
);

const Fleet = () => {
  const phoneNumber = '+919948357755';
  const whatsappNumber = '+919948357755';

  const groupedCars = {
    'Hatchback Cars': cars.filter((car) => car.category === 'H-Back'),
    'Sedan Cars': cars.filter((car) => car.category === 'Sedan'),
    'SUV Cars': cars.filter((car) => car.category.includes('SUV')),
        'Tempo Traveller': cars.filter((car) => car.category.includes('Bus')),

  };

  return (
    <div className="bg-white">
      <FleetBanner />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
         
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Choose the Best Ride</span> for Your Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our premium and affordable vehicles. From quick city rides to luxury road trips —
            we’ve got you covered.
          </p>
        </div>

        {/* Fleet Categories */}
        {Object.entries(groupedCars).map(([category, categoryCars]) => (
          <div key={category} className="mb-16 container mx-auto px-4">
            <h3 className="text-3xl font-semibold text-cyan-600 mb-8 border-l-4 border-cyan-500 pl-4">
              {category}
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              {categoryCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {car.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{car.description}</p>

                    <div className="flex flex-wrap gap-4 text-gray-700 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-cyan-600" /> {car.seats} Seats
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-cyan-600" /> {car.luggage} Bags
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-cyan-600" /> AC
                      </span>
                      <span className="flex items-center gap-1">
                        <Music className="w-4 h-4 text-cyan-600" /> Music System
                      </span>
                    </div>

                    <div className="text-lg font-semibold text-blue-600 mb-1">
                      {car.baseRate}
                    </div>
                    <p className="text-sm text-gray-500 mb-6">
                      {car.package} 
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90"
                        onClick={() =>
                          window.open(
                            `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in ${car.name}.`,
                            '_blank'
                          )
                        }
                      >
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </Button>

                      <Button
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90"
                        onClick={() => (window.location.href = `tel:${phoneNumber}`)}
                      >
                        <Phone className="w-4 h-4" /> Call
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Fleet;
