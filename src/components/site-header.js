"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header" id="top">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Esteban Leandro Marin, home">
          <span className="brand-mark">el.</span>
          <span className="brand-name">Esteban<br />Leandro Marin</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li><Link href="/projects" aria-current={pathname === "/projects" ? "page" : undefined}>Projects</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li>
              <a className="nav-contact" href="#contact">
                Let&apos;s talk <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
