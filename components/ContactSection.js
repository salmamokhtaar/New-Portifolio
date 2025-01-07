"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_l6f85vh', 'template_bc1ct57', e.target, '_fUn8Di61Prf2a-DW')
      .then((result) => {
        console.log(result.text);
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for getting in touch with me!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="container mx-auto p-6 mt-20 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Let's Connect</h1>
      <h2 className="text-xl text-gray-700 mb-6 text-center">Get in touch</h2>
      <p className="text-center text-gray-600 mb-4">
        I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact me anytime, 24/7.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:justify-center w-full mb-4">
          <div className="md:w-1/2 mb-4 max-w-xs md:mr-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <div className="md:w-1/2 mb-4 max-w-xs md:ml-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>
        </div>
        <div className="mb-4 max-w-xs w-full">
          <textarea
            name="message"
            placeholder="Write something..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-1">+252 617157083</p>
          <p className="text-gray-600 mb-1">salmam.mohyadiin@gmail.com</p>
          <p className="text-gray-600 mb-4">Mogadishu, Somalia</p>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Submit Now
          </button>
        </div>
      </form>
    </section>
  );
}