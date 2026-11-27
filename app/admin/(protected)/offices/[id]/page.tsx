import { notFound } from "next/navigation";
import { getCountries, getOfficeById } from "@/lib/db/queries/global-presence";
import OfficeForm from "@/components/admin/OfficeForm";

export const dynamic = "force-dynamic";

export default async function EditOfficePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const office = getOfficeById(id);
  if (!office) notFound();

  const countries = getCountries();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Edit Office: {office.title}
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          ID: <code>{office.id}</code>
        </p>
      </div>
      <OfficeForm mode="edit" countries={countries} initial={office} />
    </div>
  );
}