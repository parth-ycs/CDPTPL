import { getCountries } from "@/lib/db/queries/global-presence";
import OfficeForm from "@/components/admin/OfficeForm";

export const dynamic = "force-dynamic";

export default function NewOfficePage() {
  const countries = getCountries();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Add Office</h1>
        <p className="mt-1 text-sm text-slate-600">
          Create a new office location for Contact Us and/or Global Presence.
        </p>
      </div>
      <OfficeForm mode="create" countries={countries} />
    </div>
  );
}