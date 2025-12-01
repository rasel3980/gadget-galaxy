'use client';

export const dynamic = "force-dynamic";

import Image from 'next/image';
import React from 'react';

const Profile = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-12 border w-1/3 mx-auto py-5'>
            <div>
                <Image
                    className='rounded-full'
                    alt='profile'
                    width={150}
                    height={150}
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                />
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-lg'>Rasel</h1>
                <p>Test@gmail.com</p>
            </div>
        </div>
    );
};

export default Profile;
