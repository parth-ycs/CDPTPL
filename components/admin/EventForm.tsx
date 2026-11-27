"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

import type { EventRecord } from "@/data/events";

type Props = {
  mode: "create" | "edit";
  initialData?: EventRecord;
};

const CATEGORY_SUGGESTIONS = [
  "Industrial Exhibition",
  "Energy Exhibition",
  "Environmental Exhibition",
  "International Exhibition",
  "Process Engineering Exhibition",
  "Conference & Seminar",
];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function EventForm({ mode, initialData }: Props) {
  const router = useRouter();

  const [id, setId] = useState(initialData?.id ?? "");
  const [idTouched, setIdTouched] = useState(mode === "edit");
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [category, setCategory] = useState(
    initialData?.category ?? "Industrial Exhibition",
  );
  const [date, setDate] = useState(initialData?.date ?? "");
  const [location, setLocation] = useState(initialData?.location ?? "");
  const [venue, setVenue] = useState(initialData?.venue ?? "");
  const [stand, setStand] = useState(initialData?.stand ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );
  const [image, setImage] = useState(initialData?.image ?? "");
  const [imageAlt, setImageAlt] = useState(initialData?.imageAlt ?? "");
  const [url, setUrl] = useState(initialData?.url ?? "");
  const [displayOrder, setDisplayOrder] = useState<number>(
    initialData?.displayOrder ?? 0,
  );

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) {
        setError(data.error || "Image upload failed.");
        return;
      }
      setImage(data.url);
      if (!imageAlt && title) setImageAlt(title);
    } catch {
      setError("Network error while uploading image.");
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
      ...(mode === "create" ? { id: id.trim() } : {}),
      title,
      category,
      date,
      location,
      venue,
      stand: stand.trim() || null,
      description,
      image,
      imageAlt,
      url: url.trim() || null,
      displayOrder: Number(displayOrder) || 0,
    };

    try {
      const endpoint =
        mode === "create"
          ? "/api/admin/events"
          : `/api/admin/events/${encodeURIComponent(initialData!.id)}`;

      const res = await fetch(endpoint, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Could not save event.");
        return;
      }

      router.push("/admin/events");
      router.refresh();
    } catch {
      setError("Network error while saving event.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-12">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Basic Details */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-base font-semibold text-stone-900">
          Event details
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Event title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (mode === "create" && !idTouched) {
                  setId(slugify(e.target.value));
                }
              }}
              placeholder="ChemProTech 2026, Mumbai"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Slug / ID *
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
              placeholder="chemprotech-2026"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 disabled:bg-stone-100 disabled:text-stone-500"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Category *
            </label>
            <input
              type="text"
              required
              list="event-category-list"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
            />
            <datalist id="event-category-list">
              {CATEGORY_SUGGESTIONS.map((cat) => (
                <option key={cat} value={cat} />
              ))}
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Date *
            </label>
            <input
              type="text"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="29 – 30 April 2026"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Display order (lower = first)
            </label>
            <input
              type="number"
              value={displayOrder}
              onChange={(e) => setDisplayOrder(Number(e.target.value))}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Location *
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Mumbai, India"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Venue *
            </label>
            <input
              type="text"
              required
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              placeholder="Bombay Exhibition Centre, Goregaon"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Stand / Booth (optional)
            </label>
            <input
              type="text"
              value={stand}
              onChange={(e) => setStand(e.target.value)}
              placeholder="4C12 | Hall 4"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">
            Description *
          </label>
          <textarea
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">
            External event link (optional)
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
          />
          <p className="mt-1 text-xs text-stone-500">
            When provided, clicking the event card opens this link in a new tab.
          </p>
        </div>
      </section>

      {/* Banner Image */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <div>
          <h2 className="text-base font-semibold text-stone-900">
            Banner image
          </h2>
          <p className="text-xs text-stone-500">
            Recommended aspect ratio: 1212 × 477 px (wide banner).
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Image URL *
            </label>
            <div className="mt-1.5 flex gap-2">
              <input
                type="text"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="/images/events/..."
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
              />
              <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100">
                <Upload className="h-4 w-4" />
                {uploading ? "Uploading…" : "Upload"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Image alt text *
            </label>
            <input
              type="text"
              required
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              placeholder="JNK Chemdist at ChemProTech 2026, Mumbai"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900"
            />
          </div>
        </div>

        {image && (
          <div className="overflow-hidden rounded-lg border border-stone-200 bg-stone-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt || "Event banner preview"}
              className="aspect-[1212/477] w-full max-w-2xl object-cover"
            />
          </div>
        )}
      </section>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.push("/admin/events")}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
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
              ? "Create event"
              : "Save changes"}
        </button>
      </div>
    </form>
  );
}