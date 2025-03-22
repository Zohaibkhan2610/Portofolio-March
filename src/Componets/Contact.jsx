import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, // Email Icon
  FaPhone, // Phone Icon
  FaGithub, // GitHub Icon
  FaLinkedin, // LinkedIn Icon
} from "react-icons/fa";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required.";
    if (!formState.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Invalid email address.";
    if (!formState.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formState.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Simulated form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formState); // Replace with actual API call or backend integration
      alert("Thank you for reaching out! I'll get back to you soon.");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-400"
        >
          Feel free to reach out to me for any questions or collaborations.
        </motion.p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="johndoe@example.com"
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.subject ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.message ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-blue-400"
                >
                  <FaEnvelope className="h-6 w-6" />
                </motion.div>
                <a href="mailto:your-email@example.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  your-email@example.com
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-green-400"
                >
                  <FaPhone className="h-6 w-6" />
                </motion.div>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-green-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              {/* Divider */}
              <div className="border-t border-gray-700 my-4"></div>
              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <FaGithub className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;