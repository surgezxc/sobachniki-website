import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-divider bg-elevated/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Помощник для владельцев собак. Напоминания, питание, здоровье и прогулки — всё в одном
              приложении.
            </p>
            <p className="mt-2 text-xs text-text-secondary">
              Версия {SITE.version} · {SITE.bundleId}
            </p>
          </div>

          <nav aria-label="Юридическая информация">
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {SITE.contactEmail}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-divider pt-6 text-center text-xs text-text-secondary sm:text-left">
          © {SITE.year} {SITE.name}. Сделано с заботой о собаках и их людях.
        </div>
      </div>
    </footer>
  );
}
