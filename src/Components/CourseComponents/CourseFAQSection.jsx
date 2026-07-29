"use client";

import { useState } from "react";
import { faqs } from "@/data/mlMonitoringData";

export default function CourseFAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="border-b border-[var(--rule)] py-28">
      <div className="container-narrow">

        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] text-[var(--ink)] [font-family:var(--serif)]">
            XIII
          </span>

          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            Questions
          </span>

          <span>· Before you commit</span>
        </div>

        <h2 className="mb-5 max-w-[20ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
          ML Model Monitoring training{" "}
          <em className="[font-family:var(--serif)] italic">
            FAQs
          </em>
          .
        </h2>

        <div className="mt-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div key={i} className="border-b border-[var(--rule)]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 border-none bg-transparent py-6 text-left text-[18px] font-medium tracking-[-0.01em] text-[var(--ink)] [font-family:var(--display)]"
                >
                  <span>{f.q}</span>

                  <span className="relative h-[26px] w-[26px] flex-shrink-0">
                    <span className="absolute left-[4px] top-[12px] h-[1px] w-[18px] bg-[var(--ink)]" />

                    <span
                      className={`absolute left-[12px] top-[4px] h-[18px] w-[1px] bg-[var(--ink)] transition-transform duration-300 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[75ch] pb-6 text-[15px] leading-[1.7] text-[var(--muted)]">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}