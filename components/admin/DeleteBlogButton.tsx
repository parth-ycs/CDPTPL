"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteBlogButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onDelete() {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    setBusy(true);
    const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const body = await res.json().catch(() => null);
      alert(body?.error ?? "Couldn't delete the blog. Try again.");
      setBusy(false);
      return;
    }
    router.refresh();
  }

  return (
    <button onClick={onDelete} disabled={busy} className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50">
      {busy ? "Deleting…" : "Delete"}
    </button>
  );
}
