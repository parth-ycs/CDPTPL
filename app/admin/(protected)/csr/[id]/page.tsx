import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getCsrInitiativeById } from "@/lib/db/queries/csr";
import CsrForm from "@/components/admin/CsrForm";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function EditCsrPage({ params }: Props) {
  const { id } = await params;
  const initiative = getCsrInitiativeById(decodeURIComponent(id));
  if (!initiative) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/csr"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to CSR initiatives
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          Edit CSR initiative
        </h1>
        <p className="mt-0.5 text-sm text-stone-500">{initiative.title}</p>
      </div>

      <CsrForm mode="edit" initialData={initiative} />
    </div>
  );
}