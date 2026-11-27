import type { Metadata } from "next";

import { getSBUListItems } from "@/lib/db/queries/solutions";
import SolutionsIndexClient from "@/components/solutions/SolutionsIndexClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Solutions | Chemdist Group",
  description:
    "Integrated engineering capabilities and technology-driven solutions across six strategic business units.",
};

export default function SolutionsPage() {
  const sbus = getSBUListItems();
  return <SolutionsIndexClient sbus={sbus} />;
}