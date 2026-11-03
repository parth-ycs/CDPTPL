
import Container from "@/components/container";
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

  return (
    <Container className="py-8 lg:py-12">
      <div className="min-w-0 w-full">
        <PageSectionRenderer sections={visibleSections} />
      </div>
    </Container>
  );
}
