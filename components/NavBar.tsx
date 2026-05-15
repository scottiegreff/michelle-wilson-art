"use client";

import Link from "next/link";
import { useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Studio Notes", href: "/studio-notes" },
  { label: "Inquiries", href: "/inquiries" },
];

export default function NavBar() {
  const { direction, atTop } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  const hidden = direction === "down" && !atTop && !menuOpen;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div
        className={[
          "border-b transition-colors duration-300",
          atTop
            ? "bg-transparent border-transparent"
            : "bg-(--nav-bg) backdrop-blur-md border-muted",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo / Home */}
          <Link
            href="/"
            className="font-serif font-extrabold text-2xl tracking-tight text-foreground hover:opacity-70 transition-opacity"
          >
            Michelle R. Wilson
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href} className="flex items-center">
                {i > 0 && (
                  <span
                    className="text-accent select-none pointer-events-none pr-1 text-sm"
                    aria-hidden
                  >
                    /
                  </span>
                )}
                <Link
                  href={link.href}
                  className="text-sm font-sans font-light tracking-wide text-foreground hover:text-accent transition-colors px-2 py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.25 p-2 -mr-2 group"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={[
                "block w-6 h-px bg-foreground transition-all duration-300 origin-center",
                menuOpen ? "rotate-45 translate-y-1.75" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-px bg-foreground transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-px bg-foreground transition-all duration-300 origin-center",
                menuOpen ? "-rotate-45 -translate-y-1.75" : "",
              ].join(" ")}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-(--nav-bg) backdrop-blur-md border-b border-muted",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2.5 text-base font-sans font-light tracking-wide text-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
