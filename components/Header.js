"use client";

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu on item click
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 top-0">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <button onClick={() => scrollToSection('home')} className="text-xl text-blue-600 font-bold focus:outline-none">
          Salma Dhegacade
        </button>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <ul className={`flex flex-col md:flex-row md:space-x-4 absolute md:static bg-white md:bg-transparent w-full md:w-auto ${isOpen ? 'top-16 right-0 shadow-md' : 'hidden md:flex'}`}>
          <li><button onClick={() => scrollToSection('home')} className="block md:inline-block p-4 md:p-0 text-blue-600">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="block md:inline-block p-4 md:p-0 text-blue-600">About Me</button></li>
          <li><button onClick={() => scrollToSection('education')} className="block md:inline-block p-4 md:p-0 text-blue-600">Education</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="block md:inline-block p-4 md:p-0 text-blue-600">Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="block md:inline-block p-4 md:p-0 text-blue-600">Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="block md:inline-block p-4 md:p-0 text-blue-600">Contact Me</button></li>
        </ul>
      </nav>
    </header>
  );
}