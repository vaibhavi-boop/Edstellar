"use client";

import { useState } from "react";
import { governanceSection } from "@/data/aiDomainData";
import ArcsMotif from "./ArcsMotif";

export default function GovernanceSection() {
  const { eyebrow, heading, paragraph, frameworksLabel, note, risks, frameworks } = governanceSection;
  const [active, setActive] = useState(0);
  const fw = frameworks[active];

  return (
    <section id="governance" className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--navy)] py-20 md:py-24">
      <ArcsMotif />
      <div className="container relative z-10">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-white/55 [font-family:var(--mono)]">
          <span className="text-[16px] italic normal-case tracking-normal text-white [font-family:var(--serif)]">
            {eyebrow.italic}
          </span>
          <span>· {eyebrow.text}</span>
          <span className="ml-auto normal-case tracking-normal text-white/40">{eyebrow.count}</span>
        </div>

        <h2 className="mb-4 max-w-[26ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
          {heading.normal} <em className="[font-family:var(--serif)] italic">{heading.italic}</em>
        </h2>

        <p className="mb-12 max-w-[72ch] text-[15px] leading-[1.7] text-white/70">{paragraph}</p>

        <div className="mb-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {risks.map((r) => (
            <div key={r.i} className="rounded-[14px] border border-white/14 bg-[var(--navy-soft)] p-[26px_24px]">
              <span className="mb-3.5 block font-mono text-[10px] tracking-[0.16em] text-[var(--lime)]">{r.i}</span>
              <div className="mb-2.5 text-[19px] font-semibold tracking-[-0.02em] text-white [font-family:var(--display)]">{r.t}</div>
              <p className="mb-4 text-[13.5px] leading-[1.7] text-white/68">{r.d}</p>
              <span className="block w-full border-t border-white/14 pt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/45">
                {r.tag}
              </span>
            </div>
          ))}
        </div>

        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">{frameworksLabel}</p>

        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Frameworks">
          {frameworks.map((f, i) => (
            <button
              key={f.n}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-[8px] border px-[14px] py-[9px] text-[13px] transition-colors ${
                i === active
                  ? "border-[var(--lime)] bg-[var(--lime)] text-[var(--navy)] [&_i]:text-[var(--navy)]/60"
                  : "border-white/16 bg-[var(--navy-soft)] text-white hover:border-white/40"
              }`}
            >
              {f.n} <i className="ml-[9px] font-mono text-[9px] tracking-[0.1em] text-white/50 not-italic uppercase">{f.m.split(" · ")[0]}</i>
            </button>
          ))}
        </div>

        <div role="tabpanel" className="rounded-[16px] border border-white/14 bg-[var(--navy-soft)] p-[28px_30px]">
          <div className="mb-1.5 text-[20px] font-semibold tracking-[-0.02em] text-white [font-family:var(--display)]">{fw.n}</div>
          <div className="mb-4 font-mono text-[9.5px] uppercase tracking-[0.12em] text-[var(--lime)]">{fw.m}</div>
          <p className="mb-[18px] max-w-[74ch] text-[14px] leading-[1.75] text-white/70">{fw.d}</p>

          <div className="grid grid-cols-1 gap-3 border-t border-white/14 pt-[18px] sm:grid-cols-3">
            {fw.asks.map(([k, v]) => (
              <div key={k} className="text-[12.5px] leading-[1.6] text-white/62">
                <b className="mb-[5px] block font-mono text-[8.5px] uppercase tracking-[0.12em] text-white/40">{k}</b>
                {v}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-[80ch] text-[12px] leading-[1.6] text-white/45">{note}</p>
      </div>
    </section>
  );
}
