"use client";

import { useMemo, useState } from "react";

import type { PageSectionItem } from "@/components/shared-page/types";
import type { ProjectData } from "@/data/projects/types";

import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";
import PageOverview from "@/components/shared-page/PageOverview";
import Footer from "@/components/footer";
import Enquiry from "@/components/enquiry";
import {
  projectsPageData,
  getProjectCategory,
} from "@/data/projects/projects";
import ProjectDirectory from "./listing/ProjectDirectory";

type Props = {
  projects: ProjectData[];
  categories: string[];
};

export default function ProjectsPage({ projects, categories }: Props) {
  const [category, setCategory] = useState(categories[0] ?? "ALL PROJECTS");
  const [query, setQuery] = useState("");

  const { hero, overview } = projectsPageData;

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        category === "ALL PROJECTS" || getProjectCategory(project) === category;

      const searchableText = [
        project.hero.heading,
        getProjectCategory(project),
        project.hero.description,
        project.details?.location ?? "",
        project.details?.plant ?? "",
        ...project.solution.points,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [projects, category, query]);

  const sections: PageSectionItem[] = [
    {
      id: "project-directory",
      label: "Project Directory",
      content: (
        <ProjectDirectory
          projects={filteredProjects}
          categories={categories}
          selectedCategory={category}
          searchQuery={query}
          onCategoryChange={setCategory}
          onSearchChange={setQuery}
          onReset={() => {
            setCategory(categories[0] ?? "ALL PROJECTS");
            setQuery("");
          }}
        />
      ),
    },
  ];

  return (
    <main className="bg-white text-[#102c59]">
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        ctaLabel="Explore Our Projects"
        ctaHref="#project-directory"
      />
      <PageOverview
        heading={overview.heading}
        description={overview.description}
      />

      <PageLayout sections={sections} />
      <Enquiry />
      <Footer />
    </main>
  );
}