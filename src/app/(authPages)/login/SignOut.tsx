'use client'
import { signOut } from 'next-auth/react';

const SignOut = () => {
    return (
        <div>
            <button onClick={() => signOut()}>Log Out</button>
        </div>
    );
};

export default SignOut;