"use client";

import Link from "next/link";
import { useState } from "react";
import { LinkButton } from "@/components/ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/quality-hse", label: "Quality & HSE" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-primary">
          Doha International Co.
        </Link>

        <nav className="hidden gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm text-foreground/80 transition hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="/contact" className="px-5 py-2.5 text-xs">
            Request a Quote
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-md text-primary lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-primary"
            >
              Contact
            </Link>
            <LinkButton href="/contact" className="mt-2 w-full">
              Request a Quote
            </LinkButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
