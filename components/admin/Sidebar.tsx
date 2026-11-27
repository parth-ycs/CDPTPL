"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Add a module here once its admin page exists (empty page.tsx files break the build).
const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Blogs", href: "/admin/blogs" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Solutions", href: "/admin/solutions"},
  // { label: "Media", href: "/admin/media" },
  // { label: "Events", href: "/admin/events" },
  // { label: "Patents", href: "/admin/patents" },
  // { label: "Careers", href: "/admin/careers" },
  // { label: "Enquiries", href: "/admin/enquiries" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-stone-200 bg-white md:min-h-screen md:w-56 md:shrink-0 md:border-b-0 md:border-r">
      <div className="px-5 py-4 text-base font-semibold tracking-tight">Chemdist Admin</div>
      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:pb-0">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-stone-900 text-white"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
