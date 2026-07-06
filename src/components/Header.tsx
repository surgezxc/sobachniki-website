"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";
import { DownloadButtonAccent } from "./DownloadButtons";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-divider/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Собачники — на главную"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <DownloadButtonAccent className="hidden sm:inline-flex" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-card text-text md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-divider bg-surface px-4 py-4 md:hidden"
          aria-label="Мобильная навигация"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-elevated hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <DownloadButtonAccent className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
