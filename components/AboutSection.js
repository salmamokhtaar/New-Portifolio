"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="container mx-auto p-8 mt-20 bg-white   dark:bg-gray-900 dark:shadow-gray-800"
    >
      {/* Section Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-10 dark:text-blue-400 text-center">
        About Me
      </h1>

      {/* Main About Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
        {/* Image */}
        <div className="md:w-1/3 w-full flex justify-center">
          <div className="relative w-72 h-96 overflow-hidden shadow-lg border-4 border-blue-100 dark:border-gray-800 rounded-xl">
            <Image
              src="/salmas.jpeg"
              alt="Salma Mukhtar"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        {/* Info */}
        <div className="md:w-2/3 w-full flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Salma Mukhtar</h2>
          <h3 className="text-lg text-blue-600 dark:text-blue-400 mb-4">Full-Stack Developer</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl text-center md:text-left">
            I am a passionate Full-Stack Developer with a recent degree in Computer Science from Jamhuriya. I love building seamless, user-focused web applications and thrive on solving real-world problems with technology. My journey has given me a strong foundation in both frontend and backend development, and I am always eager to learn and grow.
          </p>
          {/* Quick Facts */}
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col gap-2 w-full max-w-md mb-4">
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Current Role:</span>
              <span>Open to Opportunities</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Tech Stack:</span>
              <span>MERN STACK, Nextjs, Php Laravel, Flutter</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Email:</span>
              <span>salmam.mohyadiin@gmail.com</span>
            </div>
           
          </div>
        </div>
      </div>

      {/* Events Section */}
      <section
        id="events"
        className="bg-white dark:bg-gray-800  p-6 mt-8 dark:shadow-gray-700"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 dark:text-blue-400 text-center">
          Event Participation
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Event 1 */}
          <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Mogadishu Tech Summit
            </h3>
            <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">June 29–30, 2024</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Top 3 in hackathon. Contributed to conference on "Job Creation through Education and Skills Development."
            </p>
          </div>
          {/* Event 2 */}
          <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
              PyCon Somalia
            </h3>
            <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">August 28–29, 2024</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Hackathon participant and attended "Python and AI: Building Tomorrow."
            </p>
          </div>
          {/* Event 3 */}
          <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
              SomNOG7
            </h3>
            <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">December 22–26, 2024</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Top 3 in workshops. Focused on "Digital Public Infrastructure: Laying the Foundation for Somalia's Digital Future."
            </p>
          </div>
        </div>
        {/* GirlsInICT 2025 Centered Card */}
        <div className="flex justify-center mt-6">
          <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-4 shadow w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
              GirlsInICT 2025
            </h3>
            <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">2025</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Participated and presented the Caawiye Caafimaad app. Achieved Top 5 project status out of 144 competitors.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
