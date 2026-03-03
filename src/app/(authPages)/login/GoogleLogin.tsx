'use client'
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <button
        onClick={() => signIn("google")}
        className="flex items-center gap-2 px-4 py-2 rounded-md shadow hover:shadow-lg transition-all bg-white border border-gray-300"
      >
        <FcGoogle size={24} />
        <span className="font-medium text-gray-700">Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;