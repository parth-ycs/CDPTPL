
import Container from "./container";
import Logo from "./ui/logo";
import { navigationItems } from "@/data/navigation";

const heading =
  "mb-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45";

const link =
  "mb-3 block w-fit text-[12px] leading-relaxed text-white/65 transition-colors duration-200 hover:text-brand-red-light";

export default function Footer() {
  // Extract dropdowns and direct links from the main navigation.
  const about = navigationItems.find(
    (item) => item.label === "About Us"
  );

  const solutions = navigationItems.find(
    (item) => item.label === "Solutions"
  );

  const resources = navigationItems.find(
    (item) => item.label === "Resources"
  );

  const explore = navigationItems.filter(
    (item): item is Extract<typeof item, { type: "link" }> =>
      item.type === "link" &&
      ["Projects", "Global Presence", "Careers"].includes(item.label)
  );

  const aboutItems =
    about?.type === "dropdown" ? about.items : [];

  const solutionItems =
    solutions?.type === "dropdown" ? solutions.items : [];

  const resourceItems =
    resources?.type === "dropdown" ? resources.items : [];

  return (
    <footer className="bg-[#041326] text-white">

      {/* MAIN FOOTER */}
      <Container className="grid gap-12 pb-14 pt-16 sm:pt-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-10">

        {/* BRAND */}
        <div className="max-w-[290px]">
          <a href="/" aria-label="Chemdist Group home">
            <Logo light />
          </a>

          <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.16em] text-brand-red-light">
            Science · Engineering · Technology
          </p>

          <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
            CHEMDIST GROUP is the public umbrella brand for a network of
            process technology and engineering capabilities.
          </p>

          <a
            href="/about-us"
            className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-brand-red-light"
          >
            Discover Chemdist
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* SOLUTIONS */}
        <div>
          <p className={heading}>Solutions</p>

          {solutionItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={link}
            >
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
        <div>
          <p className={heading}>About Us</p>

          {aboutItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={link}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* RESOURCES */}
        <div>
          <p className={heading}>Resources</p>

          {resourceItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={link}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* EXPLORE */}
        <div>
          <p className={heading}>Explore</p>

          {explore.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={link}
            >
              {item.label}
            </a>
          ))}
        </div>

      </Container>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/[0.10]">
        <Container className="flex flex-col gap-3 py-6 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} CHEMDIST GROUP. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>

        </Container>
      </div>

    </footer>
  );
}
