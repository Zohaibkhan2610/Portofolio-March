import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MyWorkSection = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform built with React, Redux, and Node.js.",
      image: "Ecomerace.png", // Replace with your project image URL
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com", // Replace with actual GitHub link
      liveDemo: "https://familyshop-rose.vercel.app/", // Replace with actual live demo link or use `Link`
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A task management app designed for productivity with real-time updates.",
      image: "https://via.placeholder.com/400", // Replace with your project image URL
      technologies: ["React Native", "Firebase", "Expo"],
      github: "https://github.com",
      liveDemo: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my work and skills.",
      image: "https://via.placeholder.com/400", // Replace with your project image URL
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      liveDemo: "#",
    },
  ];

  return (
    <section id="portfolio" className="bg-gray-900 text-white py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
        >
          My Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-400"
        >
          A selection of projects I've worked on recently.
        </motion.p>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 px-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  {/* GitHub Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-block px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">GitHub</span>
                    <span className="absolute inset-0 bg-white opacity-20 animate-pulse"></span>
                  </motion.a>
                  {/* Live Demo Button */}
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-block px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-md hover:from-green-600 hover:to-teal-700 transition duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Live Demo</span>
                    <span className="absolute inset-0 bg-white opacity-20 animate-shimmer"></span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyWorkSection;