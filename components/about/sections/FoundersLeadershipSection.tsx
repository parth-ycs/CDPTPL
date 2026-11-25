
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/container";
import { aboutPageData } from "@/data/about";

export default function FoundersLeadershipSection() {
  const data = aboutPageData.leadership;

  return (
    <section
      id="leadership"
      className="rounded-2xl bg-[#F7F8FA]"
    >
      <Container>
        {/* Section intro */}
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-red-600" />

              <span className="text-caption font-semibold uppercase tracking-[0.22em] text-slate-500">
                {data.label}
              </span>
            </div>

            <h2 className="max-w-[550px] font-heading text-h1 font-semibold tracking-tight text-[#102C59]">
              {data.heading}
            </h2>
          </div>

          <p className="max-w-[540px] text-body text-slate-600 lg:pb-1">
            {data.description}
          </p>
        </div>

        {/* Leadership cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {data.members.map((member) => (
            <article
              key={member.id}
              className="group min-w-0"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover object-center grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D36]/35 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                {/* LinkedIn */}
                {member.linkedin && (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${member.name}'s LinkedIn profile`}
                    className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-[#102C59] opacity-0 shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight size={19} />
                  </Link>
                )}
              </div>

              {/* Member details */}
              <div className="mt-5 border-b border-slate-200 pb-5">
                <p className="text-caption font-semibold uppercase tracking-[0.16em] text-red-600">
                  {member.designation}
                </p>

                <h3 className="mt-2 font-heading text-h3 font-semibold tracking-tight text-[#102C59] transition-colors duration-300 group-hover:text-red-600">
                  {member.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
