"use client";

import { useMemo, useState } from "react";

import type { PageSectionItem } from "@/components/shared-page/types";

import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";

import { projects, projectCategories, projectsPageData } from "@/data/projects";

import ProjectsIntroduction from "./listing/ProjectsIntroduction";
import ProjectDirectory from "./listing/ProjectDirectory";
import ProjectsCTA from "./listing/ProjectsCTA";

export default function ProjectsPage() {
  const [category, setCategory] = useState("All Projects");
  const [query, setQuery] = useState("");

  const { hero } = projectsPageData;

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        category === "All Projects" ||
        project.category === category;

      const searchableText = [
        project.title,
        project.category,
        project.location,
        project.plant,
        project.description,
        project.capacity ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(normalizedQuery)
      );
    });
  }, [category, query]);

  const sections: PageSectionItem[] = [
    {
      id: "projects-introduction",
      label: "Overview",
      content: <ProjectsIntroduction />,
    },
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
            setCategory("All Projects");
            setQuery("");
          }}
        />
      ),
    },
    {
      id: "projects-cta",
      label: "Let's Connect",
      content: <ProjectsCTA />,
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
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
        ctaLabel="Explore Our Projects"
        ctaHref="#project-directory"
      />

      <PageLayout sections={sections} />
    </main>
  );
}