import { Download, ArrowDownToLine, FileText } from "lucide-react";
import { aboutPageData } from "@/data/about";
import Container from "@/components/container";

export default function CompanyProfileSection() {
  const { label, title, description, chips, fileInfo, href } =
    aboutPageData.companyProfile;

  return (
    <section id="company-profile" className="bg-white text-[#171717]">
      <Container className="!py-10 lg:!py-14">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0d3a73] to-[#1455a0] px-6 py-8 text-white shadow-xl sm:px-10 lg:px-14">
          {/* decorative rings */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-4 -top-8 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-white/5" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
            {/* DOCUMENT COVER MOCK */}
            <div className="relative hidden h-40 w-32 shrink-0 md:block">
              <div className="absolute inset-0 rotate-6 rounded-lg bg-white/25" />
              <div className="absolute inset-0 -rotate-3 rounded-lg bg-white p-4 shadow-2xl">
                <div className="mb-3 h-1.5 w-10 rounded bg-[#1455a0]" />
                <p className="text-[10px] font-bold tracking-widest text-[#1455a0]">
                  CHEMDIST
                </p>
                <div className="mt-3 space-y-1.5">
                  <div className="h-1 w-full rounded bg-[#e3e8ef]" />
                  <div className="h-1 w-4/5 rounded bg-[#e3e8ef]" />
                  <div className="h-1 w-3/5 rounded bg-[#e3e8ef]" />
                </div>
                <span className="absolute bottom-3 right-3 rounded bg-[#e32b2b] px-1.5 py-0.5 text-[9px] font-bold text-white">
                  PDF
                </span>
              </div>
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <FileText size={14} />
                {label}
              </span>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                {title}
              </h3>
              <p className="mt-2 max-w-[560px] text-sm leading-relaxed text-white/75 sm:text-base">
                {description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION */}
            <div className="flex shrink-0 flex-col items-start gap-2 md:items-center">
              <a
                href={href}
                download
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0d3a73] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <Download size={18} className="group-hover:hidden" />
                <ArrowDownToLine
                  size={18}
                  className="hidden animate-bounce group-hover:block"
                />
                Download Profile
              </a>
              <span className="text-xs text-white/60">{fileInfo}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}