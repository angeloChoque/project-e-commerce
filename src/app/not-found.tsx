import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-black">
      <div className="text-center space-y-4">
        <div className="text-3xl mb-5">
          Page Not Found, please return to the Home Page 🚀
        </div>
        <Link
          href={"/"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
