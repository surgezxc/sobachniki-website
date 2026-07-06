import { HOW_IT_WORKS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function HowItWorks() {
  return (
    <section className="bg-elevated/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Как это работает
            </h2>
            <p className="mt-3 text-base text-text-secondary">
              Три простых шага — и вы уже не забываете про кормление, таблетки и визиты к ветеринару.
            </p>
          </div>
        </FadeIn>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <FadeIn key={item.step} delay={index * 100}>
              <li className="relative rounded-[var(--radius-card)] bg-card p-6 shadow-[var(--shadow-card)]">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
