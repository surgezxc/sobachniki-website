import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import { SCREENSHOT_HEIGHT, SCREENSHOT_WIDTH } from "@/lib/constants";
import { PhoneFrame } from "./PhoneFrame";

interface AppScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

export function AppScreenshot({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: AppScreenshotProps) {
  return (
    <figure className={className}>
      <PhoneFrame variant="gallery">
        <Image
          src={assetPath(src)}
          alt={alt}
          width={SCREENSHOT_WIDTH}
          height={SCREENSHOT_HEIGHT}
          priority={priority}
          className="h-auto w-full object-cover object-top"
        />
      </PhoneFrame>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-text-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
