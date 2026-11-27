"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

import type { SBUGroupRecord } from "@/data/sbus";

type Props = {
  mode: "create" | "edit";
  initialData?: SBUGroupRecord;
  sbus: { slug: string; name: string }[];
};

export default function SbuGroupForm({ mode, initialData, sbus }: Props) {
  const router = useRouter();

  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [sbuSlug, setSbuSlug] = useState(
    initialData?.sbuSlug ?? sbus[0]?.slug ?? "",
  );
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [eyebrow, setEyebrow] = useState(initialData?.eyebrow ?? "");
  const [tagline, setTagline] = useState(initialData?.tagline ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );
  const [overview, setOverview] = useState(initialData?.overview ?? "");
  const [image, setImage] = useState(initialData?.image ?? "");
  const [displayOrder, setDisplayOrder] = useState(
    initialData?.displayOrder ?? 0,
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

    const payload = {
      ...(mode === "create" ? { slug } : {}),
      sbuSlug,
      title,
      eyebrow,
      tagline,
      description,
      overview,
      image,
      displayOrder: Number(displayOrder) || 0,
    };

    try {
      const url =
        mode === "create"
          ? "/api/admin/sbu-groups"
          : `/api/admin/sbu-groups/${encodeURIComponent(initialData!.slug)}`;

      const res = await fetch(url, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Failed to save navigation group.");
        return;
      }
      router.push("/admin/solutions/groups");
      router.refresh();
    } catch {
      setError("Network error while saving navigation group.");
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
            Group slug
          </label>
          <input
            type="text"
            value={slug}
            disabled={mode === "edit"}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="process-equipment"
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm disabled:bg-stone-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Parent SBU
          </label>
          <select
            value={sbuSlug}
            onChange={(e) => setSbuSlug(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          >
            {sbus.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Display order
          </label>
          <input
            type="number"
            value={displayOrder}
            onChange={(e) => setDisplayOrder(Number(e.target.value))}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          Tagline
        </label>
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700">
          Hero description
        </label>
        <textarea
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700">
          Overview paragraph
        </label>
        <textarea
          rows={3}
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
        />
      </div>

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

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.push("/admin/solutions/groups")}
          className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-stone-900 px-5 py-2 text-sm font-medium text-white hover:bg-stone-800 disabled:opacity-50"
        >
          {submitting
            ? "Saving…"
            : mode === "create"
              ? "Create group"
              : "Save group"}
        </button>
      </div>
    </form>
  );
}