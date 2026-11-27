import type { Metadata } from "next";

import { getPatents } from "@/lib/db/queries/patents";
import PatentsPage from "@/components/patents/patents";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Patents | Chemdist Group",
  description:
    "Explore Chemdist Group's patented technologies and intellectual property contributions.",
};

export default function PatentsRoute() {
  const patents = getPatents();
  return <PatentsPage patents={patents} />;
}