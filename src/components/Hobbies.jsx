import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hobbies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2,    // Trigger animation when 20% of the section is visible
  });

  // Variants for motion
  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="mt-10">
      {/* Heading with new motion animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ type: 'spring', stiffness: 100, duration: 1.2 }}
        className="text-center text-3xl font-bold text-purple-400"
      >
        My Hobbies
      </motion.h2>

      {/* Hobbies Grid */}
      <div
        ref={ref}
        className={`flex flex-wrap justify-center mt-8 gap-6 transition-all duration-1000 ease-in-out ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Hobby Cards with new animations */}
        <motion.div
          className="flex items-center justify-center w-60 h-40 bg-neutral-800 rounded-lg shadow-lg mx-4 hover:scale-110 transition-transform duration-300"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-center text-neutral-300">🎾 Playing Badminton</p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-60 h-40 bg-neutral-800 rounded-lg shadow-lg mx-4 hover:scale-110 transition-transform duration-300"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-center text-neutral-300">✍️ Story Writing</p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-60 h-40 bg-neutral-800 rounded-lg shadow-lg mx-4 hover:scale-110 transition-transform duration-300"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-center text-neutral-300">🎥 Watching Movies</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hobbies;
