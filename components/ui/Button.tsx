import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "outline-light";

const variantClasses: Record<Variant, string> = {
  solid:
    "bg-accent text-accent-foreground hover:brightness-105 shadow-sm shadow-accent/30",
  outline: "border border-border text-primary hover:bg-muted",
  "outline-light":
    "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:scale-[0.98]";

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function LinkButton({ href, variant = "solid", className = "", children }: LinkButtonProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "solid", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
