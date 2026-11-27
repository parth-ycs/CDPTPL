import Image from "next/image";
import { Lightbulb, Target, TrendingUp, type LucideIcon } from "lucide-react";

import PageHero from "@/components/shared-page/PageHero";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

import type { ProjectData } from "@/data/projects/types";
import ProjectDetails from "./ProjectDetails";
import RelatedProjects from "./RelatedProjects";

type Props = {
  project: ProjectData;
  related: ProjectData[];
};

type Block = {
  id: string;
  title: string;
  Icon: LucideIcon;
  data: {
    heading: string;
    description: string;
    image?: string;
    imageAlt?: string;
    points?: string[];
  };
};

export default function ProjectPage({ project, related }: Props) {
  const { hero, overview, details, problem, solution, result } = project;

  const overviewImage = overview.image ?? hero.image;
  const overviewImageAlt = overview.imageAlt ?? hero.imageAlt;
  const { before, highlight, after } = overview.heading;

  const blocks: Block[] = [
    ...(problem
      ? [{ id: "problem", title: "Challenges", Icon: Target, data: problem }]
      : []),
    { id: "solution", title: "Solution", Icon: Lightbulb, data: solution },
    ...(result
      ? [{ id: "result", title: "Results", Icon: TrendingUp, data: result }]
      : []),
  ];

  return (
    <main className="bg-white text-brand-deep">
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: hero.heading },
        ]}
        ctaLabel="Discuss an Opportunity"
        ctaHref="#enquiry"
      />

      {/* OVERVIEW */}
      <section className="px-6 py-12 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-xl font-heading text-h1 font-medium text-brand-deep">
              {before}
              {highlight && (
                <>
                  {" "}
                  <span className="text-brand-blue">{highlight}</span>
                </>
              )}
              {after && <> {after}</>}
            </h2>

            <p className="mt-6 max-w-xl text-body text-ink">
              {overview.description}
            </p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={overviewImage}
              alt={overviewImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION (only when details exist) */}
      {details && <ProjectDetails details={details} />}

      {/* CHALLENGES / SOLUTION / RESULTS (only the ones that exist) */}
      <section className="bg-pale px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {blocks.map(({ id, title, Icon, data }, index) => {
            const { image, imageAlt, points = [] } = data;

            return (
              <div
                key={id}
                id={id}
                className={`grid scroll-mt-24 gap-6 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14 ${
                  index > 0 ? "border-t border-line" : ""
                }`}
              >
                <div className="flex items-start gap-6">
                  <Icon
                    size={44}
                    strokeWidth={1}
                    className="shrink-0 text-brand-red"
                  />

                  <h2 className="font-heading text-h1 font-medium text-brand-deep">
                    {title}
                  </h2>
                </div>

                <div className="max-w-2xl">
                  <p className="text-lead font-medium text-brand-deep">
                    {data.heading}
                  </p>

                  <p className="mt-3 text-body text-muted">
                    {data.description}
                  </p>

                  {points.length > 0 && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-muted marker:text-brand-red">
                      {points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {image && (
                    <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={imageAlt ?? data.heading}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <RelatedProjects projects={related} />

      <div id="enquiry" className="scroll-mt-24">
        <Enquiry />
      </div>
      <Footer />
    </main>
  );
}