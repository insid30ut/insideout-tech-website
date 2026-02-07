'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert("Thank you for your message! This is a demo form.");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
      
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          placeholder="(555) 123-4567"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all h-32"
          placeholder="How can we help you?"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}
