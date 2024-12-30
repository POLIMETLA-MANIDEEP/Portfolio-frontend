import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://portfolio-backend-rcof.onrender.com/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        className='my-10 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto flex flex-col gap-4 text-center'
      >
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Your Name'
          className='p-2 rounded border border-neutral-700 bg-neutral-800'
          required
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Your Email'
          className='p-2 rounded border border-neutral-700 bg-neutral-800'
          required
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Your Message'
          rows='4'
          className='p-2 rounded border border-neutral-700 bg-neutral-800'
          required
        ></textarea>
        <button
          type='submit'
          className='rounded bg-cyan-500 px-4 py-2 text-neutral-900 hover:bg-cyan-400'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
