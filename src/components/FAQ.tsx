"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-elevated/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Частые вопросы
            </h2>
            <p className="mt-3 text-base text-text-secondary">
              Если не нашли ответ — напишите нам, мы поможем.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <FadeIn key={item.question} delay={index * 50}>
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-divider/60 bg-card shadow-[var(--shadow-card)]">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-text transition-colors hover:text-accent sm:text-base"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      {item.question}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-text-secondary">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
