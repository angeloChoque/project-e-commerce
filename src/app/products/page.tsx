import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="h-screen flex flex-col text-center justify-center">
      <h1 className="self-center text-4xl my-8">
        ¡¡¡Thank you for shopping at the best store in the world!!!
      </h1>
      <Link
        className="flex bg-blue-500 hover:bg-blue-700 self-center text-white font-semibold py-2 px-3 rounded-xl my-2  "
        href={"/"}
      >
        <ShoppingCart className="pr-2" />
        continue shopping
      </Link>
    </div>
  );
}

export default page;
