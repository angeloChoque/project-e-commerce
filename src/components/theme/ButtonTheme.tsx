import React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ButtonTheme = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="destructive" size="icon">
            <Sun className="hover:text-yellow-400 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="hover:text-blue-950 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="text-center bg-slate-50 dark:bg-black border-0"
        >
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className=" dark:hover:bg-gray-700 "
          >
            Light
            <Sun size={15} className=" ml-1" />
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className=" dark:hover:bg-gray-700"
          >
            Dark
            <Moon size={15} className=" ml-1" />
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className=" dark:hover:bg-gray-700"
          >
            System
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="ml-1 size-3"
            >
              <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
            </svg>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ButtonTheme;
