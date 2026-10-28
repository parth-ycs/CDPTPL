import { aboutPageData } from "@/data/about";

export default function IntroductionSection() {
  const { introduction } = aboutPageData;

  return (
    <section className="py-4">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-red-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {introduction.label}
            </span>
          </div>

          <h2 className="mt-6 max-w-[500px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {introduction.heading}
          </h2>
        </div>

        <div className="space-y-6 lg:pt-8">
          {introduction.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[760px] text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
            >
              {paragraph}
            </p>
          ))}

          <div className="h-px w-full max-w-[760px] bg-slate-200" />
        </div>
      </div>
    </section>
  );
}