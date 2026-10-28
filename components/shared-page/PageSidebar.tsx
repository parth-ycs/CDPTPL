
"use client";

import { useEffect, useRef, useState } from "react";
import type { PageSectionItem } from "./types";

type SidebarItem = Pick<PageSectionItem, "id" | "label">;

export default function PageSidebar({
  items,
}: {
  items: SidebarItem[];
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>(
      `[data-id="${activeId}"]`
    );

    if (!nav || !link) return;

    const navIsScrollable = nav.scrollWidth > nav.clientWidth;

    if (!navIsScrollable) return;

    nav.scrollTo({
      left:
        link.offsetLeft -
        nav.offsetLeft -
        nav.clientWidth / 2 +
        link.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav
      ref={navRef}
      aria-label="Page sections"
      className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => {
        const active = item.id === activeId;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-id={item.id}
            onClick={() => setActiveId(item.id)}
            aria-current={active ? "location" : undefined}
            className={`relative shrink-0 whitespace-nowrap px-4 py-4 text-sm transition-colors duration-200 md:px-5 md:text-base ${
              active
                ? "font-bold text-brand-blue"
                : "font-medium text-muted hover:text-brand-blue"
            }`}
          >
            {item.label}

            <span
              className={`absolute inset-x-4 bottom-0 h-0.5 transition-colors duration-200 md:inset-x-5 ${
                active ? "bg-brand-blue" : "bg-transparent"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
