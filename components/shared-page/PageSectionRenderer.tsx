
import type { PageSectionItem } from "./types";

export default function PageSectionRenderer({
  sections,
}: {
  sections: PageSectionItem[];
}) {
  return (
    <div className="space-y-16 lg:space-y-20">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-label={section.label}
          className="scroll-mt-28"
        >
          {section.content}
        </section>
      ))}
    </div>
  );
}
