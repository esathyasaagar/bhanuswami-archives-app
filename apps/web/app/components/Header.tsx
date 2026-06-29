"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../data/content";

type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

function DropdownMenu({ items }: { items: NavChild[] }) {
  return (
    <div className="dropdown-content">
      {items.map((item) =>
        item.children ? (
          <div key={item.href} className="subdropdown">
            <a href={item.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {item.label} <span>▶</span>
            </a>
            <div className="subdropdown-content">
              {item.children.map((sub) => (
                <a key={sub.href} href={sub.href}>{sub.label}</a>
              ))}
            </div>
          </div>
        ) : (
          <a key={item.href} href={item.href}>{item.label}</a>
        )
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <header>
      {/* Top bar */}
      <div style={{ background: "#1a1a1a", borderBottom: "3px solid #8b1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}>
            <div style={{ padding: "14px 0" }}>
              <div style={{ color: "#c8a84b", fontFamily: "Georgia, serif", fontSize: 28, fontWeight: "bold", letterSpacing: 1 }}>
                Bhanu Swami Archives
              </div>
              <div style={{ color: "#999", fontFamily: "Arial, sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
                Lectures · Seminars · Festivals · Books
              </div>
            </div>
          </Link>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#aaa", fontFamily: "Arial, sans-serif", fontSize: 11 }}>Today: {today}</div>
            <Link href="/contact" style={{ color: "#c8a84b", fontFamily: "Arial, sans-serif", fontSize: 12, marginTop: 2, display: "block" }}>
              Volunteer Devotees – Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ background: "#8b1a1a", borderBottom: "2px solid #6b1212" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          {(navItems as NavItem[]).map((item) =>
            item.children ? (
              <div key={item.href} className="dropdown">
                <a href={item.href} className="nav-link" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {item.label} <span style={{ fontSize: 9, marginTop: 1 }}>▼</span>
                </a>
                <DropdownMenu items={item.children} />
              </div>
            ) : (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
