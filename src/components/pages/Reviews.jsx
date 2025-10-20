import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import image5 from "@/components/assets/image5.png";

// Testimonials Data
const testimonials = [
  {
    name: "Rahul Kumar",
    location: "Bangalore",
    rating: 5,
    testimonial:
      "Amazing experience! The car was clean, the driver was professional, and the whole Araku trip was perfectly planned. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Sharma",
    location: "Hyderabad",
    rating: 5,
    testimonial:
      "We used KSK Travels for airport pickup and a city tour. Punctual, courteous, and very reliable service. Made our Vizag visit hassle-free.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Anjali Reddy",
    location: "Chennai",
    rating: 4,
    testimonial:
      "Good service and well-maintained cars. The driver knew all the best spots for photography. We had a great time exploring the beaches.",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?auto=format&fit=crop&w=400&q=80",
  },
];

// Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

// Banner Section
const TourBanner = () => (
  <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 overflow-hidden">
    {/* Background Image */}
    <img
      src={image5}
      alt="Tours Banner"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />

    {/* Decorative Blurs */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-40 animate-pulse" />
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />

    {/* Banner Text */}
    <h1 className="relative text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl">
      Explore Our <span className="text-yellow-300">Happy Customers</span>
    </h1>

    {/* Curved Bottom */}
    <div className="absolute bottom-0 w-full h-16 bg-white/30 backdrop-blur-md rounded-t-full"></div>
  </div>
);

// Main Reviews Section
const Reviews = () => {
  return (
    <section id="testimonials" className="bg-white">
      <TourBanner />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-16 mb-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Voices of{" "}
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              Our Travelers
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about their memorable journeys with
            KSK Travels.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-yellow-400"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <StarRating rating={review.rating} />

              {/* Testimonial Text */}
              <p className="text-gray-700 mt-4 text-base italic leading-relaxed">
                “{review.testimonial}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
