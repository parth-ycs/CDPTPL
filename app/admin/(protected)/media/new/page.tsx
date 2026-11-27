import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import MediaForm from "@/components/admin/MediaForm";

export const dynamic = "force-dynamic";

export default function NewMediaPage() {
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
          New media article
        </h1>
      </div>

      <MediaForm mode="create" />
    </div>
  );
}