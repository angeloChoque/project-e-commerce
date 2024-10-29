"use client";
import { useCartStore } from "@/store/useCartStore";
import { Data } from "@/types/product";
import Link from "next/link";
import React from "react";

interface ButtonCartProps {
  product: Data;
}

const ButtonBuy = (product: ButtonCartProps) => {
  const addProduct = useCartStore((set) => set.addToCart);
  return (
    <>
      <Link
        href={"/products/sheckout"}
        onClick={() => addProduct(product.product)}
        className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-xl flex items-center justify-center"
      >
        Buy now
      </Link>
    </>
  );
};

export default ButtonBuy;
