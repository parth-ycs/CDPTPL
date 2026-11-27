import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getSBU } from "@/lib/db/queries/solutions";
import SbuForm from "@/components/admin/SbuForm";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export default async function EditSBUPage({ params }: Props) {
  const { slug } = await params;
  const sbu = getSBU(slug);
  if (!sbu) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/solutions/sbus"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to SBUs
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          Edit SBU {sbu.number}: {sbu.name}
        </h1>
      </div>

      <SbuForm initialData={sbu} />
    </div>
  );
}