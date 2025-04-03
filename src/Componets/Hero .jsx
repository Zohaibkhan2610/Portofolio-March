import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-lg sm:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 lg:mb-10 flex md:flex-row flex-col  text-center justify-center"
        >
          <pre>Hi,I'm </pre>
          <span className="text-transparent animate-neon-flicker bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Zohaib Ur Rehman
          </span>
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10"
        >
          I build <span className="text-blue-400">websites</span> and{" "}
          <span className="text-purple-500">applications</span> that are fast,
          responsive, and user-friendly.
        </motion.p>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center space-x-4"
        >
          {/* View My Work Button */}
          <button
            onClick={() => scrollToSection("portfolio")}
            className="glow-on-hover px-3 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-200 transition duration-300"
          >
            View My Work
          </button>

          {/* Contact Me Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="glow-on-hover px-3 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-200 transition duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500 rounded-full blur-xl opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-purple-500 rounded-full blur-xl opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
