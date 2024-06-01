"use client";

import Link from "next/link";

import { Button } from "@saasfly/ui/button";

import useScroll from "~/hooks/use-scroll";
import type { MainNavItem } from "~/types";
import { MainNav } from "./main-nav";

interface NavBarProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
}

export function NavBar({ items, children, scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items}>{children}</MainNav>
        <Button className="px-3" variant="default" size="sm">
          <Link href={"/contact"}>Contact</Link>
        </Button>
      </div>
    </header>
  );
}
