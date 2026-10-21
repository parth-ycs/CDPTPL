"use client"
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export default function TextLink({
  href,
  className = "",
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`mt-[18px] inline-flex items-center gap-[9px] text-xs font-bold tracking-[0.03em] hover:text-brand-red ${className}`}
    >
      {children}
      <ArrowRight size={15} aria-hidden="true" />
    </a>
  );
}
