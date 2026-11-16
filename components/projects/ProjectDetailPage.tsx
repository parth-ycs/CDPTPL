import { CalendarDays, Gauge, MapPin } from "lucide-react";

import type { Project } from "@/data/projects";
import PageHero from "@/components/shared-page/PageHero";
import ProjectOverview from "./detail/ProjectOverview";
import ProjectScope from "./detail/ProjectScope";
import RelatedProjects from "./detail/RelatedProjects";

type ProjectDetailPageProps = {
  project: Project;
  relatedProjects: Project[];
};

export default function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  const metadata = [
    {
      label: "Location",
      value: project.location,
      icon: <MapPin size={16} />,
    },
    {
      label: "Completed",
      value: String(project.yearOfCompletion),
      icon: <CalendarDays size={16} />,
    },
    ...(project.capacity
      ? [
          {
            label: "Capacity",
            value: project.capacity,
            icon: <Gauge size={16} />,
          },
        ]
      : []),
  ];

  return (
    <main className="overflow-hidden bg-white text-[#102c59]">
      <PageHero
        name={project.title}
        tagline={project.category}
        description={project.description}
        image={project.image}
        imageAlt={project.plant}
        ctaLabel="Enquire about this project"
        ctaHref="/#enquiry"
        metadata={metadata}
      />

      <ProjectOverview project={project} />
      <ProjectScope project={project} />
      <RelatedProjects projects={relatedProjects} />
    </main>
  );
}