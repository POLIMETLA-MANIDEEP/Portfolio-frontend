import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      {/* Text-based logo "PM" */}
      <div className='flex flex-shrink-0 items-center text-4xl font-bold text-gray-800'>
        <span className='text-cyan-400'>P</span><span className='text-pink-500'>M</span>
      </div>

      {/* Social Icons */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/manideep2005/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='hover:text-cyan-500 transition-all' />
        </a>
        <a href='https://github.com/POLIMETLA-MANIDEEP' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='hover:text-gray-700 transition-all' />
        </a>
        <a href='https://twitter.com/your-handle' target='_blank' rel='noopener noreferrer'>
          <FaSquareXTwitter className='hover:text-blue-400 transition-all' />
        </a>
        <a href='https://www.instagram.com/mr.unknown_449/' target='_blank' rel='noopener noreferrer'>
          <FaInstagram className='hover:text-pink-600 transition-all' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
