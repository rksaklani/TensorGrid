import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "../../components/site-shell";
import { FeatureDetail } from "../../components/feature-detail";
import { ENTERPRISE_PAGES, ENTERPRISE_SLUGS } from "../../lib/site-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ENTERPRISE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = ENTERPRISE_PAGES[slug];
  if (!feature) return { title: "Enterprise" };
  return {
    title: feature.title,
    description: feature.lead,
  };
}

export default async function EnterpriseFeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = ENTERPRISE_PAGES[slug];
  if (!feature) notFound();

  const related = ENTERPRISE_SLUGS.filter((s) => s !== slug).map((s) => ({
    label: ENTERPRISE_PAGES[s].title,
    href: `/enterprise/${s}`,
  }));

  return (
    <SiteShell>
      <FeatureDetail
        label="Enterprise"
        feature={feature}
        backHref="/enterprise"
        backLabel="Enterprise overview"
        related={related}
      />
    </SiteShell>
  );
}
