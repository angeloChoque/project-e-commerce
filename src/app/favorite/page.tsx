"use client";

import ButtonCart from "@/components/shopping/buttonCart";
// import ButtonCart from "@/components/shopping/buttonCart";

import { Card } from "@/components/ui/card";
import { UseFavoriteStore } from "@/store/useFavoritesStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const itemsFavorite = UseFavoriteStore((state) => state.likedItems);

  return (
    <>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Products you like
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {itemsFavorite.map((img, index) => (
              <article key={img.id + index} className="p-3">
                <Card className="relative group">
                  <div className="relative h-96 w-full overflow-hidden flex justify-center items-center">
                    <Image
                      src={img.image}
                      alt={img.title}
                      height={320}
                      width={320}
                      className="rounded-lg transition-all duration-500 ease-in-out group-hover:scale-105 text-center"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-transparent to-transparent p-6">
                    <div className="flex flex-col justify-between items-center">
                      <div className="text-center">
                        <span className="text-white text-xl font-semibold block drop-shadow-lg">
                          {img.title}
                        </span>
                        <span className="text-white text-lg drop-shadow-lg">
                          ${img.price}
                        </span>
                      </div>
                      <div className="flex gap-4 mt-4 w-full">
                        <ButtonCart product={img} />
                        <Link
                          href={`/products/${img.id}`}
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded-xl flex items-center justify-center"
                        >
                          Buy
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </article>
            ))}
          </div>
          {itemsFavorite.length === 0 && (
            <p className="text-center text-gray-500 mt-8 text-lg">
              No products found that you like.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
