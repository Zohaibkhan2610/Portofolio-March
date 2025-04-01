import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl font-bold tracking-tight cursor-pointer"
          onClick={() => scrollToSection("home")} // Scroll to Home section when clicked
        >
          SmartWay
        </motion.div>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex space-x-8">
          <NavItem onClick={() => scrollToSection("home")}>Home</NavItem>
          <NavItem onClick={() => scrollToSection("about")}>About</NavItem>
          <NavItem onClick={() => scrollToSection("services")}>Services</NavItem>
          <NavItem onClick={() => scrollToSection("contact")}>Contact</NavItem>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded-md p-1"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300 hover:text-gray-50 transition duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300 hover:text-gray-50 transition duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex flex-col justify-center items-center">
      <motion.ul
        variants={{
          hidden: { opacity: 0, height: 0 },
          visible: { opacity: 1, height: "auto" },
        }}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden flex flex-col absolute ease bg-gray-900 w-full duration-700 mt-[17vh] space-y-2 text-center justify-center ${isOpen ? "translate-y-0" : "translate-y-[-30vh] "}`}
      >
        <NavItem onClick={() => scrollToSection("home")}>Home</NavItem>
        <NavItem onClick={() => scrollToSection("about")}>About</NavItem>
        <NavItem onClick={() => scrollToSection("services")}>Services</NavItem>
        <NavItem onClick={() => scrollToSection("contact")}>Contact</NavItem>
      </motion.ul>
      </div>
    </nav>
  );
};

// Reusable NavItem Component
const NavItem = ({ children, onClick }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer text-lg font-medium tracking-wide text-gray-300 hover:text-white transition duration-300"
      onClick={onClick} // Handle click event
    >
      {children}
    </motion.li>
  );
};

export default Navbar;