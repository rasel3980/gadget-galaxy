'use client'
import { signIn } from 'next-auth/react';
import { FiLogIn, FiUserPlus } from "react-icons/fi";

const Register = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center px-4 bg-gray-50">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 w-full max-w-md text-center">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
          <FiUserPlus size={40} />
        </div>
        
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic mb-2">
          Join the <span className="text-blue-600">Squad</span>
        </h1>
        <p className="text-gray-500 font-medium mb-8">
          Access exclusive gadgets and professional gear.
        </p>
        <button 
          onClick={() => signIn()}
          className="group w-full flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-800 text-white rounded-tr-2xl rounded-bl-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-100 active:scale-95"
        >
          <FiLogIn size={20} className="group-hover:translate-x-1 transition-transform" />
          Login to Account
        </button>

        <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
          Secure Authentication by NextAuth
        </p>
      </div>
    </div>
  );
};

export default Register;