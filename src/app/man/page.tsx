"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Search } from "lucide-react";

const imageData = [
  {
    id: 1,
    name: "Paisaje montañoso",
    url: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Playa tropical",
    url: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Ciudad nocturna",
    url: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Bosque otoñal",
    url: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Desierto al atardecer",
    url: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Cascada en la selva",
    url: "/placeholder.svg?height=200&width=200",
  },
];

export default function Component() {
  const [filter, setFilter] = useState("");

  const filteredImages = imageData.filter((img) =>
    img.name.toLowerCase().includes(filter.toLowerCase())
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
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={img.url}
                alt={img.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {img.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {filteredImages.length === 0 && (
          <p className="text-center text-gray-500 mt-8 text-lg">
            No se encontraron imágenes que coincidan con el filtro.
          </p>
        )}
      </div>
    </div>
  );
}
