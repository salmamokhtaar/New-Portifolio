"use client";

export default function Education() {
  return (
    <section
      id="education"
      className="container mx-auto p-6 mt-20 bg-white  dark:bg-gray-900 dark:shadow-gray-800"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4 dark:text-gray-100">
        Professional Development
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Academic Background */}
        <div className="md:w-1/2 mb-4 md:mr-4">
          <h2 className="sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
            Bachelor of Science in Computer Science
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Jamhuriya University</p>
          <p className="text-gray-500 dark:text-white">Graduated: 2024</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Developed a strong foundation in software engineering, algorithms, and full-stack web development. Completed multiple real-world projects and participated in hackathons to apply knowledge in practical settings.
          </p>
        </div>
        {/* Certifications & Continuous Learning */}
        <div className="md:w-1/2 shadow-lg mb-4 dark:shadow-gray-800">
          <h2 className="sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
            Certifications & Continuous Learning
          </h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mt-2">
            <li>Diploma in Full-Stack Development, Rise Academy (2024)</li>
            <li>Online courses in React, Node.js, and modern web technologies</li>
            <li>Active participation in tech events, workshops, and hackathons</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
