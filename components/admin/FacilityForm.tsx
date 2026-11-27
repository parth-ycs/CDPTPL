"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type {
  FacilityRecord,
  GlobalCountryRecord,
} from "@/lib/db/queries/global-presence";
import StringListEditor from "./StringListEditor";

type Props = {
  mode: "create" | "edit";
  countries: GlobalCountryRecord[];
  initial?: FacilityRecord;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function FacilityForm({ mode, countries, initial }: Props) {
  const router = useRouter();

  const [id, setId] = useState(initial?.id ?? "");
  const [idTouched, setIdTouched] = useState(mode === "edit");
  const [countryId, setCountryId] = useState(
    initial?.countryId ?? countries[0]?.id ?? "india",
  );
  const [name, setName] = useState(initial?.name ?? "");
  const [city, setCity] = useState(initial?.city ?? "");
  const [summary, setSummary] = useState(initial?.summary ?? "");
  const [capabilities, setCapabilities] = useState<string[]>(
    initial?.capabilities ?? [],
  );
  const [longitude, setLongitude] = useState(
    initial?.longitude != null ? String(initial.longitude) : "",
  );
  const [latitude, setLatitude] = useState(
    initial?.latitude != null ? String(initial.latitude) : "",
  );
  const [displayOrder, setDisplayOrder] = useState(
    String(initial?.displayOrder ?? 0),
  );

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleNameChange(val: string) {
    setName(val);
    if (!idTouched && mode === "create") {
      setId(slugify(`${countryId}-${val}`));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const payload = {
      ...(mode === "create" ? { id: id.trim() } : {}),
      countryId,
      name: name.trim(),
      city: city.trim(),
      summary: summary.trim(),
      capabilities: capabilities.map((c) => c.trim()).filter(Boolean),
      longitude: Number(longitude),
      latitude: Number(latitude),
      displayOrder: Number(displayOrder) || 0,
    };

    try {
      const url =
        mode === "create"
          ? "/api/admin/facilities"
          : `/api/admin/facilities/${encodeURIComponent(initial!.id)}`;
      const res = await fetch(url, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to save facility.");
        return;
      }

      router.push("/admin/facilities");
      router.refresh();
    } catch {
      setError("Network error while saving facility.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={countryId}
            onChange={(e) => setCountryId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          >
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.country} ({c.countryCode})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Mundra, Chinchwad"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Facility Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="e.g. Mundra Manufacturing Facility"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Facility ID (Slug) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            disabled={mode === "edit"}
            value={id}
            onChange={(e) => {
              setIdTouched(true);
              setId(e.target.value);
            }}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 disabled:bg-slate-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Longitude (X) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            step="any"
            required
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="69.7197"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Latitude (Y) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            step="any"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="22.8394"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Summary <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={2}
            required
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Manufacturing and industrial operations."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div className="md:col-span-2">
          <StringListEditor
            label="Capabilities"
            items={capabilities}
            onChange={setCapabilities}
            placeholder="e.g. Manufacturing, Fabrication, Testing"
            addLabel="Add capability"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Display Order
          </label>
          <input
            type="number"
            value={displayOrder}
            onChange={(e) => setDisplayOrder(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-4">
        <Link
          href="/admin/facilities"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-[#1556a0] px-6 py-2 text-sm font-semibold text-white hover:bg-[#102c59] disabled:opacity-60"
        >
          {submitting
            ? "Saving..."
            : mode === "create"
              ? "Create Facility"
              : "Save Changes"}
        </button>
      </div>
    </form>
  );
}