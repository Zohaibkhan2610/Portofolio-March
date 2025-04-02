import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBook,
  FaBullseye,
  FaSearch,
  FaWrench,
} from "react-icons/fa";

const ServicesSection = () => {
  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sample services data with unique colors and icons
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building responsive and user-friendly web applications tailored to your needs.",
      icon: <FaLaptopCode />,
      color: "bg-gradient-to-r from-blue-500 to-purple-600",
      linkTo: "contact", // ID of the section to scroll to
    },
    {
      id: 2,
      title: "Frontend Design",
      description:
        "Crafting visually appealing and interactive user interfaces with modern tools.",
      icon: <FaPaintBrush />,
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      linkTo: "contact",
    },
    {
      id: 3,
      title: "Learning Full-Stack Development",
      description:
        "Currently expanding my skills to become proficient in both frontend and backend development. I’m eager to take on small projects to grow my expertise.",
      icon: <FaBook />,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      linkTo: "contact",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Designing intuitive and engaging user experiences for websites and apps.",
      icon: <FaBullseye />,
      color: "bg-gradient-to-r from-pink-500 to-red-500",
      linkTo: "contact",
    },
    {
      id: 5,
      title: "SEO Optimization",
      description:
        "Improving website visibility and ranking on search engines like Google.",
      icon: <FaSearch />,
      color: "bg-gradient-to-r from-indigo-500 to-blue-700",
      linkTo: "contact",
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description:
        "Providing ongoing support and maintenance to ensure smooth operation.",
      icon: <FaWrench />,
      color: "bg-gradient-to-r from-purple-700 to-pink-700",
      linkTo: "contact",
    },
  ];

  return (
    <section id="services" className="bg-gray-900 text-white py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-400"
        >
          Delivering high-quality solutions tailored to your business needs.
        </motion.p>
      </div>

      {/* Service Cards */}
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
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`flex justify-center items-center w-16 h-16 ${service.color} rounded-full text-3xl text-white mb-6 mx-auto`}
              >
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-4">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed mb-6">
                {service.description}
              </p>
              {/* Call-to-Action Button */}
              <motion.button
                onClick={() => scrollToSection(service.linkTo)} // Smooth scroll to section
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg text-center shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
