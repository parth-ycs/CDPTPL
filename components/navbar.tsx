"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import Logo from "./ui/logo";
import sbus, { serviceHref, type SBU } from "@/data/sbus/sbus";

const list: SBU[] = sbus;

type NavChild = {
  slug?: string;
  href?: string;
  name?: string;
  hero?: { name?: string };
};
type NavbarProps = {
  variant?: "light" | "dark";
};

type SBUWithLegacyItems = SBU & {
  children?: NavChild[];
  items?: NavChild[];
};

function getChildren(sbu: SBU): NavChild[] {
  const compatibleSBU = sbu as SBUWithLegacyItems;
  return compatibleSBU.children ?? compatibleSBU.items ?? [];
}

function getChildHref(item: NavChild): string {
  return item.slug ? serviceHref(item.slug) : item.href ?? "/";
}

function getChildName(item: NavChild): string {
  return item.hero?.name ?? item.name ?? "Unnamed offering";
}

// "/#..." so these work from /services/... pages as well as the landing page.
const navigationItems = [
  { label: "Technologies", href: "/#technologies" },
  { label: "Industries", href: "/#industries" },
  { label: "Projects", href: "/projects" },
  { label: "R&D", href: "/research-development" },
  { label: "Our Group", href: "/#group" },
  { label: "Global Presence", href: "/#global" },
  { label: "Careers", href: "/#careers" },
];

// Red underline that grows from the left on hover / when active.
const underline =
  "relative after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-200 hover:after:scale-x-100";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

