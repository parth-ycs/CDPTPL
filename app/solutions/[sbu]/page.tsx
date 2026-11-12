
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import PageHero from "@/components/shared-page/PageHero";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";
import Container from "@/components/container";

import sbus, {
  getSBUGroup,
  solutionHref,
} from "@/data/sbus";

type Props = {
  params: Promise<{ sbu: string }>;
};

function getSBU(slug: string) {
  return sbus.find((item) => item.slug === slug);
}

// Generate both normal SBU routes and group routes.
export function generateStaticParams() {
  const sbuParams = sbus.map((item) => ({
    sbu: item.slug,
  }));

  const groupParams = sbus.flatMap((sbu) =>
    (sbu.navigationGroups ?? []).map((group) => ({
      sbu: group.slug,
    }))
  );

  return [...sbuParams, ...groupParams];
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { sbu: slug } = await params;

  // First check whether this is a group page.
  const groupPage = getSBUGroup(slug);

  if (groupPage) {
    return {
      title: `${groupPage.group.title} | Chemdist Group`,
      description: groupPage.group.description,
    };
  }

  // Otherwise, resolve it as a normal SBU page.
  const sbu = getSBU(slug);

  if (!sbu) {
    return { title: "Page Not Found" };
  }

  return {
    title: `${sbu.name} | Chemdist Group`,
    description: sbu.offerings,
  };
}

export default async function SBUPage({ params }: Props) {
  const { sbu: slug } = await params;

  // =============================================
  // GROUP PAGE: SBU 1 ONLY
  // =============================================

  const groupPage = getSBUGroup(slug);

  if (groupPage) {
    const { sbu, group, children } = groupPage;

    return (
      <>
        <main>
          <PageHero
            name={group.title}
            tagline={group.eyebrow}
            description={group.description}
            image={group.image}
            imageAlt={group.title}
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              {
                label: sbu.name,
                href: `/solutions/${sbu.slug}`,
              },
              { label: group.title },
            ]}
            ctaLabel="Explore Our Solutions"
            ctaHref="#our-services"
          />

          <section
            id="our-services"
            className="bg-pale py-16 sm:py-20"
          >
            <Container>
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                  {group.eyebrow}
                </p>

                <h2 className="mt-3 font-heading text-3xl font-semibold text-brand-deep sm:text-4xl">
                  {group.title} Solutions
                </h2>

                <p className="mt-4 text-base leading-8 text-muted">
                  {group.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {children.map((child) => (
                  <Link
                    key={child.slug}
                    href={solutionHref(sbu.slug, child.slug)}
                    className="group overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-deep">
                      {child.hero.image && (
                        <Image
                          src={child.hero.image}
                          alt={child.hero.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-brand-deep transition-colors group-hover:text-brand-blue">
                        {child.hero.name}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
                        {child.hero.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                        <span className="text-sm font-semibold text-brand-deep">
                          Explore Solution
                        </span>

                        <ArrowUpRight
                          size={18}
                          className="text-brand-red transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        </main>

        <Enquiry />
        <Footer />
      </>
    );
  }

  // =============================================
  // NORMAL SBU LANDING PAGE
  // =============================================

  const sbu = getSBU(slug);

  if (!sbu) notFound();

  return (
    <>
      <main>
        <PageHero
          name={sbu.name}
          tagline={sbu.eyebrow}
          description={sbu.offerings}
          image={sbu.image}
          imageAlt={sbu.imageAlt}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: sbu.name },
          ]}
          ctaLabel="Explore Our Solutions"
          ctaHref="#our-services"
        />

        <section
          id="our-services"
          className="bg-pale py-16 sm:py-20"
        >
          <Container>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                {sbu.name}
              </p>

              <h2 className="mt-3 font-heading text-3xl font-semibold text-brand-deep sm:text-4xl">
                Our Solutions & Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sbu.children.map((child) => (
                <Link
                  key={child.slug}
                  href={solutionHref(sbu.slug, child.slug)}
                  className="group overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-deep">
                    {child.hero.image && (
                      <Image
                        src={child.hero.image}
                        alt={child.hero.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-brand-deep transition-colors group-hover:text-brand-blue">
                      {child.hero.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
                      {child.hero.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                      <span className="text-sm font-semibold text-brand-deep">
                        Explore Solution
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-brand-red transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Enquiry />
      <Footer />
    </>
  );
}
