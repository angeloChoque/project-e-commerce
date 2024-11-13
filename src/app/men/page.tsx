"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Search } from "lucide-react";
import { Data } from "@/types/product";
import { Card } from "@/components/ui/card";
import ButtonCart from "@/components/shopping/buttonCart";
import Link from "next/link";

export default function Component() {
  const [filter, setFilter] = useState("");
  const [ProductsMen, setProductsMen] = useState<Data[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Data[]) => setProductsMen(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const ProductMen = ProductsMen.filter(
    (men) => men.category === "men's clothing"
  );

  const filteredProducts = ProductMen.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Men{"'"}s clothing
        </h1>
        <div className="mb-6">
          <Label
            htmlFor="filter"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block mb-2"
          >
            Search:
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write a name..."
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <article key={product.id} className="p-3">
              <Card className="relative group">
                <div className="relative h-96 w-full overflow-hidden flex justify-center items-center">
                  <Image
                    src={product.image}
                    alt={product.title}
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
                        {product.title}
                      </span>
                      <span className="text-white text-lg drop-shadow-lg">
                        ${product.price}
                      </span>
                    </div>
                    <div className="flex gap-4 mt-4 w-full">
                      <ButtonCart product={product} />
                      <Link
                        href={`/products/${product.id}`}
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
        </section>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8 text-lg">
            No products were found that matched the filter.
          </p>
        )}
      </div>
    </div>
  );
}
