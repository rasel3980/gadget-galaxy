"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSession } from "next-auth/react";
import SignOut from "../../(authPages)/login/SignOut";
import Register from "@/app/(authPages)/login/Register";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import type { RootState } from "@/app/redux/store";

// ১. NavItems কে মেইন কম্পোনেন্টের বাইরে নিয়ে আসা হয়েছে (Fixes the Error)
const NavItems = ({ 
  pathname, 
  className = "" 
}: { 
  pathname: string; 
  className?: string 
}) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={`flex ${className}`}>
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`text-sm md:text-base font-medium transition-all duration-300 ${
            pathname === link.path
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  if (pathname?.includes("dashboard")) return null;

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="navbar container mx-auto md:px-6 px-2">
        
        {/* Navbar Start: Mobile Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
              <HiMenuAlt1 className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-64 p-4 shadow-xl gap-4"
            >
              {/* Props হিসেবে pathname পাঠানো হচ্ছে */}
              <NavItems pathname={pathname} className="flex-col gap-4" />
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110">
              <Image alt="Logo" fill src={logo} className="object-contain" />
            </div>
            <span className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent hidden sm:block">
              Gadget Galaxy
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <NavItems pathname={pathname} className="flex-row gap-8" />
        </div>

        {/* Navbar End: Cart & Auth */}
        <div className="navbar-end flex items-center gap-3 md:gap-6">
          <div
            onClick={() => router.push("/cart")}
            className="relative p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors group"
          >
            <FaCartArrowDown className="text-xl md:text-2xl text-gray-700 group-hover:text-blue-600" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                {cartItems.length}
              </span>
            )}
          </div>

          {status === "authenticated" ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-gray-200">
                <div className="w-8 md:w-10 rounded-full">
                  <Image
                    alt="profile"
                    width={40}
                    height={40}
                    src={session?.user?.image || "https://ui-avatars.com/api/?name=" + session?.user?.name}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-2xl border border-gray-50"
              >
                <li className="menu-title text-gray-500">{session?.user?.name}</li>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/user-dashboard">Dashboard</Link></li>
                <div className="divider my-1"></div>
                <li><SignOut /></li>
              </ul>
            </div>
          ) : (
            <Register />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;