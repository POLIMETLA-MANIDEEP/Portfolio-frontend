import { useState } from 'react';
import { motion } from 'framer-motion';

// Exported CONTACT details
export const CONTACT = {
  address: "61-22/2-17 R.L.Nagar, Vijayawada, AP 520013",
  phoneNo: "+91 9032 4348 14",
  email: "manideep6749@gmail.com",
};

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
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('Failed to send the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        className="my-10 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>

      {/* Centered Contact Section */}
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto gap-10 lg:flex-row">
        {/* Contact Information Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 bg-neutral-800 p-6 rounded-lg shadow-lg text-neutral-400 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-500">Contact Information</h2>
          <div>
            <h3 className="text-lg font-bold">Address:</h3>
            <p>{CONTACT.address}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Phone:</h3>
            <p>{CONTACT.phoneNo}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Email:</h3>
            <p>{CONTACT.email}</p>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 flex flex-col gap-4 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-2 rounded border border-neutral-700 bg-neutral-800"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-2 rounded border border-neutral-700 bg-neutral-800"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message also Include Your Email/Contact No in this"
            rows="4"
            className="p-2 rounded border border-neutral-700 bg-neutral-800"
            required
          ></textarea>
          <button
            type="submit"
            className="rounded bg-cyan-500 px-4 py-2 text-neutral-900 hover:bg-cyan-400"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
