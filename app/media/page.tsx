import type { Metadata } from "next";

import { getMediaItems } from "@/lib/db/queries/media";
import News from "@/components/media/media";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Media | Chemdist Group",
  description:
    "Stay informed about the latest developments, milestones, announcements and activities from Chemdist Group.",
};

export default function NewsPage() {
  const items = getMediaItems();
  return <News items={items} />;
}