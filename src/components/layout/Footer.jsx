
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={footerAnimation}
        >
          {/* Company Info */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-bold mb-6">AluminTech</h3>
            <p className="text-gray-400 mb-6">
              Premium aluminum solutions for architectural and industrial applications. Quality, innovation, and excellence in every project.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Projects', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {[
                { name: 'Aluminum Windows', path: '/products#windows' },
                { name: 'Aluminum Doors', path: '/products#doors' },
                { name: 'Curtain Walls', path: '/products#curtain-walls' },
                { name: 'Facades', path: '/products#facades' },
                { name: 'Custom Solutions', path: '/products#custom' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-blue-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">123 Business Avenue, Industrial District, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                <a href="tel:+123456789" className="text-gray-400 hover:text-blue-500 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-500 flex-shrink-0" size={18} />
                <a href="mailto:info@alumintech.com" className="text-gray-400 hover:text-blue-500 transition-colors">info@alumintech.com</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} AluminTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
