import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/container";

import { contactPageData } from "@/data/contact";

const { headquarters: hq } = contactPageData;

const pillClass =
  "inline-flex items-center gap-3 rounded-2xl border border-[#102c59]/15 bg-white px-5 py-4 text-base transition hover:border-red-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102c59]";

export default function HeadquartersSection() {
  const { tollFree, email } = hq.support;

  return (
    <Container>
    <section className="bg-[#f5f7fb] rounded-2xl px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{hq.heading}</h2>
            <address className="mt-6 space-y-1 text-lg not-italic leading-relaxed text-[#102c59]/80">
              <p className="font-semibold text-[#102c59]">{hq.company}</p>
              {hq.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={hq.image}
              alt={hq.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid items-center gap-8 border-t border-[#102c59]/10 pt-12 lg:grid-cols-2 lg:gap-16">
          <h3 className="max-w-md text-2xl font-semibold leading-snug md:text-3xl">
            {hq.support.heading}
          </h3>

          <div className="flex flex-wrap gap-4">
            <a href={tollFree.href} className={pillClass} aria-label={`${tollFree.label}: ${tollFree.value}`}>
              <Phone className="h-5 w-5 text-red-600" aria-hidden />
              {tollFree.value}
            </a>
            <a href={email.href} className={pillClass} aria-label={`${email.label}: ${email.value}`}>
              <Mail className="h-5 w-5 text-red-600" aria-hidden />
              {email.value}
            </a>
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
}