"use client";

import { useState } from "react";
import { CreditCard, ShoppingCart } from "lucide-react";
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

export default function Page() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("¡Compra realizada con éxito!");
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Resumen del Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                <div>
                  <h3 className="font-semibold">Nombre del Producto</h3>
                  <p className="text-sm text-gray-500">Descripción corta</p>
                </div>
              </div>
              <p className="font-semibold">$99.99</p>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$99.99</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Impuestos</p>
                <p>$10.00</p>
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <p>Total</p>
                <p>$109.99</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información de Pago</CardTitle>
            <CardDescription>
              Ingrese los detalles de su tarjeta para procesar el pago
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre en la tarjeta</Label>
                  <Input id="name" placeholder="Juan Pérez" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number">Número de tarjeta</Label>
                  <Input
                    id="number"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="month">Mes</Label>
                    <Select>
                      <SelectTrigger id="month">
                        <SelectValue placeholder="Mes" />
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
                    <Label htmlFor="year">Año</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Año" />
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
              </div>
              <Button
                className="w-full mt-6"
                type="submit"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>Procesando...</>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Pagar $109.99
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
