// src/components/AboutMe.jsx
import React from 'react';
import aboutImg from '../assets/about.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2,    // Trigger animation when 20% of the section is visible
  });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div
        ref={ref}
        className={`flex flex-wrap transition-all duration-1000 ease-in-out ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              src={aboutImg}
              alt="about"
              className="rounded-2xl h-80"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : -100,
              }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:justify-start">
            <motion.div
              className="my-2 max-w-xl py-6 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
              }}
              transition={{ duration: 1.2 }}
            >
              {/* Schooling */}
              <div>
                <h2 className="text-xl font-bold text-cyan-400">Schooling</h2>
                <p className="text-sm text-neutral-400">
                  Completed my schooling at <strong>Sri Chaitanya Techno School</strong>, where I developed a strong foundation in academics and extracurricular activities.
                </p>
              </div>

              {/* Intermediate */}
              <div>
                <h2 className="text-xl font-bold text-pink-500">Intermediate</h2>
                <p className="text-sm text-neutral-400">
                  Pursued my Intermediate studies in <strong>Narayana Junior College</strong>, focusing on M P C.
                </p>
              </div>

              {/* BTech */}
              <div>
                <h2 className="text-xl font-bold text-yellow-400">BTech</h2>
                <p className="text-sm text-neutral-400">
                  Currently pursuing/completed my BTech at <strong>Sasi Institute Of Technology And Engineering</strong>, specializing in <strong>Information Technology</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
