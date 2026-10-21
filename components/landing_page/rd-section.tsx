import { Check } from "lucide-react";
import Container from "./container";
import ButtonLink from "../ui/button-link";

const RD_IMG ="images/rndlab-bg1.jpg";

const capabilities = [
  "Distillation and separation testing",
  "Evaporation and concentration systems",
  "Membrane-based separation",
  "Pilot-plant process validation",
  "Green process technology development",
];

export default function RDSection() {
  return (
    <section id="rd" className="py-[40px] lg:py-[70px]">
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="rd-leaf" clipPathUnits="objectBoundingBox">
        <path d="M0,1 L0,0.15 Q0,0.09 0.037,0.081 L1,0 L1,0.85 Q1,0.91 0.963,0.919 Z" />        </clipPath>
      </defs>
    </svg>

  <div
    className="relative bg-cover bg-center bg-fixed"
    style={{
      clipPath: "url(#rd-leaf)",
      backgroundImage: `linear-gradient(90deg, rgba(5,28,54,.82) 0%, rgba(5,28,54,.55) 45%, rgba(5,28,54,.15) 100%), url('${RD_IMG}')`,
    }}
  >
        <Container className="relative z-10 py-[120px] lg:py-[170px]">
          <div className="max-w-[560px] text-white">

            <h2 className="mt-[25px] mb-6 [font-family:'Noa_Voren'] text-[clamp(28px,3.6vw,48px)] leading-[1.1] font-normal">
              R
              <span className="text-brand-red-light">&amp;</span>
              D
              <br/>
              Excellence Center

            </h2>

            <p className="max-w-[430px] text-base leading-[1.65] text-white/80 [font-family:'Bai_Jamjuree']">
              Advancing process technologies through research, pilot-scale testing and
              engineering-led development.
            </p>

            <ul className="mt-[30px] mb-[34px] space-y-3 [font-family:'Bai_Jamjuree']">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm leading-[1.5] text-white/85"
                >
                  <Check size={15} className="shrink-0 text-brand-red-light" />
                  {item}
                </li>
              ))}
            </ul>

            <ButtonLink href="#enquiry" variant="red">
              Explore R&amp;D capabilities
            </ButtonLink>
          </div>
        </Container>
      </div>
    
    </section>
  );
}