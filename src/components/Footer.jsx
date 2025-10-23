import React from 'react';
import { Phone, Mail, MapPin, Youtube, Instagram } from 'lucide-react';
import logo from '@/components/assets/kskLogo.PNG';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'tours', label: 'Tours' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* 🌐 Brand Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="KSK Travels Vizag"
              className="h-28 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted travel partner in Visakhapatnam. Experience the best of Vizag with our premium travel services.
            </p>
          </div>

          {/* ⚡ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

<ul className="space-y-2 text-gray-300">
  {quickLinks.map(link => (
    <li key={link.id}>
      <NavLink
        to={`/${link.id === 'home' ? '' : link.id}`}
        className="hover:text-cyan-400 transition-colors"
      >
        {link.label}
      </NavLink>
    </li>
  ))}
</ul>

          </div>

          {/* ☎️ Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </li>
              <li className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+919948357755" className="hover:text-cyan-400 transition-colors">
                    +91 99483 57755
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+919642217735" className="hover:text-cyan-400 transition-colors">
                    +91 96422 17735
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:krishvlogs23@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  krishvlogs23@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 📱 Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@ksktravelvlogs-ci5up"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ksk___travels_vizag?utm_source=qr&igsh=MnVtbzdkbjFxanc1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Available 24/7 for your travel needs.
            </p>
          </div>
        </div>

        {/* 🧾 Bottom Line */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-white">KSK Travels Vizag</span>. All rights reserved.{" "}
            Designed & Developed by{" "}
            <a
              href="https://transformoweb.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-500 font-medium transition-colors"
            >
              TransformoWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
