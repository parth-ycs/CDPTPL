import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getSBUs } from "@/lib/db/queries/solutions";

export const dynamic = "force-dynamic";

export default function AdminSBUsPage() {
  const sbus = getSBUs();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/solutions"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to solutions
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          Strategic Business Units (SBUs)
        </h1>
      </div>

      <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs font-medium uppercase tracking-wider text-stone-500">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Eyebrow</th>
              <th className="px-4 py-3">Solutions</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {sbus.map((sbu) => (
              <tr key={sbu.slug} className="hover:bg-stone-50/75">
                <td className="px-4 py-3.5 font-mono text-stone-500">
                  {sbu.number}
                </td>
                <td className="px-4 py-3.5 font-medium text-stone-900">
                  {sbu.name}
                </td>
                <td className="px-4 py-3.5 text-stone-600">{sbu.eyebrow}</td>
                <td className="px-4 py-3.5 text-stone-600">
                  {sbu.children.length}
                </td>
                <td className="px-4 py-3.5 text-right">
                  <div className="inline-flex items-center gap-3">
                    <Link
                      href={sbu.href}
                      target="_blank"
                      className="text-stone-600 hover:text-stone-900"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/solutions/sbus/${sbu.slug}`}
                      className="font-medium text-stone-900 hover:underline"
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}