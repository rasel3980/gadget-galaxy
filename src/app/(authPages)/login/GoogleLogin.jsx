import { signIn } from "next-auth/react";
import React from "react";

const GoogleLogin = () => {
  return (
    <div>
      <div className=" flex justify-center gap-6 items-center">
        <button className="bg-blue-600 text-white" onClick={() => signIn("google")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
