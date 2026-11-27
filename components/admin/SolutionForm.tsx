"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

import type { SolutionRecord } from "@/data/sbus";
import type { ServiceSection } from "@/components/solutions/types";
import SolutionSectionsEditor from "./SolutionSectionsEditor";

type Props = {
  mode: "create" | "edit";
  initialData?: SolutionRecord;
  sbus: { slug: string; name: string }[];
  groups: { slug: string; sbuSlug: string; title: string }[];
};

function slugify(v: string) {
  return v
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function SolutionForm({
  mode,
  initialData,
  sbus,
  groups,
}: Props) {
  const router = useRouter();

  const [sbuSlug, setSbuSlug] = useState(
    initialData?.sbuSlug ?? sbus[0]?.slug ?? "",
  );
  const [groupSlug, setGroupSlug] = useState(initialData?.groupSlug ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(mode === "edit");
  const [displayOrder, setDisplayOrder] = useState(
    initialData?.displayOrder ?? 0,
  );

  const [heroName, setHeroName] = useState(initialData?.hero.name ?? "");
  const [heroTagline, setHeroTagline] = useState(
    initialData?.hero.tagline ?? "",
  );
  const [heroDescription, setHeroDescription] = useState(
    initialData?.hero.description ?? "",
  );
  const [heroImage, setHeroImage] = useState(initialData?.hero.image ?? "");
  const [heroImageAlt, setHeroImageAlt] = useState(
    initialData?.hero.imageAlt ?? "",
  );

  const [sections, setSections] = useState<ServiceSection[]>(
    initialData?.sections ?? [],
  );

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const availableGroups = groups.filter((g) => g.sbuSlug === sbuSlug);

  async function handleHeroUpload(e: React.ChangeEvent<HTMLInputElement>) {
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
      if (res.ok && data.url) setHeroImage(data.url);
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
      sbuSlug,
      groupSlug: groupSlug || null,
      slug: slug.trim(),
      displayOrder: Number(displayOrder) || 0,
      hero: {
        name: heroName,
        tagline: heroTagline,
        description: heroDescription,
        image: heroImage,
        imageAlt: heroImageAlt,
      },
      sections,
    };

    try {
      const url =
        mode === "create"
          ? "/api/admin/solutions"
          : `/api/admin/solutions/${encodeURIComponent(initialData!.id)}`;

      const res = await fetch(url, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Could not save solution.");
        return;
      }

      router.push("/admin/solutions");
      router.refresh();
    } catch {
      setError("Network error while saving solution.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-12">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Placement & URL */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-base font-semibold text-stone-900">
          Placement & URL
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Parent SBU *
            </label>
            <select
              value={sbuSlug}
              onChange={(e) => {
                setSbuSlug(e.target.value);
                setGroupSlug("");
              }}
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
              Navigation group (optional)
            </label>
            <select
              value={groupSlug}
              onChange={(e) => setGroupSlug(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            >
              <option value="">None (direct under SBU)</option>
              {availableGroups.map((g) => (
                <option key={g.slug} value={g.slug}>
                  {g.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Solution slug *
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
              }}
              placeholder="cd-smart-mixer"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            />
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
      </section>

      {/* Hero */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-base font-semibold text-stone-900">Hero content</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Solution name *
            </label>
            <input
              type="text"
              value={heroName}
              onChange={(e) => {
                setHeroName(e.target.value);
                if (mode === "create" && !slugTouched) {
                  setSlug(slugify(e.target.value));
                }
              }}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Tagline *
            </label>
            <input
              type="text"
              value={heroTagline}
              onChange={(e) => setHeroTagline(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">
            Description *
          </label>
          <textarea
            rows={3}
            value={heroDescription}
            onChange={(e) => setHeroDescription(e.target.value)}
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
                value={heroImage}
                onChange={(e) => setHeroImage(e.target.value)}
                placeholder="/images/..."
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
              />
              <label className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100">
                <Upload className="h-4 w-4" />
                {uploading ? "Uploading…" : "Upload"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleHeroUpload}
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
              value={heroImageAlt}
              onChange={(e) => setHeroImageAlt(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Sections Builder */}
      <SolutionSectionsEditor sections={sections} onChange={setSections} />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.push("/admin/solutions")}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700"
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
              ? "Create solution"
              : "Save changes"}
        </button>
      </div>
    </form>
  );
}