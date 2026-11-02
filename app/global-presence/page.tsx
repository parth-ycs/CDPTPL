import type { Metadata } from "next";
import GlobalPresence from "@/components/global-presence/GlobalPresence";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "Our offices and projects around the world: a growing international network for technology, engineering and manufacturing.",
};

export default function GlobalPresencePage() {
  return <GlobalPresence />;
}
