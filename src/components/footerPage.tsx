import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FOOTER_NAVIGATION } from "@/data/dataFooter";

export default function FooterPage() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Quick Navigation */}
          {FOOTER_NAVIGATION.map((footer) => {
            return (
              <div key={footer.title}>
                <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-100">
                  {footer.title}
                </h3>
                {footer.links.map((link) => {
                  return (
                    <ul key={link.label} className="space-y-2">
                      <li className="my-2">
                        <Link
                          href={link.href}
                          className="hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
          {/* Social Media in the center of the second row */}
          <div className="md:col-span-3 flex justify-center">
            <div className="mt-6 flex flex-col items-center">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Follow us on social media
              </h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-black-200 dark:border-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Your Online Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
