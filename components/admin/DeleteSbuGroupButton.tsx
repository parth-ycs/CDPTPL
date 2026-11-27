// components/admin/DeleteSbuGroupButton.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteSbuGroupButton({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm(`Delete group "${title}"? Solutions in it will be ungrouped.`))
      return;
    setDeleting(true);
    try {
      const res = await fetch(
        `/api/admin/sbu-groups/${encodeURIComponent(slug)}`,
        { method: "DELETE" },
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to delete group.");
        return;
      }
      router.refresh();
    } catch {
      alert("Network error while deleting group.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="text-red-600 hover:text-red-800 disabled:opacity-50"
    >
      {deleting ? "Deleting…" : "Delete"}
    </button>
  );
}