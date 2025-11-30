'use client'
import React from 'react';
import { signIn } from "next-auth/react"
const LoginButton = () => {
    return (
        <div className='w-10 h-10 bg-blue-600 rounded-full text-white flex justify-center items-center'>
            <button onClick={()=>signIn()}>Login</button>
        </div>
    );
};

export default LoginButton;