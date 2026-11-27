"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type {
  GlobalCountryRecord,
  OfficeRecord,
} from "@/lib/db/queries/global-presence";
import StringListEditor from "./StringListEditor";

type Props = {
  mode: "create" | "edit";
  countries: GlobalCountryRecord[];
  initial?: OfficeRecord;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function OfficeForm({ mode, countries, initial }: Props) {
  const router = useRouter();

  const [id, setId] = useState(initial?.id ?? "");
  const [idTouched, setIdTouched] = useState(mode === "edit");
  const [countryId, setCountryId] = useState(
    initial?.countryId ?? countries[0]?.id ?? "india",
  );
  const [name, setName] = useState(initial?.name ?? "");
  const [title, setTitle] = useState(initial?.title ?? "");
  const [company, setCompany] = useState(initial?.company ?? "Chemdist Group");
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
  const [addressLines, setAddressLines] = useState<string[]>(
    initial?.addressLines ?? [],
  );
  const [phones, setPhones] = useState<string[]>(initial?.phones ?? []);
  const [email, setEmail] = useState(initial?.email ?? "");
  const [note, setNote] = useState(initial?.note ?? "");
  const [mapUrl, setMapUrl] = useState(initial?.mapUrl ?? "");
  const [showOnContact, setShowOnContact] = useState(
    initial?.showOnContact ?? true,
  );
  const [showOnGlobal, setShowOnGlobal] = useState(
    initial?.showOnGlobal ?? true,
  );
  const [displayOrder, setDisplayOrder] = useState(
    String(initial?.displayOrder ?? 0),
  );

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleNameChange(val: string) {
    setName(val);
    if (!title) setTitle(val);
    if (!idTouched && mode === "create") {
      setId(slugify(`${countryId}-${val}`));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const lonNum = longitude.trim() ? Number(longitude) : null;
    const latNum = latitude.trim() ? Number(latitude) : null;

    if (showOnGlobal && (lonNum === null || latNum === null)) {
      setError(
        "Longitude and Latitude are required when 'Show on Global Presence map' is enabled.",
      );
      setSubmitting(false);
      return;
    }

    const payload = {
      ...(mode === "create" ? { id: id.trim() } : {}),
      countryId,
      name: name.trim(),
      title: title.trim() || name.trim(),
      company: company.trim() || "Chemdist Group",
      city: city.trim(),
      summary: summary.trim(),
      capabilities: capabilities.map((c) => c.trim()).filter(Boolean),
      longitude: lonNum,
      latitude: latNum,
      addressLines: addressLines.map((l) => l.trim()).filter(Boolean),
      phones: phones.map((p) => p.trim()).filter(Boolean),
      email: email.trim() || null,
      note: note.trim() || null,
      mapUrl: mapUrl.trim() || null,
      showOnContact,
      showOnGlobal,
      displayOrder: Number(displayOrder) || 0,
    };

    try {
      const url =
        mode === "create"
          ? "/api/admin/offices"
          : `/api/admin/offices/${encodeURIComponent(initial!.id)}`;
      const res = await fetch(url, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to save office.");
        return;
      }

      router.push("/admin/offices");
      router.refresh();
    } catch {
      setError("Network error while saving office.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Visibility & Identity */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-base font-semibold text-slate-900">
          1. Identity & Visibility
        </h2>

        <div className="mb-5 flex flex-wrap gap-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-slate-800">
            <input
              type="checkbox"
              checked={showOnContact}
              onChange={(e) => setShowOnContact(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-[#1556a0]"
            />
            Show on Contact Page (<code>/contact</code>)
          </label>

          <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-slate-800">
            <input
              type="checkbox"
              checked={showOnGlobal}
              onChange={(e) => setShowOnGlobal(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-[#1556a0]"
            />
            Show on Global Presence Map (<code>/global-presence</code>)
          </label>
        </div>

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
              placeholder="e.g. Pune, Mumbai, New Jersey"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Map Office Name (Global Presence){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="e.g. Corporate & R&D Office"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Contact Card Title (<code>/contact</code>){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. India (Headquarters)"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Office ID (Slug) <span className="text-red-500">*</span>
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
      </section>

      {/* Global Presence Map Data */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-base font-semibold text-slate-900">
          2. Global Presence Map & Capabilities
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Longitude (X, e.g. 73.8567)
            </label>
            <input
              type="number"
              step="any"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="73.8567"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Latitude (Y, e.g. 18.5204)
            </label>
            <input
              type="number"
              step="any"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="18.5204"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Map Summary
            </label>
            <textarea
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Corporate operations, research and engineering."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div className="md:col-span-2">
            <StringListEditor
              label="Capabilities Tags"
              items={capabilities}
              onChange={setCapabilities}
              placeholder="e.g. Corporate, R&D, Engineering"
              addLabel="Add capability"
            />
          </div>
        </div>
      </section>

      {/* Contact Page Card Data */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-base font-semibold text-slate-900">
          3. Contact Page Card Details
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Company Label
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enquiry@chemdist.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Google Maps URL
            </label>
            <input
              type="url"
              value={mapUrl}
              onChange={(e) => setMapUrl(e.target.value)}
              placeholder="https://maps.google.com/..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Optional Note
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Sales and regional support"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
          </div>
          <div>
            <StringListEditor
              label="Address Lines"
              items={addressLines}
              onChange={setAddressLines}
              placeholder="Address line..."
              addLabel="Add address line"
            />
          </div>
          <div>
            <StringListEditor
              label="Phone Numbers"
              items={phones}
              onChange={setPhones}
              placeholder="+91 20 0000 0000"
              addLabel="Add phone"
            />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-4">
        <Link
          href="/admin/offices"
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
              ? "Create Office"
              : "Save Changes"}
        </button>
      </div>
    </form>
  );
}