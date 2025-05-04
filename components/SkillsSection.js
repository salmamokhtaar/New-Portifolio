"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Skills() {
  const data = {
    labels: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Git & GitHub",
      "Soft Skills",
      "Flutter",
      "PHP Laravel",
    ],
    datasets: [
      {
        label: "Skill Level",
        data: [90, 85, 80, 75, 70, 65, 70, 80, 60, 65, 70], // Added Flutter and PHP Laravel
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue background color
        borderColor: "rgba(54, 162, 235, 1)", // Solid blue border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color:
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark")
              ? "#ffffff"
              : "#333", // Legend text color
        },
      },
      title: {
        display: true,
        text: "Skills Proficiency",
        color:
          typeof window !== "undefined" &&
          document.documentElement.classList.contains("dark")
            ? "#ffffff"
            : "#333", // Title text color
      },
    },
    scales: {
      x: {
        ticks: {
          color:
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark")
              ? "#ffffff"
              : "#333", // X-axis tick color
        },
      },
      y: {
        ticks: {
          color:
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark")
              ? "#ffffff"
              : "#333", // Y-axis tick color
        },
      },
    },
  };

  return (
    <section
      id="skills"
      className="container mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg dark:bg-gray-900 dark:shadow-gray-800"
    >
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center dark:text-blue-400">
        Skills
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        I have a strong foundation in both frontend and backend development, as well as mobile and soft skills. Here's a snapshot of my technical proficiency and toolset.
      </p>
      {/* Professional Skill Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
        {/* Frontend */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Frontend</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML5 & CSS3</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript (ES6+)</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React.js</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
          </div>
        </div>
        {/* Backend */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Backend</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Express.js</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">RESTful APIs</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHP Laravel</span>
          </div>
        </div>
        {/* Mobile */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
            Mobile
            <span className="inline-block bg-blue-200 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">App</span>
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Flutter</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Dart</span>
          </div>
        </div>
        {/* Tools */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Tools</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Git & GitHub</span>
          </div>
        </div>
        {/* Soft Skills */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Soft Skills</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Communication</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Teamwork</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Problem Solving</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Adaptability</span>
          </div>
        </div>
      </div>
    </section>
  );
}
