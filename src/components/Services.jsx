import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Map, Building2, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Reliable and timely pickup and drop services for Visakhapatnam airport.',
    color: 'cyan',
    link: '/services/airport-transfers',
  },
  {
    icon: Map,
    title: 'Local Sightseeing',
    description: 'Explore Vizag\'s famous attractions with our knowledgeable drivers.',
    color: 'blue',
    link: '/services/local-sightseeing',
  },
  {
    icon: Building2,
    title: 'Corporate Travel',
    description: 'Professional and punctual car services for all your business needs.',
    color: 'orange',
    link: '/services/corporate-travel',
  },
  {
    icon: Car,
    title: 'Outstation Trips',
    description: 'Plan your weekend getaways or long trips from Vizag with our comfortable fleet.',
    color: 'purple',
    link: '/services/outstation-trips',
  },
];

const iconColors = {
  cyan: 'bg-cyan-100 text-cyan-600',
  blue: 'bg-blue-100 text-blue-600',
  orange: 'bg-orange-100 text-orange-600',
  purple: 'bg-purple-100 text-purple-600',
};

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-cyan-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored travel solutions designed for your comfort and convenience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.link}>
                <div className="p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${iconColors[service.color]}`}>
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
