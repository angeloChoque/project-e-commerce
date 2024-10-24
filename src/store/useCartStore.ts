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
  removeCart: (id: number) =>
    set((state) => {
      const removeProduct = state.cartItems.find((item) => item.id === id);
      if (removeProduct) {
        if (removeProduct.quantity > 1) {
          return {
            cartItems: state.cartItems.map((items) =>
              items.id === id
                ? { ...items, quantity: items.quantity - 1 }
                : items
            ),
          };
        } else {
          return {
            cartItems: state.cartItems.filter((item) => item.id !== id),
          };
        }
      }
      return state;
    }),
  removeToList: (id: number) =>
    set((state) => {
      const eliminateList = state.cartItems.filter((item) => item.id !== id);
      return { cartItems: eliminateList };
    }),
}));
