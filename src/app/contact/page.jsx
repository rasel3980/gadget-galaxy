'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';



const ContactUs = () => {
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
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting Gadget Galaxy.',
      timer: 2000,
      showConfirmButton: false,
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-5">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-8">
          Have questions or feedback? We’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 "
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 "
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 h-32 "
              placeholder="Your Message"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
