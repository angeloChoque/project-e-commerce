"use client";

import Link from "next/link";
import { ShoppingCart, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ITEMS_NAV } from "@/data/dataHeader";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ButtonTheme from "./theme/ButtonTheme";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 w-full bg-white dark:bg-[#18181b] dark:border-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={"/logo2.png"}
                alt="logo Clothing Store"
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex space-x-8">
              {ITEMS_NAV.map((items) => {
                return (
                  <Link
                    key={items.name}
                    href={items.href}
                    className="text-lg font-medium"
                  >
                    {items.name}
                  </Link>
                );
              })}
            </div>
          </nav>
          <div className="flex items-center">
            <div className="hidden md:block mr-4">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-xl"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Button>
              <ButtonTheme />
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favorites</span>
              </Button>
            </div>
            <div className="ml-4 md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="link" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="dark:bg-[#18181b] dark:text-white border-l-0"
                >
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col mt-4 space-y-4">
                    {ITEMS_NAV.map((items) => {
                      return (
                        <Link
                          key={items.name}
                          href={items.href}
                          className="text-sm font-medium"
                        >
                          {items.name}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full rounded-xl"
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
