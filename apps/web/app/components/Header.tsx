"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navItems } from "../data/content";

type NavChild = { label: string; href: string; children?: NavChild[] };

function MobileNavItem({ item, depth = 0, onClose }: { item: NavChild; depth?: number; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  if (!item.children?.length) {
    return (
      <Link href={item.href} onClick={onClose}
        className={`block py-2 text-sm transition-colors hover:text-[var(--color-maroon)] ${depth === 0 ? "font-medium text-foreground" : "text-muted-foreground pl-4"}`}>
        {item.label}
      </Link>
    );
  }
  return (
    <div>
      <button onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between py-2 text-sm font-medium hover:text-[var(--color-maroon)] ${depth === 0 ? "text-foreground" : "text-muted-foreground pl-4"}`}>
        {item.label}
        <span className="text-[10px] text-muted-foreground">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="ml-3 border-l border-border pl-3">
          {item.children!.map((child) => (
            <MobileNavItem key={child.href} item={child} depth={depth + 1} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
}

const NAV_LINKS = [
  { label: "Scriptures", href: "/sb" },
  { label: "Seminars", href: "/seminars" },
  { label: "Festivals", href: "/festivals" },
  { label: "Books", href: "/books" },
  { label: "Podcasts", href: "/podcasts" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-14">

        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-serif text-[var(--color-maroon)] font-bold text-lg leading-none tracking-tight">
            Bhanu Swami
          </span>
          <span className="text-muted-foreground text-[11px] hidden sm:inline tracking-widest uppercase">
            Archives
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Search className="h-4 w-4" />
          </Button>
          <Link href="/contact-us"
            className="hidden md:inline-flex items-center h-8 px-3 text-xs font-medium bg-[var(--color-maroon)] text-white rounded-md hover:bg-[var(--color-maroon-dark)] transition-colors">
            Contact
          </Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-8 w-8 text-muted-foreground">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white overflow-y-auto">
              <SheetHeader className="mb-4">
                <SheetTitle className="font-serif text-[var(--color-maroon)] text-left text-base">
                  Bhanu Swami Archives
                </SheetTitle>
              </SheetHeader>
              <Separator className="mb-4" />
              <nav className="flex flex-col gap-0.5">
                {(navItems as NavChild[]).map((item) => (
                  <MobileNavItem key={item.href} item={item} onClose={() => setMobileOpen(false)} />
                ))}
              </nav>
              <Separator className="my-4" />
              <Link href="/contact-us" onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-[var(--color-maroon)] hover:underline">
                Contact Us
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
