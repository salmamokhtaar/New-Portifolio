"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactMe() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6f85vh",        // ✅ Your EmailJS Service ID
        "template_bc1ct57",       // ✅ Your EmailJS Template ID
        formRef.current,          // ✅ Correct form reference
        "_fUn8Di61Prf2a-DW"       // ✅ Your EmailJS Public Key
      )
      .then(() => {
        alert("Thank you for getting in touch!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="container mx-auto mt-20 p-8">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Left: Info & Social */}
        <div className="md:w-1/2 p-8 flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-800">
          <img src="/sa.png" alt="Salma Mukhtar" className="w-24 h-24 rounded-full mb-4 shadow" />
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Let's Work Together!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            Open to new projects, collaborations, and opportunities. Reach out and let's connect!
          </p>
          <div className="space-y-2 text-center">
            <a href="tel:+252617157083" className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">
              <FaPhone className="inline mr-2" /> +252 617157083
            </a>
            <a href="mailto:salmam.mohyadiin@gmail.com" className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">
              <FaEnvelope className="inline mr-2" /> salmam.mohyadiin@gmail.com
            </a>
            <p className="text-gray-500 dark:text-gray-400">Mogadishu, Somalia</p>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/salma-mokhtaar-0b4a11253/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/salmamokhtaar" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>
        {/* Right: Form */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center mb-4">
            Let's Connect
          </h1>
          <h2 className="text-lg text-gray-700 dark:text-gray-300 text-center mb-2">
            Get in touch
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
            I'm always open to new opportunities, collaborations, and interesting projects. Let's connect and build something great together!
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            name="contact-form"
            className="space-y-6"
            aria-label="Contact form"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
                className="p-4 w-full border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Your Email"
                className="p-4 w-full border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              aria-label="Your Message"
              className="p-4 w-full border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition w-full"
              aria-label="Submit contact form"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
