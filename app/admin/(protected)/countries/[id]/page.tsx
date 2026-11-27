import { notFound } from "next/navigation";
import { getCountryById } from "@/lib/db/queries/global-presence";
import CountryForm from "@/components/admin/CountryForm";

export const dynamic = "force-dynamic";

export default async function EditCountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = getCountryById(id);
  if (!country) notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Edit Country: {country.country}
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          ID: <code>{country.id}</code>
        </p>
      </div>
      <CountryForm mode="edit" initial={country} />
    </div>
  );
}