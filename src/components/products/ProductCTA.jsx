import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProductCTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your project requirements and discover how our aluminum solutions can elevate your architectural vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-blue-700 hover:bg-gray-100 group">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;