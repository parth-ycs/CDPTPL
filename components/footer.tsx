import Container from "./container";
import Logo from "./ui/logo";
import Button from "./ui/button";
import { navigationItems } from "@/data/navigation";
import type { ReactElement } from "react";
/* ------------------------------------------------------------------ */
/* EDIT YOUR COMPANY DETAILS HERE (currently placeholder values)       */
/* ------------------------------------------------------------------ */
const company = {
  addressTitle: "Corporate Office Address",
  address: [
    "Chemdist HQ,",
    "Opposite Empire Estate, Old Mumbai–Pune Highway,",
    "Pimpri Colony, Pune-411019, Maharashtra , India",
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/chemdistgroup/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/chemdistgroup/" },
    { label: "Facebook", href: "https://www.facebook.com/chemdistgroup/" },
    { label: "YouTube", href: "https://www.youtube.com/@chemdistgroup" },
  ],
};

const heading =
  "mb-4 text-small font-semibold uppercase tracking-[0.16em] text-white";

const link =
  "mb-2.5 block w-fit text-caption leading-snug text-white/65 transition-colors duration-200 hover:text-white";

// Sub-headings / text inside the brand column
const infoTitle = "mb-2 text-[13px] font-semibold text-white";
const infoText = "text-[12px] leading-[1.8] text-white/55";

/* ------------------------------------------------------------------ */
/* SOCIAL ICONS (all rendered inside the same fixed-size box)          */
/* ------------------------------------------------------------------ */
const iconClass = "h-[18px] w-[18px]";

const socialIcons: Record<string, ReactElement> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-.96 1.84-1.97 3.78-1.97 4.04 0 4.79 2.56 4.79 5.9V21h-4v-5.09c0-1.22-.02-2.78-1.8-2.78-1.8 0-2.08 1.32-2.08 2.69V21h-4V9.75Z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.92.26-1.55 1.58-1.55h1.68V3.38A22 22 0 0 0 14.3 3.3c-2.43 0-4.1 1.48-4.1 4.2v2.3H7.5V13h2.7v8h3.3Z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.77 2 12 2 12s0 3.23.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77c.4-1.57.4-4.8.4-4.8s0-3.23-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  ),
};

export default function Footer() {
  // Extract dropdowns and direct links from the main navigation.
  const about = navigationItems.find((item) => item.label === "About");
  const solutions = navigationItems.find((item) => item.label === "Solutions");
  const resources = navigationItems.find((item) => item.label === "Resources");

  const explore = [
    { label: "Projects", href: "/projects" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Careers", href: "/under-development" },
    { label: "Contact", href: "/contact" },
  ];

  const aboutItems = about?.type === "dropdown" ? about.items : [];
  const solutionItems = solutions?.type === "dropdown" ? solutions.items : [];
  const resourceItems = resources?.type === "dropdown" ? resources.items : [];

  return (
    <footer className="bg-[#041326] text-white">
      <div className="pb-10 pt-10 sm:pt-12">
        <Container className="!py-0 grid gap-10 lg:grid-cols-[1.35fr_3.9fr] lg:gap-x-10">
          {/* LEFT: BRAND + COMPANY DETAILS */}
          <div className="lg:max-w-[400px]">
            <a href="/" aria-label="Chemdist Group home" className="block w-[180px] sm:w-[200px]">
              <div className="brightness-150 [&_img]:h-auto [&_img]:w-full [&_svg]:h-auto [&_svg]:w-full">
                <Logo light />
              </div>
            </a>

            <div className="mt-6 space-y-5">
              {/* Corporate office address */}
              <div>
                <p className={infoTitle}>{company.addressTitle}</p>
                <address className={`${infoText} not-italic`}>
                  {company.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              {/* Social links: equal-width boxes keep icons evenly spaced */}
              <div className="-ml-2 flex items-center">
                {company.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center text-white/80 transition-colors duration-200 hover:text-white hover:scale-120"
                  >
                    {socialIcons[social.label]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: NAVIGATION + BUTTONS */}
          <div className="flex flex-col justify-between gap-10">
            {/* Navigation columns (short, so they don't stretch to the left column's height) */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_0.8fr] lg:gap-x-10">
              {/* SOLUTIONS */}
              <div className="lg:pt-1">
                <p className={heading}>Solutions</p>

                {solutionItems.map((item) => (
                  <a key={item.href} href={item.href} className={link}>
                    {item.label}
                  </a>
                ))}

                <a
                  href={solutions?.type === "dropdown" ? solutions.visualHref : "/solutions"}
                  className="mt-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-red-light transition-colors hover:text-white"
                >
                  All Solutions <span>↗</span>
                </a>
              </div>

              {/* ABOUT US */}
              <div className="lg:pt-1">
                <p className={heading}>About Us</p>

                {aboutItems.map((item) => (
                  <a key={item.label} href={item.href} className={link}>
                    {item.label}
                  </a>
                ))}
              </div>

              {/* RESOURCES */}
              <div className="lg:pt-1">
                <p className={heading}>Resources</p>

                {resourceItems.map((item) => (
                  <a key={item.label} href={item.href} className={link}>
                    {item.label}
                  </a>
                ))}
              </div>

              {/* EXPLORE */}
              <div className="lg:pt-1">
                <p className={heading}>Explore</p>

                {explore.map((item) => (
                  <a key={item.label} href={item.href} className={link}>
                    {item.label}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </Container>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/[0.10] py-5">
        <Container className="!py-0 flex flex-col gap-3 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CHEMDIST GROUP. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>

            <a href="/terms-and-conditions" className="transition-colors hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}