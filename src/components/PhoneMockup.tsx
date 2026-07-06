import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import { SCREENSHOT_HEIGHT, SCREENSHOT_WIDTH } from "@/lib/constants";

const HERO_SCREENSHOT = assetPath("/screenshots/emergency-vet.png");

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      <div className="absolute -inset-4 rounded-[40px] bg-accent/10 blur-2xl" aria-hidden="true" />
      <div className="relative rounded-[36px] border-[6px] border-text/10 bg-text p-2 shadow-[var(--shadow-card-hover)]">
        <div className="overflow-hidden rounded-[28px] bg-card">
          <div
            className="flex items-center justify-center bg-elevated px-4 py-2"
            aria-hidden="true"
          >
            <div className="h-1 w-16 rounded-full bg-text/15" />
          </div>
          <div className="aspect-[449/978] overflow-hidden bg-surface-dark">
            <Image
              src={HERO_SCREENSHOT}
              alt="Экран приложения Собачники: скорая ветпомощь и ближайшие клиники"
              width={SCREENSHOT_WIDTH}
              height={SCREENSHOT_HEIGHT}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
