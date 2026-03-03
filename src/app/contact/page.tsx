'use client'

import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'

interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
        confirmButtonColor: '#2563eb',
      })
      return
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting Gadget Galaxy.',
      timer: 2000,
      showConfirmButton: false,
    })

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-2 tracking-tighter uppercase italic">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-4">
            Have questions or feedback? We’d love to hear from you!
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
        
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <FiUser className="text-blue-600" /> Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-tr-xl rounded-bl-xl px-5 py-4 transition-all outline-none font-bold text-gray-700"
                  placeholder="type your name"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <FiMail className="text-blue-600" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-tr-xl rounded-bl-xl px-5 py-4 transition-all outline-none font-bold text-gray-700"
                  placeholder="rasel@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <FiMessageSquare className="text-blue-600" /> Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-tr-xl rounded-bl-xl px-5 py-4 transition-all outline-none font-bold text-gray-700 h-40 resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="group w-full md:w-auto px-12 py-5 bg-blue-600 hover:bg-black text-white rounded-tr-2xl rounded-bl-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-100 active:scale-95 flex items-center justify-center gap-3"
              >
                Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </form>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="p-6 bg-white rounded-tr-2xl rounded-bl-2xl shadow-sm border border-gray-100">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Location</p>
                <p className="font-bold text-gray-800 mt-1">Dhaka, Bangladesh</p>
            </div>
            <div className="p-6 bg-white rounded-tr-2xl rounded-bl-2xl shadow-sm border border-gray-100">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Email</p>
                <p className="font-bold text-gray-800 mt-1">rkrasel3980@gmail.com</p>
            </div>
            <div className="p-6 bg-white rounded-tr-2xl rounded-bl-2xl shadow-sm border border-gray-100">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Phone</p>
                <p className="font-bold text-gray-800 mt-1">+8801647683980</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs