"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Upload } from "lucide-react";

import type { SBU } from "@/data/sbus";

export default function SbuForm({ initialData }: { initialData: SBU }) {
  const router = useRouter();

  const [number, setNumber] = useState(initialData.number);
  const [name, setName] = useState(initialData.name);
  const [eyebrow, setEyebrow] = useState(initialData.eyebrow);
  const [offerings, setOfferings] = useState(initialData.offerings);
  const [image, setImage] = useState(initialData.image);
  const [imageAlt, setImageAlt] = useState(initialData.imageAlt);
  const [capabilities, setCapabilities] = useState<string[]>(
    initialData.capabilities,
  );

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) setImage(data.url);
      else setError(data.error || "Image upload failed.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/admin/sbus/${encodeURIComponent(initialData.slug)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            number,
            name,
            eyebrow,
            offerings,
            image,
            imageAlt,
            capabilities: capabilities.map((c) => c.trim()).filter(Boolean),
          }),
        },
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Failed to update SBU.");
        return;
      }
      router.push("/admin/solutions/sbus");
      router.refresh();
    } catch {
      setError("Network error while saving SBU.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-stone-200 bg-white p-6"
    >
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Number
          </label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Eyebrow
          </label>
          <input
            type="text"
            value={eyebrow}
            onChange={(e) => setEyebrow(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700">
          Offerings / description
        </label>
        <textarea
          rows={3}
          value={offerings}
          onChange={(e) => setOfferings(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Hero image
          </label>
          <div className="mt-1.5 flex gap-2">
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            />
            <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100">
              <Upload className="h-4 w-4" />
              {uploading ? "Uploading…" : "Upload"}
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Image alt text
          </label>
          <input
            type="text"
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-stone-700">
            Key capabilities
          </label>
          <button
            type="button"
            onClick={() => setCapabilities([...capabilities, ""])}
            className="inline-flex items-center gap-1 text-xs font-medium text-stone-700 hover:text-stone-950"
          >
            <Plus className="h-3.5 w-3.5" /> Add capability
          </button>
        </div>
        <div className="mt-2 space-y-2">
          {capabilities.map((cap, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                value={cap}
                onChange={(e) => {
                  const next = [...capabilities];
                  next[i] = e.target.value;
                  setCapabilities(next);
                }}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
              />
              <button
                type="button"
                onClick={() =>
                  setCapabilities(capabilities.filter((_, idx) => idx !== i))
                }
                className="p-2 text-stone-400 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.push("/admin/solutions/sbus")}
          className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-stone-900 px-5 py-2 text-sm font-medium text-white hover:bg-stone-800 disabled:opacity-50"
        >
          {submitting ? "Saving…" : "Save SBU"}
        </button>
      </div>
    </form>
  );
}