import React from 'react';
import { CgProfile } from "react-icons/cg";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { TbShoppingCartHeart } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2 border-r-2'>
            <ul className='space-y-14 pt-5'>
                <li>
                    <a  className='flex items-center gap-2'><CgProfile />Profile</a>
                </li>
                <li>
                    <a className='flex items-center gap-2'><BiSolidPurchaseTag />Purchase History</a>
                </li>
                <li>
                    <a className='flex items-center gap-2'><TbShoppingCartHeart />Wishlist</a>
                </li>
                <li>
                    <a className='flex items-center gap-2'><MdPayment />Payment Info</a>
                </li>
                <li>
                    <a className='flex items-center gap-2'><IoAnalyticsSharp />Analytics</a>
                </li>
                <li>
                    <a className='flex items-center gap-2'><CiSettings />Settings</a>
                </li>
                <li>
                    <a className='flex items-center gap-2'><LuLogOut />Logout</a>
                </li>
            </ul>
            </div>
            <div className='col-span-9'>
            {children}
            </div>
            
        </div>
    );
};

export default DashboardLayout;