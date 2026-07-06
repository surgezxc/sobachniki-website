import { STORE_LINKS } from "@/lib/constants";

interface DownloadButtonsProps {
  size?: "sm" | "md";
  className?: string;
}

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.63 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 0 1-.527-.092 1 1 0 0 1-.483-.845V2.751a1 1 0 0 1 .483-.845 1.004 1.004 0 0 1 .526-.092zm4.411 4.893l9.315 5.405-2.546 2.546-6.769-3.951zm-.001 10.586l6.769-3.951 2.546 2.546-9.315 5.405zM14.801 12l2.908-2.908 3.682 2.136a1 1 0 0 1 0 1.728l-3.682 2.136L14.8 12z" />
    </svg>
  );
}

export function DownloadButtons({ size = "md", className = "" }: DownloadButtonsProps) {
  const padding = size === "sm" ? "px-4 py-2.5" : "px-5 py-3";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  const baseClass = `inline-flex items-center gap-3 rounded-[var(--radius-pill)] bg-text text-surface ${padding} transition-all hover:scale-[1.02] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]`;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* TODO: заменить href на реальную ссылку App Store */}
      <a href={STORE_LINKS.appStore} className={baseClass} aria-label="Скачать в App Store">
        <AppStoreIcon />
        <span className="text-left">
          <span className={`block ${textSize} opacity-80`}>Скачать в</span>
          <span className="block text-sm font-semibold leading-tight">App Store</span>
        </span>
      </a>
      {/* TODO: заменить href на реальную ссылку Google Play */}
      <a href={STORE_LINKS.googlePlay} className={baseClass} aria-label="Скачать в Google Play">
        <GooglePlayIcon />
        <span className="text-left">
          <span className={`block ${textSize} opacity-80`}>Скачать в</span>
          <span className="block text-sm font-semibold leading-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export function DownloadButtonAccent({ className = "" }: { className?: string }) {
  return (
    <a
      href={STORE_LINKS.appStore}
      className={`inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] ${className}`}
    >
      Скачать
    </a>
  );
}
