
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";

import Logo from "./ui/logo";
import NavDropdown from "./ui/NavDropdown";
import { navigationItems } from "@/data/navigation";

type NavbarProps = {
  variant?: "light" | "dark";
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

export default function Navbar({
  variant = "light",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const dark = variant === "dark";

  const navText = dark ? "text-white" : "text-[#102c59]";
  const navBorder = dark ? "border-white/40" : "border-[#102c59]/35";

  // Preserve the original dark gradient.
  const headerBackground = dark
    ? "bg-gradient-to-b from-[#051a35]/95 via-[#051a35]/30 to-[#051a35]/0"
    : "bg-white/80";

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-[#102c59] backdrop-blur-md transition-all duration-700 ease-in-out ${headerBackground}`}
    >
      {/* Main navigation */}
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Chemdist Group home"
          onClick={closeMobileMenu}
          className={`inline-flex shrink-0 items-center transition-[filter] duration-700 ease-in-out ${focusRing} ${
            dark ? "brightness-0 invert" : ""
          }`}
        >
          <Logo light />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {navigationItems.map((item) => {
            if (item.type === "dropdown") {
              return (
                <NavDropdown
                  key={item.label}
                  item={item}
                  variant={variant}
                  mode="desktop"
                />
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-[88px] shrink-0 items-center whitespace-nowrap text-xs font-semibold tracking-wide transition-colors duration-700 hover:text-brand-red ${navText} ${focusRing} after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Contact CTA */}
          <a
            href="/#enquiry"
            className={`ml-1 inline-flex shrink-0 items-center gap-2 border px-4 py-3 text-xs font-semibold tracking-wide transition-colors duration-700 hover:border-brand-red hover:bg-brand-red hover:text-white ${navBorder} ${navText} ${focusRing}`}
          >
            Contact
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((current) => !current)}
          className={`inline-flex items-center justify-center p-2 transition-colors duration-700 lg:hidden ${navText} ${focusRing}`}
        >
          {mobileOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className={`max-h-[calc(100dvh-88px)] overflow-y-auto border-t transition-colors duration-700 ease-in-out lg:hidden ${
            dark
              ? "border-white/15 bg-[#051a35] text-white"
              : "border-black/10 bg-white text-[#102c59]"
          }`}
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 pb-6 pt-2 sm:px-8 lg:px-12">
            {navigationItems.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <NavDropdown
                    key={item.label}
                    item={item}
                    variant={variant}
                    mode="mobile"
                    onNavigate={closeMobileMenu}
                  />
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between border-b py-4 transition-colors duration-700 ${
                    dark ? "border-white/15" : "border-black/10"
                  } ${navText} ${focusRing}`}
                >
                  {item.label}
                  <ChevronRight size={17} aria-hidden="true" />
                </Link>
              );
            })}

            {/* Mobile contact CTA */}
            <a
              href="/#enquiry"
              onClick={closeMobileMenu}
              className={`mt-5 inline-flex w-full items-center justify-center gap-2 border px-4 py-3 text-xs font-semibold tracking-wide transition-colors duration-700 hover:border-brand-red hover:bg-brand-red hover:text-white ${navBorder} ${navText} ${focusRing}`}
            >
              Contact
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
