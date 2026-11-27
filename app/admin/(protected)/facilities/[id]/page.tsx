import { notFound } from "next/navigation";
import {
  getCountries,
  getFacilityById,
} from "@/lib/db/queries/global-presence";
import FacilityForm from "@/components/admin/FacilityForm";

export const dynamic = "force-dynamic";

export default async function EditFacilityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const facility = getFacilityById(id);
  if (!facility) notFound();

  const countries = getCountries();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Edit Facility: {facility.name}
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          ID: <code>{facility.id}</code>
        </p>
      </div>
      <FacilityForm mode="edit" countries={countries} initial={facility} />
    </div>
  );
}