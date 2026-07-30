"use client";

import { whyNow } from "@/data/mlMonitoringData";

export default function WhyNowSection() {
  return (
    <section id="why-now" className="bg-[var(--paper-warm)] py-28 border-b border-[var(--rule)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start mb-14">
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-[var(--muted)] mb-[18px] [font-family:var(--mono)]">
              <span className="[font-family:var(--serif)] text-[14px] text-[var(--ink)]">
                II
              </span>{" "}
              Why now · Degradation, market, regulation
            </div>

            <h2 className="mb-6 text-[var(--ink)] leading-[1.08] text-[clamp(26px,4vw,50px)] font-bold tracking-[-0.03em] [font-family:var(--display)]">
              Why <em className="[font-family:var(--serif)] italic font-semibold">ML model monitoring</em> matters
              now.
            </h2>

            <p className="text-base leading-[1.7] text-[var(--muted)]">
              {whyNow.lede}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {whyNow.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-[14px] border border-[var(--rule)] bg-white p-5"
              >
                <b className="block text-[26px] font-bold text-[var(--ink)] [font-family:var(--display)]">
                  {s.value}
                </b>
                <span className="mt-1 block text-[12.5px] leading-[1.4] text-[var(--muted)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {whyNow.cards.map((c, i) => (
            <div
              key={i}
              className="rounded-[16px] border border-[var(--rule)] bg-white p-6"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a8c00] [font-family:var(--mono)]">
                {c.eyebrow}
              </div>
              <div className="mt-2 mb-3 text-[24px] font-bold tracking-[-0.02em] text-[var(--ink)] [font-family:var(--display)]">
                {c.big}
              </div>
              <p className="text-[14.5px] leading-[1.6] text-[var(--muted)]">
                {c.p}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.chips.map((chip, j) => (
                  <span
                    key={j}
                    className="rounded-full bg-[var(--paper-warm)] px-3 py-1 text-[11px] font-medium text-[var(--muted)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[16px] border border-[var(--rule)] bg-white p-6">
          <p className="mb-4 text-[14px] font-medium text-[var(--ink)]">
            {whyNow.toolsLabel}
          </p>
          <div className="flex flex-wrap gap-6">
            {whyNow.tools.map((t, i) => (
              <span key={i} className="text-[13px] text-[var(--muted)]">
                <b className="text-[var(--ink)]">{t.name}</b> {t.product}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
