import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="shadow-md py-6">
      <div className="container mx-auto text-center">
        <nav className="mb-4">
          <a href="#home" className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600">Home</a>
          <a href="#about" className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600">About Me</a>
          <a href="#education" className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600">Education</a>
          <a href="#skills" className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600">Skills</a>
          <a href="#projects" className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#contact" className="block md:inline-block mx-4 text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
        <div className="flex justify-center mb-4">
          <a href="https://instagram.com" className="mx-2 text-gray-600 hover:text-blue-600">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="mx-2 text-gray-600 hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="mailto:salmam.mohyadiin@gmail.com" className="mx-2 text-gray-600 hover:text-blue-600">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 All rights reserved • Developed by <a href="https://portifolio-last.vercel.app/" className="text-blue-600">Salma</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;