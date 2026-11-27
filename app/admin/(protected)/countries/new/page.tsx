import CountryForm from "@/components/admin/CountryForm";

export default function NewCountryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Add Country</h1>
        <p className="mt-1 text-sm text-slate-600">
          Add a country to the Global Presence map and explorer.
        </p>
      </div>
      <CountryForm mode="create" />
    </div>
  );
}