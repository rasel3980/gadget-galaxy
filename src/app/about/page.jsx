'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {
    const router = useRouter();
    const isLoginUser = false;
    const handleAddress= ()=>{
        if(isLoginUser){
        router.push('/about/address')
    }
    else{
        router.push('/')
    }
    }
    
    return (
        <div>
            <h1>This is about page</h1>
            <p className='py-7'>
                <Link href={"/about/address"}>Go address</Link>
            </p>

            <button onClick={handleAddress}>Address</button>

        </div>
    );
};

export default About;