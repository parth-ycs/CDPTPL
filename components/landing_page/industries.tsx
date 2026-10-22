
import Container from "./container";
import {
  Utensils,
  Shirt,
  FlaskConical,
  Pill,
  Droplets,
  FileText,
  Factory,
  ShoppingCart,
  Recycle,
  CarFront,
  Zap,
  Flame,
  Wheat,
  Cog,
  Leaf,
} from "lucide-react";

const RD_IMG = "images/evening_industry.jpg";

const industries = [
  { name: "Chemicals", icon: FlaskConical },
  { name: "Pharma", icon: Pill },
  { name: "Oil & Gas", icon: Flame },
  { name: "Petrochemicals", icon: Factory },
  { name: "Energy", icon: Leaf },
  { name: "Sustainable Technologies", icon: Recycle },
  { name: "Water Treatment", icon: Droplets },
];

export default function Industries() {
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
          backgroundImage: `linear-gradient(90deg, rgba(5,28,54,.82) 0%, rgba(5,28,54,.55) 45%, rgba(5,28,54,.15) 100%), url('${RD_IMG}')`,
        }}
      >
        <Container className="relative z-10 py-[100px] lg:py-[130px]">
          <div className="text-white">
            {/* Section heading */}
            <h2 className="mt-[25px] mb-8 [font-family:'Noa_Voren'] text-[clamp(28px,3.6vw,48px)] leading-[1.1] font-normal">
              Industries
              <span className="text-brand-red-light"> Served</span>
            </h2>

            {/* Full-width industry grid */}
            <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
              {industries.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="group flex min-h-[82px] items-center gap-5
                    border-b border-white/20 px-3 py-4
                    transition-colors duration-300
                    hover:bg-white/[0.06]"
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.45}
                    className="size-9 shrink-0 text-white/90
                      transition-colors duration-300
                      group-hover:text-brand-red-light"
                  />

                  <span className="text-sm font-medium leading-5 text-white/95 transition-colors duration-300 group-hover:text-white md:text-base">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
