"use client"
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const variants = {
  red: "bg-brand-red text-white hover:bg-brand-red-dark",
  blue: "bg-brand-blue text-white hover:bg-brand-blue/90",
  ghost: "border-white/55 text-white hover:bg-white hover:text-ink",
};

type Props = {
  href: string;
  variant?: keyof typeof variants;
  arrow?: boolean;
  children: ReactNode;
};

export default function ButtonLink({
  href,
  variant = "red",
  arrow = true,
  children,
}: Props) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-3 border border-transparent px-5 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors sm:w-auto ${variants[variant]}`}
    >
      {children}
      {arrow && <ArrowRight size={17} aria-hidden="true" />}
    </a>
  );
}
