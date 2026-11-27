import Link from "next/link";
import { getCountries } from "@/lib/db/queries/global-presence";
import DeleteResourceButton from "@/components/admin/DeleteResourceButton";

export const dynamic = "force-dynamic";

export default function AdminCountriesPage() {
  const countries = getCountries();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Global Countries ({countries.length})
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Countries available for grouping offices, facilities, and projects
            on <code>/global-presence</code>.
          </p>
        </div>
        <Link
          href="/admin/countries/new"
          className="rounded-lg bg-[#1556a0] px-4 py-2 text-sm font-semibold text-white hover:bg-[#102c59]"
        >
          + Add Country
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">ISO Codes</th>
              <th className="px-4 py-3">Region</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {countries.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-8 text-center text-slate-500"
                >
                  No countries configured yet.
                </td>
              </tr>
            ) : (
              countries.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-slate-900">{c.country}</p>
                    <p className="text-xs text-slate-500">{c.id}</p>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">
                    {c.countryCode} / {c.isoNumeric}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{c.region}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-3">
                      <Link
                        href={`/admin/countries/${encodeURIComponent(c.id)}`}
                        className="font-medium text-[#1556a0] hover:underline"
                      >
                        Edit
                      </Link>
                      <DeleteResourceButton
                        endpoint={`/api/admin/countries/${encodeURIComponent(c.id)}`}
                        resourceName={c.country}
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