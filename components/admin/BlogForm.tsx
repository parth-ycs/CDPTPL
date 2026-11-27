"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Blog } from "@/lib/db/queries/blogs";

type Props = {
  mode: "create" | "edit";
  blog?: Blog;
  categories: string[];
};

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const inputClass =
  "mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 disabled:bg-stone-100 disabled:text-stone-500";

export default function BlogForm({ mode, blog, categories }: Props) {
  const router = useRouter();
  const [values, setValues] = useState({
    id: blog?.id ?? "",
    title: blog?.title ?? "",
    excerpt: blog?.excerpt ?? "",
    category: blog?.category ?? "",
    authorName: blog?.author.name ?? "",
    publishedAt: (blog?.publishedAt ?? new Date().toISOString()).slice(0, 10),
    image: blog?.image ?? "",
    imageAlt: blog?.imageAlt ?? "",
    content: blog?.content ?? "",
  });
  const [slugTouched, setSlugTouched] = useState(mode === "edit");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const set = (key: keyof typeof values, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  function onTitleChange(title: string) {
    setValues((v) => ({ ...v, title, id: slugTouched ? v.id : slugify(title) }));
  }

  async function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body });
    const data = await res.json().catch(() => null);
    if (res.ok) set("image", data.url);
    else setError(data?.error ?? "Image upload failed");
    setUploading(false);
    e.target.value = "";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const { id, ...fields } = values;
    const res =
      mode === "create"
        ? await fetch("/api/admin/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, ...fields }),
          })
        : await fetch(`/api/admin/blogs/${blog!.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fields),
          });

    if (res.ok) {
      router.push("/admin/blogs");
      router.refresh();
      return;
    }
    const data = await res.json().catch(() => null);
    setError(data?.error ?? "Couldn't save the blog. Try again.");
    setSaving(false);
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl space-y-5">
      <label className="block text-sm font-medium">
        Title
        <input required value={values.title} onChange={(e) => onTitleChange(e.target.value)} className={inputClass} />
      </label>

      <label className="block text-sm font-medium">
        Slug (used in the blog URL)
        <input
          required
          value={values.id}
          disabled={mode === "edit"}
          onChange={(e) => {
            setSlugTouched(true);
            set("id", e.target.value);
          }}
          className={inputClass}
        />
        {mode === "edit" && (
          <span className="mt-1 block text-xs font-normal text-stone-500">
            The slug can't be changed after the blog is created.
          </span>
        )}
      </label>

      <label className="block text-sm font-medium">
        Excerpt
        <textarea required rows={3} value={values.excerpt} onChange={(e) => set("excerpt", e.target.value)} className={inputClass} />
      </label>

      <div className="grid gap-5 sm:grid-cols-3">
        <label className="block text-sm font-medium">
          Category
          <input required list="blog-categories" value={values.category} onChange={(e) => set("category", e.target.value)} className={inputClass} />
          <datalist id="blog-categories">
            {categories.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </label>
        <label className="block text-sm font-medium">
          Author name
          <input required value={values.authorName} onChange={(e) => set("authorName", e.target.value)} className={inputClass} />
        </label>
        <label className="block text-sm font-medium">
          Published on
          <input required type="date" value={values.publishedAt} onChange={(e) => set("publishedAt", e.target.value)} className={inputClass} />
        </label>
      </div>

      <fieldset className="space-y-3 rounded-md border border-stone-200 p-4">
        <legend className="px-1 text-sm font-medium">Cover image</legend>
        <div className="flex items-start gap-4">
          {values.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={values.image} alt="" className="h-24 w-36 rounded-md border border-stone-200 object-cover" />
          )}
          <div className="flex-1 space-y-3">
            <label className="block text-sm font-medium">
              Upload new image (JPG, PNG, WebP or GIF, up to 5 MB)
              <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={onImageChange} disabled={uploading} className="mt-1 block w-full text-sm" />
            </label>
            {uploading && <p className="text-xs text-stone-500">Uploading…</p>}
            <label className="block text-sm font-medium">
              Image path or URL
              <input required value={values.image} onChange={(e) => set("image", e.target.value)} className={inputClass} />
            </label>
          </div>
        </div>
        <label className="block text-sm font-medium">
          Image description (alt text)
          <input required value={values.imageAlt} onChange={(e) => set("imageAlt", e.target.value)} className={inputClass} />
        </label>
      </fieldset>

      <label className="block text-sm font-medium">
        Content (Markdown)
        <textarea required rows={22} value={values.content} onChange={(e) => set("content", e.target.value)} className={`${inputClass} font-mono leading-relaxed`} />
      </label>

      {error && <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

      <div className="flex gap-3">
        <button disabled={saving || uploading} className="rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-50">
          {saving ? "Saving…" : mode === "create" ? "Create blog" : "Save changes"}
        </button>
        <button type="button" onClick={() => router.push("/admin/blogs")} className="rounded-md border border-stone-300 px-4 py-2 text-sm font-medium hover:bg-stone-100">
          Cancel
        </button>
      </div>
    </form>
  );
}
