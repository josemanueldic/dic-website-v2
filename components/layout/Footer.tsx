import Link from "next/link";
import { foundingYear } from "@/lib/data/stats";

const linkColumns = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/clients", label: "Clients" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    heading: "Work",
    links: [
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Projects" },
      { href: "/quality-hse", label: "Quality & HSE" },
    ],
  },
];

export function Footer() {
  const yearsActive = new Date().getFullYear() - foundingYear;

  return (
    <footer className="mt-auto border-t border-border/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-bold">Doha International Co.</p>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Since {foundingYear} · {yearsActive} years in Qatar
            </p>
          </div>

          {linkColumns.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                {column.heading}
              </p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 transition hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Contact
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm text-primary-foreground/80 transition hover:text-primary-foreground"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50">
          &copy; {new Date().getFullYear()} Doha International Co. W.L.L. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
