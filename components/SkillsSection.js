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
    ],
    datasets: [
      {
        label: "Skill Level",
        data: [90, 85, 80, 75, 70, 65, 70, 80, 60], // Skill levels (0-100)
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
      <div className="max-w-full h-64 md:h-80 lg:h-96 mx-auto">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}
