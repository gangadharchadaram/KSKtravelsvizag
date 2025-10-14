import React from 'react';
    import { motion } from 'framer-motion';
    import { ShieldCheck, Award, Heart } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const AboutUs = () => {
      const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      };

      return (
        <section id="about" className="py-20 bg-gradient-to-br from-cyan-50/30 via-white to-blue-50/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400 to-orange-500 rounded-3xl blur opacity-20"></div>
                  <img 
                    class="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                    alt="Team of KSK Travels Vizag"
                   src="https://images.unsplash.com/photo-1692279404576-e129fe70428a" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full text-sm font-semibold inline-block">
                  About KSK Travels
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Your Trusted <span className="text-gradient">Travel Partner</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  KSK Travels was born from a passion for exploring the beautiful city of Visakhapatnam. We started with a single car and a big dream: to provide safe, reliable, and comfortable travel experiences for everyone. Today, we are proud to be one of Vizag's leading travel companies.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Safety First</h4>
                      <p className="text-gray-600 text-sm">Our top priority is your safety. All our vehicles are regularly inspected and our drivers are thoroughly vetted.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Quality Service</h4>
                      <p className="text-gray-600 text-sm">We believe in providing a premium experience, from easy booking to a comfortable journey.</p>
                    </div>
                  </div>
                   <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Customer Happiness</h4>
                      <p className="text-gray-600 text-sm">Your satisfaction drives us. We go the extra mile to make your trip memorable.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold rounded-full px-8"
                  >
                    Get In Touch
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default AboutUs;