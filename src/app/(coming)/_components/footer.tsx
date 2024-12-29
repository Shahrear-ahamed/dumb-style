import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 lg:px-8 border-t dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Dumbstyle. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center space-x-4">
          <Link
            target="_blank"
            href="https://www.facebook.com/dumbstylecorporation"
            className="text-muted-foreground hover:text-primary">
            <Facebook size={20} />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/@dumbstyle.official"
            className="text-muted-foreground hover:text-primary">
            <Youtube size={20} />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
