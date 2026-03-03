"use client";

import Lottie from "lottie-react";
import loaderAnimation from "../../public/Material wave loading.json"; 

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64 w-full">
      <div className="w-48 h-48"> 
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
    </div>
  );
};

export default LoadingSpinner;