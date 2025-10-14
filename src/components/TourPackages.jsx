import React from 'react';
    import { motion } from 'framer-motion';
    import { MapPin, Clock, Users, Star } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const packages = [
      {
        id: 1,
        name: 'Araku Valley Adventure',
        duration: '2 Days / 1 Night',
        price: '₹8,999',
        rating: 4.8,
        reviews: 245,
        highlights: ['Borra Caves', 'Coffee Plantations', 'Tribal Museum', 'Scenic Drive'],
        includes: ['Car with Driver', 'Accommodation', 'Breakfast', 'Guide'],
        maxPeople: 6,
        description: 'Experience the misty hills and coffee estates of Araku Valley',
        imageText: 'Lush green Araku Valley with winding roads and mountains'
      },
      {
        id: 2,
        name: 'Vizag City Tour',
        duration: '1 Day',
        price: '₹3,499',
        rating: 4.6,
        reviews: 389,
        highlights: ['RK Beach', 'Submarine Museum', 'Kailasagiri', 'Rushikonda Beach'],
        includes: ['Car with Driver', 'Lunch', 'Entry Tickets', 'Guide'],
        maxPeople: 4,
        description: 'Explore the best of Visakhapatnam in a single day',
        imageText: 'The famous Submarine Museum on RK Beach in Vizag'
      },
      {
        id: 3,
        name: 'Beach Paradise',
        duration: '1 Day',
        price: '₹2,999',
        rating: 4.7,
        reviews: 312,
        highlights: ['Yarada Beach', 'Dolphin\'s Nose', 'Rishikonda', 'Beach Activities'],
        includes: ['Car with Driver', 'Snacks', 'Water Sports', 'Photography'],
        maxPeople: 5,
        description: 'Discover the pristine beaches around Vizag',
        imageText: 'Golden sands of Yarada Beach with clear blue water'
      },
      {
        id: 4,
        name: 'Lambasingi Winter Escape',
        duration: '2 Days / 1 Night',
        price: '₹9,999',
        rating: 4.9,
        reviews: 178,
        highlights: ['Kashmir of AP', 'Kothapally Waterfalls', 'Strawberry Gardens', 'Camping'],
        includes: ['Car with Driver', 'Accommodation', 'All Meals', 'Bonfire'],
        maxPeople: 6,
        description: 'Experience the only place in South India where it snows',
        imageText: 'A misty morning in Lambasingi with dew on the grass'
      },
      {
        id: 5,
        name: 'Spiritual Journey',
        duration: '1 Day',
        price: '₹3,999',
        rating: 4.5,
        reviews: 267,
        highlights: ['Simhachalam Temple', 'Annavaram', 'Thotlakonda', 'Bavikonda'],
        includes: ['Car with Driver', 'Lunch', 'Temple Guide', 'Prasadam'],
        maxPeople: 7,
        description: 'Visit ancient temples and Buddhist sites',
        imageText: 'The majestic gopuram of Simhachalam Temple'
      },
      {
        id: 6,
        name: 'Weekend Getaway',
        duration: '3 Days / 2 Nights',
        price: '₹15,999',
        rating: 4.8,
        reviews: 156,
        highlights: ['Araku', 'Vizag City', 'Beaches', 'Shopping'],
        includes: ['Car with Driver', 'Hotels', 'All Meals', 'Activities'],
        maxPeople: 6,
        description: 'Complete Vizag experience with all major attractions',
        imageText: 'A montage of Vizag attractions including beaches and city lights'
      }
    ];

    const TourPackages = ({ onBookPackage }) => {
      return (
        <section id="packages" className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full text-sm font-semibold inline-block mb-4">
                Tour Packages
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Curated Experiences</span> for You
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Handpicked destinations with complete travel solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div key={packages[0].id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={{ y: -10 }} className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                  <img className="w-full h-full object-cover" alt={`${packages[0].name} tour package`} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /><span className="text-sm font-semibold text-gray-800">{packages[0].rating}</span><span className="text-xs text-gray-600">({packages[0].reviews})</span></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full"><span className="text-sm font-semibold">{packages[0].duration}</span></div>
                </div>
                <div className="p-6 space-y-4">
                  <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{packages[0].name}</h3><p className="text-gray-600 text-sm">{packages[0].description}</p></div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600"><div className="flex items-center space-x-1"><Clock className="w-4 h-4 text-cyan-600" /><span>{packages[0].duration}</span></div><div className="flex items-center space-x-1"><Users className="w-4 h-4 text-blue-600" /><span>Up to {packages[0].maxPeople}</span></div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p><div className="flex flex-wrap gap-2">{packages[0].highlights.map((highlight, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-xs font-medium flex items-center space-x-1"><MapPin className="w-3 h-3" /><span>{highlight}</span></span>))}</div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</p><div className="grid grid-cols-2 gap-2">{packages[0].includes.map((item, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-600"><div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" /><span>{item}</span></div>))}</div></div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{packages[0].price}<span className="text-sm text-gray-600">/person</span></p></div><Button onClick={() => onBookPackage(packages[0])} className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                </div>
              </motion.div>
              <motion.div key={packages[1].id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ y: -10 }} className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                  <img className="w-full h-full object-cover" alt={`${packages[1].name} tour package`} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /><span className="text-sm font-semibold text-gray-800">{packages[1].rating}</span><span className="text-xs text-gray-600">({packages[1].reviews})</span></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full"><span className="text-sm font-semibold">{packages[1].duration}</span></div>
                </div>
                <div className="p-6 space-y-4">
                  <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{packages[1].name}</h3><p className="text-gray-600 text-sm">{packages[1].description}</p></div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600"><div className="flex items-center space-x-1"><Clock className="w-4 h-4 text-cyan-600" /><span>{packages[1].duration}</span></div><div className="flex items-center space-x-1"><Users className="w-4 h-4 text-blue-600" /><span>Up to {packages[1].maxPeople}</span></div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p><div className="flex flex-wrap gap-2">{packages[1].highlights.map((highlight, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-xs font-medium flex items-center space-x-1"><MapPin className="w-3 h-3" /><span>{highlight}</span></span>))}</div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</p><div className="grid grid-cols-2 gap-2">{packages[1].includes.map((item, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-600"><div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" /><span>{item}</span></div>))}</div></div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{packages[1].price}<span className="text-sm text-gray-600">/person</span></p></div><Button onClick={() => onBookPackage(packages[1])} className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                </div>
              </motion.div>
              <motion.div key={packages[2].id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} whileHover={{ y: -10 }} className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                  <img className="w-full h-full object-cover" alt={`${packages[2].name} tour package`} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /><span className="text-sm font-semibold text-gray-800">{packages[2].rating}</span><span className="text-xs text-gray-600">({packages[2].reviews})</span></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full"><span className="text-sm font-semibold">{packages[2].duration}</span></div>
                </div>
                <div className="p-6 space-y-4">
                  <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{packages[2].name}</h3><p className="text-gray-600 text-sm">{packages[2].description}</p></div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600"><div className="flex items-center space-x-1"><Clock className="w-4 h-4 text-cyan-600" /><span>{packages[2].duration}</span></div><div className="flex items-center space-x-1"><Users className="w-4 h-4 text-blue-600" /><span>Up to {packages[2].maxPeople}</span></div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p><div className="flex flex-wrap gap-2">{packages[2].highlights.map((highlight, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-xs font-medium flex items-center space-x-1"><MapPin className="w-3 h-3" /><span>{highlight}</span></span>))}</div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</p><div className="grid grid-cols-2 gap-2">{packages[2].includes.map((item, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-600"><div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" /><span>{item}</span></div>))}</div></div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{packages[2].price}<span className="text-sm text-gray-600">/person</span></p></div><Button onClick={() => onBookPackage(packages[2])} className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                </div>
              </motion.div>
              <motion.div key={packages[3].id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} whileHover={{ y: -10 }} className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                  <img className="w-full h-full object-cover" alt={`${packages[3].name} tour package`} src="https://images.unsplash.com/photo-1633533449207-f2dd575d6600" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /><span className="text-sm font-semibold text-gray-800">{packages[3].rating}</span><span className="text-xs text-gray-600">({packages[3].reviews})</span></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full"><span className="text-sm font-semibold">{packages[3].duration}</span></div>
                </div>
                <div className="p-6 space-y-4">
                  <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{packages[3].name}</h3><p className="text-gray-600 text-sm">{packages[3].description}</p></div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600"><div className="flex items-center space-x-1"><Clock className="w-4 h-4 text-cyan-600" /><span>{packages[3].duration}</span></div><div className="flex items-center space-x-1"><Users className="w-4 h-4 text-blue-600" /><span>Up to {packages[3].maxPeople}</span></div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p><div className="flex flex-wrap gap-2">{packages[3].highlights.map((highlight, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-xs font-medium flex items-center space-x-1"><MapPin className="w-3 h-3" /><span>{highlight}</span></span>))}</div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</p><div className="grid grid-cols-2 gap-2">{packages[3].includes.map((item, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-600"><div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" /><span>{item}</span></div>))}</div></div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{packages[3].price}<span className="text-sm text-gray-600">/person</span></p></div><Button onClick={() => onBookPackage(packages[3])} className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                </div>
              </motion.div>
              <motion.div key={packages[4].id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} whileHover={{ y: -10 }} className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                  <img className="w-full h-full object-cover" alt={`${packages[4].name} tour package`} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /><span className="text-sm font-semibold text-gray-800">{packages[4].rating}</span><span className="text-xs text-gray-600">({packages[4].reviews})</span></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full"><span className="text-sm font-semibold">{packages[4].duration}</span></div>
                </div>
                <div className="p-6 space-y-4">
                  <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{packages[4].name}</h3><p className="text-gray-600 text-sm">{packages[4].description}</p></div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600"><div className="flex items-center space-x-1"><Clock className="w-4 h-4 text-cyan-600" /><span>{packages[4].duration}</span></div><div className="flex items-center space-x-1"><Users className="w-4 h-4 text-blue-600" /><span>Up to {packages[4].maxPeople}</span></div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p><div className="flex flex-wrap gap-2">{packages[4].highlights.map((highlight, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-xs font-medium flex items-center space-x-1"><MapPin className="w-3 h-3" /><span>{highlight}</span></span>))}</div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</p><div className="grid grid-cols-2 gap-2">{packages[4].includes.map((item, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-600"><div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" /><span>{item}</span></div>))}</div></div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{packages[4].price}<span className="text-sm text-gray-600">/person</span></p></div><Button onClick={() => onBookPackage(packages[4])} className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                </div>
              </motion.div>
              <motion.div key={packages[5].id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} whileHover={{ y: -10 }} className="card-gradient rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100">
                  <img className="w-full h-full object-cover" alt={`${packages[5].name} tour package`} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /><span className="text-sm font-semibold text-gray-800">{packages[5].rating}</span><span className="text-xs text-gray-600">({packages[5].reviews})</span></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full"><span className="text-sm font-semibold">{packages[5].duration}</span></div>
                </div>
                <div className="p-6 space-y-4">
                  <div><h3 className="text-2xl font-bold text-gray-800 mb-2">{packages[5].name}</h3><p className="text-gray-600 text-sm">{packages[5].description}</p></div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600"><div className="flex items-center space-x-1"><Clock className="w-4 h-4 text-cyan-600" /><span>{packages[5].duration}</span></div><div className="flex items-center space-x-1"><Users className="w-4 h-4 text-blue-600" /><span>Up to {packages[5].maxPeople}</span></div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p><div className="flex flex-wrap gap-2">{packages[5].highlights.map((highlight, idx) => (<span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-xs font-medium flex items-center space-x-1"><MapPin className="w-3 h-3" /><span>{highlight}</span></span>))}</div></div>
                  <div><p className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</p><div className="grid grid-cols-2 gap-2">{packages[5].includes.map((item, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-600"><div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" /><span>{item}</span></div>))}</div></div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200"><div><p className="text-sm text-gray-600">Starting from</p><p className="text-2xl font-bold text-gradient">{packages[5].price}<span className="text-sm text-gray-600">/person</span></p></div><Button onClick={() => onBookPackage(packages[5])} className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold rounded-full px-6">Book Now</Button></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default TourPackages;