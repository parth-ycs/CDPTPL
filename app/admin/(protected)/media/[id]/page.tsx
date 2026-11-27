import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getMediaItemById } from "@/lib/db/queries/media";
import MediaForm from "@/components/admin/MediaForm";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function EditMediaPage({ params }: Props) {
  const { id } = await params;
  const item = getMediaItemById(decodeURIComponent(id));
  if (!item) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/media"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to media
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          Edit media article
        </h1>
        <p className="mt-0.5 text-sm text-stone-500">{item.title}</p>
      </div>

      <MediaForm mode="edit" initialData={item} />
    </div>
  );
}