import { aboutPageData } from "@/data/about";

export default function CommitmentSection() {
  const { commitment } = aboutPageData;

  return (
    <section className="relative overflow-hidden rounded-sm bg-[#102c59] p-6 text-white sm:p-8 lg:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-white/10"
      />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-red-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
              {commitment.label}
            </span>
          </div>

          <h2 className="mt-6 max-w-[680px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {commitment.heading}
          </h2>

          <p className="mt-6 max-w-[650px] text-base leading-8 text-slate-300 sm:text-lg">
            {commitment.description}
          </p>
        </div>

        <div>
          {commitment.highlights.map(
            ({ title, description, Icon }) => (
              <article
                key={title}
                className="flex gap-5 border-b border-white/15 py-6 first:border-t"
              >
                <Icon
                  aria-hidden="true"
                  size={25}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-red-400"
                />

                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {description}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}