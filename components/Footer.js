import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="shadow-md py-6 bg-white dark:bg-gray-900 dark:shadow-gray-800"
    >
      <div className="container mx-auto text-center">
        <nav className="mb-4">
          <a
            href="#home"
            className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            About Me
          </a>
          <a
            href="#education"
            className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            Education
          </a>
          <a
            href="#skills"
            className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </nav>
        <div className="flex justify-center mb-4">
          <a
            href="https://instagram.com"
            className="mx-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            className="mx-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:salmam.mohyadiin@gmail.com"
            className="mx-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-gray-500 text-sm dark:text-gray-400">
          © 2024 All rights reserved • Developed by{" "}
          <a
            href="https://portifolio-last.vercel.app/"
            className="text-blue-600 dark:text-blue-400"
          >
            Salma
          </a>
        </p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/salma-mukhtar" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/salmamokhtaar" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-400">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
