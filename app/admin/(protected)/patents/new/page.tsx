import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import PatentForm from "@/components/admin/PatentForm";

export const dynamic = "force-dynamic";

export default function NewPatentPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/patents"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to patents
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          New patent
        </h1>
      </div>

      <PatentForm mode="create" />
    </div>
  );
}