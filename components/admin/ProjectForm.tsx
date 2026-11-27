"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Upload } from "lucide-react";

import {
  INNOVATION_SHOWCASE_CATEGORY,
  type ProjectData,
} from "@/data/projects/projects";

type Props = {
  mode: "create" | "edit";
  initialData?: ProjectData;
  categories: string[];
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function ImageField({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  required?: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) {
        setUploadError(data.error || "Image upload failed.");
        return;
      }
      onChange(data.url);
    } catch {
      setUploadError("Network error while uploading image.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-stone-700">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/images/projects/... or /api/uploads/..."
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
        />
        <label className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100">
          <Upload className="h-4 w-4" />
          {uploading ? "Uploading…" : "Upload"}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>
      {uploadError && (
        <p className="mt-1 text-xs text-red-600">{uploadError}</p>
      )}
    </div>
  );
}

function PointsEditor({
  label,
  points,
  onChange,
}: {
  label: string;
  points: string[];
  onChange: (next: string[]) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-stone-700">
          {label}
        </label>
        <button
          type="button"
          onClick={() => onChange([...points, ""])}
          className="inline-flex items-center gap-1 text-xs font-medium text-stone-700 hover:text-stone-950"
        >
          <Plus className="h-3.5 w-3.5" />
          Add bullet
        </button>
      </div>

      {points.length === 0 ? (
        <p className="mt-1.5 text-xs text-stone-500">No bullet points added.</p>
      ) : (
        <div className="mt-2 space-y-2">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="text"
                value={point}
                onChange={(e) => {
                  const copy = [...points];
                  copy[idx] = e.target.value;
                  onChange(copy);
                }}
                placeholder={`Point ${idx + 1}`}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => onChange(points.filter((_, i) => i !== idx))}
                aria-label="Remove point"
                className="rounded-lg p-2 text-stone-400 hover:bg-stone-100 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectForm({
  mode,
  initialData,
  categories,
}: Props) {
  const router = useRouter();

  const [id, setId] = useState(initialData?.id ?? "");
  const [slugTouched, setSlugTouched] = useState(mode === "edit");
  const [category, setCategory] = useState(initialData?.category ?? "");

  // Hero
  const [heroEyebrow, setHeroEyebrow] = useState(
    initialData?.hero.eyebrow ?? "",
  );
  const [heroHeading, setHeroHeading] = useState(
    initialData?.hero.heading ?? "",
  );
  const [heroDescription, setHeroDescription] = useState(
    initialData?.hero.description ?? "",
  );
  const [heroImage, setHeroImage] = useState(initialData?.hero.image ?? "");
  const [heroImageAlt, setHeroImageAlt] = useState(
    initialData?.hero.imageAlt ?? "",
  );

  // Details
  const [location, setLocation] = useState(
    initialData?.details?.location ?? "",
  );
  const [plant, setPlant] = useState(initialData?.details?.plant ?? "");
  const [capacity, setCapacity] = useState(
    initialData?.details?.capacity ?? "",
  );
  const [yearOfAward, setYearOfAward] = useState(
    initialData?.details?.yearOfAward ?? "",
  );
  const [yearOfCompletion, setYearOfCompletion] = useState(
    initialData?.details?.yearOfCompletion ?? "",
  );
  const [contractValue, setContractValue] = useState(
    initialData?.details?.contractValue ?? "",
  );
  const [executionScope, setExecutionScope] = useState(
    initialData?.details?.executionScope ?? "",
  );

  // Overview
  const [overviewBefore, setOverviewBefore] = useState(
    initialData?.overview.heading.before ?? "",
  );
  const [overviewHighlight, setOverviewHighlight] = useState(
    initialData?.overview.heading.highlight ?? "",
  );
  const [overviewAfter, setOverviewAfter] = useState(
    initialData?.overview.heading.after ?? "",
  );
  const [overviewDescription, setOverviewDescription] = useState(
    initialData?.overview.description ?? "",
  );
  const [overviewImage, setOverviewImage] = useState(
    initialData?.overview.image ?? "",
  );
  const [overviewImageAlt, setOverviewImageAlt] = useState(
    initialData?.overview.imageAlt ?? "",
  );

  // Problem (optional)
  const [includeProblem, setIncludeProblem] = useState(
    Boolean(initialData?.problem),
  );
  const [problemHeading, setProblemHeading] = useState(
    initialData?.problem?.heading ?? "",
  );
  const [problemDescription, setProblemDescription] = useState(
    initialData?.problem?.description ?? "",
  );
  const [problemImage, setProblemImage] = useState(
    initialData?.problem?.image ?? "",
  );
  const [problemImageAlt, setProblemImageAlt] = useState(
    initialData?.problem?.imageAlt ?? "",
  );

  // Solution (required)
  const [solutionHeading, setSolutionHeading] = useState(
    initialData?.solution.heading ?? "",
  );
  const [solutionDescription, setSolutionDescription] = useState(
    initialData?.solution.description ?? "",
  );
  const [solutionImage, setSolutionImage] = useState(
    initialData?.solution.image ?? "",
  );
  const [solutionImageAlt, setSolutionImageAlt] = useState(
    initialData?.solution.imageAlt ?? "",
  );
  const [solutionPoints, setSolutionPoints] = useState<string[]>(
    initialData?.solution.points ?? [""],
  );

  // Result (optional)
  const [includeResult, setIncludeResult] = useState(
    Boolean(initialData?.result),
  );
  const [resultHeading, setResultHeading] = useState(
    initialData?.result?.heading ?? "",
  );
  const [resultDescription, setResultDescription] = useState(
    initialData?.result?.description ?? "",
  );
  const [resultPoints, setResultPoints] = useState<string[]>(
    initialData?.result?.points ?? [],
  );

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categorySuggestions = Array.from(
    new Set([
      "PROCESS PLANTS & EPC",
      INNOVATION_SHOWCASE_CATEGORY,
      ...categories,
    ]),
  );

  function handleHeadingChange(value: string) {
    setHeroHeading(value);
    if (mode === "create" && !slugTouched) {
      setId(slugify(value));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = {
      ...(mode === "create" ? { id: id.trim() } : {}),
      category: category.trim(),
      details: {
        location,
        plant,
        capacity,
        yearOfAward,
        yearOfCompletion,
        contractValue,
        executionScope,
      },
      hero: {
        eyebrow: heroEyebrow,
        heading: heroHeading,
        description: heroDescription,
        image: heroImage,
        imageAlt: heroImageAlt,
      },
      overview: {
        heading: {
          before: overviewBefore,
          highlight: overviewHighlight,
          after: overviewAfter,
        },
        description: overviewDescription,
        image: overviewImage,
        imageAlt: overviewImageAlt,
      },
      problem: includeProblem
        ? {
            heading: problemHeading,
            description: problemDescription,
            image: problemImage,
            imageAlt: problemImageAlt,
          }
        : null,
      solution: {
        heading: solutionHeading,
        description: solutionDescription,
        image: solutionImage,
        imageAlt: solutionImageAlt,
        points: solutionPoints.map((p) => p.trim()).filter(Boolean),
      },
      result: includeResult
        ? {
            heading: resultHeading,
            description: resultDescription,
            points: resultPoints.map((p) => p.trim()).filter(Boolean),
          }
        : null,
    };

    try {
      const url =
        mode === "create"
          ? "/api/admin/projects"
          : `/api/admin/projects/${encodeURIComponent(initialData!.id)}`;

      const res = await fetch(url, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Could not save project.");
        return;
      }

      router.push("/admin/projects");
      router.refresh();
    } catch {
      setError("Network error while saving project.");
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

      {/* Identity & Category */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-base font-semibold text-stone-900">
          Identity & classification
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              URL slug <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={id}
              disabled={mode === "edit"}
              onChange={(e) => {
                setSlugTouched(true);
                setId(e.target.value);
              }}
              placeholder="addar-reaction-facility"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 disabled:bg-stone-100 disabled:text-stone-500 focus:border-stone-900 focus:outline-none"
            />
            <p className="mt-1 text-xs text-stone-500">
              {mode === "create"
                ? "Lowercase letters, numbers, and hyphens only."
                : "Slug cannot be changed after creation."}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Category <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              list="project-categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="PROCESS PLANTS & EPC"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
            <datalist id="project-categories">
              {categorySuggestions.map((cat) => (
                <option key={cat} value={cat} />
              ))}
            </datalist>
            <p className="mt-1 text-xs text-stone-500">
              Use &ldquo;{INNOVATION_SHOWCASE_CATEGORY}&rdquo; to feature this
              project on the R&amp;D page.
            </p>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-base font-semibold text-stone-900">Hero section</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Eyebrow <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={heroEyebrow}
              onChange={(e) => setHeroEyebrow(e.target.value)}
              placeholder="Process Plants & EPC"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Heading <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={heroHeading}
              onChange={(e) => handleHeadingChange(e.target.value)}
              placeholder="Project title"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={3}
            value={heroDescription}
            onChange={(e) => setHeroDescription(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ImageField
            label="Hero image"
            value={heroImage}
            onChange={setHeroImage}
            required
          />
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Hero image alt text <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={heroImageAlt}
              onChange={(e) => setHeroImageAlt(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Project Information (optional) */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <div>
          <h2 className="text-base font-semibold text-stone-900">
            Project information (optional)
          </h2>
          <p className="text-xs text-stone-500">
            Leave blank for innovation showcase entries without client specs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Saudi Arabia"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Plant / facility
            </label>
            <input
              type="text"
              value={plant}
              onChange={(e) => setPlant(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Capacity
            </label>
            <input
              type="text"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="6,800 TPA"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Year of award
            </label>
            <input
              type="text"
              value={yearOfAward}
              onChange={(e) => setYearOfAward(e.target.value)}
              placeholder="2018"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Year of completion
            </label>
            <input
              type="text"
              value={yearOfCompletion}
              onChange={(e) => setYearOfCompletion(e.target.value)}
              placeholder="2019"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Contract value
            </label>
            <input
              type="text"
              value={contractValue}
              onChange={(e) => setContractValue(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">
            Execution scope
          </label>
          <input
            type="text"
            value={executionScope}
            onChange={(e) => setExecutionScope(e.target.value)}
            placeholder="Engineering, Procurement, Fabrication and Site Construction"
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-base font-semibold text-stone-900">
          Overview section
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Heading (before) <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={overviewBefore}
              onChange={(e) => setOverviewBefore(e.target.value)}
              placeholder="Engineering a"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Heading (highlighted)
            </label>
            <input
              type="text"
              value={overviewHighlight}
              onChange={(e) => setOverviewHighlight(e.target.value)}
              placeholder="multipurpose reaction facility"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">
              Heading (after)
            </label>
            <input
              type="text"
              value={overviewAfter}
              onChange={(e) => setOverviewAfter(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">
            Overview description <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={3}
            value={overviewDescription}
            onChange={(e) => setOverviewDescription(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ImageField
            label="Overview image (optional, defaults to hero image)"
            value={overviewImage}
            onChange={setOverviewImage}
          />
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Overview image alt text
            </label>
            <input
              type="text"
              value={overviewImageAlt}
              onChange={(e) => setOverviewImageAlt(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Challenges (optional) */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              Challenges section
            </h2>
            <p className="text-xs text-stone-500">
              Optional. Hidden on the public page when disabled.
            </p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-stone-700">
            <input
              type="checkbox"
              checked={includeProblem}
              onChange={(e) => setIncludeProblem(e.target.checked)}
              className="h-4 w-4 rounded border-stone-300 text-stone-900"
            />
            Include challenges
          </label>
        </div>

        {includeProblem && (
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-sm font-medium text-stone-700">
                Heading <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={problemHeading}
                onChange={(e) => setProblemHeading(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700">
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                rows={3}
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ImageField
                label="Section image (optional)"
                value={problemImage}
                onChange={setProblemImage}
              />
              <div>
                <label className="block text-sm font-medium text-stone-700">
                  Image alt text
                </label>
                <input
                  type="text"
                  value={problemImageAlt}
                  onChange={(e) => setProblemImageAlt(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Solution (required) */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-base font-semibold text-stone-900">
          Solution section
        </h2>

        <div>
          <label className="block text-sm font-medium text-stone-700">
            Heading <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={solutionHeading}
            onChange={(e) => setSolutionHeading(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={3}
            value={solutionDescription}
            onChange={(e) => setSolutionDescription(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
          />
        </div>

        <PointsEditor
          label="Solution points"
          points={solutionPoints}
          onChange={setSolutionPoints}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <ImageField
            label="Section image (optional)"
            value={solutionImage}
            onChange={setSolutionImage}
          />
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Image alt text
            </label>
            <input
              type="text"
              value={solutionImageAlt}
              onChange={(e) => setSolutionImageAlt(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Results (optional) */}
      <section className="space-y-4 rounded-xl border border-stone-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              Results section
            </h2>
            <p className="text-xs text-stone-500">
              Optional. Hidden on the public page when disabled.
            </p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-stone-700">
            <input
              type="checkbox"
              checked={includeResult}
              onChange={(e) => setIncludeResult(e.target.checked)}
              className="h-4 w-4 rounded border-stone-300 text-stone-900"
            />
            Include results
          </label>
        </div>

        {includeResult && (
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-sm font-medium text-stone-700">
                Heading <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={resultHeading}
                onChange={(e) => setResultHeading(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700">
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                rows={3}
                value={resultDescription}
                onChange={(e) => setResultDescription(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
              />
            </div>

            <PointsEditor
              label="Result points"
              points={resultPoints}
              onChange={setResultPoints}
            />
          </div>
        )}
      </section>

      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => router.push("/admin/projects")}
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
              ? "Create project"
              : "Save changes"}
        </button>
      </div>
    </form>
  );
}