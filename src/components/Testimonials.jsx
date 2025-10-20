import React from 'react';
    import { motion } from 'framer-motion';
    import { Star, User } from 'lucide-react';

    const testimonials = [
      {
        name: 'Rahul Kumar',
        location: 'Bangalore',
        rating: 5,
        testimonial: 'Amazing experience! The car was clean, the driver was professional, and the whole Araku trip was perfectly planned. Highly recommended!',
        imageText: 'A happy young man giving a thumbs up'
      },
      {
        name: 'Priya Sharma',
        location: 'Hyderabad',
        rating: 5,
        testimonial: 'We used KSK Travels for airport pickup and a city tour. Punctual, courteous, and very reliable service. Made our Vizag visit hassle-free.',
        imageText: 'A smiling woman with luggage at an airport'
      },
      {
        name: 'Anjali Reddy',
        location: 'Chennai',
        rating: 4,
        testimonial: 'Good service and well-maintained cars. The driver knew all the best spots for photography. We had a great time exploring the beaches.',
        imageText: 'A woman taking a photo with her camera'
      }
    ];

    const StarRating = ({ rating }) => (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );

    const Testimonials = () => {
      return (
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold inline-block mb-4">
                Happy Customers
              </span> */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Voices of <span className="text-gradient">Our Travelers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See what our clients have to say about their experience with us.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="p-8 rounded-3xl shadow-lg testimonial-card-gradient border border-white/50">
                  <div className="flex items-center mb-4">
                    <img class="w-14 h-14 rounded-full object-cover mr-4" alt={`${testimonials[0].name}`} src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6" />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonials[0].name}</h4>
                      <p className="text-sm text-gray-600">{testimonials[0].location}</p>
                    </div>
                  </div>
                  <StarRating rating={testimonials[0].rating} />
                  <p className="text-gray-700 mt-4 text-base italic">"{testimonials[0].testimonial}"</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="p-8 rounded-3xl shadow-lg testimonial-card-gradient border border-white/50">
                  <div className="flex items-center mb-4">
                    <img class="w-14 h-14 rounded-full object-cover mr-4" alt={`${testimonials[1].name}`} src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6" />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonials[1].name}</h4>
                      <p className="text-sm text-gray-600">{testimonials[1].location}</p>
                    </div>
                  </div>
                  <StarRating rating={testimonials[1].rating} />
                  <p className="text-gray-700 mt-4 text-base italic">"{testimonials[1].testimonial}"</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="p-8 rounded-3xl shadow-lg testimonial-card-gradient border border-white/50">
                  <div className="flex items-center mb-4">
                    <img class="w-14 h-14 rounded-full object-cover mr-4" alt={`${testimonials[2].name}`} src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6" />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonials[2].name}</h4>
                      <p className="text-sm text-gray-600">{testimonials[2].location}</p>
                    </div>
                  </div>
                  <StarRating rating={testimonials[2].rating} />
                  <p className="text-gray-700 mt-4 text-base italic">"{testimonials[2].testimonial}"</p>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default Testimonials;