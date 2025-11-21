'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {  useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const cartItems = useSelector((state)=>state.cart.items)
  const pathname = usePathname();
  const router = useRouter()
    const navLinks = <div className="text-lg font-bold flex items-center gap-8">
        <Link className={`link ${pathname === '/' ? 'text-blue-600 font-bold' : 'hover:text-blue-500 '}`} href={"/"}>Home</Link>
        <Link className={`link ${pathname === '/products' ? 'text-blue-600 font-bold' : 'hover:text-blue-500'}`} href={"/products"}>Products</Link>
        <Link className={`link ${pathname === '/about' ? 'text-blue-600 font-bold' : 'hover:text-blue-500'}`}  href={"/about"}>About</Link>
        <Link className={`link ${pathname === '/contact' ? 'text-blue-600 font-bold' : 'hover:text-blue-500'}`}  href={"/contact"}>Contact Us</Link>
    </div>
    
    
    console.log("pathName",pathname,);
    if(!pathname.includes("dashboard")){
        return (
    <div className="navbar bg-base-100 shadow-sm">
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
        <a className="btn btn-ghost text-2xl font-bold">Gadget Galaxy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      
      <div className="navbar-end flex gap-8 items-center">
        <div onClick={()=>router.push('/cart')} className="relative cursor-pointer">
          <FaCartArrowDown size={30} />
          <div className="absolute -top-3 -right-3">
          {cartItems.length}
          </div>
      </div>
        <button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">Login</button>
      </div>
    </div>
  );
    }
    else{
        return <></>
    }
    
  
};

export default Header;
