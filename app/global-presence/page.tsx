import type { Metadata } from "next";
import GlobalPresence from "@/components/global-presence/GlobalPresence";
import { getGlobalLocations } from "@/lib/db/queries/global-presence";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "Our offices and projects around the world: a growing international network for technology, engineering and manufacturing.",
};

export default function GlobalPresencePage() {
  const locations = getGlobalLocations();
  return <GlobalPresence locations={locations} />;
}