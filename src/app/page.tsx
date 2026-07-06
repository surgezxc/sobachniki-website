import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Screenshots } from "@/components/Screenshots";
import { FAQ } from "@/components/FAQ";
import { DownloadButtons } from "@/components/DownloadButtons";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <FAQ />

      <section className="px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-[var(--radius-card)] border border-divider/60 bg-card px-6 py-10 text-center shadow-[var(--shadow-card)] sm:px-10 sm:py-14">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Попробуйте «Собачники» уже сегодня
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
              Скачайте приложение бесплатно и начните с одного питомца. Через пару минут у вас уже
              будут напоминания и план питания.
            </p>
            <DownloadButtons className="mt-8 justify-center" />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
