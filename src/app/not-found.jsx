import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5'>
            <p className='text-8xl'>404 not found page</p>
            <Link href={"/"}><button className='px-8 py-1 cursor-pointer bg-blue-600 text-white rounded-md'>Go to Home</button></Link>
        </div>
    );
};

export default NotFoundPage;