"use client";
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="about" className="container mx-auto p-6 mt-20 bg-white shadow-2xl rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Personal Summary</h1>
      <div className="flex items-center mb-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mr-6">
          <Image
            src="/salmas.jpeg" // Replace with your image path
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="sm:text-xl font-semibold text-gray-700">I'm Salma Mukhtar</h2>
          <h3 className="sm:text-lg text-gray-600">Full-Stack Developer</h3>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        🚀 Passionate Full-Stack Developer <span className='text-blue-600'>  | Crafting Seamless Web Experiences |</span>  Bridging Frontend & Backend for Impactful Solutions
      </p>

      <section id="events" className="container mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Event Participation</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong className='text-blue-600'>Mogadishu Tech Summit</strong> - June 29-30, 2024
            <p>Participated in a hackathon and successfully secured a spot in the top 3 groups. Followed by a conference on  "Job Creation through Education and Skills Development," contributing to impactful discussions.</p>
          </li>
          <li>
            <strong className='text-blue-600'>PyCon Somalia</strong> - August 28-29, 2024
            <p>Engaged in a hackathon on the first day, followed by a conference focused on "Python and AI: Building Tomorrow."</p>
          </li>
          <li>
            <strong className='text-blue-600'>SomNOG7</strong> - December 22-26, 2024
            <p>Participated in workshops for the first three days and achieved a top 3 placement. The conference theme was "Digital Public Infrastructure: Laying the Foundation for Somalia's Digital Future."</p>
          </li>
          {/* Add more events as needed */}
        </ul>
      </section>
    </section>
  );
}