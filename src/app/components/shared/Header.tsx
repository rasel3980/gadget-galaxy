"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSession } from "next-auth/react";
import SignOut from "../../(authPages)/login/SignOut";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import type { RootState } from "@/app/redux/store";
import { FiUser } from "react-icons/fi";

const NavItems = ({
  pathname,
  className = "",
}: {
  pathname: string;
  className?: string;
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
          className={`text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 px-3 py-1 ${
            pathname === link.path
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-blue-500"
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
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-50 shadow-sm">
      <div className="navbar container mx-auto md:px-6 px-4 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 mr-2 bg-blue-300 hover:bg-blue-700 rounded-md text-white"
            >
              <HiMenuAlt1 className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-64 p-5 shadow-2xl border border-gray-100 gap-4"
            >
              <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-2">
                Navigation
              </h3>
              <NavItems pathname={pathname} className="flex-col gap-5" />
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-11 md:h-11 transition-transform group-hover:rotate-12">
              <Image alt="Logo" fill src={logo} className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-2xl font-black bg-linear-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent hidden sm:block tracking-tighter uppercase italic">
                Gadget Galaxy
              </span>
              <span className="text-[8px] font-bold text-gray-400 tracking-[0.3em] uppercase hidden sm:block">
                Future of Tech
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavItems pathname={pathname} className="flex-row gap-6" />
        </div>
        <div className="navbar-end flex items-center gap-4 md:gap-8">
          <div
            onClick={() => router.push("/cart")}
            className="relative p-2.5 cursor-pointer bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-tr-xl rounded-bl-xl transition-all group active:scale-90"
          >
            <FaCartArrowDown className="text-xl md:text-2xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full ring-2 ring-white animate-pulse">
                {cartItems.length}
              </span>
            )}
          </div>
          {status === "authenticated" ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-blue-100 hover:border-blue-400 transition-colors p-0.5"
              >
                <div className="w-9 md:w-10 rounded-full border border-white">
                  <Image
                    alt="profile"
                    width={40}
                    height={40}
                    src={
                      session?.user?.image ||
                      "https://ui-avatars.com/api/?background=3b82f6&color=fff&name=" +
                        session?.user?.name
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-4 w-60 p-4 shadow-2xl border border-gray-100"
              >
                <div className="px-4 py-3 mb-2 bg-gray-50 rounded-xl">
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                    Active Session
                  </p>
                  <p className="text-sm font-bold text-gray-800 line-clamp-1">
                    {session?.user?.name}
                  </p>
                </div>
                <li>
                  <Link href="user/profile" className="font-bold text-blue-600 py-2">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/user-dashboard" className="font-bold text-blue-600 py-2">
                    Dashboard
                  </Link>
                </li>
                <div className="divider my-1 opacity-50"></div>
                <li className="bg-red-50 text-red-600 rounded-lg">
                  <SignOut />
                </li>
              </ul>
            </div>
          ) : (
            <div className="scale-90 md:scale-100 origin-right">
              <Link href="/login">
                <div className="p-2.5 cursor-pointer bg-gray-900 hover:bg-blue-600 text-white rounded-tr-xl rounded-bl-xl transition-all group active:scale-90 flex items-center justify-center shadow-lg shadow-gray-200">
                  <FiUser className="text-xl md:text-2xl group-hover:scale-110 transition-transform" />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
