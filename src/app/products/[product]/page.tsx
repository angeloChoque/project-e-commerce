import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Start from "@/components/ui/start";
import { Data, Params } from "@/types/product";
import { Separator } from "@/components/ui/separator";
import ButtonCart from "@/components/shopping/buttonCart";
import ButtonBuy from "@/components/shopping/buttonBuy";

async function getProducts(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data: Data = await res.json();
  return data;
}

async function Page({ params }: { params: Params }) {
  const product = await getProducts(params.product);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw, 
            33vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6 border-2 rounded-xl p-5 pt-10 shadow-lg ">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="flex items-center space-x-2">
              <Start rate={product.rating.rate} />
              <span className="text-sm text-gray-600">
                {`(${product.rating.count} calificaciones)`}
              </span>
            </div>
            <div className="text-3xl font-bold">US${product.price}</div>
            <p className="text-gray-600">{product.description}</p>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Color:
                </label>
                <select
                  id="color"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Negro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="size"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tamaño:
                </label>
                <select
                  id="size"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>5 QT</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-4">
              <ButtonCart product={product} />
              <ButtonBuy product={product} />
              <Button variant="outline">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-black mt-10 dark:bg-white" />
    </>
  );
}

export default Page;
