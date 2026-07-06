import { SCREENSHOT_COUNT } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function Screenshots() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Загляните внутрь
            </h2>
            <p className="mt-3 text-base text-text-secondary">
              Тёплый интерфейс, понятные карточки и всё под рукой — как дома на диване с собакой.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div
            className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5"
            role="list"
            aria-label="Галерея скриншотов приложения"
          >
            {Array.from({ length: SCREENSHOT_COUNT }, (_, i) => (
              <div
                key={i}
                role="listitem"
                className="w-[200px] shrink-0 snap-center sm:w-auto"
              >
                <div
                  className="flex aspect-[9/19] flex-col items-center justify-center rounded-[var(--radius-card)] border border-divider bg-elevated shadow-[var(--shadow-card)] transition-transform duration-300 hover:scale-[1.02]"
                  role="img"
                  aria-label={`Скриншот приложения ${i + 1}`}
                >
                  <span className="text-3xl opacity-40" aria-hidden="true">
                    📱
                  </span>
                  <p className="mt-3 px-4 text-center text-xs text-text-secondary">
                    Скриншот приложения
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
