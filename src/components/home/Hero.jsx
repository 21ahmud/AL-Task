
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover" 
          alt="Modern aluminum facade of a building with glass panels"
         src="https://images.unsplash.com/photo-1659064907427-c18a487a096c" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70"></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
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
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl"
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

      <div className="container-custom relative z-10 mt-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              Premium Aluminum Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-white mb-6 leading-tight"
          >
            Transforming Spaces with <span className="text-blue-400">Innovative</span> Aluminum Solutions
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg mb-8 max-w-2xl"
          >
            We design, manufacture, and install high-quality aluminum products for architectural and industrial applications. From windows and doors to custom facades, we deliver excellence in every project.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Button className="btn-primary group">
              Explore Our Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-secondary">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
