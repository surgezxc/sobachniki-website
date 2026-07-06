import { FEATURES } from "@/lib/constants";
import { FeatureIcon } from "./FeatureIcon";
import { FadeIn } from "./FadeIn";

export function Features() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Всё, что нужно заботливому хозяину
            </h2>
            <p className="mt-3 text-base text-text-secondary">
              Не нужно помнить всё в голове или искать по чатам. «Собачники» собирает рутину в одном
              уютном месте.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 60}>
              <article className="group h-full rounded-[var(--radius-card)] border border-divider/60 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:p-6">
                <FeatureIcon name={feature.icon} accent={feature.accent} />
                <h3 className="mt-4 text-lg font-semibold text-text">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
