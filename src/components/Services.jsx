import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing designs to enhance user experience.',
    icon: '🎨',
    bgColor: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    title: 'Front-End Developer',
    description: 'Building responsive, interactive, and dynamic user interfaces with modern technologies.',
    icon: '💻',
    bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  },
  {
    title: 'Back-End Developer',
    description: 'Designing robust server-side logic, APIs, and database management systems.',
    icon: '🖥️',
    bgColor: 'bg-gradient-to-r from-green-500 to-teal-500',
  },
  {
    title: 'Storage Management',
    description: 'Efficiently organizing and managing data storage solutions to ensure scalability.',
    icon: '📦',
    bgColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });

  return (
    <div className="py-16 bg-neutral-900 text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl font-bold mb-12"
      >
        My <span className="text-purple-400">Services</span>
      </motion.h1>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12 ${
          inView ? 'opacity-100' : 'opacity-0'
        } transition-all duration-1000 ease-in-out`}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ${service.bgColor}`}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="flex items-center justify-center text-5xl mb-4">
              {service.icon}
            </div>
            <h2 className="text-xl font-bold text-center mb-2">{service.title}</h2>
            <p className="text-sm text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
