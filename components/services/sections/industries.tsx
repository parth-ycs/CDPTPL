
import { Check } from "lucide-react";
import ButtonLink from "@/components/ui/button-link";
import type { IndustriesSectionData } from "../types";
import type { ComponentProps } from "react";

const RD_IMG = "/images/evening_industry.jpg";

function Container({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-[calc(100%-36px)] sm:w-[min(700px,calc(100%-40px))] lg:w-[min(1240px,calc(100%-80px))] ${className}`}
      {...props}
    />
  );
}

export default function IndustriesSection({
  data,
}: {
  data: IndustriesSectionData;
}) {
  return (
    <section id="industries" className="py-[40px] lg:py-[70px]">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="rd-leaf" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0,0.15 Q0,0.09 0.037,0.081 L1,0 L1,0.85 Q1,0.91 0.963,0.919 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          clipPath: "url(#rd-leaf)",
          backgroundImage: `linear-gradient(90deg, rgba(5,28,54,.92) 0%, rgba(5,28,54,.75) 45%, rgba(5,28,54,.35) 100%), url('${RD_IMG}')`,
        }}
      >
        <Container className="relative z-10 py-[120px] lg:py-[70px]">
          <div className="max-w-[560px] text-white">
            <h2 className="mt-[25px] mb-6 [font-family:'Noa_Voren'] text-[clamp(28px,3.6vw,48px)] leading-[1.1] font-normal">
              Industries
              <br />
              We Serve
            </h2>

            <p className="max-w-[430px] text-base leading-[1.65] text-white/80 [font-family:'Bai_Jamjuree']">
              {data.intro ||
                "Delivering process engineering and separation solutions tailored to the needs of diverse industries."}
            </p>

            <ul className="mt-[30px] mb-[34px] space-y-3 [font-family:'Bai_Jamjuree']">
              {data.items.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 text-sm leading-[1.5] text-white/85"
                >
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0 text-brand-red-light"
                  />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="/contact" variant="red">
              Discuss Your Requirements
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
