import { Mail, MapPin, Phone } from "lucide-react";
import { contactPageData, type ContactOffice } from "@/data/contact";

const { offices: officeCopy } = contactPageData;

const linkClass =
  "inline-flex items-center gap-2.5 text-sm font-medium text-[#102c59] underline-offset-4 hover:text-red-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102c59]";

export default function OfficesSection({
  offices,
}: {
  offices: ContactOffice[];
}) {
  if (offices.length === 0) return null;

  return (
    <section className="px-5 py-16 md:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-blue">
          {officeCopy.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          {officeCopy.heading}
        </h2>
        <p className="mt-3 max-w-xl text-base text-[#102c59]/75">
          {officeCopy.description}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <article
              key={office.id}
              className="flex flex-col rounded-3xl border border-[#102c59]/10 bg-white p-7 shadow-[0_8px_30px_rgba(16,44,89,0.07)]"
            >
              <h3 className="text-xl font-semibold">{office.title}</h3>

              <address className="mt-4 space-y-0.5 text-sm not-italic leading-relaxed text-[#102c59]/75">
                <p>{office.company}</p>
                {office.addressLines.map((line, i) => (
                  <p key={`${i}-${line}`}>{line}</p>
                ))}
              </address>

              {office.note && (
                <p className="mt-3 text-sm text-[#102c59]/55">{office.note}</p>
              )}

              <div className="mt-6 flex flex-col gap-3 pt-1">
                {office.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                    className={linkClass}
                  >
                    <Phone className="h-4 w-4 text-red-600" aria-hidden />
                    {phone}
                  </a>
                ))}
                {office.email && (
                  <a href={`mailto:${office.email}`} className={linkClass}>
                    <Mail className="h-4 w-4 text-red-600" aria-hidden />
                    {office.email}
                  </a>
                )}
                {office.mapUrl && (
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    <MapPin className="h-4 w-4 text-red-600" aria-hidden />
                    View on map
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}