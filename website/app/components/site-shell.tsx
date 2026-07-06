import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="page-bg" aria-hidden>
        <div className="page-bg-orb page-bg-orb-1" />
        <div className="page-bg-orb page-bg-orb-2" />
        <div className="page-bg-orb page-bg-orb-3" />
      </div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
