
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Zap, Sparkles, Clock, Recycle } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: 'Durability',
    description: 'Our aluminum products are built to last, offering exceptional resistance to corrosion, weather, and wear.'
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600" />,
    title: 'Premium Quality',
    description: 'We use only the highest grade materials and precision engineering to ensure superior quality in every product.'
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: 'Energy Efficiency',
    description: 'Our thermal break technology provides excellent insulation, reducing energy costs and environmental impact.'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-blue-600" />,
    title: 'Custom Design',
    description: 'From concept to completion, we create bespoke solutions tailored to your specific requirements and vision.'
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: 'Timely Delivery',
    description: 'We pride ourselves on meeting deadlines and delivering projects on schedule without compromising quality.'
  },
  {
    icon: <Recycle className="h-10 w-10 text-blue-600" />,
    title: 'Sustainability',
    description: 'Our aluminum products are 100% recyclable, making them an environmentally responsible choice for your projects.'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold mb-2 block">Why Choose Us</span>
          <h2 className="mb-6">Superior Features of Our Aluminum Solutions</h2>
          <p className="text-gray-600 text-lg">
            We combine innovative technology with expert craftsmanship to deliver aluminum products that exceed expectations in performance, aesthetics, and longevity.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 p-4 rounded-full bg-blue-50 inline-block group-hover:bg-blue-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
