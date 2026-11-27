"use client";

import { useMemo, useState } from "react";

import type { PageSectionItem } from "@/components/shared-page/types";

import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";
import PageOverview from "@/components/shared-page/PageOverview";
import Footer from "@/components/footer";
import Enquiry from "@/components/enquiry";
import {
  projects,
  projectCategories,
  projectsPageData,
  getProjectCategory,
} from "@/data/projects/projects";
import ProjectDirectory from "./listing/ProjectDirectory";

export default function ProjectsPage() {
  const [category, setCategory] = useState("ALL PROJECTS");
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
  }, [category, query]);

  const sections: PageSectionItem[] = [
    {
      id: "project-directory",
      label: "Project Directory",
      content: (
        <ProjectDirectory
          projects={filteredProjects}
          categories={projectCategories}
          selectedCategory={category}
          searchQuery={query}
          onCategoryChange={setCategory}
          onSearchChange={setQuery}
          onReset={() => {
            setCategory("ALL PROJECTS");
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