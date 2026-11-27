"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

type Props = {
  label: string;
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  required?: boolean;
};

export default function ImageUploadField({
  label,
  value,
  onChange,
  required,
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) {
        setError(data.error || "Image upload failed.");
        return;
      }
      onChange(data.url);
    } catch {
      setError("Network error while uploading image.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/images/... or /api/uploads/..."
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
        />
        <label className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100">
          <Upload className="h-3.5 w-3.5" />
          {uploading ? "Uploading..." : "Upload"}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}