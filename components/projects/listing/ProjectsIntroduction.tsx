export default function ProjectsIntroduction() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 lg:px-12">
        <div>
          <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            <span className="h-[2px] w-10 bg-red-600" />
            Our Work
          </p>

          <h2 className="mt-6 max-w-[700px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Built around complex industrial requirements.
          </h2>
        </div>

        <p className="text-base leading-8 text-slate-600 lg:justify-self-end">
          Explore project references across industries and international
          markets. Each project has its own engineering requirements,
          execution scope and technical specifications.
        </p>
      </div>
    </section>
  );
}