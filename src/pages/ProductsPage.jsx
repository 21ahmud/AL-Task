import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ProductHero from '@/components/products/ProductHero';
import ProductNavigation from '@/components/products/ProductNavigation';
import ProductSection from '@/components/products/ProductSection';
import ProductCTA from '@/components/products/ProductCTA';
import { productsData } from '@/components/products/productsData';

const ProductsPage = () => {
  const location = useLocation();
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            setActiveProduct(id);
          }, 600); 
        }, 300);
      } else {
        setActiveProduct(productsData[0]?.id);
      }
    } else {
      setActiveProduct(productsData[0]?.id);
    }
  }, [location]);

  const handleNavClick = (id) => {
    setActiveProduct(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProductHero />
      <ProductNavigation 
        products={productsData}
        activeProduct={activeProduct}
        onNavClick={handleNavClick}
      />
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-32">
            {productsData.map((product, index) => (
              <ProductSection 
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <ProductCTA />
    </motion.div>
  );
};

export default ProductsPage;