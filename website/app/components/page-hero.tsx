type PageHeroProps = {
  label?: string;
  title: string;
  lead: string;
};

export function PageHero({ label, title, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        {label && <p className="section-label">{label}</p>}
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-lead">{lead}</p>
      </div>
    </section>
  );
}
