import Image from "next/image";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

type Data = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function getProducts() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data: Data[] = await res.json();
  return data;
}

async function ListProductos() {
  const products = await getProducts();

  const ProductMen = products.filter(
    (men) => men.category === "men's clothing"
  );
  const ProductWomen = products.filter(
    (women) => women.category === "women's clothing"
  );

  return (
    <section className="mx-4 my-14 lg:mx-28 xl:mx-48">
      <h1 className=" mb-16 text-4xl text-center">PRODUCTS</h1>
      <div className="text-center">
        <h3 className="text-2xl my-8 ml-7 text-start">For Men:</h3>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {ProductMen.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <article className="p-3">
                  <Card className="relative group">
                    <div className="relative h-96 w-full overflow-hidden flex justify-center items-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        height={320}
                        width={320}
                        className="rounded-lg transition-all duration-500 ease-in-out group-hover:scale-105 text-center"
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
                          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-3 rounded-xl flex items-center justify-center">
                            <ShoppingCart className="inline mr-2" />
                            Cart
                          </button>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="text-center">
        <h3 className="text-2xl my-8 ml-7 text-start">For Women:</h3>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {ProductWomen.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <article className="p-3">
                  <Card className="relative group">
                    <div className="relative h-96 w-full overflow-hidden flex justify-center items-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        height={320}
                        width={320}
                        className="rounded-lg transition-all duration-500 ease-in-out group-hover:scale-105 text-center"
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
                          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-3 rounded-xl flex items-center justify-center">
                            <ShoppingCart className="inline mr-2" />
                            Cart
                          </button>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default ListProductos;
