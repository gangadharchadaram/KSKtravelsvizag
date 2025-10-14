import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Hero = ({ onBookNow }) => {
      return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-orange-400/20" />
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold">
                    Premium Travel Experience
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Explore Vizag</span>
                  <br />
                  <span className="text-gray-800">Your Way</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the beauty of Visakhapatnam with our premium car rentals and curated tour packages. Your journey, our passion.
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">50+ Destinations</p>
                      <p className="text-sm text-gray-600">Across Vizag</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">10,000+ Customers</p>
                      <p className="text-sm text-gray-600">Happy Travelers</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <Button
                    onClick={onBookNow}
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-orange-500 hover:from-cyan-600 hover:via-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Book Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold px-8 py-6 text-lg rounded-full"
                  >
                    View Packages
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-orange-500 rounded-3xl blur-2xl opacity-30" />
                  <img 
                    class="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                    alt="Scenic view of Visakhapatnam beach with cars"
                   src="https://images.unsplash.com/photo-1616265535502-74da01b02280" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 card-gradient"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">24/7</p>
                      <p className="text-sm text-gray-600">Available Service</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;