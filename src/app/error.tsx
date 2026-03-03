"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="mb-6">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Something went wrong!</h2>
          <p className="mt-2 text-gray-600">
            We apologize for the inconvenience. An unexpected error has occurred in the application.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg transition-all text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;