"use client";
import Image from 'next/image';
import { FaCode, FaEye } from 'react-icons/fa';
import { useState } from 'react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      image: "/salma.png",
      repoLink: "https://github.com/yourusername/project-one",
      liveLink: "https://project-one-live.com",
      category: "Frontend"
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      image: "/salma.png",
      repoLink: "https://github.com/yourusername/project-two",
      liveLink: "https://project-two-live.com",
      category: "Backend"
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      image: "/salma.png",
      repoLink: "https://github.com/yourusername/project-three",
      liveLink: "https://project-three-live.com",
      category: "Frontend"
    },
    {
      title: "Project Four",
      description: "A brief description of Project Four.",
      image: "/salma.png",
      repoLink: "https://github.com/yourusername/project-four",
      liveLink: "https://project-four-live.com",
      category: "Backend"
    },
    {
      title: "Project Five",
      description: "A brief description of Project Five.",
      image: "/salma.png",
      repoLink: "https://github.com/yourusername/project-five",
      liveLink: "https://project-five-live.com",
      category: "Frontend"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="container mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Recent Works</h1>
      
      <div className="mb-4 text-center">
        <button onClick={() => setFilter('All')} className={`px-4 py-2 mx-2 rounded ${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>All</button>
        <button onClick={() => setFilter('Frontend')} className={`px-4 py-2 mx-2 rounded ${filter === 'Frontend' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>Frontend</button>
        <button onClick={() => setFilter('Backend')} className={`px-4 py-2 mx-2 rounded ${filter === 'Backend' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>Backend</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2"> 
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 max-w-xs mx-auto">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-200">
                <FaCode size={24} />
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-200">
                <FaEye size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}