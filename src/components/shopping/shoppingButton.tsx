import { ShoppingCart } from "lucide-react";
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

export default function ShoppingButton() {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="relative">
          <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
          <Badge className="absolute -top-1 -right-2 px-2 py-1 bg-orange-500">
            {totalItems}
          </Badge>
          <span className="sr-only">Shopping Cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" sideOffset={10} className="w-72 p-2">
        <DropdownMenuLabel>My Cart:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Mostrar productos en el carrito */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="flex items-center justify-between"
            >
              {/* Nombre del producto */}
              <span className="font-medium truncate w-28">{item.title}</span>

              {/* Contenedor para la cantidad y botones */}
              <div className="flex items-center mx-2">
                <Button size="sm" className="px-2">
                  -
                </Button>
                <span className="mx-1">{item.quantity}</span>
                <Button size="sm" className="px-2">
                  +
                </Button>
              </div>

              {/* Precio total del producto */}
              <span className="ml-auto">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem>No items in cart</DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        {/* Mostrar el total */}
        <DropdownMenuItem>
          <span className="font-medium">Total</span>
          <span className="ml-auto font-bold">${totalPrice}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center">
          <Button
            variant={"outline"}
            className="w-full rounded-xl bg-black text-white"
          >
            Go To Cart
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
// const totalPrice = cartItems
//   .reduce((acc, item) => acc + item.price * item.quantity, 0)
//   .toFixed(2);
