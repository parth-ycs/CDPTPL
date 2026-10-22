
import Image from "next/image";
import {
  FlaskConical,
  Settings,
  Leaf,
  type LucideIcon,
} from "lucide-react";

import { researchDevelopment } from "@/data/researchDevelopment";

const capabilityIcons: Record<string, LucideIcon> = {
  flask: FlaskConical,
  settings: Settings,
  leaf: Leaf,
};

export default function ResearchDevelopment() {
  const data = researchDevelopment;

  return (
    <section
      id="research-development"
      className="bg-white px-5 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1500px] border border-slate-200 p-5 sm:p-7 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 xl:gap-8">

          {/* LEFT COLUMN */}
          <div className="flex min-w-0 flex-col">
            {/* Section heading */}
            <div className="mb-8 pt-2 md:mb-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1 w-9 shrink-0 bg-red-600" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#102c55] sm:text-xs">
                  {data.eyebrow}
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#10264a] sm:text-5xl xl:text-6xl">
                {data.title}
                <br />
                <span className="text-[#1764b5]">
                  {data.titleAccent}
                </span>
              </h2>
            </div>

            {/* Smaller, lower-left image */}
            <div className="relative mt-auto aspect-[1.12/1] min-h-[260px] overflow-hidden rounded-md sm:aspect-[1.2/1] lg:aspect-[1.05/1]">
              <Image
                src={data.secondaryImage.src}
                alt={data.secondaryImage.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06284e]/95 via-[#06284e]/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-6 xl:p-8">
                <h3 className="max-w-md text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {data.secondaryImage.title}
                </h3>

                <span className="mt-4 block h-0.5 w-9 bg-white" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex min-w-0 flex-col">
            {/* Taller, upper-right image */}
            <div className="relative aspect-[1.75/1] min-h-[260px] overflow-hidden rounded-md sm:aspect-[1.9/1] lg:aspect-[1.75/1]">
              <Image
                src={data.primaryImage.src}
                alt={data.primaryImage.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06284e]/95 via-[#06284e]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-6 xl:p-8">
                <h3 className="max-w-lg text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {data.primaryImage.title}
                </h3>

                <span className="mt-4 block h-0.5 w-9 bg-white" />
              </div>
            </div>

            {/* Introduction */}
            <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              {data.description}
            </p>

            {/* R&D capabilities */}
            <div className="mt-6 space-y-5 sm:mt-7 sm:space-y-6">
              {data.capabilities.map((capability) => {
                const Icon = capabilityIcons[capability.icon];

                return (
                  <div
                    key={capability.id}
                    className="group flex items-center gap-4 sm:gap-5"
                  >
                    {/* Icon */}
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#1556a2] transition-colors duration-300 group-hover:bg-[#1556a2] group-hover:text-white sm:size-14">
                      <Icon
                        aria-hidden="true"
                        size={24}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Divider */}
                    <div className="h-10 w-px shrink-0 bg-blue-200" />

                    {/* Text */}
                    <div className="min-w-0">
                      <h4 className="text-base font-semibold leading-snug text-[#10264a] sm:text-lg">
                        {capability.title}
                      </h4>

                      <p className="mt-0.5 text-sm leading-5 text-slate-600">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
