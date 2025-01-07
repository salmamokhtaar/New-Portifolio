"use client";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Skills() {
  const data = {
    labels: [
      'HTML5 & CSS3', 
      'JavaScript (ES6+)', 
      'React.js', 
      'Tailwind CSS', 
      'Node.js', 
      'Express.js', 
      'RESTful APIs', 
      'Git & GitHub', 
      'Soft Skills'
    ],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 85, 80, 75, 70, 65, 70, 80, 60, 75], // Skill levels (0-100)
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue background color
        borderColor: 'rgba(54, 162, 235, 1)', // Solid blue border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to be responsive
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Skills Proficiency',
      },
    },
  };

  return (
    <section id="skills" className="container mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Skills</h1>
      <div className="max-w-full h-64 md:h-80 lg:h-96 mx-auto">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}