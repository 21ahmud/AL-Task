import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Products from '@/components/home/Products';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <Products />
      <Projects />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default HomePage;
