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

            <h2 className="mb-6 text-[var(--ink)] leading-[1.08] text-[clamp(30px,4vw,50px)] font-bold tracking-[-0.03em] [font-family:var(--display)]">
              Why <em className="[font-family:var(--serif)] italic font-semibold">ML model monitoring</em> matters
              now.
            </h2>

            <p className="max-w-[54ch] text-[16.5px] leading-[1.75] text-[var(--muted)]">
              {whyNow.lede}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyNow.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-[14px] bg-[var(--navy)] px-6 py-7"
              >
                <b className="block text-[33px] font-bold text-[var(--lime)] [font-family:var(--display)] sm:text-[38px]">
                  {s.value}
                </b>
                <span className="mt-[10px] block text-[12.5px] leading-[1.4] text-[rgba(250,250,247,0.78)]">
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
              className="relative overflow-hidden rounded-[16px] border border-[var(--rule)] bg-white px-[26px] pb-[26px] pt-[30px] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[linear-gradient(90deg,var(--navy),var(--lime))] before:content-['']"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6f8c0f] [font-family:var(--mono)]">
                {c.eyebrow}
              </div>
              <div className="mt-2 mb-3 text-[28px] font-bold tracking-[-0.035em] text-[var(--ink)] [font-family:var(--display)] sm:text-[32px]">
                {c.big}
              </div>
              <p className="text-[14.5px] leading-[1.7] text-[var(--muted)]">
                {c.p}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.chips.map((chip, j) => (
                  <span
                    key={j}
                    className="rounded-[7px] bg-[var(--paper-warm)] px-3 py-1 text-[12px] font-medium text-[var(--ink)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--rule)] pt-6">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)] [font-family:var(--mono)]">
            {whyNow.toolsLabel}
          </p>
          <div className="flex flex-wrap gap-3">
            {whyNow.tools.map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-[var(--rule)] bg-white px-[15px] py-[9px] text-[13px] text-[var(--muted)]"
              >
                <b className="text-[var(--ink)]">{t.name}</b> {t.product}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
