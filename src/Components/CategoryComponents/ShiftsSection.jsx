"use client";

import { useState } from "react";
import { shiftsSection } from "@/data/aiDomainData";

const ICONS = {
  agents: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5" cy="18" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M12 7.4v4.2M12 11.6 6.6 16M12 11.6 17.4 16" />
    </svg>
  ),
  gap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17h6M15 17h6" />
      <path d="M9 17V9M15 17V9" />
      <path d="M9 13h1.5M13.5 13H15" strokeDasharray="2 2" />
    </svg>
  ),
  cost: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19h16" />
      <rect x="6" y="12" width="3.4" height="7" rx="1" />
      <rect x="11.5" y="8" width="3.4" height="11" rx="1" />
      <rect x="17" y="4" width="3.4" height="15" rx="1" />
    </svg>
  ),
  small: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="12" r="3" />
      <circle cx="17" cy="12" r="5.4" />
    </svg>
  ),
  proto: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 7V4M15 7V4" />
      <rect x="6.5" y="7" width="11" height="6.5" rx="2" />
      <path d="M12 13.5V20" />
    </svg>
  ),
};

export default function ShiftsSection() {
  const [active, setActive] = useState(0);
  const { eyebrow, heading, paragraph, note, items } = shiftsSection;
  const item = items[active];

  return (
    <section id="shifts" className="border-b border-[var(--rule)] bg-white py-20 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            {eyebrow.italic}
          </span>
          <span>· {eyebrow.text}</span>
          <span className="ml-auto normal-case tracking-normal text-[var(--muted-soft)]">{eyebrow.count}</span>
        </div>

        <h2 className="mb-4 max-w-[22ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
          {heading.normal} <em className="[font-family:var(--serif)] italic">{heading.italic}</em>
        </h2>

        <p className="mb-12 max-w-[72ch] text-[15px] leading-[1.7] text-[var(--muted)]">{paragraph}</p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10">
          <div className="flex flex-col gap-2">
            {items.map((it, i) => (
              <button
                key={it.title}
                onClick={() => setActive(i)}
                className={`flex cursor-pointer items-center gap-4 rounded-[14px] border px-5 py-[16px] text-left transition-all [font-family:var(--body)] ${
                  active === i
                    ? "border-[var(--ink)] bg-[var(--paper-warm)]"
                    : "border-[var(--rule)] bg-white hover:border-[var(--rule-strong)]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-[36px] w-[36px] flex-none items-center justify-center rounded-[9px] [&_svg]:h-[18px] [&_svg]:w-[18px] ${
                    active === i ? "bg-[var(--ink)] text-[var(--lime)]" : "bg-[var(--paper-warm)] text-[var(--ink)]"
                  }`}
                >
                  {ICONS[it.icon]}
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold tracking-[-0.01em] text-[var(--ink)] [font-family:var(--display)]">
                    {it.title}
                  </span>
                  <span className="block text-[11px] uppercase tracking-[0.1em] text-[var(--muted-soft)] [font-family:var(--mono)]">
                    {it.fig} · {it.tag}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="min-h-[340px] rounded-[18px] border border-[var(--rule)] bg-[var(--paper-warm)] p-6 lg:p-9">
            <div className="text-[42px] font-bold leading-none tracking-[-0.04em] text-[var(--ink)]">{item.fig}</div>
            <p className="mt-2 max-w-[42ch] text-[13px] leading-[1.6] text-[var(--muted)]">{item.figLabel}</p>

            <p
              className="mt-6 [font-family:var(--serif)] text-[clamp(20px,2.4vw,26px)] italic leading-[1.3] text-[var(--ink)] [&_b]:not-italic [&_b]:font-bold [&_b]:text-[#6f8c0f]"
              dangerouslySetInnerHTML={{ __html: item.over }}
            />

            <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted-soft)]">
              Source: {item.source}
            </span>

            <p
              className="mt-4 text-[14.5px] leading-[1.75] text-[var(--ink)]/85 [&_b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--rule)] pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted-soft)]">Demands</span>
              <span className="text-[13.5px] text-[var(--ink)]">{item.demands}</span>
              <a
                href={item.isGap ? "#apply" : `https://www.edstellar.com/course/${item.program}`}
                className="ml-auto text-[12.5px] font-medium text-[#6f8c0f] underline-offset-2 hover:underline"
              >
                {item.program.replace(/ Training$/, "")}
              </a>
              {item.isGap && (
                <span className="rounded-full bg-[var(--ink)]/8 px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted-soft)]">
                  proposed
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-[80ch] text-[12px] leading-[1.6] text-[var(--muted-soft)]">{note}</p>
      </div>
    </section>
  );
}
