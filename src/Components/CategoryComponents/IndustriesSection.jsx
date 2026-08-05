"use client";

import { useMemo, useState } from "react";
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

  return (
    <article className="w-[300px] flex-none rounded-[16px] border border-[var(--rule)] bg-white p-6 sm:w-[340px]">
      <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-[var(--ink)] [font-family:var(--display)]">{x.n}</h3>
      <p className="mt-3 text-[13.5px] leading-[1.65] text-[var(--ink)]/85 [&_b]:font-semibold" dangerouslySetInnerHTML={{ __html: x.hook }} />
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted-soft)]">
        {x.src ? `Source: ${x.src}` : "Observed pattern, not a published figure"}
      </p>

      <div className="mt-4 border-t border-[var(--rule)] pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted-soft)]">AI applies</p>
        <p className="mt-1 text-[13px] leading-[1.6] text-[var(--ink)]/80">{x.where}</p>
      </div>
      <div className="mt-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted-soft)]">Needs</p>
        <p className="mt-1 text-[13px] leading-[1.6] text-[var(--ink)]/80">{x.need}</p>
      </div>

      <div className="mt-4">
        {x.gap ? (
          <>
            <span className="mr-2 rounded-full bg-[var(--ink)]/8 px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--muted-soft)]">
              No program yet
            </span>
            <a href="#apply" className="text-[12.5px] font-medium text-[#6f8c0f] underline-offset-2 hover:underline">
              {x.gap} →
            </a>
          </>
        ) : program?.u ? (
          <a
            href={`https://www.edstellar.com/course/${program.u}`}
            className="text-[12.5px] font-medium text-[#6f8c0f] underline-offset-2 hover:underline"
          >
            {x.program.replace(/ Training$/, "")} →
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Rail({ label, items }) {
  if (!items.length) return null;
  return (
    <div className="mb-8">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-soft)]">{label}</p>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {items.map((x) => (
          <SectorCard key={x.n} x={x} />
        ))}
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

        <div className="mb-10 grid grid-cols-1 gap-6 rounded-[16px] border border-[var(--rule)] bg-white p-6 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-[13px] font-semibold text-[var(--ink)]">A process is a good AI candidate when</p>
            <ul className="space-y-2">
              {patternYes.map((t, i) => (
                <li key={i} className="flex gap-2 text-[13.5px] leading-[1.6] text-[var(--ink)]/80">
                  <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-[#a9e91b]" />
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[13px] font-semibold text-[var(--ink)]">And a poor one when</p>
            <ul className="space-y-2">
              {patternNo.map((t, i) => (
                <li key={i} className="flex gap-2 text-[13.5px] leading-[1.6] text-[var(--ink)]/80">
                  <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-[var(--muted-soft)]" />
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <label className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-soft)]" htmlFor="ind-q">
            Find your sector
          </label>
          <div className="flex min-w-[240px] flex-1 items-center gap-2 rounded-full border border-[var(--rule-strong)] bg-white px-4 py-2">
            <input
              id="ind-q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try banking, hospital, factory, alerts, forecasting"
              className="w-full bg-transparent text-[13.5px] outline-none placeholder:text-[var(--muted-soft)]"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear filter" className="text-[var(--muted-soft)]">
                ×
              </button>
            )}
          </div>
          <span className="font-mono text-[11px] text-[var(--muted-soft)]">
            {query ? `${total} of ${sectors.length + gapSectors.length} sectors` : `${sectors.length + gapSectors.length} sectors`}
          </span>
        </div>

        {total ? (
          <>
            <Rail label="Sectors with a program in the catalog" items={matchedSectors} />
            <Rail label="Sectors where the bottleneck is real and the program is not built yet" items={matchedGaps} />
          </>
        ) : (
          <div className="rounded-[16px] border border-[var(--rule)] bg-white p-8 text-center">
            <p className="mx-auto max-w-[52ch] text-[14px] leading-[1.7] text-[var(--muted)]">
              No sector matches <b>{query}</b>. That is not a boundary, it is a gap in the examples. Run your highest-volume
              repeated decision against the four conditions above, or describe the bottleneck and we will tell you whether AI
              is the right tool for it.
            </p>
            <a
              href="#apply"
              className="mt-5 inline-block rounded-full bg-[var(--ink)] px-5 py-2.5 text-[13px] font-medium text-white"
            >
              Describe your bottleneck →
            </a>
          </div>
        )}

        <p className="mt-6 max-w-[80ch] text-[12px] leading-[1.6] text-[var(--muted-soft)]">{note}</p>
      </div>
    </section>
  );
}
