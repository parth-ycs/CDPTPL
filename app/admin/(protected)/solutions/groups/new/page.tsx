// app/admin/(protected)/solutions/groups/new/page.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getSBUs } from "@/lib/db/queries/solutions";
import SbuGroupForm from "@/components/admin/SbuGroupForm";

export const dynamic = "force-dynamic";

export default function NewSbuGroupPage() {
  const sbus = getSBUs().map((s) => ({ slug: s.slug, name: s.name }));

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/solutions/groups"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to groups
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          New navigation group
        </h1>
      </div>

      <SbuGroupForm mode="create" sbus={sbus} />
    </div>
  );
}