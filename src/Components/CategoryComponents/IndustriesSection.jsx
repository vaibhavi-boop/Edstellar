"use client";

import { useMemo, useRef, useState } from "react";
import { industriesSection, catalogPrograms } from "@/data/aiDomainData";

const programByTitle = new Map(catalogPrograms.map((p) => [p.t, p]));

function haystack(x) {
  return [x.n, x.hook, x.where, x.need, x.program || "", x.gap || "", x.k || ""]
    .join(" ")
    .replace(/<[^>]+>/g, "")
    .toLowerCase();
}

function SectorCard({ x }) {
  const program = x.program ? programByTitle.get(x.program) : null;
  const isGap = Boolean(x.gap);

  return (
    <article
      data-card
      className={`flex h-full w-[300px] flex-none flex-col rounded-[16px] border p-6 sm:w-[340px] ${
        isGap ? "border-dashed border-[var(--rule-strong)]" : "border-[var(--rule)] bg-[var(--white)]"
      }`}
    >
      <h3
        className={`mb-[9px] text-[15.5px] font-semibold tracking-[-0.015em] [font-family:var(--display)] ${
          isGap ? "text-[var(--muted)]" : "text-[var(--ink)]"
        }`}
      >
        {x.n}
      </h3>
      <p
        className="mb-[10px] text-[13px] leading-[1.6] text-[var(--muted)] [&_b]:font-semibold [&_b]:text-[var(--ink)]"
        dangerouslySetInnerHTML={{ __html: x.hook }}
      />
      <p className="mb-[14px] font-mono text-[8.5px] uppercase tracking-[0.1em] text-[var(--muted-soft)]">
        {x.src ? `Source: ${x.src}` : "Observed pattern, not a published figure"}
      </p>

      <div className="mb-2 flex gap-[9px] text-[13px] leading-[1.6] text-[var(--muted)]">
        <b className="w-[60px] flex-none pt-[3px] font-mono text-[8.5px] tracking-[0.12em] text-[#6f8c0f] uppercase">AI applies</b>
        <span>{x.where}</span>
      </div>
      <div className="mb-2 flex gap-[9px] text-[13px] leading-[1.6] text-[var(--muted)]">
        <b className="w-[60px] flex-none pt-[3px] font-mono text-[8.5px] tracking-[0.12em] text-[#6f8c0f] uppercase">Needs</b>
        <span>{x.need}</span>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-[var(--rule)] pt-[14px]">
        {isGap ? (
          <>
            <span className="inline-block rounded-[4px] bg-[var(--lime)] px-[7px] py-[3px] font-mono text-[8.5px] text-[var(--navy)] uppercase">
              No program yet
            </span>
            <a
              href="#apply"
              className="rounded-[5px] border border-dashed border-[var(--rule-strong)] px-[9px] py-[5px] font-mono text-[9.5px] text-[var(--muted)] transition-colors hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--lime)]"
            >
              {x.gap} →
            </a>
          </>
        ) : program?.u ? (
          <a
            href={`https://www.edstellar.com/course/${program.u}`}
            className="rounded-[5px] bg-[var(--paper-warm)] px-[9px] py-[5px] font-mono text-[9.5px] text-[var(--ink)] transition-colors hover:bg-[var(--navy)] hover:text-[var(--lime)]"
          >
            {x.program.replace(/ Training$/, "")}
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Rail({ label, gap, items }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 14 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
    setTimeout(() => {
      if (!track) return;
      const nearest = Math.round(track.scrollLeft / step);
      setIndex(Math.max(0, Math.min(items.length - 1, nearest)));
    }, 320);
  };

  return (
    <div className="mb-[30px]">
      <div className="mb-3.5 flex items-center gap-4">
        <p className={`font-mono text-[9.5px] uppercase tracking-[0.15em] ${gap ? "text-[#6f8c0f]" : "text-[var(--muted)]"}`}>{label}</p>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            disabled={index === 0}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[var(--rule-strong)] bg-[var(--white)] text-[var(--ink)] transition-colors hover:enabled:border-[var(--navy)] hover:enabled:bg-[var(--navy)] hover:enabled:text-[var(--lime)] disabled:opacity-30"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollBy(1)}
            disabled={index === items.length - 1}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[var(--rule-strong)] bg-[var(--white)] text-[var(--ink)] transition-colors hover:enabled:border-[var(--navy)] hover:enabled:bg-[var(--navy)] hover:enabled:text-[var(--lime)] disabled:opacity-30"
          >
            →
          </button>
          <span className="min-w-[44px] font-mono text-[9px] text-[var(--muted-soft)]">
            {index + 1} / {items.length}
          </span>
        </div>
      </div>
      <div className="overflow-hidden sm:max-w-[1090px]">
        <div ref={trackRef} className="flex gap-3.5 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] scrollbar-hide">
          {items.map((x) => (
            <div key={x.n} className="[scroll-snap-align:start]">
              <SectorCard x={x} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  const { eyebrow, heading, paragraph, note, patternYes, patternNo, sectors, gapSectors, closing } = industriesSection;
  const [query, setQuery] = useState("");

  const { matchedSectors, matchedGaps, total } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const a = sectors.filter((x) => !q || haystack(x).includes(q));
    const b = gapSectors.filter((x) => !q || haystack(x).includes(q));
    return { matchedSectors: a, matchedGaps: q ? b : [...b, closing], total: a.length + b.length };
  }, [query, sectors, gapSectors, closing]);

  return (
    <section id="industries" className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-20 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            {eyebrow.italic}
          </span>
          <span>· {eyebrow.text}</span>
          <span className="ml-auto normal-case tracking-normal text-[var(--muted-soft)]">{eyebrow.count}</span>
        </div>

        <h2 className="mb-4 max-w-[24ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
          {heading.normal} <em className="[font-family:var(--serif)] italic">{heading.italic}</em>
        </h2>

        <p className="mb-10 max-w-[74ch] text-[15px] leading-[1.7] text-[var(--muted)]">{paragraph}</p>

        <div className="mb-[30px] grid grid-cols-1 gap-3.5 sm:grid-cols-[1.35fr_1fr]">
          <div className="rounded-[14px] border border-[var(--rule)] bg-[var(--white)] p-[22px_24px]">
            <p className="mb-3.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">A process is a good AI candidate when</p>
            <ul className="space-y-[11px]">
              {patternYes.map((t, i) => (
                <li key={i} className="relative pl-5 text-[13.5px] leading-[1.65] text-[var(--muted)] [&_b]:font-semibold [&_b]:text-[var(--ink)]">
                  <span className="absolute top-[9px] left-[2px] h-[5px] w-[5px] rounded-full bg-[var(--rule-strong)]" />
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[14px] border border-dashed border-[var(--rule-strong)] p-[22px_24px]">
            <p className="mb-3.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#6f8c0f]">And a poor one when</p>
            <ul className="space-y-[11px]">
              {patternNo.map((t, i) => (
                <li key={i} className="relative pl-5 text-[13.5px] leading-[1.65] text-[var(--muted)] [&_b]:font-semibold [&_b]:text-[var(--ink)]">
                  <span className="absolute top-[9px] left-[2px] h-[5px] w-[5px] rounded-full bg-[var(--rule-strong)]" />
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-[22px] flex flex-wrap items-center gap-4 border-b border-[var(--rule)] pb-5">
          <label className="flex-none font-mono text-[9.5px] uppercase tracking-[0.15em] text-[var(--muted)]" htmlFor="ind-q">
            Find your sector
          </label>
          <div className="relative min-w-[240px] max-w-[420px] flex-1">
            <input
              id="ind-q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try banking, hospital, factory, alerts, forecasting"
              className="w-full rounded-[10px] border border-[var(--rule-strong)] bg-[var(--white)] py-[11px] pr-9 pl-[14px] text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--navy)] focus:shadow-[0_0_0_3px_rgba(10,22,40,.07)] placeholder:text-[var(--muted-soft)]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear filter"
                className="absolute top-1/2 right-2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:bg-[var(--navy)] hover:text-[var(--lime)]"
              >
                ×
              </button>
            )}
          </div>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-[var(--muted-soft)]">
            {query ? `${total} of ${sectors.length + gapSectors.length} sectors` : `${sectors.length + gapSectors.length} sectors`}
          </span>
        </div>

        {total ? (
          <>
            <Rail label="Sectors with a program in the catalog" items={matchedSectors} />
            <Rail gap label="Sectors where the bottleneck is real and the program is not built yet" items={matchedGaps} />
          </>
        ) : (
          <div className="mb-[30px] rounded-[14px] border border-dashed border-[var(--rule-strong)] bg-[var(--white)] p-[26px_24px] text-center">
            <p className="mx-auto max-w-[52ch] text-[14px] leading-[1.7] text-[var(--muted)]">
              No sector matches <b>{query}</b>. That is not a boundary, it is a gap in the examples. Run your highest-volume
              repeated decision against the four conditions above, or describe the bottleneck and we will tell you whether AI
              is the right tool for it.
            </p>
            <a
              href="#apply"
              className="mt-[14px] inline-block rounded-full bg-[var(--ink)] px-5 py-2.5 text-[13px] font-medium text-white"
            >
              Describe your bottleneck →
            </a>
          </div>
        )}

        <p className="max-w-[84ch] text-[12.5px] leading-[1.65] text-[var(--muted-soft)]">{note}</p>
      </div>
    </section>
  );
}
