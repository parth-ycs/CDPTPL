
import Container from "@/components/container";
import PageSidebar from "./PageSidebar";
import PageSectionRenderer from "./PageSectionRenderer";
import type { PageSectionItem } from "./types";

export default function PageLayout({
  sections,
}: {
  sections: PageSectionItem[];
}) {
  const visibleSections = sections.filter(
    (section) =>
      section.content !== null &&
      section.content !== undefined
  );

  if (visibleSections.length === 0) return null;

  const sidebarItems = visibleSections.map(({ id, label }) => ({
    id,
    label,
  }));

  return (
    <Container className="py-8 lg:py-12">
      <div className="flex flex-col gap-8 lg:gap-12">
        {/* Horizontal section navigation */}
        <div className="sticky top-[88px] z-30 -mx-4 border-b border-black/10 bg-white/80 px-4 backdrop-blur-md md:mx-0 md:px-0">
          <PageSidebar items={sidebarItems} />
        </div>

        {/* Full-width section content */}
        <div className="min-w-0">
          <PageSectionRenderer sections={visibleSections} />
        </div>
      </div>
    </Container>
  );
}