export default function Navbar({
  variant = "light",
}: NavbarProps){
  const [open, setOpen] = useState(false); // desktop mega menu
  const [active, setActive] = useState<number | null>(null); // hovered SBU
  const [mobile, setMobile] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [mobileSbu, setMobileSbu] = useState<number | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSBU = active !== null ? list[active] : null;
  const activeItems = activeSBU ? getChildren(activeSBU) : [];
 const navbarClasses =
  variant === "dark"
    ? "bg-gradient-to-b from-[#051a35]/95 via-[#051a35]/30 to-[#051a35]/0 text-white"
    : "bg-white/80 text-[#102c59]";

  const navItemText = variant === "dark" ? "text-white" : "text-ink";
  const navBorder = variant === "dark" ? "border-white/35" : "border-ink/35";
  const mobileMenuClasses =
    variant === "dark"
      ? "border-white/15 bg-[#051a35] text-white"
      : "border-line bg-white text-[#102c59]";

  function closeMenus() {
    setOpen(false);
    setActive(null);
    setMobile(false);
    setMobileSolutions(false);
    setMobileSbu(null);
  }

  // Small delay so the pointer can cross gaps without the menu flickering shut.
  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive((current) => current ?? 0);
    setOpen(true);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
    }, 120);
  }

  // Close on Escape and on click outside the navbar.
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenus();
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenus();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
   <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50  ${navbarClasses}`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[88px] w-full max-w-[1330px] items-center justify-between px-6"
      >
        <Link
          href="/"
          aria-label="Chemdist Group home"
          onClick={closeMenus}
          className={`inline-flex items-center ${focusRing}`}
        >
          <Logo light />
        </Link>

        {/* ---------- Desktop navigation ---------- */}
        <div className="hidden items-center gap-12 lg:flex">
          {/* Solutions: trigger + compact mega menu share one hover zone */}
          <div
            className="relative h-[88px]"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            onFocus={openMenu}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                scheduleClose();
              }
            }}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              aria-controls="solutions-menu"
              onClick={() => (open ? closeMenus() : openMenu())}
              className={`flex h-full cursor-pointer items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors ${underline} ${
                open ? "text-brand-red after:scale-x-100" : navItemText
              } hover:text-brand-red ${focusRing}`}
            >
              Solutions
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div
                id="solutions-menu"
                aria-hidden={!open}
                className={[
                  "fixed inset-x-0 top-[88px] z-50",
                  "bg-white shadow-[0_24px_50px_rgba(0,0,0,0.07)]",
                  "transition-all duration-300 ease-out",
                  open
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0 pointer-events-none",
                ].join(" ")}
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <div className="mx-auto grid min-h-[340px] w-full max-w-[1440px] grid-cols-1 md:grid-cols-[1fr_1fr_1fr]">

                  {/* Column 1: Chemdist visual */}
                <div className="flex items-center justify-center p-8 md:p-10 lg:p-12">
                  <Link
                    href="/#technologies"
                    onClick={closeMenus}
                    tabIndex={open ? 0 : -1}
                    className={`block w-full max-w-[390px] transition-transform duration-300 hover:scale-[1.02] ${focusRing} ${
                      variant === "dark" ? "brightness-0 invert" : ""
                    }`}
                  >
                    <img
                      src="/images/SBUs.png"
                      alt="Chemdist Group — six business units"
                      className="h-auto w-full object-contain"
                    />
                  </Link>
                </div>

                  {/* Column 2: SBU list */}
                  <div className="border-l border-black/10">
                    <div className="px-7 pb-4 pt-8 lg:px-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        Our solutions
                      </p>
                    </div>

                    <ul>
                      {list.map((sbu, i) => {
                        const selected = active === i;

                        return (
                          <li key={sbu.name}>
                            <Link
                              href={sbu.href}
                              onMouseEnter={() => setActive(i)}
                              onFocus={() => setActive(i)}
                              onClick={closeMenus}
                              tabIndex={open ? 0 : -1}
                              aria-current={undefined}
                              className={[
                                "group flex min-h-[52px] items-center justify-between gap-4 ",
                                "px-7 py-3 lg:px-8",
                                "transition-colors duration-200",
                                selected
                                  ? "text-brand-red"
                                  : "text-ink hover:text-brand-red",
                                focusRing,
                              ].join(" ")}
                            >
                              <span className="text-sm font-bold tracking-wide text-brand-blue transition-colors duration-200 group-hover:text-brand-red">
                                {sbu.name}
                              </span>

                              <ChevronRight
                                size={17}
                                aria-hidden="true"
                                className={[
                                  "shrink-0 transition-transform duration-200",
                                  selected
                                    ? "translate-x-1 text-brand-red"
                                    : "text-brand-deep group-hover:translate-x-1 group-hover:text-brand-red",
                                ].join(" ")}
                              />
                            </Link>
                            <div className="mx-7 h-px bg-black/[0.06] lg:mx-8" />
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Column 3: Selected SBU links */}
                  <div className="border-l border-black/10 px-7 py-8 lg:px-10">
                    <div
                      key={activeSBU?.name ?? "default"}
                      className="animate-in fade-in slide-in-from-bottom-1 duration-200"
                    >
                      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        {activeSBU?.name ?? "Explore our solutions"}
                      </p>

                      <ul className="space-y-1">
                        {activeItems.map((item) => (
                          <li key={item.slug ?? item.href ?? getChildName(item)}>
                            <Link
                              href={getChildHref(item)}
                              onClick={closeMenus}
                              tabIndex={open ? 0 : -1}
                              className={[
                                "group flex items-center justify-between gap-3",
                                "py-3 text-sm tracking-wide text-ink",
                                "transition-colors duration-200 hover:text-brand-red font-semibold",
                                focusRing,
                              ].join(" ")}
                            >
                              <span>{getChildName(item)}</span>
                              <ArrowRight
                                size={15}
                                aria-hidden="true"
                                className="shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>


          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenus}
              onMouseEnter={() => {
                // Hovering another nav item closes the mega menu right away.
                if (closeTimer.current) clearTimeout(closeTimer.current);
                setOpen(false);
                setActive(null);
              }}
              className={`flex h-[88px] items-center text-xs font-semibold tracking-wide ${navItemText} transition-colors hover:text-brand-red ${underline} ${focusRing}`}
            >
              {item.label}
            </Link>
          ))}

          {/* #enquiry exists on both the landing page and service pages */}
          <a
            href="#enquiry"
            onClick={closeMenus}
            className={`ml-2 inline-flex items-center gap-2 border ${navBorder} px-4 py-3 text-xs font-semibold tracking-wide ${navItemText} transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white ${focusRing}`}
          >
            Contact
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>

        {/* ---------- Mobile toggle ---------- */}
        <button
          type="button"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobile((p) => !p);
            setOpen(false);
            setActive(null);
          }}
          className={`inline-flex cursor-pointer p-1.5 ${navItemText} lg:hidden ${focusRing}`}
        >
          {mobile ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* ---------- Mobile menu ---------- */}
      {mobile && (
        <div
          id="mobile-navigation"
          className={`max-h-[calc(100dvh-88px)] overflow-y-auto border-t lg:hidden ${mobileMenuClasses}`}
        >
          <div className="mx-auto grid w-full max-w-[1240px] px-6 pb-6 pt-2">
            <button
              type="button"
              aria-expanded={mobileSolutions}
              onClick={() => setMobileSolutions((p) => !p)}
              className={`flex w-full cursor-pointer items-center justify-between border-b ${
                variant === "dark" ? "border-white/15" : "border-line"
              } py-4 text-left text-sm ${focusRing}`}
            >
              <span>Solutions</span>
              <ChevronDown
                size={17}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  mobileSolutions ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileSolutions && (
              <div className={`border-b ${
                  variant === "dark"
                    ? "border-white/15 bg-white/5"
                    : "border-line bg-pale"
                }`}>
                {list.map((sbu, i) => (
                  <div key={sbu.name}>
                    <button
                      type="button"
                      aria-expanded={mobileSbu === i}
                      onClick={() => setMobileSbu((p) => (p === i ? null : i))}
                      className={`flex w-full cursor-pointer items-center justify-between px-4 py-3.5 text-left text-sm ${
                        mobileSbu === i
                          ? "text-brand-red"
                          : variant === "dark"
                            ? "text-white"
                            : "text-ink"
                      } ${focusRing}`}
                    >
                      <span>{sbu.name}</span>
                      <ChevronDown
                        size={15}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          mobileSbu === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileSbu === i && (
                      <ul className="pb-2 pl-8 pr-4">
                        {getChildren(sbu).map((item) => (
                          <li key={item.slug ?? item.href ?? getChildName(item)}>
                            <Link
                              href={getChildHref(item)}
                              onClick={closeMenus}
                              className={`block py-2 text-[13px] ${
                                variant === "dark" ? "text-white/75" : "text-muted"
                              } hover:text-brand-red`}
                            >
                              {getChildName(item)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenus}
                className={`flex items-center justify-between border-b ${
                  variant === "dark" ? "border-white/15" : "border-line"
                } py-4 text-sm ${focusRing} ${navItemText}`}
              >
                <span>{item.label}</span>
                <ChevronRight size={17} aria-hidden="true" />
              </Link>
            ))}

            <a
              href="#enquiry"
              onClick={closeMenus}
              className={`mt-5 inline-flex items-center justify-center gap-2 border ${navBorder} px-4 py-3 text-xs font-semibold tracking-wide ${navItemText} transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white ${focusRing}`}
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