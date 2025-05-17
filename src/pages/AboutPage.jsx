
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, History, Target, Award, Briefcase } from 'lucide-react';

const AboutPage = () => {
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

  const values = [
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from design to installation.'
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to achieve the best possible outcomes.'
    },
    {
      icon: <Target className="h-10 w-10 text-blue-600" />,
      title: 'Innovation',
      description: 'We continuously explore new technologies and methods to improve our products and services.'
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      title: 'Professionalism',
      description: 'We maintain the highest standards of professionalism in all our interactions and deliverables.'
    }
  ];

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
            alt="Modern aluminum manufacturing facility"
           src="https://images.unsplash.com/photo-1612479620013-1ec36413e07c" />
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
              About Us
            </span>
            <h1 className="text-white mb-6">Our Story and Mission</h1>
            <p className="text-gray-300 text-lg mb-8">
              Learn about our journey, values, and commitment to delivering exceptional aluminum solutions for architectural and industrial applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-blue-600 font-semibold mb-2 block">Our Story</span>
              <h2 className="mb-6">A Legacy of Excellence in Aluminum Solutions</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2005, AluminTech began as a small workshop with a big vision: to transform the aluminum industry with innovative solutions and exceptional craftsmanship. Over the years, we have grown into a leading provider of premium aluminum products for architectural and industrial applications.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs. Today, we are proud to be at the forefront of the industry, delivering cutting-edge aluminum solutions that combine functionality, aesthetics, and sustainability.
              </p>
              <div className="space-y-3">
                {['State-of-the-art manufacturing facility', 'Team of experienced professionals', 'Commitment to sustainable practices', 'Focus on customer satisfaction'].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-3xl opacity-10" style={{ transform: 'rotate(3deg)' }}></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img  
                  className="w-full h-auto" 
                  alt="AluminTech team working on a project"
                 src="https://images.unsplash.com/photo-1665722651750-2b11a3de10ce" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-blue-600 font-semibold mb-2 block">Our Purpose</span>
            <h2 className="mb-6">Mission & Vision</h2>
            <p className="text-gray-600 text-lg">
              We are driven by a clear mission and vision that guide everything we do at AluminTech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-6 p-4 rounded-full bg-blue-50 inline-block">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To deliver innovative, high-quality aluminum solutions that exceed our clients' expectations, enhance architectural aesthetics, and contribute to sustainable building practices.
              </p>
              <p className="text-gray-600">
                We are committed to excellence in design, manufacturing, and installation, ensuring that every project reflects our dedication to quality and craftsmanship.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-6 p-4 rounded-full bg-blue-50 inline-block">
                <History className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the global leader in aluminum solutions, recognized for our innovation, quality, and commitment to sustainability.
              </p>
              <p className="text-gray-600">
                We envision a future where our aluminum products play a vital role in creating energy-efficient, aesthetically pleasing, and functional spaces that enhance people's lives and work environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-blue-600 font-semibold mb-2 block">Our Values</span>
            <h2 className="mb-6">What Drives Us</h2>
            <p className="text-gray-600 text-lg">
              Our core values shape our culture, guide our decisions, and define how we interact with our clients, partners, and each other.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 p-4 rounded-full bg-blue-50 inline-block group-hover:bg-blue-100 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-blue-600 font-semibold mb-2 block">Our Team</span>
            <h2 className="mb-6">The People Behind Our Success</h2>
            <p className="text-gray-600 text-lg">
              Our team of experts brings together decades of experience in aluminum solutions, engineering, design, and project management.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { name: 'Robert Chen', position: 'CEO & Founder', image: 'ceo' },
              { name: 'Sarah Williams', position: 'Chief Design Officer', image: 'design-officer' },
              { name: 'James Rodriguez', position: 'Head of Engineering', image: 'engineer' },
              { name: 'Emily Thompson', position: 'Project Director', image: 'project-director' }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img  
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={`${member.name}, ${member.position} at AluminTech`}
                   src="https://images.unsplash.com/photo-1612888262725-6b300edf916c" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
