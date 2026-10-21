import Container from "@/components/landing_page/container";
import ServiceSidebar from "./ServiceSidebar";
import ServiceSectionRenderer from "./ServiceSectionRenderer";
import type { ServiceSection } from "./types";

export default function ServiceLayout({ sections }: { sections: ServiceSection[] }) {
  // Drop sections that have nothing to show, so the sidebar and the page
  // are always generated from the exact same list.
  const visible = sections.filter(
    (s) => !("items" in s) || s.items.length > 0
  );

  const sidebarItems = visible.map(({ id, label }) => ({ id, label }));

  return (
    <Container className="py-10 lg:py-16">
      {/*
        Sticky rules:
        - No overflow-hidden/auto on any ancestor.
        - Mobile uses flex-col, NOT grid. A sticky grid item is confined to its
          own grid row, so on a one-column grid the bar would never stick.
          In a flex column it sticks for the whole container.
        - Desktop switches to a 4-column grid; `lg:self-start` stops the
          sidebar stretching to the full row height.
        - Offsets: mobile top-[88px] = fixed navbar height.
          Desktop lg:top-28 (112px) = navbar + 24px gap.
          If the navbar height changes, update both here and scroll-mt in
          ServiceSectionRenderer.
      */}
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4 lg:gap-10">
        <aside className="sticky top-[88px] z-30 lg:top-28 lg:col-span-1 lg:self-start">
          <ServiceSidebar items={sidebarItems} />
        </aside>

        <div className="min-w-0 lg:col-span-3">
          <ServiceSectionRenderer sections={visible} />
        </div>
      </div>
    </Container>
  );
}