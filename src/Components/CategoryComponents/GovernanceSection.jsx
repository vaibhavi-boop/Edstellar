"use client";

import { useState } from "react";
import { governanceSection } from "@/data/aiDomainData";

export default function GovernanceSection() {
  const { eyebrow, heading, paragraph, frameworksLabel, note, risks, frameworks } = governanceSection;
  const [active, setActive] = useState(0);
  const fw = frameworks[active];

  return (
    <section id="governance" className="border-b border-white/10 bg-[var(--navy)] py-20 md:py-24">
      <div className="container">
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
            <div key={r.i} className="rounded-[16px] border border-white/12 p-6">
              <span className="font-mono text-[11px] text-[var(--lime)]">{r.i}</span>
              <div className="mt-3 text-[18px] font-semibold tracking-[-0.01em] text-white [font-family:var(--display)]">{r.t}</div>
              <p className="mt-3 text-[13.5px] leading-[1.7] text-white/70">{r.d}</p>
              <span className="mt-4 inline-block rounded-full bg-white/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70">
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
              className={`rounded-full border px-4 py-2 text-[13px] transition-colors ${
                i === active ? "border-[var(--lime)] bg-[var(--lime)] text-[var(--navy)]" : "border-white/15 text-white/70 hover:border-white/30"
              }`}
            >
              {f.n} <span className="opacity-60">· {f.m.split(" · ")[0]}</span>
            </button>
          ))}
        </div>

        <div role="tabpanel" className="rounded-[18px] border border-white/12 bg-white/[0.03] p-6 lg:p-8">
          <div className="text-[19px] font-semibold tracking-[-0.01em] text-white [font-family:var(--display)]">{fw.n}</div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">{fw.m}</div>
          <p className="mt-4 max-w-[76ch] text-[14.5px] leading-[1.75] text-white/75">{fw.d}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {fw.asks.map(([k, v]) => (
              <div key={k} className="rounded-[12px] border border-white/10 p-4">
                <b className="block text-[13px] font-semibold text-[var(--lime)]">{k}</b>
                <span className="mt-1 block text-[13px] leading-[1.6] text-white/70">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-[80ch] text-[12px] leading-[1.6] text-white/45">{note}</p>
      </div>
    </section>
  );
}
