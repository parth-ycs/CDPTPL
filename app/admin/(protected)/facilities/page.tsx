import Link from "next/link";
import { getFacilities } from "@/lib/db/queries/global-presence";
import DeleteResourceButton from "@/components/admin/DeleteResourceButton";

export const dynamic = "force-dynamic";

export default function AdminFacilitiesPage() {
  const facilities = getFacilities();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Global Facilities ({facilities.length})
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Manufacturing plants and operational facilities displayed on{" "}
            <code>/global-presence</code>.
          </p>
        </div>
        <Link
          href="/admin/facilities/new"
          className="rounded-lg bg-[#1556a0] px-4 py-2 text-sm font-semibold text-white hover:bg-[#102c59]"
        >
          + Add Facility
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-4 py-3">Facility</th>
              <th className="px-4 py-3">Country & City</th>
              <th className="px-4 py-3">Coordinates</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {facilities.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-8 text-center text-slate-500"
                >
                  No facilities added yet.
                </td>
              </tr>
            ) : (
              facilities.map((facility) => (
                <tr key={facility.id} className="hover:bg-slate-50/70">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-slate-900">
                      {facility.name}
                    </p>
                    <p className="text-xs text-slate-500">{facility.id}</p>
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    {facility.countryName ?? facility.countryId} ·{" "}
                    {facility.city}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-600">
                    [{facility.longitude}, {facility.latitude}]
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-3">
                      <Link
                        href={`/admin/facilities/${encodeURIComponent(facility.id)}`}
                        className="font-medium text-[#1556a0] hover:underline"
                      >
                        Edit
                      </Link>
                      <DeleteResourceButton
                        endpoint={`/api/admin/facilities/${encodeURIComponent(facility.id)}`}
                        resourceName={facility.name}
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}