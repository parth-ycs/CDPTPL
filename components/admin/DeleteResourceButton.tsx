"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  endpoint: string;
  resourceName: string;
};

export default function DeleteResourceButton({
  endpoint,
  resourceName,
}: Props) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!window.confirm(`Delete "${resourceName}"? This cannot be undone.`)) {
      return;
    }

    setDeleting(true);
    try {
      const res = await fetch(endpoint, { method: "DELETE" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        alert(data.error || "Failed to delete item.");
        return;
      }
      router.refresh();
    } catch {
      alert("Network error while deleting item.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="font-medium text-red-600 hover:underline disabled:opacity-50"
    >
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
}