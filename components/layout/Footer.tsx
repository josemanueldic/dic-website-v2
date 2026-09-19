import { foundingYear } from "@/lib/data/stats";

export function Footer() {
  const yearsActive = new Date().getFullYear() - foundingYear;

  return (
    <footer className="mt-auto border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <p className="font-semibold">Doha International Co. W.L.L.</p>
        <p className="mt-1 text-primary-foreground/80">
          Since {foundingYear} · {yearsActive} years in Qatar
        </p>
        <p className="mt-6 text-xs text-primary-foreground/60">
          &copy; {new Date().getFullYear()} Doha International Co. W.L.L. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
