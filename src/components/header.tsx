"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">ACME</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex space-x-8">
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
              <Link href="/products" className="text-sm font-medium">
                Products
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>
            </div>
          </nav>
          <div className="flex items-center">
            <div className="hidden md:block mr-4">
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Sun className="h-5 w-5" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favorites</span>
              </Button>
            </div>
            <div className="ml-4 md:hidden">
              <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/products"
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="px-2">
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
