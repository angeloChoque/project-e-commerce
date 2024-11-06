import { LikesState } from "@/types/likesItem";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const UseFavoriteStore = create<LikesState>()(
  persist(
    (set) => ({
      likedItems: [],
      toggleLike: (product) => {
        set((state) => {
          const findFavorite = state.likedItems.find(
            (item) => item.id === product.id
          );
          return findFavorite
            ? {
                likedItems: state.likedItems.filter(
                  (fav) => fav.id !== product.id
                ),
              }
            : { likedItems: [...state.likedItems, { ...product }] };
        });
      },
    }),
    {
      name: "favorite-store",
    }
  )
);
