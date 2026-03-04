"use client";
import React from "react";
import LoadingSpinner from "@/app/loading";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FiEdit3, FiMail, FiShield, FiCalendar } from "react-icons/fi";

interface UserSession {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  id?: string;
}

const UserProfile: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingSpinner />;
  }
  if (!session || !session.user) {
    return (
      <div className="flex justify-center items-center h-64 text-slate-500 font-bold uppercase italic tracking-widest">
        User data not found
      </div>
    );
  }

  const user = session.user as UserSession;
  const userImage: string =
    user.image ||
    `https://ui-avatars.com/api/?name=${user.name || "User"}&background=2563eb&color=fff`;

  return (
    <div className="max-w-2xl mx-auto mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="bg-white border-2 border-slate-100 rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl overflow-hidden relative">
        <div className="h-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20  from-blue-500 via-transparent to-transparent"></div>
          <div className="absolute top-4 right-6 text-white/10 font-black text-6xl italic select-none">
            GALAXY
          </div>
        </div>
        <div className="px-8 pb-10 flex flex-col items-center">
          <div className="relative -mt-16 group">
            <div className="w-36 h-36 rounded-tr-[2rem] rounded-bl-[2rem] border-8 border-white shadow-xl overflow-hidden bg-slate-200">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                alt="profile"
                width={144}
                height={144}
                src={userImage}
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-tr-xl rounded-bl-xl shadow-lg border-4 border-white">
              <FiShield size={20} />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter italic uppercase">
              {user.name}
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2 text-slate-500 font-bold text-sm tracking-wide">
              <FiMail className="text-blue-600" />
              <span>{user.email}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-12">
            <div className="p-5 bg-slate-50 rounded-tr-2xl rounded-bl-2xl border border-slate-100 flex items-start gap-4 hover:border-blue-200 transition-colors">
              <div className="p-3 bg-white rounded-tr-lg rounded-bl-lg shadow-sm text-blue-600">
                <FiCalendar />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Joined Since
                </p>
                <p className="text-sm font-bold text-slate-800 italic uppercase">
                  March 2026
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-50 rounded-tr-2xl rounded-bl-2xl border border-slate-100 flex items-start gap-4 hover:border-blue-200 transition-colors">
              <div className="p-3 bg-white rounded-tr-lg rounded-bl-lg shadow-sm text-blue-600">
                <FiShield />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Security Level
                </p>
                <p className="text-sm font-bold text-emerald-600 italic uppercase">
                  High Protection
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 w-full mt-10">
            <button className="flex-1 flex items-center justify-center gap-3 bg-blue-600 text-white py-4 font-black text-xs uppercase tracking-[0.2em] rounded-tr-xl rounded-bl-xl hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-200 active:scale-95">
              <FiEdit3 className="text-lg" /> Modify Profile
            </button>
            <button className="flex-1 flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 py-4 font-black text-xs uppercase tracking-[0.2em] rounded-tr-xl rounded-bl-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 active:scale-95">
              Privacy Log
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 px-4 opacity-50">
        <span className="h-[1px] flex-1 bg-slate-300"></span>
        <span className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
          Gadget Galaxy Verified System
        </span>
        <span className="h-[1px] flex-1 bg-slate-300"></span>
      </div>
    </div>
  );
};

export default UserProfile;
