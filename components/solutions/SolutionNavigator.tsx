"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Check } from "lucide-react";

type NavigationItem = {
  slug: string;
  label: string;
  href: string;
};

type Props = {
  label: string;
  currentLabel: string;
  items: NavigationItem[];
};

export default function ServiceNavigator({
  label,
  currentLabel,
  items,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
      <span className="text-sm font-medium text-slate-500">
        {label}
      </span>

      <div ref={dropdownRef} className="relative w-full sm:w-[320px]">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-[#102c59] transition-colors duration-300 hover:border-[#102c59]/50"
        >
          <span className="truncate">{currentLabel}</span>

          <ChevronDown
            size={18}
            className={`shrink-0 text-slate-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl transition-all duration-300 ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          {items.map((item) => {
            const isCurrent = item.label === currentLabel;

            return (
              <Link
                key={item.slug}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 text-sm transition-colors duration-300 ${
                  isCurrent
                    ? "bg-slate-50 font-semibold text-[#102c59]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#102c59]"
                }`}
              >
                <span>{item.label}</span>
                {isCurrent && (
                  <Check size={16} className="text-red-600" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}