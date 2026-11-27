import Link from "next/link";
import { getContactSettings } from "@/lib/db/queries/contact";
import { getOffices } from "@/lib/db/queries/global-presence";
import ContactSettingsForm from "@/components/admin/ContactSettingsForm";
import DeleteResourceButton from "@/components/admin/DeleteResourceButton";

export const dynamic = "force-dynamic";

export default function AdminOfficesPage() {
  const settings = getContactSettings();
  const offices = getOffices();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Contact & Offices
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Manage the Contact page headquarters banner and office locations across{" "}
          <code>/contact</code> and <code>/global-presence</code>.
        </p>
      </div>

      <ContactSettingsForm initial={settings} />

      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Offices ({offices.length})
            </h2>
            <p className="text-xs text-slate-500">
              Toggle where each office appears using the Contact Page and Global
              Presence checkboxes.
            </p>
          </div>
          <Link
            href="/admin/offices/new"
            className="rounded-lg bg-[#1556a0] px-4 py-2 text-sm font-semibold text-white hover:bg-[#102c59]"
          >
            + Add Office
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3">Office / Title</th>
                <th className="px-4 py-3">Country & City</th>
                <th className="px-4 py-3">Visibility</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {offices.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-slate-500"
                  >
                    No offices configured yet.
                  </td>
                </tr>
              ) : (
                offices.map((office) => (
                  <tr key={office.id} className="hover:bg-slate-50/70">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-slate-900">
                        {office.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        Map label: {office.name} ({office.id})
                      </p>
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {office.countryName ?? office.countryId} · {office.city}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1.5">
                        {office.showOnContact && (
                          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                            /contact
                          </span>
                        )}
                        {office.showOnGlobal && (
                          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                            /global-presence
                          </span>
                        )}
                        {!office.showOnContact && !office.showOnGlobal && (
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                            Hidden
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-3">
                        <Link
                          href={`/admin/offices/${encodeURIComponent(office.id)}`}
                          className="font-medium text-[#1556a0] hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteResourceButton
                          endpoint={`/api/admin/offices/${encodeURIComponent(office.id)}`}
                          resourceName={office.title}
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
    </div>
  );
}