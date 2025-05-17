
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Products', 
    path: '/products',
    submenu: [
      { name: 'Windows', path: '/products#windows' },
      { name: 'Doors', path: '/products#doors' },
      { name: 'Facades', path: '/products#facades' },
      { name: 'Custom Solutions', path: '/products#custom' }
    ]
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-blue-600">Alumin<span className="text-sky-500">Tech</span></span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.submenu ? (
                <>
                  <button 
                    className={`flex items-center text-base font-medium transition-colors hover:text-blue-600 ${
                      location.pathname === link.path ? 'text-blue-600' : 'text-gray-800'
                    }`}
                    onClick={() => toggleSubmenu(index)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="rounded-md bg-white shadow-xs py-1">
                      {link.submenu.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`text-base font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button className="btn-primary">Get a Quote</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-blue-600 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.submenu ? (
                      <>
                        <button 
                          className={`flex items-center justify-between w-full text-base font-medium py-2 ${
                            location.pathname === link.path ? 'text-blue-600' : 'text-gray-800'
                          }`}
                          onClick={() => toggleSubmenu(index)}
                        >
                          {link.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-2 mt-2"
                            >
                              {link.submenu.map((sublink, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={sublink.path}
                                  className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block py-2 text-base font-medium ${
                          location.pathname === link.path ? 'text-blue-600' : 'text-gray-800'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button className="btn-primary w-full mt-4">Get a Quote</Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
