import type { ReactNode } from "react";

type PhoneFrameVariant = "hero" | "gallery";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  variant?: PhoneFrameVariant;
}

export function PhoneFrame({
  children,
  className = "",
  variant = "gallery",
}: PhoneFrameProps) {
  const isHero = variant === "hero";

  return (
    <div className={`relative mx-auto ${className}`}>
      {isHero && (
        <div
          className="absolute -inset-5 rounded-[44px] bg-accent/12 blur-2xl"
          aria-hidden="true"
        />
      )}

      <div
        className={`relative border border-[#4a4038] bg-gradient-to-b from-[#3a322c] to-[#1a1614] shadow-[0_16px_40px_rgba(0,0,0,0.35)] ${
          isHero ? "rounded-[42px] p-[11px]" : "rounded-[34px] p-[8px]"
        }`}
      >
        <div
          className={`overflow-hidden bg-[#0f0d0b] ${
            isHero ? "rounded-[32px]" : "rounded-[26px]"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
