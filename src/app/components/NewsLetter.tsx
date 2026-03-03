'use client'

import React, { useState } from 'react';
import { IoMailOpenOutline } from "react-icons/io5";
import Swal from 'sweetalert2';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    Swal.fire({
      icon: 'success',
      title: 'Subscribed! 🎉',
      text: 'Thank you for joining our tech community.',
      showConfirmButton: false,
      timer: 2000,
      toast: true,
      position: 'top-end'
    });

    setEmail('');
}
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="relative bg-gray-900 rounded-[3rem] overflow-hidden p-8 md:p-16 shadow-2xl border border-gray-800">
        
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-blue-600/20 text-blue-500 rounded-3xl flex items-center justify-center mb-6">
            <IoMailOpenOutline size={40} />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
            DONT MISS THE <span className="text-blue-500">BIGGEST</span> DEALS!
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Subscribe to our newsletter and get <span className="text-white font-bold">10% discount</span> on your first order. No spam, just pure tech updates.
          </p>

          <form 
            onSubmit={handleSubscribe}
            className="w-full flex flex-col sm:flex-row gap-3 bg-gray-800/50 p-2 rounded-2xl sm:rounded-full border border-gray-700 backdrop-blur-sm"
          >
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your professional email..." 
              className="flex-1 bg-transparent px-6 py-4 text-white outline-none placeholder:text-gray-500"
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-4 rounded-xl sm:rounded-full transition-all active:scale-95 shadow-lg shadow-blue-900/20 uppercase tracking-widest text-sm"
            >
              Subscribe Now
            </button>
          </form>

          <p className="mt-6 text-gray-500 text-xs">
            By subscribing, you agree to our <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Service</span>.
          </p>
        </div>
      </div>
    </section>
    );
};

export default NewsLetter;