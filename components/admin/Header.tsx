"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-white px-6 py-3">
      <a href="/" target="_blank" className="text-sm text-stone-600 hover:text-stone-900">
        View website
      </a>
      <button
        onClick={logout}
        disabled={busy}
        className="rounded-md border border-stone-300 px-3 py-1.5 text-sm font-medium hover:bg-stone-100 disabled:opacity-50"
      >
        {busy ? "Signing out…" : "Sign out"}
      </button>
    </header>
  );
}
