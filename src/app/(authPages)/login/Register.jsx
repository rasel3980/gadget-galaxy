import { signIn } from 'next-auth/react';
import React from 'react';

const Register = () => {
  return (
    <div>
        <button className="w-10 h-10 cursor-pointer rounded-full flex justify-center items-center bg-blue-600 text-white" onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default Register;