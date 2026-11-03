
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
      className="bg-[#F7F8FA] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* SECTION INTRO */}
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-red-600" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {data.label}
              </span>
            </div>

            <h2 className="max-w-[550px] text-3xl font-semibold leading-tight tracking-tight text-[#102C59] sm:text-4xl lg:text-5xl">
              {data.heading}
            </h2>
          </div>

          <p className="max-w-[540px] text-sm leading-7 text-slate-600 sm:text-base lg:pb-1">
            {data.description}
          </p>
        </div>

        {/* LEADERSHIP CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {data.members.map((member) => (
            <article
              key={member.id}
              className="group min-w-0"
            >
              {/* PORTRAIT */}
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover object-center grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D36]/35 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                {/* LINKEDIN */}
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

              {/* MEMBER DETAILS */}
              <div className="mt-5 border-b border-slate-200 pb-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-600">
                  {member.designation}
                </p>

                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#102C59] transition-colors duration-300 group-hover:text-red-600 sm:text-xl">
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
