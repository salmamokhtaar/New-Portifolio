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
      className="container mx-auto p-4 mt-20 flex flex-col lg:flex-row items-center justify-center gap-10 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Text Section (Left) */}
      <div className="lg:w-1/2 text-center flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 transition-transform transform hover:scale-105 animate-fadeIn dark:text-gray-100">
          Hey, I'm Salma
        </h1>
        <h2 className="text-3xl font-semibold text-blue-500 mb-4 animate-pulse dark:text-blue-400">
          Full-Stack Developer
        </h2>
        <p className="text-lg mb-4 text-gray-700 animate-fadeIn dark:text-gray-300 max-w-2xl mx-auto">
          Crafting innovative web solutions with a passion for clean code and user-centric design. I am a passionate and dedicated Full-Stack Developer with a recent degree in Computer Science from Jamhuriya. My academic journey has equipped me with a robust understanding of both front-end and back-end technologies, allowing me to craft seamless and efficient web applications.
        </p>
        {/* Buttons */}
        <div className="flex space-x-4 justify-center mt-6">
          <a
            href="/Salma_FullStack Developer.pdf"
            download
            className="px-6 py-2 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 flex items-center transform hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600 dark:shadow-gray-800"
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 flex items-center transform hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600 dark:shadow-gray-800"
          >
            Let&apos;s Talk
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* Image Section (Right) */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className="relative rounded-full  w-96 h-96 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 dark:shadow-gray-800">
          <Image
            src="/salma.png"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
