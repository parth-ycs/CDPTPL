import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getPatentById } from "@/lib/db/queries/patents";
import PatentForm from "@/components/admin/PatentForm";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function EditPatentPage({ params }: Props) {
  const { id } = await params;
  const patent = getPatentById(decodeURIComponent(id));
  if (!patent) notFound();

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
          Edit patent
        </h1>
        <p className="mt-0.5 text-sm text-stone-500">{patent.title}</p>
      </div>

      <PatentForm mode="edit" initialData={patent} />
    </div>
  );
}