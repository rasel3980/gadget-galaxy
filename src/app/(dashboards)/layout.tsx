'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from "next-auth/react"
import { CgProfile } from "react-icons/cg"
import { BiSolidPurchaseTag } from "react-icons/bi"
import { TbShoppingCartHeart } from "react-icons/tb"
import { MdPayment, MdOutlineSpaceDashboard } from "react-icons/md"
import { IoAnalyticsSharp } from "react-icons/io5"
import { LuLogOut } from "react-icons/lu"
import { CiSettings } from "react-icons/ci"

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", icon: <MdOutlineSpaceDashboard />, href: "/user-dashboard" },
    { name: "Profile", icon: <CgProfile />, href: "/user-dashboard/profile" },
    { name: "Purchases", icon: <BiSolidPurchaseTag />, href: "/user-dashboard/purchases" },
    { name: "Wishlist", icon: <TbShoppingCartHeart />, href: "/user-dashboard/wishlist" },
    { name: "Payments", icon: <MdPayment />, href: "/user-dashboard/payment" },
    { name: "Analytics", icon: <IoAnalyticsSharp />, href: "/user-dashboard/analytics" },
    { name: "Settings", icon: <CiSettings />, href: "/user-dashboard/settings" },
  ]

  return (
    <div className="grid grid-cols-12 min-h-screen bg-[#F8FAFC]">
      
      <aside className="col-span-12 lg:col-span-2 bg-white border-r border-slate-200 px-5 py-8 flex flex-col justify-between">
        <div>
          <div className="px-4 mb-10 text-center lg:text-left">
            <h2 className="text-xl font-black italic tracking-tighter text-slate-900 uppercase">
              Gadget <span className="text-blue-600 underline decoration-2 underline-offset-4">Galaxy</span>
            </h2>
          </div>

          <nav>
            <ul className="space-y-3">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className={`
                        flex items-center gap-3 px-5 py-3 font-bold text-xs uppercase tracking-widest transition-all duration-200
                        rounded-tr-xl rounded-bl-xl border-l-4
                        ${isActive 
                          ? 'bg-blue-600 text-white border-blue-800 shadow-lg shadow-blue-200' 
                          : 'text-slate-500 border-transparent hover:bg-slate-100 hover:text-blue-600'
                        }
                      `}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-10">
          <button 
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full flex items-center justify-center gap-3 px-5 py-3 font-black text-xs uppercase tracking-widest text-red-500 border-2 border-red-500/10 rounded-tr-xl rounded-bl-xl hover:bg-red-500 hover:text-white transition-all active:scale-95"
          >
            <LuLogOut className="text-lg" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
      <main className="col-span-12 lg:col-span-10 p-6 lg:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout