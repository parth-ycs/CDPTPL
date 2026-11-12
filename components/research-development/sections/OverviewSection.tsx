
import { rdSectionData } from "@/data/r&d";
import Container from "@/components/container";

export default function OverviewSection() {
  const { heading, description } = rdSectionData.overview;

  return (
    <section className="bg-white">
        <div className="grid grid-cols-1 gap-8 border-line pt-10 lg:grid-cols-2 lg:gap-16">

          {/* Heading */}
          <div>
            <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-brand-deep sm:text-4xl lg:text-[40px]">
              {heading.before}{" "}
              {heading.highlight && (
                <span className="text-brand-blue">
                  {heading.highlight}
                </span>
              )}{" "}
              {heading.after}
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="font-sans text-base leading-[1.75] text-ink sm:text-lg">
              {description}
            </p>
          </div>

        </div>
    </section>
  );
}
