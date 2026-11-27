import type { Metadata } from "next";

import { getCsrInitiatives } from "@/lib/db/queries/csr";
import CSR from "@/components/csr/csr";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility | Chemdist Group",
  description:
    "Creating meaningful impact through environmental responsibility, community participation and a commitment to a sustainable future.",
};

export default function CSRPage() {
  const initiatives = getCsrInitiatives();
  return <CSR initiatives={initiatives} />;
}