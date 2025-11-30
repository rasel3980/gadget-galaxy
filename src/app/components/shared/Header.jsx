'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {  useSelector } from "react-redux";
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import LoginButton from "../LoginButton";
import { useSession } from "next-auth/react";
import SignOut from "../SignOut";

const Header = () => {
  const cartItems = useSelector((state)=>state.cart.items)
  const pathname = usePathname();
  const router = useRouter();
  const session = useSession();
  if(session.status==="authenticated"){
    console.log("yesssss");
  }
  else{
    console.log("Noooooooo");
  }
  console.log("session",session);
    const navLinks = <div className="md:text-lg text-md font-bold flex items-center gap-3 md:gap-8">
        <Link className={`link ${pathname === '/' ? 'text-blue-600 font-bold' : 'hover:text-blue-500 '}`} href={"/"}>Home</Link>
        <Link className={`link ${pathname === '/products' ? 'text-blue-600 font-bold' : 'hover:text-blue-500'}`} href={"/products"}>Products</Link>
        <Link className={`link ${pathname === '/about' ? 'text-blue-600 font-bold' : 'hover:text-blue-500'}`}  href={"/about"}>About</Link>
        <Link className={`link ${pathname === '/contact' ? 'text-blue-600 font-bold' : 'hover:text-blue-500'}`}  href={"/contact"}>Contact Us</Link>
    </div>
    
    
    console.log("pathName",pathname,);
    if(!pathname.includes("dashboard")){
        return (
    <div className="navbar md:px-10 px-3 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost md:text-2xl text-xl font-bold">Gadget Galaxy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      
      <div className="navbar-end flex gap-8 items-center">
        <div onClick={()=>router.push('/cart')} className="relative cursor-pointer">
          <FaCartArrowDown className="md:text-2xl text-lg" />
          <div className="absolute -top-3 -right-3">
          {cartItems.length}
          </div>
      </div>

          {session.status === "authenticated" ? <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="md:w-10 w-8 rounded-full border-5 border-green-600  flex justify-center items-center">
          <button className="cursor-pointer md:text-2xl text-lg"><FaUserCircle /></button>
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link href={"user-dashboard"}>Dashboard</Link></li>
        <li><a>Settings</a></li>
        <li><SignOut></SignOut></li>
      </ul>
    </div>:<LoginButton></LoginButton> }
      </div>
    </div>
  );
    }
    else{
        return <></>
    }
    
  
};

export default Header;
