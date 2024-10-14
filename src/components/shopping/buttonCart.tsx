"use client";
import React from "react";
import { Data } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";

interface ButtonCartProps {
  product: Data;
}

function ButtonCart({ product }: ButtonCartProps) {
  const addCart = useCartStore((state) => state.addToCart);

  //no es necesario el hanndle , pero lo hago para guiarme si esta dando click o no
  const handleAddToCart = (product: Data) => {
    addCart(product);
    console.log("Producto añadido al carrito:", product);
  };

  return (
    <button
      onClick={() => handleAddToCart(product)}
      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-3 rounded-xl flex items-center justify-center"
    >
      <ShoppingCart className="inline mr-2" />
      Cart
    </button>
  );
}

export default ButtonCart;
