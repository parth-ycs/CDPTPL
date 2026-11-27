"use client";

import { useState } from "react";
import type { ContactSettingsData } from "@/data/contact";
import ImageUploadField from "./ImageUploadField";
import StringListEditor from "./StringListEditor";

type Props = {
  initial: ContactSettingsData;
};

export default function ContactSettingsForm({ initial }: Props) {
  const [hqHeading, setHqHeading] = useState(initial.hqHeading);
  const [hqCompany, setHqCompany] = useState(initial.hqCompany);
  const [hqAddressLines, setHqAddressLines] = useState<string[]>(
    initial.hqAddressLines,
  );
  const [hqImage, setHqImage] = useState(initial.hqImage);
  const [hqImageAlt, setHqImageAlt] = useState(initial.hqImageAlt);
  const [supportHeading, setSupportHeading] = useState(initial.supportHeading);
  const [supportTollFree, setSupportTollFree] = useState(
    initial.supportTollFree,
  );
  const [supportTollFreeHref, setSupportTollFreeHref] = useState(
    initial.supportTollFreeHref,
  );
  const [supportEmail, setSupportEmail] = useState(initial.supportEmail);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSaved(false);
    setSaving(true);

    try {
      const res = await fetch("/api/admin/contact-settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hqHeading,
          hqCompany,
          hqAddressLines: hqAddressLines.map((l) => l.trim()).filter(Boolean),
          hqImage,
          hqImageAlt,
          supportHeading,
          supportTollFree,
          supportTollFreeHref,
          supportEmail,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to save contact settings.");
        return;
      }
      setSaved(true);
    } catch {
      setError("Network error while saving.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Contact Page — Headquarters & Support Banner
          </h2>
          <p className="text-xs text-slate-500">
            Controls the featured Headquarters card and customer support phone/email on{" "}
            <code>/contact</code>.
          </p>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-[#1556a0] px-4 py-2 text-xs font-semibold text-white hover:bg-[#102c59] disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save HQ Settings"}
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </div>
      )}
      {saved && (
        <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
          Contact headquarters & support settings updated.
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Section Heading
          </label>
          <input
            type="text"
            required
            value={hqHeading}
            onChange={(e) => setHqHeading(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Company Name
          </label>
          <input
            type="text"
            required
            value={hqCompany}
            onChange={(e) => setHqCompany(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div className="md:col-span-2">
          <StringListEditor
            label="HQ Address Lines"
            items={hqAddressLines}
            onChange={setHqAddressLines}
            placeholder="Address line..."
            addLabel="Add address line"
          />
        </div>

        <ImageUploadField
          label="HQ Building Image"
          value={hqImage}
          onChange={setHqImage}
          folder="contact"
          required
        />

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            HQ Image Alt Text
          </label>
          <input
            type="text"
            required
            value={hqImageAlt}
            onChange={(e) => setHqImageAlt(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Support Section Heading
          </label>
          <input
            type="text"
            required
            value={supportHeading}
            onChange={(e) => setSupportHeading(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Toll-Free Display Number
          </label>
          <input
            type="text"
            required
            value={supportTollFree}
            onChange={(e) => {
              setSupportTollFree(e.target.value);
              const digits = e.target.value.replace(/[^+\d]/g, "");
              if (digits) setSupportTollFreeHref(`tel:${digits}`);
            }}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Support Email
          </label>
          <input
            type="email"
            required
            value={supportEmail}
            onChange={(e) => setSupportEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
          />
        </div>
      </div>
    </form>
  );
}