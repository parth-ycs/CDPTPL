import Image from "next/image";
import {
  ShieldCheck,
  Settings,
  Sprout,
  UsersRound,
  Factory,
  Globe2,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "600+",
    label: "Employees",
    Icon: UsersRound,
  },
  {
    value: "217K",
    suffix: "sq. ft.",
    label: "Fabrication facility",
    detail: "at Mundra, Pune",
    Icon: Factory,
  },
  {
    value: "590+",
    label: "Projects",
    detail: "worldwide",
    Icon: Globe2,
  },
  {
    value: "37+",
    label: "Years of global",
    detail: "existence",
    footnote: "In India since 2010",
    Icon: Award,
  },
];

const strengths = [
  {
    title: "Safety First",
    description: "In everything we do",
    Icon: ShieldCheck,
  },
  {
    title: "Engineering Excellence",
    description: "End-to-end capabilities",
    Icon: Settings,
  },
  {
    title: "Sustainable Growth",
    description: "For a cleaner, greener future",
    Icon: Sprout,
  },
];

export default function AboutUsSection() {
  return (
    <section
      aria-labelledby="about-us-heading"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* Left: introduction and values */}
          <div className="relative z-10">
            <h2
              id="about-us-heading"
              className="text-5xl font-bold leading-[1.05] tracking-tight text-[#071a31] sm:text-5xl xl:text-5xl [font-family:'Noa_Voren']"
            >
              Who We <span className="text-brand-blue">Are</span>
            </h2>

            <p className="mt-6 max-w-[650px] text-base leading-8 text-slate-600 sm:text-lg [font-family:'Bai_Jamjuree']">
              Chemdist is a trusted EPC and technology partner delivering
              integrated process solutions for the oil and gas, chemical,
              pharmaceutical, emerging green energy, and other significant
              process industries.
            </p>

            <div className="mt-9 grid gap-6 sm:grid-cols-3 sm:gap-0 [font-family:'Bai_Jamjuree']">
              {strengths.map(({ title, description, Icon }, index) => (
                <div
                  key={title}
                  className={[
                    "flex gap-3 sm:px-5",
                    index === 0 ? "sm:pl-0" : "",
                    index < strengths.length - 1
                      ? "sm:border-r sm:border-slate-200"
                      : "",
                  ].join(" ")}
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-1 h-9 w-9 shrink-0 text-[#071a31] sm:h-10 sm:w-10"
                    strokeWidth={1.7}
                  />
                  <div>
                    <h3 className="text-sm font-semibold leading-5 text-[#071a31] sm:text-base">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: plant image in a hexagonal frame with offset red outlines */}
<div className="relative mx-auto w-full max-w-[720px] aspect-[1000/520]">
  {/* Layer 1: soft hexagon + pale frame (behind the image). Same viewBox as the outline. */}
  <svg
    aria-hidden="true"
    viewBox="0 0 1000 520"
    className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
  >
    {/* faint large hexagon on the left */}
    <polygon
      points="20,215 80,105 250,105 310,215 250,325 80,325"
      fill="#eef2f7"
      opacity="0.9"
    />
    {/* pale blue frame: same polygon as the image clip, thick stroke */}
    <polygon
      points="230,40 770,40 940,310 865,480 135,480 60,310"
      fill="#dce8f5"
      stroke="#dce8f5"
      strokeWidth="28"
      strokeLinejoin="round"
    />
  </svg>

  {/* Layer 2: image, clipped to the exact same polygon (x/10 %, y/5.2 %) */}
  <div
    className="absolute inset-0 overflow-hidden"
    style={{
      clipPath:
        "polygon(23% 7.7%, 77% 7.7%, 94% 59.6%, 86.5% 92.3%, 13.5% 92.3%, 6% 59.6%)",
    }}
>
    <Image src="/images/about-us-industry.png" alt="Chemdist industrial facility"
        fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />

    {/* <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_65%_30%,rgba(255,255,255,0.95),transparent_45%),linear-gradient(135deg,#edf2f7_0%,#cbd5e1_50%,#94a3b8_100%)] px-8 text-center">
      <Factory aria-hidden="true" className="h-14 w-14 text-[#071a31]/60" strokeWidth={1.2} />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#071a31]/70">
        Industrial plant image
      </span>
      <span className="max-w-xs text-sm leading-6 text-slate-600">
        Replace this placeholder with your facility or process plant photograph.
      </span>
    </div> */}
  </div>

  {/* Layer 3: red outlines, offset ~30px outward and parallel to the slanted edges */}
  <svg
    aria-hidden="true"
    viewBox="0 0 1000 520"
    className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
    fill="none"
  >
    {/* top-left: runs up the upper-left diagonal, rounds the corner, continues along the top */}
    <path
      d="M 128 146 L 200 32 Q 214 10 240 10 L 292 10"
      stroke="#e11d2e"
      strokeWidth="1.5"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
    {/* right: chevron hugging the right point */}
    <path
      d="M 914 213 L 960 289 Q 972 308 962 328 L 905 458"
      stroke="#e11d2e"
      strokeWidth="1.5"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
</div>
</div>

        {/* KPI strip */}
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/90 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 [font-family:'Bai_Jamjuree']">
          {stats.map(({ value, suffix, label, detail, footnote, Icon }, index) => (
            <div
              key={label}
              className={[
                "flex min-h-[142px] items-center gap-4 px-5 py-6 sm:px-7 lg:px-6 xl:px-8",
                index % 2 === 0 ? "" : "",
                index < stats.length - 1
                  ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                  : "",
                index === 1 ? "sm:border-r-0 lg:border-r" : "",
                index === 2 ? "sm:border-b-0 lg:border-r" : "",
              ].join(" ")}
            >
              <Icon
                aria-hidden="true"
                className="h-10 w-10 shrink-0 text-[#071a31] sm:h-11 sm:w-11"
                strokeWidth={1.7}
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-3xl font-bold tracking-tight text-[#071a31] sm:text-4xl">
                    {value}
                  </span>
                  {suffix && (
                    <span className="text-sm font-semibold text-slate-600">
                      {suffix}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-5 text-slate-600 sm:text-base">
                  {label}
                  {detail && (
                    <>
                      <br />
                      {detail}
                    </>
                  )}
                </p>
                {footnote && (
                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    {footnote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
