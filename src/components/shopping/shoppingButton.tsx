import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

export default function ShoppingButton() {
  const cartConfig = useCartStore((state) => state);

  const totalItems = cartConfig.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = cartConfig.cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="relative">
          <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1 -right-2 px-2 py-1 bg-orange-500">
              {totalItems}
            </Badge>
          )}
          <span className="sr-only">Shopping Cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" sideOffset={10} className="w-80 p-2">
        <DropdownMenuLabel>My shopping Cart:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-60 overflow-y-auto">
          {/* Mostrar productos en el carrito */}
          {cartConfig.cartItems.length > 0 ? (
            cartConfig.cartItems.map((item) => (
              <DropdownMenuLabel
                key={item.id}
                className="flex items-center justify-between p-2"
              >
                <span className="font-medium text-ellipsis w-32">
                  {item.title}
                </span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      cartConfig.removeCart(item.id);
                    }}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      cartConfig.addToCart(item);
                    }}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <span className="w-20 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-red-500"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    cartConfig.removeToList(item.id);
                  }}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </DropdownMenuLabel>
            ))
          ) : (
            <DropdownMenuLabel>No items in cart</DropdownMenuLabel>
          )}
        </div>
        <DropdownMenuSeparator className="bg-black" />
        {/* Mostrar el total */}
        <DropdownMenuLabel className="flex justify-between">
          <span className="font-medium">Total</span>
          <span className="ml-auto font-bold">${totalPrice}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center">
          <Link
            className="w-full text-center bg-blue-500 hover:bg-blue-700 self-center text-white font-semibold py-2 px-3 rounded-xl"
            href="/products/sheckout"
          >
            Go To Cart
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
