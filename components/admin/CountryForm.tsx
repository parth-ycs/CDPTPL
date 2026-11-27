"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { GlobalCountryRecord } from "@/lib/db/queries/global-presence";
import StringListEditor from "./StringListEditor";

type Props = {
  mode: "create" | "edit";
  initial?: GlobalCountryRecord;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function CountryForm({ mode, initial }: Props) {
  const router = useRouter();

  const [id, setId] = useState(initial?.id ?? "");
  const [idTouched, setIdTouched] = useState(mode === "edit");
  const [country, setCountry] = useState(initial?.country ?? "");
  const [countryCode, setCountryCode] = useState(initial?.countryCode ?? "");
  const [isoNumeric, setIsoNumeric] = useState(initial?.isoNumeric ?? "");
  const [region, setRegion] = useState(initial?.region ?? "");
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

  function handleCountryChange(val: string) {
    setCountry(val);
    if (!idTouched && mode === "create") setId(slugify(val));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const payload = {
      ...(mode === "create" ? { id: id.trim() } : {}),
      country: country.trim(),
      countryCode: countryCode.trim().toUpperCase(),
      isoNumeric: isoNumeric.trim(),
      region: region.trim(),
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
          ? "/api/admin/countries"
          : `/api/admin/countries/${encodeURIComponent(initial!.id)}`;
      const res = await fetch(url, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to save country.");
        return;
      }

      router.push("/admin/countries");
      router.refresh();
    } catch {
      setError("Network error while saving country.");
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
            Country Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
            placeholder="e.g. Saudi Arabia"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Country Slug ID <span className="text-red-500">*</span>
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
            placeholder="saudi-arabia"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 disabled:bg-slate-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            ISO Alpha-2 Code (2 letters, matches map){" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            maxLength={2}
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value.toUpperCase())}
            placeholder="SA"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm uppercase text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            ISO Numeric Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={isoNumeric}
            onChange={(e) => setIsoNumeric(e.target.value)}
            placeholder="682"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Region <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Middle East"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Key Cities Label <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Riyadh · Jubail"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Center Longitude <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            step="any"
            required
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="45.0792"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Center Latitude <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            step="any"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="23.8859"
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
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div className="md:col-span-2">
          <StringListEditor
            label="Country Capabilities"
            items={capabilities}
            onChange={setCapabilities}
            placeholder="e.g. Business development"
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
          href="/admin/countries"
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
              ? "Create Country"
              : "Save Changes"}
        </button>
      </div>
    </form>
  );
}