import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductSection = ({ product, index }) => {
  return (
    <div 
      key={product.id} 
      id={product.id}
      className="scroll-mt-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
            <span className="text-blue-600 font-semibold mb-2 block">Premium Quality</span>
            <h2 className="mb-6">{product.title}</h2>
            <p className="text-gray-600 mb-8">
              {product.description}
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="btn-primary group">
              Request Information
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl opacity-10" style={{ transform: 'rotate(2deg)' }}></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img  
                  className="w-full h-auto" 
                  alt={`${product.title} showcase`}
                 src={`https://images.unsplash.com/photo-1575627854843-3468af1726fd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&product=${product.image}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Product Variants */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Available Variants</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.variants.map((variant, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img  
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={variant.name}
                   src={`https://images.unsplash.com/photo-1575627854843-3468af1726fd?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&variant=${variant.image}`} />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold">{variant.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductSection;