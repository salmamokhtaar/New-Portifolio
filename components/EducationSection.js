"use client";

export default function Education() {
  return (
    <section
      id="education"
      className="container mx-auto p-6 mt-20 bg-white shadow-lg shadow-black rounded-lg dark:bg-gray-900 dark:shadow-gray-800"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4 dark:text-gray-100">
        Education
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mr-4">
          <h2 className="sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
            Bachelor of Science in Computer Science
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Jamhuriya University</p>
          <p className="text-gray-500 dark:text-white">Graduated: 2024</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Focused on full-stack web application development, mastering both
            front-end and back-end technologies. Engaged in projects that
            utilized modern frameworks and tools to create dynamic and
            responsive web solutions.
          </p>
        </div>
        <div>
          <div className="md:w-1/2 shadow-lg mb-4 dark:shadow-gray-800">
            <h2 className="sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
              Diploma in Full-Stack Development
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Rise Academy</p>
            <p className="text-gray-500 dark:text-gray-400">Completed: Feb, 2024</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Gained hands-on experience with HTML, CSS, JavaScript, and
              frameworks such as React and Node.js.
            </p>
          </div>
          {/* <div className="md:w-1/2 shadow-2xl mb-4 dark:shadow-gray-800">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Diploma in Web Development
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Online Course</p>
            <p className="text-gray-500 dark:text-gray-400">Completed: 2022</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Gained hands-on experience with HTML, CSS, JavaScript, and
              frameworks such as React and Node.js.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
