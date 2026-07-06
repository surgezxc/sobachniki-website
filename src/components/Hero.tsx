import { SITE } from "@/lib/constants";
import { DownloadButtons } from "./DownloadButtons";
import { FadeIn } from "./FadeIn";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-nutrition-bg/40 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="mb-3 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-divider bg-card px-4 py-1.5 text-xs font-medium text-text-secondary shadow-[var(--shadow-card)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            iOS и Android · v{SITE.version}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
            Забота о собаке —{" "}
            <span className="text-accent">без хаоса</span> в заметках
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
            {SITE.tagline}. Напоминания, план питания, журнал веса, медкарта и фото прогулок — всё
            под рукой, пока вы гуляете, работаете или просто обнимаете пушистого друга.
          </p>
          <DownloadButtons className="mt-8" />
        </FadeIn>

        <FadeIn delay={150} className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </FadeIn>
      </div>
    </section>
  );
}
