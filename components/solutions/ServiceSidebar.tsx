"use client";

import { useEffect, useRef, useState } from "react";

type SidebarItem = { id: string; label: string };

export default function ServiceSidebar({ items }: { items: SidebarItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);

  // Highlight the section currently near the top of the viewport.
  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // On mobile the menu scrolls horizontally: keep the active link visible.
  // (No-op on desktop, where the list is vertical and doesn't overflow.)
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollTo({ left: link.offsetLeft - 16, behavior: "smooth" });
  }, [activeId]);

  return (
    <nav
      ref={navRef}
      aria-label="Service sections"
      className={[
        // Mobile: horizontal scrolling tab bar
        "relative flex gap-2 overflow-x-auto  bg-white/95 px-4 backdrop-blur",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        // Desktop: vertical list with a left rail
        "lg:flex-col lg:gap-1 lg:overflow-visible  lg:bg-transparent lg:px-0 lg:backdrop-blur-none",
      ].join(" ")}
    >
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-id={item.id}
            onClick={() => setActiveId(item.id)}
            aria-current={active ? "true" : undefined}
            className={[
              "group shrink-0 whitespace-nowrap px-4 py-3.5",
              "text-base",
              "transition-colors duration-200",
              "lg:mb-0 lg:py-3 lg:pl-5 lg:pr-4 lg:text-[17px]",
              active
                ? "font-bold text-brand-blue"
                : "font-medium text-muted hover:font-bold hover:text-brand-blue",
            ].join(" ")}
          >
            {/* Invisible bold copy reserves the bold width, so hovering
                doesn't make the layout jump when the text gets bolder. */}
            <span
              data-label={item.label}
              className="inline-flex flex-col after:invisible after:block after:h-0 after:overflow-hidden after:font-bold after:content-[attr(data-label)]"
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}