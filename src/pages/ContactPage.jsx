import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'Not specified'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          projectType: 'Not specified'
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Phone',
      details: ['+1 (234) 567-890', '+1 (234) 567-891'],
      action: 'tel:+1234567890'
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email',
      details: ['info@alumintech.com', 'support@alumintech.com'],
      action: 'mailto:info@alumintech.com'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Address',
      details: ['123 Business Avenue', 'Industrial District, City, Country'],
      action: 'https://maps.google.com'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Working Hours',
      details: ['Monday - Friday: 8am - 6pm', 'Saturday: 9am - 1pm'],
      action: null
    }
  ];

  const faqs = [
    {
      question: 'What types of aluminum solutions do you offer?',
      answer: 'We offer a comprehensive range of aluminum solutions, including windows, doors, curtain walls, facades, and custom architectural elements. Our products are designed for both residential and commercial applications, with a focus on quality, durability, and energy efficiency.'
    },
    {
      question: 'How long does the installation process take?',
      answer: 'The installation timeline varies depending on the scope and complexity of the project. A standard residential window installation might take 1-2 days, while larger commercial projects can take several weeks or months. During our initial consultation, we\'ll provide you with a detailed timeline specific to your project.'
    },
    {
      question: 'Do you offer warranties on your products?',
      answer: 'Yes, all our aluminum products come with comprehensive warranties. Our standard warranty covers manufacturing defects for 10 years, with extended warranties available for specific components. We also offer maintenance services to ensure the longevity and performance of our installations.'
    },
    {
      question: 'Can you customize aluminum solutions for unique architectural designs?',
      answer: 'Absolutely! Custom solutions are one of our specialties. Our team of designers and engineers works closely with architects and clients to develop bespoke aluminum solutions that meet specific aesthetic and functional requirements. From unique shapes to special finishes, we can bring your vision to life.'
    },
    {
      question: 'What is the process for getting a quote?',
      answer: 'The quote process begins with an initial consultation, either in person or virtually. We\'ll discuss your project requirements, take measurements if needed, and understand your design preferences. Within 3-5 business days, we\'ll provide you with a detailed quote outlining costs, timeline, and specifications.'
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
            alt="Modern office interior with aluminum elements"
           src="https://images.unsplash.com/photo-1643877107082-8ee9da17c090" />
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
              Contact Us
            </span>
            <h1 className="text-white mb-6">Get in Touch</h1>
            <p className="text-gray-300 text-lg mb-8">
              Have questions about our aluminum solutions? Ready to start your project? Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 p-3 rounded-full bg-blue-50 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <div className="space-y-1 mb-4">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                {item.action && (
                  <a 
                    href={item.action} 
                    target={item.title === 'Address' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors inline-flex items-center"
                  >
                    {item.title === 'Phone' && 'Call us'}
                    {item.title === 'Email' && 'Email us'}
                    {item.title === 'Address' && 'Get directions'}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and our team will get back to you as soon as possible. We're here to answer any questions you may have about our aluminum solutions.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="Not specified">Select Project Type</option>
                      <option value="Windows">Windows</option>
                      <option value="Doors">Doors</option>
                      <option value="Curtain Walls">Curtain Walls</option>
                      <option value="Facades">Facades</option>
                      <option value="Custom Solutions">Custom Solutions</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Please provide details about your project or inquiry..."
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="btn-primary w-full md:w-auto"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-8">
                We'd love to meet you in person to discuss your project requirements and showcase our aluminum solutions.
              </p>
              
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px] mb-6">
                <iframe 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01237487792969%2C40.70324144789889%2C-73.97258758544923%2C40.72422494355443&amp;layer=mapnik" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  aria-hidden="false" 
                  tabIndex="0"
                  title="AluminTech Office Location"
                ></iframe>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-blue-600 font-semibold mb-2 block">FAQ</span>
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our aluminum solutions, services, and processes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;