"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MAIN_NAV, CONTACT_INFO } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "default" | "transparent";
  sticky?: boolean;
}

export function Header({ variant = "default", sticky = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = variant === "transparent" && !scrolled;

  return (
    <header
      className={cn(
        "w-full border-b transition-all duration-300 z-50",
        sticky && "sticky top-0",
        isTransparent
          ? "bg-white/95 backdrop-blur-md border-white/20"
          : "bg-white border-gray-200",
        scrolled && "shadow-sm"
      )}
    >
      {/* Top bar with contact info - hidden on mobile */}
      <div className="hidden lg:block bg-black text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>{CONTACT_INFO.phone.primary}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>{CONTACT_INFO.email.general}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-gray-300">24/7 Emergency Support Available</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-black text-white px-3 py-2 rounded font-bold text-xl">
              C
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-black">Continuate</div>
              <div className="text-xs text-gray-600 -mt-1">IT Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {MAIN_NAV.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="text-black hover:text-gray-700">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50",
                                      pathname === child.href && "bg-gray-50"
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {child.label}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-50",
                          pathname === item.href
                            ? "text-black bg-gray-50"
                            : "text-gray-700 hover:text-black"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button asChild>
                <Link href="/quote">Get Quote</Link>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 animate-slide-up">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
              <nav className="space-y-2">
                {MAIN_NAV.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700">
                          <span>{item.label}</span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                        <div className="ml-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          pathname === item.href
                            ? "text-black bg-gray-50"
                            : "text-gray-700 hover:text-black hover:bg-gray-50"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <Button asChild className="w-full">
                    <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}