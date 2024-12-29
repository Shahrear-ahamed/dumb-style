"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "../../../../public/logo.svg";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 w-[95%] max-w-screen-2xl items-center justify-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image
              src={logo}
              alt="Dumbstyle Logo"
              height={120}
              width={200}
              className="w-[120px] md:w-[200px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex">
            <div className="flex space-x-3 justify-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-primary duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
          <Button className="hidden md:inline-flex duration-300 border border-primary">
            Contact Us
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="default"
                className="px-[10px] py-3 rounded-full text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-3">
              <nav className="flex flex-col gap-4 mt-5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-2 py-1 text-sm"
                    onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button className="mt-4 w-full" onClick={() => setIsOpen(false)}>
                Contact Us
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
