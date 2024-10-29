import { create } from "zustand";
import { CartState, Data } from "@/types/product";
import { persist } from "zustand/middleware";

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (product: Data) => {
        set((state) => {
          const existingProduct = state.cartItems.find(
            (item) => item.id === product.id
          );
          const updatedCart = existingProduct
            ? state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.cartItems, { ...product, quantity: 1 }];
          return { cartItems: updatedCart };
        });
      },
      removeCart: (id: number) => {
        set((state) => {
          const updatedCart = state.cartItems
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0);
          return { cartItems: updatedCart };
        });
      },
      removeToList: (id: number) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        }));
      },
      clearCart: () => {
        set(() => ({
          cartItems: [],
        }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
