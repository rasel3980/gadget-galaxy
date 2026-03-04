'use client'
import { useSession } from "next-auth/react";
import { FiTrendingUp, FiShoppingBag, FiHeart, FiStar, FiArrowRight, FiZap } from 'react-icons/fi';

const UserDashboard = () => {
  const { data: session } = useSession();

  const stats = [
    { id: 1, label: 'Active Orders', value: '03', icon: <FiShoppingBag />, gradient: 'from-blue-600 to-cyan-500' },
    { id: 2, label: 'Wishlist Items', value: '12', icon: <FiHeart />, gradient: 'from-rose-500 to-orange-400' },
    { id: 3, label: 'Reward Points', value: '850', icon: <FiStar />, gradient: 'from-amber-400 to-yellow-600' },
    { id: 4, label: 'Spending Trend', value: '+12%', icon: <FiTrendingUp />, gradient: 'from-emerald-500 to-teal-400' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">
            Workspace <span className="text-blue-600">Overview</span>
          </h1>
          <p className="text-slate-500 font-medium">Welcome back, {session?.user?.name || 'Explorer'}</p>
        </div>
        <div className="h-1 w-32 bg-blue-600 rounded-full hidden md:block"></div>
      </div>
      <div className="relative overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem] bg-slate-900 p-8 md:p-12 text-white shadow-2xl border-l-8 border-blue-600">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-tr-lg rounded-bl-lg border border-white/20">
              <FiZap className="text-yellow-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Premium Member</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to <br /> <span className="text-blue-400">Discover More?</span>
            </h2>
            <p className="text-slate-400 text-lg">
              You have tracked 5 packages. Your next delivery is scheduled for tomorrow at 10:00 AM.
            </p>
            <button className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-blue-600 rounded-tr-xl rounded-bl-xl shadow-lg shadow-blue-600/20 active:scale-95">
              Track Shipments <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="hidden lg:flex justify-end">
             <div className="w-64 h-64 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 backdrop-blur-3xl flex items-center justify-center relative">
                <div className="absolute inset-0 animate-pulse bg-blue-500/10 rounded-full blur-3xl"></div>
                <FiShoppingBag className="text-7xl text-blue-400" />
             </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="group p-6 bg-white border-2 border-slate-50 rounded-tr-3xl rounded-bl-3xl shadow-sm hover:border-blue-100 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-tr-xl rounded-bl-xl bg-linear-to-br ${stat.gradient} flex items-center justify-center text-white text-xl mb-4 group-hover:rotate-12 transition-transform`}>
              {stat.icon}
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-50 rounded-tr-4xl rounded-bl-4xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 italic">Recent Logs</h3>
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-16 h-16 rounded-tr-xl rounded-bl-xl bg-slate-200 flex items-center justify-center mb-4">
              <FiBox className="text-slate-400" size={24} />
            </div>
            <p className="text-slate-500 font-medium">No activity recorded yet.</p>
            <button className="mt-4 px-6 py-2 border-2 border-slate-300 text-slate-600 font-bold text-xs uppercase rounded-tr-lg rounded-bl-lg hover:bg-slate-800 hover:text-white transition-all active:scale-95">
              Refresh Data
            </button>
          </div>
        </div>

        <div className="bg-blue-600 rounded-tr-4xl rounded-bl-4xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black italic uppercase mb-2">Pro Perks</h3>
            <p className="text-blue-100 text-sm font-medium mb-6">Unlock exclusive shipping rates and priority support today.</p>
            <button className="w-full bg-white text-blue-600 py-4 font-black text-sm uppercase rounded-tr-xl rounded-bl-xl hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-xl">
              Get Pro Access
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};
const FiBox = ({ size, className }) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={size} width={size} className={className} xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
);

export default UserDashboard;