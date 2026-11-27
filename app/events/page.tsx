import type { Metadata } from "next";

import { getEvents } from "@/lib/db/queries/events";
import Events from "@/components/events/events";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events | Chemdist Group",
  description:
    "Discover the exhibitions, industry events and engagements where Chemdist Group connects with ideas, innovations and opportunities.",
};

export default function EventsPage() {
  const events = getEvents();
  return <Events items={events} />;
}