'use client'
export const dynamic = "force-dynamic";
import LoadingSpinner from '@/app/loading';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const UserProfile = () => {
    const {data:session,status} = useSession()
    if(status === "loading"){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='flex justify-center items-center flex-col mt-12 border w-1/3 mx-auto py-5'>
            <div>
                <Image className='rounded-full' alt='profile' width={150} height={150} src={session.user.image}></Image>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-lg'>{session.user.name}</h1>
                <p>{session.user.email}</p>
            </div>
        </div>
    );
};

export default UserProfile;