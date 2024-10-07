"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const links = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <MaxWidthWrapper>
        <div className="sticky top-0 flex h-16 items-center justify-between gap-4  mb-4">
          <div className="text-lg font-bold">Subrat</div>
          <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
            {links.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    link.href === pathname
                      ? "text-black hover:text-foreground text-base font-normal transition-all duration-300"
                      : "text-white/60 hover:text-foreground text-base font-normal transition-all duration-300"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="shrink-0 md:hidden" variant="outline">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-5">
                {links.map((link) => {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        link.href === pathname
                          ? "text-black hover:text-foreground text-base font-normal transition-all duration-300"
                          : "text-white/60 hover:text-foreground text-base font-normal transition-all duration-300"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Navbar;
