import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-400"
        >
          Crafting seamless digital experiences with modern technologies.
        </motion.p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="https://via.placeholder.com/400" // Replace with your profile image URL
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Attractive Name (Only Name Animated) */}
            <h3 className="text-3xl sm:text-4xl font-bold flex items-center mb-4">
              Hi, I'm{" "}
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-500 to-green-600 animate-floating-glow">
                Zohaib Ur Rehman
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A passionate web developer specializing in building dynamic and responsive web applications. With expertise in{" "}
              <SkillTag name="React" color="bg-blue-500" />,{" "}
              <SkillTag name="JavaScript" color="bg-green-500" />,{" "}
              <SkillTag name="Tailwind CSS" color="bg-purple-500" />, and{" "}
              <SkillTag name="HTML/CSS" color="bg-yellow-500" />, I create user-friendly interfaces that deliver exceptional experiences.
            </p>

            {/* Skills Showcase */}
            <div>
              <h3 className="text-2xl font-bold mb-4">My Skillset</h3>
              <div className="grid grid-cols-2 gap-4">
                <SkillCard name="React" color="bg-blue-500" />
                <SkillCard name="JavaScript" color="bg-green-500" />
                <SkillCard name="Tailwind CSS" color="bg-purple-500" />
                <SkillCard name="HTML/CSS" color="bg-yellow-500" />
              </div>
            </div>

            {/* Call-to-Action Button */}
            <motion.a
              href="/resume.pdf" // Replace with your resume link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Reusable Skill Tag Component
const SkillTag = ({ name, color }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full ${color} text-white text-sm font-medium animate-pulse`}
    >
      {name}
    </span>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ name, color }) => {
  return (
    <div
      className={`flex items-center space-x-2 p-4 rounded-lg ${color} shadow-md`}
    >
      <div className="w-4 h-4 rounded-full bg-white"></div>
      <span className="text-white font-medium">{name}</span>
    </div>
  );
};

export default AboutSection;




// Zohaib Ur Rehman