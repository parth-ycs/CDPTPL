import { ArrowRight } from "lucide-react";
import Container from "../container";
import sbus from "@/data/sbus";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-pale py-[90px] lg:py-[130px]">
      <Container>
        <div className="mb-16 grid items-end gap-6 lg:grid-cols-[1.1fr_.8fr] lg:gap-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue lg:col-span-full lg:-mb-5">
            01 / capabilities
          </p>
          <h2 className="text-[clamp(42px,5vw,68px)] leading-[0.98] font-bold tracking-[-0.06em] text-ink">
            One group.
            <br />
            <span className="text-brand-blue">Six ways forward.</span>
          </h2>
          <p className="max-w-[430px] leading-[1.7] text-muted">
            Market-facing capabilities built around the realities of modern
            industry—from separation and plant engineering to green chemistry,
            hydrogen and water.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {sbus.map((sbu, i) => (
            <a
              key={sbu.name}
              href="#enquiry"
              className="group relative min-h-[210px] border-r border-b border-line p-6 pb-[26px] transition-colors hover:bg-brand-blue hover:text-white lg:min-h-[240px]"
            >
              <span className="mb-12 block text-[11px] tracking-[0.14em] text-brand-red">
                0{i + 1}
              </span>
              <h3 className="mb-3 max-w-[240px] text-[19px] leading-[1.15] font-bold">
                {sbu.name}
              </h3>
              <p className="max-w-[280px] text-[13px] leading-[1.55] text-muted transition-colors group-hover:text-white/70">
                {sbu.offerings}
              </p>
              <span className="absolute right-[22px] bottom-6">
                <ArrowRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
