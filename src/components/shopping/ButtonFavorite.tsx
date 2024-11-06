"use client";
import { UseFavoriteStore } from "@/store/useFavoritesStore";
import React from "react";
import { Button } from "@/components/ui/button";
import { Data } from "@/types/likesItem";
import HeartFill from "../icons/HeartFill";
import Heart from "../icons/Heart";

interface DataProducts {
  products: Data;
}

const ButtonFavorite = ({ products }: DataProducts) => {
  const favoriteProducts = UseFavoriteStore((state) => state);

  return (
    <>
      <div>
        {favoriteProducts.likedItems.find((item) => item.id === products.id) ? (
          <Button onClick={() => favoriteProducts.toggleLike(products)}>
            <HeartFill />
          </Button>
        ) : (
          <Button onClick={() => favoriteProducts.toggleLike(products)}>
            <Heart />
          </Button>
        )}
      </div>
    </>
  );
};

export default ButtonFavorite;
