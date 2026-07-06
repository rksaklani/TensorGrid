"use client";

import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export function NavLink({
  href,
  className,
  children,
  external,
  onClick,
}: Props) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
