"use client"

const PROCESS_IMG =
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=2000&q=85";

export default function ProcessSection() {
  return (
    <section className="min-h-[700px] bg-brand-deep py-[50px] sm:py-[100px]">
      <div
        className="relative mx-auto flex min-h-[550px] w-[calc(100%-36px)] items-center bg-cover bg-center sm:min-h-[500px] sm:w-[calc(100%-40px)] lg:w-[min(1240px,calc(100%-80px))]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(4,20,40,.95), rgba(4,26,47,.42)), url('${PROCESS_IMG}')`,
        }}
      >
        <div className="max-w-[500px] px-[8%] py-[60px] text-white">
          <p className="mb-[18px] text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
            02 / process intelligence
          </p>
          <h2 className="text-[clamp(44px,5vw,70px)] leading-[0.98] font-bold tracking-[-0.06em]">
            From complex
            <br />
            <em className="not-italic text-brand-red-light">challenge</em> to
            <br />
            clear solution.
          </h2>
          <p className="mt-7 max-w-[360px] leading-[1.7] text-white/70">
            Engineering discipline applied at every stage—so your process can
            perform with clarity, control and purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
