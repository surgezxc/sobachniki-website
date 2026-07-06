import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import { SCREENSHOT_HEIGHT, SCREENSHOT_WIDTH } from "@/lib/constants";
import { PhoneFrame } from "./PhoneFrame";

const HERO_SCREENSHOT = assetPath("/screenshots/emergency-vet.png");

export function PhoneMockup() {
  return (
    <PhoneFrame variant="hero" className="w-full max-w-[280px] sm:max-w-[300px]">
      <div className="aspect-[449/972] overflow-hidden">
        <Image
          src={HERO_SCREENSHOT}
          alt="Экран приложения Собачники: скорая ветпомощь и ближайшие клиники"
          width={SCREENSHOT_WIDTH}
          height={SCREENSHOT_HEIGHT}
          priority
          className="h-full w-full object-cover object-top"
        />
      </div>
    </PhoneFrame>
  );
}
