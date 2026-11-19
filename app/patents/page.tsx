
import type { Metadata } from "next";
import PatentsPage from "@/components/patents/patents";

export const metadata: Metadata = {
  title: "Patents | Chemdist Group",
  description:
    "Explore Chemdist Group's patented technologies and intellectual property contributions.",
};

export default function PatentsRoute() {
  return <PatentsPage />;
}
