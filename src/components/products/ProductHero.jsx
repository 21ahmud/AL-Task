import React from 'react';
import { motion } from 'framer-motion';

const ProductHero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover" 
          alt="Showcase of various aluminum products"
         src="https://images.unsplash.com/photo-1471021071833-8855a36ac5b9" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            Our Products
          </span>
          <h1 className="text-white mb-6">Premium Aluminum Solutions</h1>
          <p className="text-gray-300 text-lg mb-8">
            Explore our comprehensive range of high-quality aluminum products designed to enhance the functionality and aesthetics of any architectural project.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;