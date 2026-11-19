import InnovationPage from "@/components/research-development/innovation";
import { innovations } from "@/data/research-development/innovations";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(innovations).map((id) => ({
    id,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <InnovationPage id={id} />;
}