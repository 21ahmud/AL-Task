
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, className, speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Calculate parallax effect based on scroll position
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ParallaxImage;
