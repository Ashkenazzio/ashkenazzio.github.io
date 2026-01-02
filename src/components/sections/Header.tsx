"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"></div>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 py-4 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <a href="/" className="cursor-pointer">
                <span className="text-xl font-bold text-primary">OA.</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors cursor-pointer link-underline"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full cursor-pointer"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {mounted && (
                    <>
                      {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </>
                  )}
                </Button>
                <a
                  href="/Omri_Ashkenazi_CV.pdf"
                  download="Omri_Ashkenazi_CV.pdf"
                  className="cursor-pointer"
                >
                  <Button size="sm" className="ml-4 btn-glow cursor-pointer">
                    Resume
                  </Button>
                </a>
              </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full cursor-pointer"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {mounted && (
                  <>
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </>
                )}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-md cursor-pointer"
                    aria-label="Open main menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="text-lg font-medium hover:text-primary transition-colors py-2"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                    <div className="pt-4 border-t border-border">
                      <SheetClose asChild>
                        <a
                          href="/Omri_Ashkenazi_CV.pdf"
                          download="Omri_Ashkenazi_CV.pdf"
                        >
                          <Button className="w-full">Resume</Button>
                        </a>
                      </SheetClose>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
