"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";

import Logo from "./ui/logo";
import NavDropdown from "./ui/NavDropdown";
import { navigationItems } from "@/data/navigation";
import Button from "@/components/ui/button";

type NavbarProps = {
  variant?: "light" | "dark";
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

export default function Navbar({
  variant: baseVariant = "light",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // True while the pointer is anywhere over the header (including dropdown panels,
  // since they are DOM children of the header).
  const [hovered, setHovered] = useState(false);

  // Ref to the header so we can ask the browser whether it is currently hovered.
  const headerRef = useRef<HTMLElement | null>(null);

  // One shared state for desktop dropdowns so only one panel is ever open.
  // `instant` is true when jumping from one dropdown straight to another,
  // so the panels swap with no fade (that fade overlap was the flicker).
  const [menu, setMenu] = useState<{ label: string | null; instant: boolean }>({
    label: null,
    instant: false,
  });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu(label: string) {
    cancelClose();
    setMenu((current) => ({
      label,
      instant: current.label !== null && current.label !== label,
    }));
  }

  // Small delay so crossing the gap between items doesn't close the panel.
  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setMenu({ label: null, instant: false });
    }, 120);
  }

  function closeMenuNow() {
    cancelClose();
    setMenu({ label: null, instant: false });
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenuNow();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      cancelClose();
    };
  }, []);

  // After a route change the navbar remounts with hovered = false, even though
  // the cursor may still be over it (so onMouseEnter never fires). Re-check on
  // mount so the state stays in sync with the real pointer position.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const sync = () => {
      if (el.matches(":hover")) setHovered(true);
    };

    sync();
    // Browsers sometimes update :hover a frame or two after a DOM change.
    const raf = requestAnimationFrame(() => requestAnimationFrame(sync));
    const timer = setTimeout(sync, 150);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  // Effective variant: a dark navbar turns light on hover (or while a dropdown /
  // the mobile menu is open) and returns to dark once the pointer leaves.
  const variant: "light" | "dark" =
    baseVariant === "dark" && !hovered && menu.label === null && !mobileOpen
      ? "dark"
      : "light";

  const dark = variant === "dark";

  const navText = dark ? "text-white" : "text-[#102c59]";
  const navBorder = dark ? "border-white/40" : "border-[#102c59]/35";

  const navHoverText = "hover:text-brand-blue";

  // True while hovering the header, a desktop dropdown is open, or mobile menu is open.
  const isActive = hovered || menu.label !== null || mobileOpen;

  // Shared timing: slow and smooth in both directions, kept identical for the
  // background layers and the text colours so they never get out of sync.
  const speed = isActive ? "duration-500" : "duration-700";

  // Gradient and solid backgrounds are separate layers cross-fading with
  // opacity. (A gradient is a background-image, which CSS can't transition,
  // so swapping it for bg-white used to snap instantly.)
  const whiteOpacity = isActive ? "opacity-100" : dark ? "opacity-0" : "opacity-80";
  const gradientOpacity = dark ? "opacity-100" : "opacity-0";

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header
      ref={headerRef}
      onMouseEnter={() => setHovered(true)}
      // Safety net: if :hover wasn't ready yet on mount, the first tiny mouse
      // movement over the header switches it to light mode.
      onMouseMove={() => {
        if (!hovered) setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className="fixed inset-x-0 top-0 z-50 text-[#102c59] backdrop-blur-md"
    >
      {/* Background layers */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#051a35]/95 via-[#051a35]/30 to-[#051a35]/0 transition-opacity ease-in-out ${speed} ${gradientOpacity}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 bg-white transition-opacity ease-in-out ${speed} ${whiteOpacity}`}
      />

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
          className={`inline-flex shrink-0 items-center transition-[filter] ease-in-out ${speed} ${focusRing} ${
            dark ? "brightness-0 invert" : ""
          }`}
        >
          <Logo light />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 xl:gap-9 lg:flex font-heading">
          {navigationItems.map((item) => {
            if (item.type === "dropdown") {
              return (
                <NavDropdown
                  key={item.label}
                  item={item}
                  variant={variant}
                  mode="desktop"
                  isOpen={menu.label === item.label}
                  instant={menu.instant}
                  onOpen={() => openMenu(item.label)}
                  onClose={scheduleClose}
                  onCloseNow={closeMenuNow}
                />
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`-mx-3 flex h-10 shrink-0 items-center whitespace-nowrap rounded-full px-3 text-sm font-semibold tracking-wide transition-all ease-in-out ${speed} hover:bg-[#ebf2fc] ${navHoverText} ${navText} ${focusRing}`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Contact CTA */}
          <Button
            href="/contact"
            onClick={closeMobileMenu}
            size="sm"
            variant="dark"
            fullWidth
            className="py-1 text-sm font-heading"
            circleClassName="h-8 w-8"
          >
            Contact
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((current) => !current)}
          className={`inline-flex items-center justify-center p-2 transition-all ease-in-out ${speed} hover:font-bold lg:hidden ${navHoverText} ${navText} ${focusRing}`}
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
                  className={`flex items-center justify-between border-b py-4 transition-all duration-200 hover:font-bold ${navHoverText} ${
                    dark ? "border-white/15" : "border-black/10"
                  } ${navText} ${focusRing}`}
                >
                  {item.label}
                  <ChevronRight size={17} aria-hidden="true" />
                </Link>
              );
            })}

            {/* Mobile contact CTA */}
            <Button
              href="/#enquiry"
              onClick={closeMobileMenu}
              variant={dark ? "light" : "dark"}
              fullWidth
              className="mt-5"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}