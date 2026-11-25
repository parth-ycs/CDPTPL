import type { Metadata } from "next";

import Blogs from "@/components/blogs/blogs";

export const metadata: Metadata = {
  title: "Blogs | Chemdist Group",
  description:
    "Perspectives on chemical engineering, catalysis and industrial innovation from Chemdist Group.",
};

export default function BlogsPage() {
  return <Blogs />;
}