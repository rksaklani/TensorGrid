import type { Metadata } from "next";
import { SiteHeader } from "../../components/site-header";
import { DocsViewer } from "../../components/docs-viewer";

export const metadata: Metadata = {
  title: "Documentation",
  description: "TensorGrid documentation — installation, tutorials, API reference, and more.",
};

function resolveSphinxSrc(slug?: string[]): string {
  if (!slug?.length) return "/_sphinx/index.html";

  const path = slug.join("/");
  if (path.endsWith(".html")) return `/_sphinx/${path}`;
  return `/_sphinx/${path}/index.html`;
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const src = resolveSphinxSrc(slug);

  return (
    <>
      <div className="page-bg docs-page-bg" aria-hidden>
        <div className="page-bg-orb page-bg-orb-1" />
        <div className="page-bg-orb page-bg-orb-2" />
      </div>
      <SiteHeader />
      <main className="docs-main">
        <DocsViewer src={src} />
      </main>
    </>
  );
}
