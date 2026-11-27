// components/admin/DeleteSolutionButton.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteSolutionButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      const res = await fetch(
        `/api/admin/solutions/${encodeURIComponent(id)}`,
        { method: "DELETE" },
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to delete solution.");
        return;
      }
      router.refresh();
    } catch {
      alert("Network error while deleting solution.");
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