
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <img  
              className="w-full h-full object-cover" 
              alt="Modern architectural detail of aluminum and glass structure"
             src="https://images.unsplash.com/photo-1548085759-60050103853d" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 px-8 md:py-24 md:px-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                  Get Started Today
                </span>
                <h2 className="text-white mb-6 text-3xl md:text-4xl lg:text-5xl">
                  Ready to Transform Your Space with Premium Aluminum Solutions?
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Contact our team of experts today to discuss your project requirements and discover how our aluminum solutions can elevate your architectural vision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-primary group">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div 
            className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-sky-400/20 blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
