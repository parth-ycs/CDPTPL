
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceLayout from "@/components/services/ServiceLayout";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";
import { getService, services } from "@/data/sbus";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: `${service.hero.name} | Chemdist Group`,
    description: service.hero.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <main>
      <ServiceHero {...service.hero} />
      <ServiceLayout sections={service.sections} />
      <div id="enquiry">
        <Enquiry />
      </div>
      <Footer />
    </main>
  );
}
