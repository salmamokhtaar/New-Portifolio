"use client";

import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode state and apply/remove class from the <html> element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 top-0 dark:bg-gray-800 dark:shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl text-blue-600 font-bold focus:outline-none dark:text-blue-300"
        >
          Salma Dhegacade
        </button>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="text-gray-800 focus:outline-none mr-4 dark:text-gray-200"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none dark:text-gray-200"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
        <ul
          className={`flex flex-col md:flex-row md:space-x-4 absolute md:static bg-white md:bg-transparent w-full md:w-auto ${
            isOpen ? 'top-16 right-0 shadow-md' : 'hidden md:flex'
          } dark:bg-gray-800`}
        >
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="block md:inline-block p-4 md:p-0 text-blue-600 dark:text-blue-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="block md:inline-block p-4 md:p-0 text-blue-600 dark:text-blue-300"
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('education')}
              className="block md:inline-block p-4 md:p-0 text-blue-600 dark:text-blue-300"
            >
              Education
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className="block md:inline-block p-4 md:p-0 text-blue-600 dark:text-blue-300"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="block md:inline-block p-4 md:p-0 text-blue-600 dark:text-blue-300"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="block md:inline-block p-4 md:p-0 text-blue-600 dark:text-blue-300"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
