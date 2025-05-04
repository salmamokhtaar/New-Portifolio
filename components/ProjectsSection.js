"use client";
import Image from "next/image";
import { FaCode, FaEye } from "react-icons/fa";
import { useState } from "react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const projects = [
   
    {
      title: "BRS",
      description:
        "Modern web app for business registration. Top 3 at SomNOG 7 for innovation and impact.",
      image: "/brs.png",
      repoLink: "https://github.com/salmamokhtaar/BRS",
      liveLink: "https://brs-liart.vercel.app/",
      category: "Backend",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "She&Shine",
      description:
        "E-commerce platform for women's and kids' fashion. Built with the MERN stack, supports wishlist, cart, and admin features.",
      image: "/image.png",
      repoLink: "https://github.com/salmamokhtaar/frontend",
      liveLink: "https://github.com/salmamokhtaar/frontend",
      category: "Backend",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      title: "Caawiye Caafimaad",
      description:
        "Mobile app in Somali for women's health info. Top 5 at GirlsInICT 2025 out of 144 competitors.",
      image: "/caawiye.jpeg",
      repoLink: "https://github.com/salmamokhtaar/Exactly",
      liveLink: "https://github.com/salmamokhtaar/Exactly",
      category: "All",
      tech: ["Flutter", "Dart"],
      featured: true,
    },
    {
      title: "Sara Flowers",
      description:
        "This project was developed using HTML, CSS, and JavaScript as part of my first-phase defense at Irise Academy. It demonstrates core frontend development skills, featuring a responsive and interactive design to showcase my proficiency in building user-friendly interfaces.",
      image: "/sara.png",
      repoLink: "https://github.com/salmamokhtaar/FrontEndProject",
      liveLink: "https://salmamokhtaar.github.io/FrontEndProject/",
      category: "Frontend",
    },
  
    {
      title: "Job Portal",
      description:
        "This project was developed as a full-stack application for my graduation defense at Irise Academy. It utilizes technologies like React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Nodemailer to deliver a robust and scalable solution.",
      image: "/job.png",
      repoLink: "https://github.com/salmamokhtaar/ClientSide",
      liveLink: "https://client-side-lake.vercel.app/",
      category: "Backend",
    },
    {
      title: "Somali Quotes",
      description:
        "Somali Quotes is a project showcasing Somali Maahmaahyo (proverbs) with a Next and Previous button for easy navigation. Built using React, it provides a simple and user-friendly interface for exploring Somali cultural wisdom.",
      image: "/som.png",
      repoLink: "https://github.com/salmamokhtaar/SomaliQuotes",
      liveLink: "https://somaliquotesmaahmaahyo.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Tasbih Project",
      description:
        "Tasbih is a simple React-based project for digital counting, featuring increment, decrement, and reset buttons. Styled with Tailwind CSS, it offers an intuitive and user-friendly interface for tracking counts efficiently.",
      image: "/tas.png",
      repoLink: "https://github.com/salmamokhtaar/TasbihprojectReact",
      liveLink: "https://tasbihproject-react.vercel.app/",
      category: "Frontend",
    },
  
    {
      title: "Landing",
      description:
        "A visually appealing landing page built using HTML and CSS. Designed to showcase key content and engage users with a clean and modern layout, it demonstrates proficiency in frontend design and styling techniques.",
      image: "/lan.png",
      repoLink: "https://github.com/salmamokhtaar/Agrivast-Design",
      liveLink: "https://salmamokhtaar.github.io/Agrivast-Design/",
      category: "Frontend",
    },
    {
      title: "Harizon",
      description:
        "This was my first project, created for a customer starting a translation, editing, and subtitling business. Although the customer couldn't continue, I completed and published it as planned. Developed voluntarily, I'm proud of the outcome.",
      image: "/har.png",
      repoLink: "https://github.com/salmamokhtaar/Harizons",
      liveLink: "https://harizon.vercel.app/",
      category: "Backend",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects.slice(0, showAll ? projects.length : 3)
      : projects
          .filter((project) => project.category === filter)
          .slice(0, showAll ? projects.length : 4);

  return (
    <section
      id="projects"
      className="container mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg dark:bg-gray-900 dark:shadow-gray-800"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6 dark:text-gray-100">
        Recent Works
      </h1>

      <div className="mb-4 text-center">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 mx-2 rounded ${
            filter === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Frontend")}
          className={`px-4 py-2 mx-2 rounded ${
            filter === "Frontend"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setFilter("Backend")}
          className={`px-4 py-2 mx-2 rounded ${
            filter === "Backend"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          }`}
        >
          Backend
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 dark:bg-gray-800 dark:shadow-gray-700"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              {project.featured && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded shadow">Featured</span>
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2 dark:text-gray-100 flex items-center gap-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech && project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex justify-between">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-200 dark:text-blue-400 dark:hover:text-blue-600"
                aria-label={`View source code for ${project.title}`}
              >
                <FaCode size={24} />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-200 dark:text-blue-400 dark:hover:text-blue-600"
                aria-label={`View live demo of ${project.title}`}
              >
                <FaEye size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
