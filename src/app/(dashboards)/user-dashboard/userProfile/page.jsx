'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
    const session = useSession()
    return (
        <div className='flex justify-center items-center flex-col mt-12 border w-1/3 mx-auto py-5'>
            <div>
                <Image className='rounded-full' alt='profile' width={150} height={150} src={session.data.user.image}></Image>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-lg'>{session.data.user.name}</h1>
                <p>{session.data.user.email}</p>
            </div>
        </div>
    );
};

export default Profile;