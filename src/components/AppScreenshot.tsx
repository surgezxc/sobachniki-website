import Image from "next/image";

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
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-divider bg-elevated shadow-[var(--shadow-card)]">
        <Image
          src={src}
          alt={alt}
          width={449}
          height={1024}
          priority={priority}
          className="h-auto w-full object-cover object-top"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-text-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
