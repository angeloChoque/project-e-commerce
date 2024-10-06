import { create } from "zustand";
import { CartState, Data } from "@/types/product";

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (product: Data) =>
    set((state) => {
      const addProduct = state.cartItems.find((item) => item.id === product.id);
      if (addProduct) {
        return {
          cartItems: state.cartItems.map((items) =>
            items.id === product.id
              ? { ...items, quantity: items.quantity + 1 }
              : items
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
    }),
}));
