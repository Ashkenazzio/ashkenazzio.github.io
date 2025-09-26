import Link from "next/link";
import { Button } from "../ui/button";

import { Droplet, Menu, Sun, Moon } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"></div>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <a href="/">
                <span className="text-xl font-bold text-primary">OA.</span>
              </a>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contact
                </a>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full"
                  type="button"
                  id="radix-:r0:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <div>
                    <Droplet />
                  </div>
                  <span className="sr-only">Toggle theme</span>
                </button>
                <div>
                  <div
                    role="menuitem"
                    // className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-accent"
                    tabIndex={-1}
                    data-orientation="vertical"
                    data-radix-collection-item=""
                  >
                    <div className="flex items-center ">
                      <Sun />
                      <span className="ml-2">Light</span>
                    </div>
                  </div>
                  <div
                    role="menuitem"
                    // className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    tabIndex={-1}
                    data-orientation="vertical"
                    data-radix-collection-item=""
                  >
                    <div className="flex items-center ">
                      <Moon />
                      <span className="ml-2">Dark</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.dropbox.com/scl/fi/q4xrx79y71qi3i01yffja/Aathif_Zahir_CV.pdf?rlkey=7v6aicpcshu6h1diqyq9cb0p2&amp;st=wbf2xkt8&amp;dl=1"
                  download="Omri_Ashkenazi_CV.pdf"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-4"
                >
                  Resume
                </a>
              </div>
            </nav>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full"
                type="button"
                id="radix-:r2:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <div>
                  <Droplet />
                </div>
                <span className="sr-only">Toggle theme</span>
              </button>
              <button className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-400 hover:text-primary focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
