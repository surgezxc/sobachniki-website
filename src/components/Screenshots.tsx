import { SCREENSHOTS } from "@/lib/constants";
import { AppScreenshot } from "./AppScreenshot";
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
            className="mt-10 flex justify-center gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:max-w-xl sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:mx-auto lg:max-w-2xl"
            role="list"
            aria-label="Галерея скриншотов приложения"
          >
            {SCREENSHOTS.map((shot, index) => (
              <div
                key={shot.src}
                role="listitem"
                className="w-[220px] shrink-0 snap-center sm:w-[240px]"
              >
                <AppScreenshot
                  src={shot.src}
                  alt={shot.alt}
                  caption={shot.caption}
                  priority={index === 0}
                  className="transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
