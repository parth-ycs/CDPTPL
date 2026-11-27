import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/container";
import type { ContactSettingsData } from "@/data/contact";

const pillClass =
  "inline-flex items-center gap-3 rounded-2xl border border-[#102c59]/15 bg-white px-5 py-4 text-base transition hover:border-red-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102c59]";

export default function HeadquartersSection({
  settings: hq,
}: {
  settings: ContactSettingsData;
}) {
  return (
    <Container>
      <section className="rounded-2xl bg-[#f5f7fb] px-5 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                {hq.hqHeading}
              </h2>
              <address className="mt-6 space-y-1 text-lg not-italic leading-relaxed text-[#102c59]/80">
                <p className="font-semibold text-[#102c59]">{hq.hqCompany}</p>
                {hq.hqAddressLines.map((line, i) => (
                  <p key={`${i}-${line}`}>{line}</p>
                ))}
              </address>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
              <Image
                src={hq.hqImage}
                alt={hq.hqImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-14 grid items-center gap-8 border-t border-[#102c59]/10 pt-12 lg:grid-cols-2 lg:gap-16">
            <h3 className="max-w-md text-2xl font-semibold leading-snug md:text-3xl">
              {hq.supportHeading}
            </h3>

            <div className="flex flex-wrap gap-4">
              <a
                href={hq.supportTollFreeHref}
                className={pillClass}
                aria-label={`Toll free: ${hq.supportTollFree}`}
              >
                <Phone className="h-5 w-5 text-red-600" aria-hidden />
                {hq.supportTollFree}
              </a>
              <a
                href={`mailto:${hq.supportEmail}`}
                className={pillClass}
                aria-label={`Email: ${hq.supportEmail}`}
              >
                <Mail className="h-5 w-5 text-red-600" aria-hidden />
                {hq.supportEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}