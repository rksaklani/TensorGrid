"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, type NavItem, type NavLink as NavLinkItem, type NavMegaMenu } from "./nav-menus";
import { NavLink } from "./nav-link";
import { BrandLogo } from "./brand-logo";

function pathMatches(pathname: string, href: string) {
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

function MegaMenuLink({
  item,
  onNavigate,
}: {
  item: NavLinkItem;
  onNavigate: () => void;
}) {
  if (item.children?.length) {
    return (
      <div className="mega-menu-submenu">
        <NavLink
          href={item.href}
          className="mega-menu-link mega-menu-link-has-children"
          external={item.external}
          onClick={onNavigate}
        >
          {item.icon && (
            <span className="mega-menu-icon" aria-hidden>
              {item.icon}
            </span>
          )}
          <span className="mega-menu-link-text">{item.label}</span>
          <span className="mega-menu-chevron" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </span>
        </NavLink>
        <ul className="mega-menu-flyout">
          {item.children.map((child) => (
            <li key={child.label}>
              <NavLink
                href={child.href}
                className="mega-menu-flyout-link"
                external={child.external}
                onClick={onNavigate}
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <NavLink
      href={item.href}
      className="mega-menu-link"
      external={item.external}
      onClick={onNavigate}
    >
      {item.icon && (
        <span className="mega-menu-icon" aria-hidden>
          {item.icon}
        </span>
      )}
      {item.label}
    </NavLink>
  );
}

function MobileNavLink({
  link,
  onNavigate,
}: {
  link: NavLinkItem;
  onNavigate: () => void;
}) {
  if (link.children?.length) {
    return (
      <details className="mobile-nav-nested">
        <summary className="mobile-nav-sublink mobile-nav-sublink-parent">
          {link.label}
        </summary>
        <div className="mobile-nav-nested-items">
          {link.children.map((child) => (
            <NavLink
              key={child.label}
              href={child.href}
              className="mobile-nav-sublink mobile-nav-sublink-nested"
              external={child.external}
              onClick={onNavigate}
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </details>
    );
  }

  return (
    <NavLink
      href={link.href}
      className="mobile-nav-sublink"
      external={link.external}
      onClick={onNavigate}
    >
      {link.label}
    </NavLink>
  );
}

function MegaMenuPanel({
  menu,
  onNavigate,
}: {
  menu: NavMegaMenu;
  onNavigate: () => void;
}) {
  return (
    <div className="mega-menu-panel">
      <div className="mega-menu-left">
        <p className="mega-menu-label">{menu.leftLabel}</p>
        <ul className="mega-menu-list">
          {menu.leftItems.map((item) => (
            <li key={item.label}>
              <MegaMenuLink item={item} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mega-menu-right">
        <p className="mega-menu-label mega-menu-label-light">{menu.rightLabel}</p>

        {menu.rightMode === "overview" && (
          <>
            <p className="mega-menu-desc">{menu.rightDescription}</p>
            {menu.rightLink && (
              <NavLink
                href={menu.rightLink.href}
                className="mega-menu-cta-link"
                external={menu.rightLink.external}
                onClick={onNavigate}
              >
                {menu.rightLink.label}
                <span className="mega-menu-arrow" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </NavLink>
            )}
          </>
        )}

        {menu.rightMode === "list" && menu.rightItems && (
          <ul className="mega-menu-right-list">
            {menu.rightItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  className="mega-menu-right-item"
                  external={item.external}
                  onClick={onNavigate}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        {menu.rightMode === "feature" && (
          <>
            {menu.featureTitle && (
              <p className="mega-menu-feature-title">{menu.featureTitle}</p>
            )}
            <p className="mega-menu-desc">{menu.featureText}</p>
            {menu.rightLink && (
              <NavLink
                href={menu.rightLink.href}
                className="mega-menu-cta-link"
                external={menu.rightLink.external}
                onClick={onNavigate}
              >
                {menu.rightLink.label}
                <span className="mega-menu-arrow" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </NavLink>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function MobileSubmenu({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  if (!item.menu) {
    return (
      <NavLink href={item.href} className="mobile-nav-link" onClick={onNavigate}>
        {item.label}
      </NavLink>
    );
  }

  return (
    <details className="mobile-nav-group">
      <summary>{item.label}</summary>
      <div className="mobile-nav-submenu">
        <p className="mega-menu-label">{item.menu.leftLabel}</p>
        {item.menu.leftItems.map((link) => (
          <MobileNavLink key={link.label} link={link} onNavigate={onNavigate} />
        ))}
        {item.menu.rightItems?.map((link) => (
          <NavLink
            key={link.label}
            href={link.href}
            className="mobile-nav-sublink"
            external={link.external}
            onClick={onNavigate}
          >
            {link.label}
          </NavLink>
        ))}
        {item.menu.rightLink && (
          <NavLink
            href={item.menu.rightLink.href}
            className="mobile-nav-sublink mobile-nav-sublink-accent"
            external={item.menu.rightLink.external}
            onClick={onNavigate}
          >
            {item.menu.rightLink.label}
          </NavLink>
        )}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const activeItem = NAV_ITEMS.find((item) => item.id === activeMenu);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    const item = NAV_ITEMS.find((n) => n.id === id);
    setActiveMenu(item?.menu ? id : null);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " scrolled" : ""}${
        mobileOpen ? " mobile-nav-open" : ""
      }${activeMenu ? " mega-open" : ""}`}
      onMouseLeave={scheduleClose}
    >
      <div className="container header-inner">
        <NavLink href="/" className="logo" onClick={closeAll}>
          <BrandLogo variant="icon" className="brand-logo-icon" priority />
          <span className="logo-text">
            Tensor<span className="logo-accent">Grid</span>
          </span>
        </NavLink>

        <nav aria-label="Main" className="desktop-nav">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive =
                activeMenu === item.id || pathMatches(pathname, item.href);
              return (
                <li
                  key={item.id}
                  className={`nav-item${item.menu ? " has-dropdown" : ""}${
                    isActive ? " active" : ""
                  }`}
                  onMouseEnter={() =>
                    item.menu ? openMenu(item.id) : setActiveMenu(null)
                  }
                >
                  <NavLink
                    href={item.href}
                    className="nav-trigger"
                    onClick={closeAll}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <NavLink href="/developers/quick-start" className="btn-header-cta" onClick={closeAll}>
            Install OSS
            <span className="btn-header-cta-icon" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </NavLink>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            {mobileOpen ? (
              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.42L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.42L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            ) : (
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            )}
          </svg>
        </button>
      </div>

      {activeItem?.menu && (
        <div
          className="mega-menu-dropdown"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="container">
            <MegaMenuPanel menu={activeItem.menu} onNavigate={closeAll} />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="mobile-nav-panel">
          <div className="container mobile-nav-inner">
            {NAV_ITEMS.map((item) => (
              <MobileSubmenu key={item.id} item={item} onNavigate={closeAll} />
            ))}
            <NavLink href="/developers/quick-start" className="btn-header-cta mobile-nav-cta" onClick={closeAll}>
              Install OSS
              <span className="btn-header-cta-icon" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
