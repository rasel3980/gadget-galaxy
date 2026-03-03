'use client'
import Link from 'next/link'
import { CgProfile } from "react-icons/cg"
import { BiSolidPurchaseTag } from "react-icons/bi"
import { TbShoppingCartHeart } from "react-icons/tb"
import { MdPayment } from "react-icons/md"
import { IoAnalyticsSharp } from "react-icons/io5"
import { LuLogOut } from "react-icons/lu"
import { CiSettings } from "react-icons/ci"

const DashboardLayout = ({ children }) => {
  const menuItems = [
    { name: "Profile", icon: <CgProfile />, href: "/user-dashboard/profile" },
    { name: "Purchase History", icon: <BiSolidPurchaseTag />, href: "/user-dashboard/purchases" },
    { name: "Wishlist", icon: <TbShoppingCartHeart />, href: "/user-dashboard/wishlist" },
    { name: "Payment Info", icon: <MdPayment />, href: "/user-dashboard/payment" },
    { name: "Analytics", icon: <IoAnalyticsSharp />, href: "/user-dashboard/analytics" },
    { name: "Settings", icon: <CiSettings />, href: "/user-dashboard/settings" },
    { name: "Logout", icon: <LuLogOut />, href: "/logout" },
  ]

  return (
    <div className="grid grid-cols-12 min-h-screen">
   
      <aside className="col-span-2 border-r-2 bg-gray-50 px-4 py-6">
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 transition-colors font-medium"
              >
                {item.icon} <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="col-span-10 p-6">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout