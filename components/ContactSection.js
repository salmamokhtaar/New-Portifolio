"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

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
    <section
      id="contact"
      className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:shadow-gray-800"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          Let's Connect
        </h1>
        <h2 className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Get in touch
        </h2>
        <p className="text-sm text-gray-600 mt-2 dark:text-gray-400">
          I'm open for new projects. Contact me any time — I’m here to help!
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="contact-form"
        className="space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 w-full border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
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
          className="p-4 w-full border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
        ></textarea>

        <div className="text-center space-y-2">
          <p className="text-gray-600 dark:text-gray-400">+252 617157083</p>
          <p className="text-gray-600 dark:text-gray-400">
            salmam.mohyadiin@gmail.com
          </p>
          <p className="text-gray-600 dark:text-gray-400">Mogadishu, Somalia</p>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            Submit Now
          </button>
        </div>
      </form>
    </section>
  );
}
