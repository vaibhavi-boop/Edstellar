"use client";

import { useRef, useState } from "react";
import { costOfInactionSection } from "@/data/aiDomainData";

export default function CostOfInactionSection() {
  const { eyebrow, heading, paragraph, note, items } = costOfInactionSection;
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
    setTimeout(() => {
      if (!track) return;
      const nearest = Math.round(track.scrollLeft / step);
      setIndex(Math.max(0, Math.min(items.length - 1, nearest)));
    }, 320);
  };

  return (
    <section id="inaction" className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-20 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            {eyebrow.italic}
          </span>
          <span>· {eyebrow.text}</span>
          <span className="ml-auto normal-case tracking-normal text-[var(--muted-soft)]">{eyebrow.count}</span>
        </div>

        <h2 className="mb-4 max-w-[24ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
          {heading.normal} <em className="[font-family:var(--serif)] italic">{heading.italic}</em> {heading.after}
        </h2>

        <p className="mb-10 max-w-[72ch] text-[15px] leading-[1.7] text-[var(--muted)]">{paragraph}</p>

        <div className="mb-4 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous pressure"
            onClick={() => scrollBy(-1)}
            disabled={index === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--rule-strong)] text-[var(--ink)] transition-opacity disabled:opacity-30"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next pressure"
            onClick={() => scrollBy(1)}
            disabled={index === items.length - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--rule-strong)] text-[var(--ink)] transition-opacity disabled:opacity-30"
          >
            →
          </button>
          <span className="font-mono text-[11px] text-[var(--muted-soft)]">
            {index + 1} / {items.length}
          </span>
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] scrollbar-hide"
        >
          {items.map((it) => (
            <div
              data-card
              key={it.k}
              className="w-[300px] flex-none rounded-[16px] border border-[var(--rule)] bg-white p-6 [scroll-snap-align:start] sm:w-[340px]"
            >
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted-soft)]">{it.k}</p>
              <div className="mt-4 text-[40px] font-bold leading-none tracking-[-0.03em] text-[var(--ink)]">{it.fig}</div>
              <p className="mt-1 text-[12px] text-[var(--muted)]">{it.u}</p>
              <p className="mt-4 text-[14px] leading-[1.7] text-[var(--ink)]/85">{it.d}</p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted-soft)]">{it.src}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[80ch] text-[12px] leading-[1.6] text-[var(--muted-soft)]">{note}</p>
      </div>
    </section>
  );
}
