
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Azure Tower',
    category: 'Commercial',
    description: 'A 30-story commercial building featuring our premium curtain wall system and custom aluminum facades.',
    image: 'azure-tower'
  },
  {
    title: 'Riverside Residences',
    category: 'Residential',
    description: 'Luxury apartments with energy-efficient aluminum windows and sliding door systems.',
    image: 'riverside-residences'
  },
  {
    title: 'Tech Innovation Center',
    category: 'Institutional',
    description: 'A state-of-the-art research facility with specialized aluminum solutions for laboratory environments.',
    image: 'tech-innovation'
  },
  {
    title: 'Harmony Shopping Mall',
    category: 'Commercial',
    description: 'A modern shopping complex featuring our signature storefront systems and entrance solutions.',
    image: 'harmony-mall'
  }
];

const categories = ['All', 'Commercial', 'Residential', 'Institutional'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-400 font-semibold mb-2 block">Our Projects</span>
          <h2 className="mb-6 text-white">Featured Work</h2>
          <p className="text-gray-300 text-lg">
            Explore our portfolio of successful projects where our aluminum solutions have made a significant impact on architectural excellence.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl shadow-lg group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-video overflow-hidden">
                  <img  
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={project.title}
                   src="https://images.unsplash.com/photo-1693932282315-aa2315159ccd" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300"></div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: 0 }}
                  animate={{ y: hoveredIndex === index ? -20 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    View details
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Explore all projects
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

export default Projects;
