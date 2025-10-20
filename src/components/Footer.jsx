import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/components/assets/kskLogo.PNG'


    const Footer = () => {
      const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      };

      const quickLinks = [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'About Us' },
        { id: 'cars', label: 'Fleet' },
        { id: 'packages', label: 'Tours' },
        { id: 'testimonials', label: 'Testimonials' },
      ];
      
      return (
        <footer id="contact" className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="space-y-4">
                <img 
                  src={logo} 
                  alt="KSK Travels Vizag" 
                  className="h-28 w-auto"
                />
                <p className="text-gray-300 text-sm">
                  Your trusted travel partner in Visakhapatnam. Experience the best of Vizag with our premium services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  {quickLinks.map(link => (
                    <li key={link.id}>
                      <button onClick={() => scrollToSection(link.id)} className="hover:text-cyan-400 transition-colors">{link.label}</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-sm">Visakhapatnam, Andhra Pradesh, India</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <a href="tel:+919876543210" className="text-sm hover:text-cyan-400 transition-colors">+91 98765 43210</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <a href="mailto:info@ksktravels.com" className="text-sm hover:text-cyan-400 transition-colors">info@ksktravels.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  Available 24/7 for your travel needs
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} KSK Travels Vizag. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;