"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export default function Page() {
  const [isProcessing, setIsProcessing] = useState(false);

  const cartProducts = useCartStore((set) => set.cartItems);
  const cartRemove = useCartStore((set) => set.clearCart);

  const totalPrice = cartProducts
    .reduce((cc, item) => cc + item.price * item.quantity, 0)
    .toFixed(2);
  const router = useRouter();

  const priceWithTax = (parseFloat(totalPrice) + 10).toFixed(2);

  const NumbeProducts = cartProducts.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleClick = () => {
    const myPromise = new Promise<{ name: string }>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        success
          ? cartProducts.length > 0
            ? resolve({
                name: `${NumbeProducts} producto${
                  cartProducts.length > 1 ? "s" : ""
                }`,
              })
            : reject("Number of products is 0.")
          : reject("Ocurrió un error");
      }, 2000);
    });

    toast.promise(myPromise, {
      loading: "Cargando...",
      success: (data) => {
        cartRemove();
        router.push("/products");
        return `La compra de ${data.name} producto se ha realizado`;
      },
      error: (error) => error,
    });
    myPromise.finally(() => setIsProcessing(false));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);
    handleClick();
  };

  return (
    <>
      <div className="container h-screen xl:mx-auto lg:px-20 px-5 p-4">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-blue-500">Your order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between my-1 border-b">
                <p className="font-semibold mx-2">Product</p>
                <p className="font-semibold mr-4">Price</p>
              </div>
              <div className="h-56 overflow-auto">
                {cartProducts.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-center text-gray-500">
                      No products available to purchase.
                    </p>
                  </div>
                ) : (
                  cartProducts.map((item) => (
                    <div key={item.id} className="flex justify-between p-2">
                      <div className="flex space-x-4 self-start">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={50}
                          height={50}
                        />
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                      <p className="mr-1">{item.price * item.quantity}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t pt-4 ">
                <div className="flex justify-between mx-2">
                  <p>Subtotal</p>
                  <p>${totalPrice}</p>
                </div>
                <div className="flex justify-between mt-2 mx-2">
                  <p>Impuestos</p>
                  <p>$10.00</p>
                </div>
                <div className="flex justify-between mt-2 font-semibold border-t p-2">
                  <p>Total</p>
                  <p>{priceWithTax}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-blue-500">
                Payment information
              </CardTitle>
              <CardDescription>
                Enter your card details to process the payment.{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Juan Pérez" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="number">Card</Label>
                    <Input
                      id="number"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="month">Month</Label>
                      <Select>
                        <SelectTrigger id="month">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(
                            (month) => (
                              <SelectItem
                                key={month}
                                value={month.toString().padStart(2, "0")}
                              >
                                {month.toString().padStart(2, "0")}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="year">Year</Label>
                      <Select>
                        <SelectTrigger id="year">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from(
                            { length: 10 },
                            (_, i) => new Date().getFullYear() + i
                          ).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>

                  <CardFooter>
                    <Button
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 mt-6 "
                      type="submit"
                      disabled={isProcessing}
                    >
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Pagar ${priceWithTax}
                      </>
                    </Button>
                  </CardFooter>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
