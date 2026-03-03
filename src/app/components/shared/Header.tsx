"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { useSession } from "next-auth/react";
import SignOut from "../../(authPages)/login/SignOut";
import Register from "@/app/(authPages)/login/Register";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import type { RootState } from "@/app/redux/store";

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const navLinks = (
    <div className="md:text-lg text-md font-bold flex items-center gap-3 md:gap-8">
      <Link
        className={`link ${pathname === "/" ? "text-blue-600 font-bold" : "hover:text-blue-500"}`}
        href="/"
      >
        Home
      </Link>

      <Link
        className={`link ${pathname === "/products" ? "text-blue-600 font-bold" : "hover:text-blue-500"}`}
        href="/products"
      >
        Products
      </Link>

      <Link
        className={`link ${pathname === "/about" ? "text-blue-600 font-bold" : "hover:text-blue-500"}`}
        href="/about"
      >
        About
      </Link>

      <Link
        className={`link ${pathname === "/contact" ? "text-blue-600 font-bold" : "hover:text-blue-500"}`}
        href="/contact"
      >
        Contact Us
      </Link>
    </div>
  );

  if (pathname?.includes("dashboard")) {
    return null;
  }

  return (
    <div className="navbar md:px-10 px-3 shadow-sm">
    
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-72 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <div className="flex items-center">
          <Image alt="Logo" width={50} height={50} src={logo} />
          <Link href="/" className="md:text-3xl text-xl font-bold">
            Gadget Galaxy
          </Link>
        </div>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

  
      <div className="navbar-end flex gap-8 items-center">
  
        <div
          onClick={() => router.push("/cart")}
          className="relative cursor-pointer"
        >
          <FaCartArrowDown className="md:text-2xl text-lg" />
          <div className="absolute -top-3 -right-3 text-sm font-bold">
            {cartItems.length}
          </div>
        </div>

        {status === "authenticated" ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="md:w-10 w-8 rounded-full flex justify-center items-center">
                <Image
                  alt="profile"
                  width={40}
                  height={40}
                  src={session?.user?.image || "/default-avatar.png"}
                />
              </div>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/profile" className="justify-between">
                  Profile <span className="badge">New</span>
                </Link>
              </li>

              <li>
                <Link href="/user-dashboard">Dashboard</Link>
              </li>

              <li>
                <a>Settings</a>
              </li>

              <li>
                <SignOut />
              </li>
            </ul>
          </div>
        ) : (
          <Register />
        )}
      </div>
    </div>
  );
};

export default Header;
