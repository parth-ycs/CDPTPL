"use client"
import Container from "./container";
import Logo from "../ui/logo";
import sbus from "@/data/sbus";

const exploreLinks = [
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "R&D", href: "#rd" },
  { label: "Our Group", href: "#group" },
  { label: "Global Presence", href: "#global" },
];

const heading =
  "mt-1 mb-[19px] text-[10px] uppercase tracking-[0.15em] text-white/45";
const link = "mb-3.5 block text-[13px] text-white/80 hover:text-brand-red-light";

export default function Footer() {
  return (
    <footer className="bg-[#041326] pt-[78px] text-white">
      <Container className="grid gap-[35px] pb-[45px] sm:pb-[70px] lg:grid-cols-[2fr_1fr_1fr] lg:gap-20">
        <div>
          <a href="#home" aria-label="Chemdist Group home">
            <Logo light />
          </a>
          <p className="mt-7 text-[11px] uppercase tracking-[0.13em] text-brand-red-light">
            Science · Engineering · Technology
          </p>
          <p className="max-w-[280px] text-[13px] leading-[1.6] text-white/50">
            CHEMDIST GROUP is the public umbrella brand for a network of process
            technology and engineering capabilities.
          </p>
        </div>

        <div>
          <p className={heading}>Solutions</p>
          {sbus.slice(0, 3).map((s) => (
            <a key={s.name} href="#solutions" className={link}>
              {s.name}
            </a>
          ))}
        </div>

        <div>
          <p className={heading}>Explore</p>
          {exploreLinks.map((l) => (
            <a key={l.label} href={l.href} className={link}>
              {l.label}
            </a>
          ))}
        </div>
      </Container>

      <Container className="grid gap-2 border-t border-white/[0.13] py-5 text-[10px] text-white/40 sm:flex sm:justify-between">
        <span>© 2026 CHEMDIST GROUP. Public brand identity.</span>
        <span>Legal contracting entities to be confirmed in relevant disclosures.</span>
      </Container>
    </footer>
  );
}
