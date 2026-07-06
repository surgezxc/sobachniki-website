export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]" aria-hidden="true">
      <div className="absolute -inset-4 rounded-[40px] bg-accent/10 blur-2xl" />
      <div className="relative rounded-[36px] border-[6px] border-text/10 bg-text p-2 shadow-[var(--shadow-card-hover)]">
        <div className="overflow-hidden rounded-[28px] bg-card">
          <div className="flex items-center justify-center bg-elevated px-4 py-2">
            <div className="h-1 w-16 rounded-full bg-text/15" />
          </div>
          <div
            className="flex aspect-[9/19] flex-col items-center justify-center gap-3 bg-gradient-to-b from-elevated to-surface p-6"
            role="img"
            aria-label="Placeholder скриншота приложения Собачники"
          >
            <span className="text-4xl">🐕</span>
            <div className="w-full space-y-2">
              <div className="h-3 w-3/4 rounded-full bg-divider" />
              <div className="h-3 w-1/2 rounded-full bg-divider/70" />
            </div>
            <div className="mt-2 grid w-full grid-cols-2 gap-2">
              <div className="h-16 rounded-[var(--radius-card)] bg-nutrition-bg" />
              <div className="h-16 rounded-[var(--radius-card)] bg-tasks-bg" />
              <div className="h-16 rounded-[var(--radius-card)] bg-weight-bg" />
              <div className="h-16 rounded-[var(--radius-card)] bg-medical-bg" />
            </div>
            <p className="mt-2 text-center text-xs text-text-secondary">
              Скриншот приложения
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
