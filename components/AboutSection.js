"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="container mx-auto p-6 mt-20 bg-white shadow-2xl rounded-lg dark:bg-gray-900 dark:shadow-gray-800"
    >
      {/* Section Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6 dark:text-blue-400">
        Personal Summary
      </h1>

      {/* Profile Overview */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="/salmas.jpeg"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            I'm Salma Mukhtar
          </h2>
          <h3 className="text-lg text-gray-600 dark:text-gray-300">
            Full-Stack Developer
          </h3>
        </div>
      </div>

      {/* Summary Text */}
      <p className="text-gray-700 mb-10 dark:text-gray-300 leading-relaxed">
        🚀 Passionate Full-Stack Developer{" "}
        <span className="text-blue-600 dark:text-blue-400">
          | Crafting Seamless Web Experiences |
        </span>{" "}
        Bridging Frontend & Backend for Impactful Solutions.
      </p>

      {/* Events Section */}
      <section
        id="events"
        className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:shadow-gray-700"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">
          Event Participation
        </h2>

        <ul className="space-y-6">
          {/* Event 1 */}
          <li>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Mogadishu Tech Summit{" "}
              <span className="text-sm text-orange-600 dark:text-orange-400">
                - June 29–30, 2024
              </span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Participated in a hackathon and secured a top 3 placement. Contributed
              to discussions in a conference on “Job Creation through Education and
              Skills Development.”
            </p>
          </li>

          {/* Event 2 */}
          <li>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              PyCon Somalia{" "}
              <span className="text-sm text-orange-600 dark:text-orange-400">
                - August 28–29, 2024
              </span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Took part in a hackathon and attended a conference themed
              “Python and AI: Building Tomorrow.”
            </p>
          </li>

          {/* Event 3 */}
          <li>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              SomNOG7{" "}
              <span className="text-sm text-orange-600 dark:text-orange-400">
                - December 22–26, 2024
              </span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Engaged in workshops for three days and placed top 3. The conference
              focused on “Digital Public Infrastructure: Laying the Foundation for
              Somalia’s Digital Future.”
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
}
