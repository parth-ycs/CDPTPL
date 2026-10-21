import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceLayout from "@/components/services/ServiceLayout";
import Enquiry from "@/components/landing_page/enquiry";
import Footer from "@/components/landing_page/footer";
import { getService, services } from "@/data/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
      <Enquiry />
      <Footer />
    </main>
  );
}