
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Aluminum Windows',
    description: 'Energy-efficient windows with superior insulation and elegant design options.',
    image: 'aluminum-windows',
    link: '/products#windows'
  },
  {
    title: 'Aluminum Doors',
    description: 'Durable and stylish doors for residential and commercial applications.',
    image: 'aluminum-doors',
    link: '/products#doors'
  },
  {
    title: 'Curtain Walls',
    description: 'Stunning glass facades that maximize natural light and enhance building aesthetics.',
    image: 'curtain-walls',
    link: '/products#curtain-walls'
  },
  {
    title: 'Custom Facades',
    description: 'Bespoke facade solutions tailored to your architectural vision and requirements.',
    image: 'custom-facades',
    link: '/products#facades'
  }
];

const Products = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold mb-2 block">Our Products</span>
          <h2 className="mb-6">Premium Aluminum Solutions</h2>
          <p className="text-gray-600 text-lg">
            Discover our range of high-quality aluminum products designed to enhance the functionality and aesthetics of any space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img  
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={product.title}
                 src="https://images.unsplash.com/photo-1697871965774-293fcf839a82" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{product.description}</p>
                <Link 
                  to={product.link}
                  className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                >
                  Learn more 
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            to="/products" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View all products
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
