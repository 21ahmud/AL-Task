
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Building } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Azure Tower',
    category: 'Commercial',
    location: 'New York, USA',
    year: '2023',
    description: 'A 30-story commercial building featuring our premium curtain wall system and custom aluminum facades. The project showcases our ability to deliver large-scale solutions with precision and excellence.',
    challenge: 'The main challenge was to create a facade that would withstand extreme weather conditions while maintaining aesthetic appeal and energy efficiency.',
    solution: 'We implemented our advanced curtain wall system with enhanced thermal break technology and specialized glazing to meet the specific requirements of the project.',
    image: 'azure-tower',
    gallery: ['azure-tower-1', 'azure-tower-2', 'azure-tower-3']
  },
  {
    id: 2,
    title: 'Riverside Residences',
    category: 'Residential',
    location: 'Miami, USA',
    year: '2022',
    description: 'Luxury apartments with energy-efficient aluminum windows and sliding door systems. This project demonstrates our commitment to combining functionality with elegant design.',
    challenge: 'The client required a solution that would maximize natural light while ensuring privacy and maintaining energy efficiency in a coastal environment.',
    solution: 'We designed custom aluminum window and door systems with specialized glazing and finishes to resist salt corrosion while enhancing the aesthetic appeal of the building.',
    image: 'riverside-residences',
    gallery: ['riverside-1', 'riverside-2', 'riverside-3']
  },
  {
    id: 3,
    title: 'Tech Innovation Center',
    category: 'Institutional',
    location: 'San Francisco, USA',
    year: '2022',
    description: 'A state-of-the-art research facility with specialized aluminum solutions for laboratory environments. The project required a high level of precision and customization.',
    challenge: 'The facility needed specialized aluminum solutions that would meet strict laboratory requirements while maintaining a modern, innovative aesthetic.',
    solution: 'We developed custom aluminum systems with enhanced sealing properties and specialized finishes to meet the specific needs of different laboratory environments.',
    image: 'tech-innovation',
    gallery: ['tech-1', 'tech-2', 'tech-3']
  },
  {
    id: 4,
    title: 'Harmony Shopping Mall',
    category: 'Commercial',
    location: 'Chicago, USA',
    year: '2021',
    description: 'A modern shopping complex featuring our signature storefront systems and entrance solutions. The project required a balance of aesthetics, functionality, and security.',
    challenge: 'The mall needed a solution that would create an inviting atmosphere while ensuring security and easy maintenance for high-traffic areas.',
    solution: 'We implemented our premium storefront systems with enhanced security features and durable finishes designed to withstand heavy use while maintaining visual appeal.',
    image: 'harmony-mall',
    gallery: ['harmony-1', 'harmony-2', 'harmony-3']
  },
  {
    id: 5,
    title: 'Oceanview Hotel',
    category: 'Hospitality',
    location: 'Los Angeles, USA',
    year: '2021',
    description: 'A luxury beachfront hotel featuring our premium aluminum windows and doors designed to withstand coastal conditions while providing stunning ocean views.',
    challenge: 'The coastal location required solutions that would resist corrosion while maximizing views and maintaining energy efficiency in a variable climate.',
    solution: 'We developed specialized aluminum systems with marine-grade finishes and high-performance glazing to meet the specific challenges of the oceanfront location.',
    image: 'oceanview-hotel',
    gallery: ['oceanview-1', 'oceanview-2', 'oceanview-3']
  },
  {
    id: 6,
    title: 'Green Valley Office Park',
    category: 'Commercial',
    location: 'Seattle, USA',
    year: '2020',
    description: 'A sustainable office complex featuring our energy-efficient aluminum solutions, including solar shading systems and ventilated facades.',
    challenge: 'The project aimed to achieve LEED Platinum certification, requiring exceptional energy performance and sustainable materials.',
    solution: 'We implemented our advanced aluminum systems with enhanced thermal properties and integrated solar shading to significantly reduce energy consumption.',
    image: 'green-valley',
    gallery: ['green-valley-1', 'green-valley-2', 'green-valley-3']
  }
];

const categories = ['All', 'Commercial', 'Residential', 'Institutional', 'Hospitality'];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Showcase of completed aluminum projects"
           src="https://images.unsplash.com/photo-1693108034943-fc8f19e7573c" />
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
              Our Projects
            </span>
            <h1 className="text-white mb-6">Showcasing Excellence in Aluminum Solutions</h1>
            <p className="text-gray-300 text-lg mb-8">
              Explore our portfolio of successful projects where our aluminum solutions have made a significant impact on architectural excellence and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeIn}
                  layout
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden cursor-pointer">
                    <img  
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt={project.title}
                     src="https://images.unsplash.com/photo-1692219483235-6fd909590f2a" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    <button 
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      View details
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl max-h-[90vh] w-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative">
                <img  
                  className="w-full h-full object-cover" 
                  alt={selectedProject.title}
                 src="https://images.unsplash.com/photo-1459185822105-48f124f3014b" />
                <button 
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{selectedProject.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{selectedProject.category}</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Project Overview</h3>
                    <p className="text-gray-700">{selectedProject.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">Challenge</h3>
                    <p className="text-gray-700">{selectedProject.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">Solution</h3>
                    <p className="text-gray-700">{selectedProject.solution}</p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <img  
                          className="w-full h-48 object-cover" 
                          alt={`${selectedProject.title} - Gallery image ${index + 1}`}
                         src="https://images.unsplash.com/photo-1665722651750-2b11a3de10ce" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsPage;
