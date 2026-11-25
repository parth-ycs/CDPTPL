
import Image from "next/image";

import PageHero from "@/components/shared-page/PageHero";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { eventsPageData, eventItems } from "@/data/events";

function EventCard({
  item,
  priority = false,
}: {
  item: (typeof eventItems)[number];
  priority?: boolean;
}) {
  const hasLink = Boolean(item.url && item.url.trim());

  const content = (
    <>
      {/* Event Banner */}
      <div className="relative aspect-[1212/477] overflow-hidden bg-pale">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Event Information */}
      <div className="flex flex-1 flex-col pt-5">
        {/* Category and Date */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-caption font-semibold uppercase tracking-[0.13em]">
          <span className="text-brand-blue">{item.category}</span>
          <span
            className="h-1 w-1 rounded-full bg-muted"
            aria-hidden="true"
          />
          <span className="text-muted">{item.date}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 font-heading text-h3 font-bold tracking-tight text-brand-deep transition-colors duration-300 group-hover:text-brand-blue">
          {item.title}
        </h3>

        {/* Venue */}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-small text-muted">
          <span className="inline-flex items-center gap-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            {item.venue}, {item.location}
          </span>

          {item.stand && <span>Stand: {item.stand}</span>}
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-4 text-body text-muted">
          {item.description}
        </p>

        {/* Bottom Divider */}
        <div className="mt-auto pt-6">
          <div className="h-px w-full bg-line transition-colors duration-300 group-hover:bg-brand-blue/40" />
        </div>
      </div>
    </>
  );

  // With a URL: the whole card is a link. Without one: plain, non-interactive card.
  if (hasLink) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.title} (opens event page in a new tab)`}
        className="group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
      >
        {content}
      </a>
    );
  }

  return <article className="group flex h-full flex-col">{content}</article>;
}


export default function Events() {
  const { hero, listing } = eventsPageData;
  const hasEvents = eventItems.length > 0;

  return (
    <main className="bg-white text-ink">
      {/* Hero */}
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
        ctaLabel="Explore Events"
        ctaHref="#events-list"
      />

      {/* Events Listing */}
      <Container>
        <section id="events-list">
          {/* Section Heading */}
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-caption font-semibold uppercase tracking-[0.18em] text-brand-blue">
                {listing.eyebrow}
              </p>

              <h2 className="font-heading text-h2 font-bold tracking-tight text-brand-deep">
                {listing.heading}
              </h2>

              <p className="mt-4 text-body text-muted">
                {listing.description}
              </p>
            </div>

            {hasEvents && (
              <p className="shrink-0 text-small tabular-nums text-muted">
                {eventItems.length}{" "}
                {eventItems.length === 1 ? "event" : "events"}
              </p>
            )}
          </div>

          {/* Event Grid */}
          {hasEvents ? (
            <ul className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
              {eventItems.map((item, index) => (
                <li key={item.id}>
                  <EventCard item={item} priority={index < 2} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="border-y border-line py-16 text-center">
              <p className="font-heading text-h3 font-semibold text-brand-deep">
                No events available at the moment.
              </p>
              <p className="mt-2 text-small text-muted">
                Check back soon for upcoming events and exhibitions.
              </p>
            </div>
          )}
        </section>
      </Container>

      <Enquiry />
      <Footer />
    </main>
  );
}
