
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProductsPage from '@/pages/ProductsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ContactPage from '@/pages/ContactPage';
import ScrollToTop from '@/components/utils/ScrollToTop';

function App() {
  useEffect(() => {
    // Preload images for better performance
    const preloadImages = () => {
      const imagesToPreload = [
        // Add key images to preload here
      ];
      
      imagesToPreload.forEach(image => {
        const img = new Image();
        img.src = image;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
