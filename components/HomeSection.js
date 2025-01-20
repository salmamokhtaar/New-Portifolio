"use client";

import Image from "next/image";
import { FaDownload, FaArrowRight } from "react-icons/fa";

export default function HomeSection() {
  const textLines = [
    "I am a passionate and dedicated Full-Stack Developer",
    "with a recent degree in Computer Science from Jamhuriya.",
    "My academic journey has equipped me with a robust understanding",
    "of both front-end and back-end technologies, allowing me to craft",
    "seamless and efficient web applications.",
  ];

  return (
    <section
      id="home"
      className="container mt-20 mx-auto p-4 flex flex-col items-center dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 transition-transform transform hover:scale-105 animate-fadeIn dark:text-gray-100">
          Hey, I'm Salma
        </h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-4 animate-pulse animate-fadeIn dark:text-blue-400">
          Full-Stack Developer
        </h2>
        <div className="text-left">
          {textLines.map((line, index) => (
            <p
              key={index}
              className="text-lg mb-2 text-gray-700 animate-fadeIn dark:text-gray-300"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-64 h-64 mt-8 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 dark:shadow-gray-800">
        <Image
          src="/salma.png" // Replace with your image path
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      {/* Buttons Section */}
      <div className="mt-6 flex space-x-4">
        <a
          href="/SalmoCv.pdf"
          download
          className="px-6 py-2 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 flex items-center transform hover:scale-105 animate-fadeIn dark:bg-blue-500 dark:hover:bg-blue-600 dark:shadow-gray-800"
        >
          <FaDownload className="mr-2" />
          Download CV
        </a>
        <a
          href="#contact"
          className="px-6 py-2 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 flex items-center transform hover:scale-105 animate-fadeIn dark:bg-blue-500 dark:hover:bg-blue-600 dark:shadow-gray-800"
        >
          Let's Talk
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
}
