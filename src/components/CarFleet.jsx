import React from 'react';
    import { motion } from 'framer-motion';
    import { Users, Briefcase, Zap } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const cars = [
      {
        id: 1,
        name: 'Swift Dzire',
        category: 'Sedan',
        seats: 4,
        luggage: 2,
        transmission: 'Manual',
        price: '₹2,500',
        features: ['AC', 'Music System', 'GPS'],
        description: 'Perfect for city tours and short trips',
        imageText: 'A white Suzuki Swift Dzire sedan parked in a city street'
      },
      {
        id: 2,
        name: 'Toyota Innova',
        category: 'SUV',
        seats: 7,
        luggage: 4,
        transmission: 'Manual/Auto',
        price: '₹4,500',
        features: ['AC', 'Music System', 'GPS', 'Spacious'],
        description: 'Ideal for family trips and group travel',
        imageText: 'A silver Toyota Innova Crysta SUV on a scenic road'
      },
      {
        id: 3,
        name: 'Honda City',
        category: 'Sedan',
        seats: 4,
        luggage: 2,
        transmission: 'Automatic',
        price: '₹3,000',
        features: ['AC', 'Premium Sound', 'GPS', 'Leather Seats'],
        description: 'Luxury comfort for business travel',
        imageText: 'A modern red Honda City sedan with sleek design'
      },
      {
        id: 4,
        name: 'Mahindra Scorpio',
        category: 'SUV',
        seats: 7,
        luggage: 5,
        transmission: 'Manual',
        price: '₹4,000',
        features: ['AC', '4WD', 'GPS', 'Rugged'],
        description: 'Adventure-ready for hill stations',
        imageText: 'A black Mahindra Scorpio SUV on a mountain road'
      },
      {
        id: 5,
        name: 'Hyundai Creta',
        category: 'SUV',
        seats: 5,
        luggage: 3,
        transmission: 'Automatic',
        price: '₹3,800',
        features: ['AC', 'Sunroof', 'GPS', 'Premium'],
        description: 'Modern SUV with premium features',
        imageText: 'A white Hyundai Creta SUV in a dynamic pose'
      },
      {
        id: 6,
        name: 'Toyota Fortuner',
        category: 'Premium SUV',
        seats: 7,
        luggage: 5,
        transmission: 'Automatic',
        price: '₹6,500',
        features: ['AC', 'Leather', 'GPS', '4WD', 'Luxury'],
        description: 'Ultimate luxury for special occasions',
        imageText: 'A pearl white Toyota Fortuner SUV parked majestically'
      }
    ];

    const CarFleet = ({ onBookCar }) => {
      return (
        <section id="cars" className="py-20 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold inline-block mb-4">
                Our Fleet
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Premium Cars</span> for Every Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose from our diverse fleet of well-maintained vehicles
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                  key={cars[0].id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img class="w-full h-full object-cover" alt={`${cars[0].name} car for rent`} src="https://images.unsplash.com/photo-1612935459247-3f90353c6c50" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{cars[0].category}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{cars[0].name}</h3><p className="text-gray-600 text-sm">{cars[0].description}</p></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-xl"><Users className="w-5 h-5 text-cyan-600 mb-1" /><span className="text-xs text-gray-600">{cars[0].seats} Seats</span></div>
                      <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl"><Briefcase className="w-5 h-5 text-blue-600 mb-1" /><span className="text-xs text-gray-600">{cars[0].luggage} Bags</span></div>
                      <div className="flex flex-col items-center p-3 bg-orange-50 rounded-xl"><Zap className="w-5 h-5 text-orange-600 mb-1" /><span className="text-xs text-gray-600">{cars[0].transmission}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2">{cars[0].features.map((feature, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium">{feature}</span>))}</div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{cars[0].price}<span className="text-sm text-gray-600">/day</span></p></div><Button onClick={() => onBookCar(cars[0])} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                  </div>
              </motion.div>
              <motion.div
                  key={cars[1].id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -10 }}
                  className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img class="w-full h-full object-cover" alt={`${cars[1].name} car for rent`} src="https://images.unsplash.com/photo-1612935459247-3f90353c6c50" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{cars[1].category}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{cars[1].name}</h3><p className="text-gray-600 text-sm">{cars[1].description}</p></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-xl"><Users className="w-5 h-5 text-cyan-600 mb-1" /><span className="text-xs text-gray-600">{cars[1].seats} Seats</span></div>
                      <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl"><Briefcase className="w-5 h-5 text-blue-600 mb-1" /><span className="text-xs text-gray-600">{cars[1].luggage} Bags</span></div>
                      <div className="flex flex-col items-center p-3 bg-orange-50 rounded-xl"><Zap className="w-5 h-5 text-orange-600 mb-1" /><span className="text-xs text-gray-600">{cars[1].transmission}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2">{cars[1].features.map((feature, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium">{feature}</span>))}</div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{cars[1].price}<span className="text-sm text-gray-600">/day</span></p></div><Button onClick={() => onBookCar(cars[1])} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                  </div>
              </motion.div>
              <motion.div
                  key={cars[2].id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -10 }}
                  className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img class="w-full h-full object-cover" alt={`${cars[2].name} car for rent`} src="https://images.unsplash.com/photo-1612935459247-3f90353c6c50" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{cars[2].category}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{cars[2].name}</h3><p className="text-gray-600 text-sm">{cars[2].description}</p></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-xl"><Users className="w-5 h-5 text-cyan-600 mb-1" /><span className="text-xs text-gray-600">{cars[2].seats} Seats</span></div>
                      <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl"><Briefcase className="w-5 h-5 text-blue-600 mb-1" /><span className="text-xs text-gray-600">{cars[2].luggage} Bags</span></div>
                      <div className="flex flex-col items-center p-3 bg-orange-50 rounded-xl"><Zap className="w-5 h-5 text-orange-600 mb-1" /><span className="text-xs text-gray-600">{cars[2].transmission}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2">{cars[2].features.map((feature, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium">{feature}</span>))}</div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{cars[2].price}<span className="text-sm text-gray-600">/day</span></p></div><Button onClick={() => onBookCar(cars[2])} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                  </div>
              </motion.div>
              <motion.div
                  key={cars[3].id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -10 }}
                  className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img class="w-full h-full object-cover" alt={`${cars[3].name} car for rent`} src="https://images.unsplash.com/photo-1701080460393-8327b0eaf285" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{cars[3].category}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{cars[3].name}</h3><p className="text-gray-600 text-sm">{cars[3].description}</p></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-xl"><Users className="w-5 h-5 text-cyan-600 mb-1" /><span className="text-xs text-gray-600">{cars[3].seats} Seats</span></div>
                      <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl"><Briefcase className="w-5 h-5 text-blue-600 mb-1" /><span className="text-xs text-gray-600">{cars[3].luggage} Bags</span></div>
                      <div className="flex flex-col items-center p-3 bg-orange-50 rounded-xl"><Zap className="w-5 h-5 text-orange-600 mb-1" /><span className="text-xs text-gray-600">{cars[3].transmission}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2">{cars[3].features.map((feature, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium">{feature}</span>))}</div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{cars[3].price}<span className="text-sm text-gray-600">/day</span></p></div><Button onClick={() => onBookCar(cars[3])} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                  </div>
              </motion.div>
              <motion.div
                  key={cars[4].id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img class="w-full h-full object-cover" alt={`${cars[4].name} car for rent`} src="https://images.unsplash.com/photo-1612935459247-3f90353c6c50" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{cars[4].category}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{cars[4].name}</h3><p className="text-gray-600 text-sm">{cars[4].description}</p></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-xl"><Users className="w-5 h-5 text-cyan-600 mb-1" /><span className="text-xs text-gray-600">{cars[4].seats} Seats</span></div>
                      <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl"><Briefcase className="w-5 h-5 text-blue-600 mb-1" /><span className="text-xs text-gray-600">{cars[4].luggage} Bags</span></div>
                      <div className="flex flex-col items-center p-3 bg-orange-50 rounded-xl"><Zap className="w-5 h-5 text-orange-600 mb-1" /><span className="text-xs text-gray-600">{cars[4].transmission}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2">{cars[4].features.map((feature, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium">{feature}</span>))}</div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{cars[4].price}<span className="text-sm text-gray-600">/day</span></p></div><Button onClick={() => onBookCar(cars[4])} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                  </div>
              </motion.div>
              <motion.div
                  key={cars[5].id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img class="w-full h-full object-cover" alt={`${cars[5].name} car for rent`} src="https://images.unsplash.com/photo-1687758265380-4538899a1b3b" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{cars[5].category}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{cars[5].name}</h3><p className="text-gray-600 text-sm">{cars[5].description}</p></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-3 bg-cyan-50 rounded-xl"><Users className="w-5 h-5 text-cyan-600 mb-1" /><span className="text-xs text-gray-600">{cars[5].seats} Seats</span></div>
                      <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl"><Briefcase className="w-5 h-5 text-blue-600 mb-1" /><span className="text-xs text-gray-600">{cars[5].luggage} Bags</span></div>
                      <div className="flex flex-col items-center p-3 bg-orange-50 rounded-xl"><Zap className="w-5 h-5 text-orange-600 mb-1" /><span className="text-xs text-gray-600">{cars[5].transmission}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2">{cars[5].features.map((feature, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium">{feature}</span>))}</div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{cars[5].price}<span className="text-sm text-gray-600">/day</span></p></div><Button onClick={() => onBookCar(cars[5])} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default CarFleet;