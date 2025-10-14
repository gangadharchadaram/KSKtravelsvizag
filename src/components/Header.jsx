import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Menu, X, Phone } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Header = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setMobileMenuOpen(false);
        }
      };

      const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'About Us' },
        { id: 'cars', label: 'Fleet' },
        { id: 'packages', label: 'Tours' },
        { id: 'testimonials', label: 'Testimonials' },
      ];

      return (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://horizons-cdn.hostinger.com/3b2f7e3d-caf2-4f27-ad4d-b036b60c0915/36c22dc0a63f8cecbc2ba642eb5383d9.png" 
                  alt="KSK Travels Vizag Logo" 
                  className="h-16 w-auto"
                />
              </div>

              <nav className="hidden lg:flex items-center space-x-6">
                {navLinks.map(link => (
                   <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="hidden lg:flex items-center">
                 <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-6">
                    Contact Us
                </Button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-cyan-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-t border-gray-200"
              >
                <nav className="flex flex-col space-y-4 p-4">
                  {navLinks.map(link => (
                    <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-gray-700 hover:text-cyan-600 font-medium text-left">
                      {link.label}
                    </button>
                  ))}
                  <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-6 mt-2">
                    Contact Us
                  </Button>
                </nav>
              </motion.div>
            )}
          </div>
        </motion.header>
      );
    };

    export default Header;