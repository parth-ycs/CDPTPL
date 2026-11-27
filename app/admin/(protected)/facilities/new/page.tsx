import { getCountries } from "@/lib/db/queries/global-presence";
import FacilityForm from "@/components/admin/FacilityForm";

export const dynamic = "force-dynamic";

export default function NewFacilityPage() {
  const countries = getCountries();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Add Facility</h1>
        <p className="mt-1 text-sm text-slate-600">
          Add a manufacturing or operational facility to the Global Presence
          explorer.
        </p>
      </div>
      <FacilityForm mode="create" countries={countries} />
    </div>
  );
}