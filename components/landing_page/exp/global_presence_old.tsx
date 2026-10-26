"use client";
import { useEffect, useRef, useState } from "react";
import { Globe2 } from "lucide-react";
import Container from "@/components/landing_page/container";
import TextLink from "@/components/ui/text-link";
import GlobeBg from "@/components/ui/globebg";

// Crop: drops Antarctica (y > 545) and the empty wrap-around columns
const VB = { x: 40, y: 0, w: 910, h: 545 };

// Pins in SVG coordinates (approximate – nudge as needed)
const pins = [
  { label: "US", x: 205, y: 195 },
  { label: "EU", x: 485, y: 182 },
  { label: "IN", x: 685, y: 275 },
  { label: "AE", x: 600, y: 262 },
  { label: "SA", x: 525, y: 418 },
  { label: "SEA", x: 745, y: 320 },
  { label: "AU", x: 830, y: 440 },
];

const kpis = [
  { value: "50+", label: "Turnkey Projects" },
  { value: "40+", label: "Products & Services" },
  { value: "10+", label: "Patents" },
];

const REMOVE_IDS = [
  // Antarctica
  "milne", "east antarctica", "antarctic peninsula", "thurston", "alexander",
  "smyley", "robert", "king george", "james ross", "elephant",
  // top-left wrap-around
  "chukotka", "wrangel-w", "st. lawrence island west", "unalaska west",
  "umnak west", "another aleutian west", "adak west", "amchitka west", "attu west",
  // top-right wrap-around
  "alaska", "st. lawrence island", "unalaska", "umnak", "adak", "amchitka", "attu",
];

const formatName = (id: string) =>
  id.replace(/[_-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

function cleanSvg(text: string) {
  const doc = new DOMParser().parseFromString(text, "image/svg+xml");
  const svg = doc.documentElement;

  REMOVE_IDS.forEach((id) => doc.querySelector(`[id="${id}"]`)?.remove());
  doc.querySelectorAll("metadata").forEach((n) => n.remove());
  Array.from(doc.getElementsByTagName("sodipodi:namedview")).forEach((n) => n.remove());

  svg.setAttribute("viewBox", `${VB.x} ${VB.y} ${VB.w} ${VB.h}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.setAttribute("style", "fill:#b9b9b9;height:100%;width:100%");

  return new XMLSerializer().serializeToString(svg);
}

export default function GlobalPresence() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [svgMarkup, setSvgMarkup] = useState("");
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/svgs/worldmap.svg")
      .then((res) => res.text())
      .then((text) => !cancelled && setSvgMarkup(cleanSvg(text)))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    if (target.tagName.toLowerCase() === "path" && target.id) {
      const rect = wrapperRef.current!.getBoundingClientRect();
      setTooltip({ text: formatName(target.id), x: e.clientX - rect.left, y: e.clientY - rect.top });
    } else {
      setTooltip(null);
    }
  };

 return (
    <section id="global" className="bg-white py-[90px] lg:py-[130px]">
      <Container className="grid items-center gap-[45px] lg:grid-cols-[1.18fr_.82fr] lg:gap-[90px]">
        {/* LEFT */}
        <div
          ref={wrapperRef}
          className="relative h-[400px] overflow-hidden bg-white [clip-path:ellipse(82%_62%_at_50%_50%)]"
          onMouseMove={handleMove}
          onMouseLeave={() => setTooltip(null)}
        >
          {/* animated dotted globe background (replaces Globe.png) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <GlobeBg className="absolute inset-0 h-full w-full scale-170" />
          </div>

          {/* centering + edge fade */}
          <div className="absolute inset-0 grid place-items-center [mask-image:radial-gradient(ellipse_at_center,#000_58%,transparent_78%)]">
            {/* tilted stage, same aspect ratio as the cropped viewBox */}
            <div className="relative aspect-[910/545] w-[92%] [transform-origin:50%_60%] [transform:perspective(1000px)_rotateX(35deg)_scale(1.05)]">
              <div
                aria-hidden="true"
                className="absolute inset-0
                  [&>svg]:!h-full [&>svg]:!w-full [&>svg]:!fill-[#b9b9b9]
                  [&_path]:cursor-pointer [&_path]:transition-[fill] [&_path]:duration-100 [&_path]:ease-linear
                  [&_path:hover]:!fill-[#12539b]"
                dangerouslySetInnerHTML={{ __html: svgMarkup }}
              />

              {pins.map(({ label, x, y }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={`Location ${label}`}
                  style={{
                    left: `${((x - VB.x) / VB.w) * 100}%`,
                    top: `${((y - VB.y) / VB.h) * 100}%`,
                  }}
                  className="absolute z-10 size-[18px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-[3px] border-white bg-brand-blue shadow-[0_0_0_4px_rgba(18,83,155,.18)] transition hover:scale-125 hover:bg-brand-red"
                />
              ))}
            </div>
          </div>

          {/* Tooltip (outside the transformed layer so it stays flat) */}
          {tooltip && (
            <div
              className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[130%] whitespace-nowrap rounded bg-ink px-2.5 py-1 text-xs font-medium text-white shadow-lg"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              {tooltip.text}
            </div>
          )}
        </div>


        {/* RIGHT: unchanged */}
        <div>
          <h2 className="mb-7 text-[clamp(42px,5vw,68px)] font-heading font-normal leading-[0.98] font-bold tracking-[-0.06em] text-ink">
            Global 
            <br />
            <span className="text-brand-blue font-normal">Presence</span>
          </h2>
          <p className="max-w-[400px] leading-[1.75] text-muted">
            Connecting process expertise, engineered solutions and industrial
            applications across markets.
          </p>

          <dl className="mt-[38px] mb-2.5 grid grid-cols-3 divide-x divide-line border-y border-line">
  {kpis.map(({ value, label }) => (
    <div key={label} className="px-4 py-6 first:pl-0 last:pr-0">
      <dt className="text-[clamp(26px,3vw,38px)] leading-none font-bold tracking-[-0.04em] text-brand-blue">
        {value}
      </dt>
      <dd className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
      </dd>
    </div>
  ))}
</dl>

          <TextLink href="#enquiry">Explore our global presence</TextLink>
        </div>
      </Container>
    </section>
  );
}

