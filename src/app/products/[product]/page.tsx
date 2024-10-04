import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Start from "@/components/ui/start";
import { Data, Params } from "@/types/product";

async function getProducts(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data: Data = await res.json();
  return data;
}

async function Page({ params }: { params: Params }) {
  const product = await getProducts(params.product);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
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
          <div className="space-y-4">
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Agregar al Carrito
            </Button>
            <Button variant="outline" className="w-full">
              <Heart className="w-4 h-4 mr-2" />
              Agregar a la Lista de Deseos
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
