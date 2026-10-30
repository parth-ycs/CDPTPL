import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/components/shared-page/PageHero";
import ServiceLayout from "@/components/solutions/ServiceLayout";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

import sbus, {
  getSolution,
  solutions,
  solutionHref,
} from "@/data/sbus/sbus";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) return {};

  return {
    title: `${solution.hero.name} | Chemdist Group`,
    description: solution.hero.description,
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const currentSBU = sbus.find((sbu) =>
    sbu.children.some((child) => child.slug === slug)
  );

  if (!currentSBU) notFound();

  const currentChild = currentSBU.children.find(
    (child) => child.slug === slug
  );

  if (!currentChild) notFound();

  const currentCategory = currentSBU.navigationGroups?.find(
    (category) => category.slug === currentChild.groupSlug
  );

  const relatedSolutions = currentCategory
    ? currentSBU.children.filter(
        (child) => child.groupSlug === currentCategory.slug
      )
    : currentSBU.children;

  if (!currentSBU) notFound();


  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    {
      label: currentSBU.name,
      href: `/solutions/${currentSBU.slug}`,
    },
    ...(currentCategory
      ? [
          {
            label: currentCategory.title,
            href: `/solutions/${currentSBU.slug}/${currentCategory.slug}`,
          },
        ]
      : []),
    { label: solution.hero.name },
  ];

  return (
    <main>
      <PageHero
        name={solution.hero.name}
        tagline={solution.hero.tagline}
        description={solution.hero.description}
        image={solution.hero.image ?? "/images/Hero_BG.png"}
        imageAlt={solution.hero.name}
      />

      <ServiceLayout
        sections={solution.sections}
        breadcrumbs={breadcrumbs}
        navigation={{
          label: "Explore other solutions",
          currentLabel: solution.hero.name,
          items: relatedSolutions.map((child) => ({
            slug: child.slug,
            label: child.hero.name,
            href: solutionHref(child.slug),
          })),
        }}
      />

      <div id="enquiry">
        <Enquiry />
      </div>

      <Footer />
    </main>
  );
}