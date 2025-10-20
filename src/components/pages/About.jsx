import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Heart, MapPin, Car, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import image5 from '@/components/assets/image4.webp';
import AboutUs from '../AboutUs';
import Services from '../Services';


const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
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
        About <span className="text-yellow-300">KSK Travels Vizag</span>
      </h1>
  
      {/* Curved Bottom */}
      <div className="absolute bottom-0 w-full h-16 bg-white/30 backdrop-blur-md rounded-t-full"></div>
    </div>
  );

  return (
    <section id="about" className="bg-white">
        <TourBanner />
      <div className="container mx-auto px-4 mt-16 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400 to-orange-500 rounded-3xl blur opacity-20"></div>
              <img
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                alt="KSK Travels Vizag team"
                src="https://images.unsplash.com/photo-1692279404576-e129fe70428a"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
         

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Travel Partner</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in the heart of <strong>Visakhapatnam</strong>, KSK Travels began with a single car and a simple vision — to redefine comfort and reliability in travel.
              Over the years, our commitment to excellence and customer satisfaction has made us one of the most trusted travel partners in Vizag and beyond.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Safety First</h4>
                  <p className="text-gray-600 text-sm">
                    All vehicles undergo routine inspections, and our drivers are trained, experienced, and safety-certified.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Quality Service</h4>
                  <p className="text-gray-600 text-sm">
                    From airport pickups to long trips — we ensure punctuality, comfort, and class in every ride.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Customer Happiness</h4>
                  <p className="text-gray-600 text-sm">
                    Your satisfaction is our fuel. We go the extra mile to make your travel memorable and stress-free.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Wide Fleet Range</h4>
                  <p className="text-gray-600 text-sm">
                    Choose from sedans, SUVs, tempo travellers, and luxury cars — all maintained in pristine condition.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold rounded-full px-8"
              >
                Get In Touch
              </Button>

              <Button
                onClick={() => window.open('https://wa.me/918106953256?text=Hi%20KSK%20Travels%2C%20I%27m%20interested%20in%20booking%20a%20trip!', '_blank')}
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-full px-8"
              >
                <Phone className="w-5 h-5 mr-2" /> Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
        <Services />
      </div>
    </section>
    
  );
};

export default About;
