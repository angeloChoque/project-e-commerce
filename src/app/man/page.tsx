"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Search } from "lucide-react";
import { Data } from "@/types/product";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8 text-lg">
            No se encontraron productos que coincidan con el filtro.
          </p>
        )}
      </div>
    </div>
  );
}
