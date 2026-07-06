import Link from "next/link";
import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function LegalLayout({ title, description, children }: LegalLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
        На главную
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-text">{title}</h1>
        <p className="mt-3 text-base leading-relaxed text-text-secondary">{description}</p>
      </header>

      <div className="prose-legal mt-10 space-y-8">{children}</div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[var(--radius-card)] border border-divider/60 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
      <h2 className="text-xl font-semibold text-text">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-secondary">{children}</div>
    </section>
  );
}
