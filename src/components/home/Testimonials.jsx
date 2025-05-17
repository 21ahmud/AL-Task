
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Project Manager, XYZ Architects',
    quote: 'The quality of AluminTech\'s products exceeded our expectations. Their team was professional from design to installation, and the finished project looks stunning.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    position: 'Director, Urban Development Corp',
    quote: 'We\'ve partnered with AluminTech on multiple commercial projects. Their attention to detail and commitment to deadlines make them our go-to aluminum solutions provider.',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    position: 'Interior Designer',
    quote: 'The custom aluminum solutions provided by AluminTech perfectly complemented our design vision. Their team was collaborative and delivered exceptional craftsmanship.',
    rating: 4
  },
  {
    name: 'David Wilson',
    position: 'Property Developer',
    quote: 'From the initial consultation to the final installation, AluminTech demonstrated professionalism and expertise. The energy efficiency of their windows has significantly reduced our operational costs.',
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setDirection('right');
    setCurrent(prevCurrent => (prevCurrent + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection('left');
    setCurrent(prevCurrent => (prevCurrent - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  const variants = {
    enter: (direction) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold mb-2 block">Testimonials</span>
          <h2 className="mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            We take pride in our work and the relationships we build with our clients. Here's what they have to say about our aluminum solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="absolute inset-0 bg-blue-600 rounded-3xl opacity-5"
            style={{ transform: 'rotate(-2deg)' }}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-12 -mb-12 opacity-50"></div>
            
            <div className="relative min-h-[300px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-center"
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                >
                  <div className="mb-6 flex justify-center">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                    {[...Array(5 - testimonials[current].rating)].map((_, i) => (
                      <Star key={i + testimonials[current].rating} className="h-6 w-6 text-gray-300" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-8">
                    "{testimonials[current].quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                    <p className="text-gray-600">{testimonials[current].position}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 'right' : 'left');
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
