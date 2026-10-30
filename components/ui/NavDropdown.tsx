
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import type { NavigationDropdownConfig } from "@/data/navigation";

type NavDropdownProps = {
  item: NavigationDropdownConfig;
  variant?: "light" | "dark";
  mode?: "desktop" | "mobile";
  onNavigate?: () => void;
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

export default function NavDropdown({
  item,
  variant = "light",
  mode = "desktop",
  onNavigate,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const dark = variant === "dark";
  const activeItem = item.items[activeIndex];

  const linkColor = dark ? "text-white" : "text-[#102c59]";

  if (mode === "mobile") {
    return (
      <div className="w-full">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className={`flex w-full items-center justify-between border-b ${
            dark ? "border-white/15" : "border-black/10"
          } py-4 text-left text-sm ${linkColor} ${focusRing}`}
        >
          <span>{item.label}</span>
          <ChevronDown
            size={17}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div
            className={`border-b ${
              dark
                ? "border-white/15 bg-white/5"
                : "border-black/10 bg-slate-50"
            }`}
          >
            {item.items.map((entry, index) => (
              <div key={entry.label}>
                <div className="flex items-center">
                  <Link
                    href={entry.href}
                    onClick={onNavigate}
                    className={`flex-1 px-4 py-3.5 text-sm ${
                      activeIndex === index
                        ? "text-brand-red"
                        : linkColor
                    } ${focusRing}`}
                  >
                    {entry.label}
                  </Link>

                  {entry.children.length > 0 && (
                    <button
                      type="button"
                      aria-label={`Show ${entry.label} offerings`}
                      aria-expanded={activeIndex === index}
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === index ? -1 : index
                        )
                      }
                      className={`px-4 py-3.5 ${linkColor} ${focusRing}`}
                    >
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {activeIndex === index &&
                  entry.children.length > 0 && (
                    <ul className="pb-2 pl-8 pr-4">
                      {entry.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onNavigate}
                            className={`block py-2 text-[13px] ${
                              dark ? "text-white/75" : "text-slate-600"
                            } hover:text-brand-red ${focusRing}`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative flex h-[88px] items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((current) => !current)}
        onFocus={() => setOpen(true)}
        className={`relative flex h-full items-center gap-1.5 text-xs font-semibold tracking-wide  ${
          open ? "text-brand-red" : linkColor
        } ${focusRing}`}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
        <span
          className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-red transition-transform duration-200 ${
            open ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </button>

      <div
        className={`fixed inset-x-0 top-[88px] z-50 border-t border-black/5 bg-white text-[#102c59] shadow-[0_24px_50px_rgba(0,0,0,0.10)] transition-[opacity,visibility] duration-300 ease-in-out ${
            open
                ? "visible opacity-100"
                : "invisible opacity-0 pointer-events-none"
            }`}
        onMouseEnter={() => setOpen(true)}
        >
          <div className="mx-auto grid min-h-[340px] w-full max-w-[1440px] grid-cols-1 md:grid-cols-3">
            {/* Optional visual column */}
            {item.visualSrc && (
              <div className="flex items-center justify-center p-8 md:p-10">
                <Link
                  href={item.visualHref ?? "/"}
                  onClick={onNavigate}
                  className={`block w-full max-w-[390px] transition-transform duration-300 hover:scale-[1.02] ${focusRing}`}
                >
                  <img
                    src={item.visualSrc}
                    alt={item.visualAlt ?? ""}
                    className="h-auto w-full object-contain"
                  />
                </Link>
              </div>
            )}

            {/* Dropdown parent links */}
            <div className="border-l border-black/10">
              <p className="px-7 pb-4 pt-8 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 lg:px-8">
                {item.label}
              </p>

              <ul>
                {item.items.map((entry, index) => (
                  <li key={entry.label}>
                    <Link
                      href={entry.href}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={onNavigate}
                      className={`group flex min-h-[48px] items-center justify-between gap-4 px-7 py-3 text-sm font-semibold transition-colors duration-500 ease-in-out hover:text-brand-red lg:px-8 ${focusRing} ${
                        activeIndex === index
                          ? "text-brand-red"
                          : "text-[#102c59]"
                      }`}
                    >
                      {entry.label}
                      {entry.children.length > 0 && (
                    <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${
                        activeIndex === index
                            ? "translate-x-1 text-brand-red"
                            : "text-slate-400 group-hover:translate-x-1"
                        }`}
                    />
                    )}
                    </Link>
                    <div className="mx-7 h-px bg-black/[0.06] lg:mx-8" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Third column: children or static tab description */}
            <div className="border-l border-black/10 px-7 py-8 lg:px-10">
            {activeItem?.children.length ? (
                <>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {activeItem.label}
                </p>

                <ul className="space-y-1">
                    {activeItem.children.map((child) => (
                    <li key={child.href}>
                        <Link
                        href={child.href}
                        onClick={onNavigate}
                        className={`group flex items-center justify-between gap-3 py-3 text-sm font-semibold tracking-wide text-[#102c59] transition-colors duration-500 ease-in-out hover:text-brand-red ${focusRing}`}
                        >
                        {child.label}
                        <ArrowRight
                            size={15}
                            className="shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                        </Link>
                    </li>
                    ))}
                </ul>
                </>
            ) : (
                <div className="flex h-full flex-col pt-20">

                <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#292d32]">
                    {item.panelTitle}
                </h3>

                <p className="max-w-xl text-[15px] leading-[1.5] text-[#171717]">
                    {item.panelDescription}
                </p>
                </div>
            )}
            </div>

          </div>
        </div>
    </div>
  );
}
