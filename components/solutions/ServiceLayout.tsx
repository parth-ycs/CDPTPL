import Link from "next/link";
import Container from "@/components/container";
import ServiceSidebar from "./ServiceSidebar";
import ServiceSectionRenderer from "./ServiceSectionRenderer";
import { ChevronRight } from "lucide-react";
import type { ServiceSection } from "./types";
import ServiceNavigator from "./SolutionNavigator";
type Breadcrumb = {
  label: string;
  href?: string;
};

type NavigationItem = {
  slug: string;
  label: string;
  href: string;
};

type ServiceNavigation = {
  label: string;
  currentLabel: string;
  items: NavigationItem[];
};

type Props = {
  sections: ServiceSection[];
  breadcrumbs?: Breadcrumb[];
  navigation?: ServiceNavigation;
};

function hasContent(section: ServiceSection): boolean {
  if ("items" in section && section.items.length === 0) {
    return false;
  }

  return true;
}

export default function ServiceLayout({
  sections,
  breadcrumbs,
  navigation,
}: Props) {
  const visible = sections.filter(hasContent);

  const sidebarItems = visible.map(({ id, label }) => ({
    id,
    label,
  }));

  return (
    <Container className="py-8 lg:py-12">
      <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
          >
            {breadcrumbs.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-red-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-[#102c59]">
                    {item.label}
                  </span>
                )}

                {index !== breadcrumbs.length - 1 && (
                  <ChevronRight size={14} className="shrink-0 text-slate-400" />
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Service Navigator */}
        {navigation && (
          <div className="shrink-0 sm:ml-auto">
            <ServiceNavigator
              label={navigation.label}
              currentLabel={navigation.currentLabel}
              items={navigation.items}
            />
          </div>
        )}
      </div>

      {/* Sections */}
      {visible.length > 0 && (
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4 lg:gap-10">
          <aside className="sticky top-[88px] z-30 lg:top-28 lg:col-span-1 lg:self-start">
            <ServiceSidebar items={sidebarItems} />
          </aside>

          <div className="min-w-0 lg:col-span-3">
            <ServiceSectionRenderer sections={visible} />
          </div>
        </div>
      )}
    </Container>
  );
}