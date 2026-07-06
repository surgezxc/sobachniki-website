interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-lg shadow-[var(--shadow-card)]"
        aria-hidden="true"
      >
        🐾
      </span>
      {showText && (
        <span className="text-lg font-bold tracking-tight text-text">Собачники</span>
      )}
    </span>
  );
}
