
import Container from "@/components/container";
import ServiceSidebar from "./ServiceSidebar";
import ServiceSectionRenderer from "./ServiceSectionRenderer";
import type { ServiceSection } from "./types";

function hasContent(section: ServiceSection): boolean {
  if ("items" in section && section.items.length === 0) {
    return false;
  }

  return true;
}

export default function ServiceLayout({
  sections,
}: {
  sections: ServiceSection[];
}) {
  const visible = sections.filter(hasContent);

  const sidebarItems = visible.map(({ id, label }) => ({
    id,
    label,
  }));

  if (visible.length === 0) return null;

  return (
    <Container className="py-10 lg:py-16">
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
