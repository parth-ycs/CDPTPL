import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import CsrForm from "@/components/admin/CsrForm";

export const dynamic = "force-dynamic";

export default function NewCsrPage() {
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
          New CSR initiative
        </h1>
      </div>

      <CsrForm mode="create" />
    </div>
  );
}