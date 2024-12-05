"use client";

import Link from "next/link";
import GetInTouch from "./GetInTouch";

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-4 px-4 md:px-6 border-b lg:px-8 sticky top-0 z-10 backdrop-blur-md bg-background/80 dark:bg-gray-900/80">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Dumbstyle
        </Link>
        <div className="flex items-center space-x-4">
          {/* <nav className="hidden md:flex space-x-4">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-sm font-medium hover:underline">
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-sm font-medium hover:underline">
              Contact
            </a>
          </nav> */}
          <GetInTouch />
        </div>
      </div>
    </header>
  );
}
