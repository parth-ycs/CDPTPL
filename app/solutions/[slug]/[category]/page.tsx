
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PageHero from "@/components/shared-page/PageHero";
import CategoryLanding from "@/components/solutions/category-landing";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

import sbus, {
  type SolutionChild,
} from "@/data/sbus/sbus";

type Props = {
  params: Promise<{
    slug: string;
    category: string;
  }>;
};

type GroupedSolution = SolutionChild & {
  groupSlug: string;
};

// ---------------------------------------------
// CATEGORY DATA
// ---------------------------------------------

function getCategoryData(
  slug: string,
  categorySlug: string
) {
  const sbu = sbus.find((item) => item.slug === slug);

  if (!sbu) return undefined;

  const category = sbu.navigationGroups?.find(
    (item) => item.slug === categorySlug
  );

  if (!category) return undefined;

  const solutions = sbu.children.filter(
    (child): child is GroupedSolution =>
      child.groupSlug === category.slug
  );

  return {
    sbu,
    category,
    solutions,
  };
}

// ---------------------------------------------
// STATIC ROUTES
// ---------------------------------------------

export function generateStaticParams() {
  return sbus.flatMap((sbu) =>
    (sbu.navigationGroups ?? []).map((category) => ({
      slug: sbu.slug,
      category: category.slug,
    }))
  );
}

// ---------------------------------------------
// SEO METADATA
// ---------------------------------------------

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, category } = await params;

  const data = getCategoryData(slug, category);

  if (!data) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: `${data.category.title} | ${data.sbu.name} | Chemdist Group`,
    description: data.category.description,
  };
}

// ---------------------------------------------
// PAGE
// ---------------------------------------------

export default async function CategoryPage({
  params,
}: Props) {
  const { slug, category } = await params;

  const data = getCategoryData(slug, category);

  if (!data) notFound();

  return (
    <>
      <main>
        {/* Shared Hero */}
        <PageHero
          name={data.category.title}
          tagline={data.category.eyebrow}
          description={`${data.category.tagline} ${data.category.description}`}
          image={data.category.image || "/images/Hero_BG.png"}
          imageAlt={data.category.title}
          ctaLabel="Explore our capabilities"
          ctaHref="#our-services"
        />

        {/* Category Content */}
        <CategoryLanding
          category={data.category}
          solutions={data.solutions}
        />
      </main>

      <Enquiry />

      <Footer />
    </>
  );
}
