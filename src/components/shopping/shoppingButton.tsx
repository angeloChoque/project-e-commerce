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

export default function ShoppingButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="relative">
          <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
          <Badge className="absolute -top-1 -right-2 px-2 py-1 bg-orange-500">
            3
          </Badge>
          <span className="sr-only">Shopping Cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" sideOffset={10} className="w-56 p-2">
        <DropdownMenuLabel>My Cart:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="font-medium">Producto 1</span>
          <span className="ml-auto">$19.99</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="font-medium">Producto 2</span>
          <span className="ml-auto">$29.99</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="font-medium">Producto 3</span>
          <span className="ml-auto">$39.99</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="font-medium">Total</span>
          <span className="ml-auto font-bold">$89.97</span>
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
