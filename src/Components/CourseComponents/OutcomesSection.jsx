"use client";
import { useState } from "react";
import { outcomes } from "@/data/mlMonitoringData";

export default function OutcomesSection() {
  const [done, setDone] = useState(new Set());

  const toggle = (i) => {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const pct = Math.round((done.size / outcomes.length) * 100);
  const circ = 402;
  const offset = circ * (1 - done.size / outcomes.length);

  return (
    <section
      id="outcomes"
      className="bg-[var(--paper-warm)] py-28 border-b border-[var(--rule)] "
    >
      <div className="container xl:pr-[466px]">
        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">
            V
          </span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">
            Outcomes
          </span>
          · Pick what matters most
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          Learning{" "}
          <em className="[font-family:var(--serif)] italic">outcomes</em> of
          this training.
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-14 max-w-[64ch]">
          These outcomes become the success measures we build your curriculum
          and KPIs around.
        </p>

        <div className="grid grid-cols-1 gap-8  items-start">
          <div className="flex flex-col gap-3">
            {outcomes.map((o, i) => {
              const isDone = done.has(i);
              return (
                <div
                  key={i}
                  className="flex gap-4 items-start rounded-[14px] border px-5 py-[18px] text-left transition-all [font-family:var(--body)] cursor-pointer bg-white border-[var(--rule)] hover:border-[var(--rule-strong)]"
                >
                  <span className="mt-2 h-[7px] w-[7px] flex-none rounded-full bg-[var(--lime)]"></span>
                  <p className="text-[15px] leading-[1.5]">{o}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
