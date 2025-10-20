import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import image1 from '@/components/assets/image1.webp';
import image2 from '@/components/assets/image2.jpg';
import image3 from '@/components/assets/image3.jpg';
import image4 from '@/components/assets/image4.webp';
import image5 from '@/components/assets/image5.png';

const allPackages = [
  {
    id: 1,
    name: 'Araku Valley Adventure',
    price: '₹4,999 / 10 hrs',
    rating: 4.8,
    reviews: 245,
    highlights: ['Borra Caves', 'Katika Waterfalls', 'Ananthagiri', 'Adventure Park', 'Wooden Bridge', 'Tribal Museum'],
    includes: ['Car + Driver + Fuel', 'Guide'],
    description: 'Experience the misty hills and coffee estates of Araku Valley',
    image: image1,
  },
  {
    id: 2,
    name: 'Vizag City Tour',
    price: '₹2,499 / 8 hrs',
    rating: 4.6,
    reviews: 389,
    highlights: ['RK Beach', 'Submarine Museum', 'Kailasagiri', 'Rushikonda Beach', 'Zoo Park'],
    includes: ['Car + Driver + Fuel', 'Guide'],
    description: 'Explore the best of Visakhapatnam in a day.',
    image: image2,
  },
  {
    id: 3,
    name: 'Srikakulam Tour',
    price: '₹4,999 / 12 hrs',
    rating: 4.7,
    reviews: 312,
    highlights: ['Arasavalli Temple', 'Srikurmam', 'Srimukhalingham'],
    includes: ['Car + Driver + Fuel', 'Guide'],
    description: 'Discover ancient temples and heritage sites in Srikakulam.',
    image: image3,
  },
  {
    id: 4,
    name: 'Lambasingi Winter Escape',
    price: '₹4,999 / 10 hrs',
    rating: 4.9,
    reviews: 178,
    highlights: ['Kashmir of AP', 'Tajangi Reservoir', 'Strawberry Gardens', 'Viewpoint'],
    includes: ['Car + Driver + Fuel', 'Guide'],
    description: 'Feel the chill and beauty of the only place in South India where it snows.',
    image: image5,
  },
  {
    id: 5,
    name: 'Paderu Tour',
    price: '₹4,999 / 9 hrs',
    rating: 4.5,
    reviews: 267,
    highlights: ['Vanjangi View Point', 'Taraabu Waterfalls', 'Kothapally Waterfalls'],
    includes: ['Car + Driver + Fuel', 'Guide'],
    description: 'Explore waterfalls and scenic viewpoints of Paderu.',
    image: image4,
  },
];

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
      Explore Our <span className="text-yellow-300">Tour Packages</span>
    </h1>

    {/* Curved Bottom */}
    <div className="absolute bottom-0 w-full h-16 bg-white/30 backdrop-blur-md rounded-t-full"></div>
  </div>
);

const Tour = ({ isHomePage }) => {
  const packages = isHomePage ? allPackages.slice(0, 3) : allPackages;

  return (
    <>
    <TourBanner />
    <section
      id="packages"
      className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30 relative overflow-hidden"
    >
      {/* Decorative Blur Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Curated Experiences</span> for You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations with complete travel solutions
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 bg-white/60 backdrop-blur-md"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                <img className="w-full h-full object-cover" src={pkg.image} alt={pkg.name} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold text-gray-800">{pkg.rating}</span>
                  <span className="text-xs text-gray-600">({pkg.reviews})</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-xs font-medium flex items-center space-x-1"
                      >
                        <MapPin className="w-3 h-3" />
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-gray-200">
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-600">Starting from</p>
                    <p className="text-2xl font-bold text-gradient">{pkg.price}</p>
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={`https://wa.me/919948357755?text=Hello! I'm interested in the ${pkg.name} package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="tel:+919948357755"
                      className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Packages Button */}
        {isHomePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link to="/tour-packages">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-orange-500 hover:from-cyan-600 hover:via-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View All Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
    </>
  );
};

export default Tour;
