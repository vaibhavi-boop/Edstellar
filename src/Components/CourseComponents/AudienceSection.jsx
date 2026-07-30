"use client";
import { useEffect, useRef, useState } from "react";
import {
  audience,
  audienceFilters,
  audienceGroupLabels,
  skillProgression,
} from "@/data/mlMonitoringData";

const LEVEL_ABBR = {
  None: "N",
  Basic: "B",
  Intermediate: "I",
  Advanced: "A",
  "Very Advanced": "VA",
};

export default function AudienceSection() {
  const [activeGroup, setActiveGroup] = useState("all");
  const [barsOn, setBarsOn] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current || typeof IntersectionObserver === "undefined") {
      setBarsOn(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBarsOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const firstPreIndex = skillProgression.findIndex((p) => p.pre);
  const lastPreIndex = skillProgression
    .map((p) => !!p.pre)
    .lastIndexOf(true);

  return (
    <section
      id="audience"
      className="bg-[var(--paper-warm)] py-28 border-b border-[var(--rule)]"
    >
      <div className="container xl:pr-[466px]">
        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">
            VII
          </span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">
            Who
          </span>
          · Roles and prerequisites
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          Who should attend this{" "}
          <em className="[font-family:var(--serif)] italic">ML monitoring</em>{" "}
          training?
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-6 max-w-[64ch]">
          Filter by function to see which roles this corporate training is
          shaped for.
        </p>

        <div className="grid grid-cols-1 gap-8 items-start [@media(min-width:981px)_and_(max-width:1279px)]:grid-cols-[minmax(0,.86fr)_minmax(0,1.14fr)] [@media(min-width:981px)_and_(max-width:1279px)]:gap-8">
          <div>
            <div className="flex gap-2.5 flex-wrap mb-7">
              {audienceFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveGroup(f.value)}
                  className={`[font-family:var(--mono)] text-[10px] tracking-[0.08em] uppercase px-[13px] py-2 rounded-full border transition-all cursor-pointer ${
                    activeGroup === f.value
                      ? "bg-[var(--navy)] text-[var(--lime)] border-[var(--navy)]"
                      : "border-[var(--rule-strong)] text-[var(--muted)] hover:bg-[var(--navy)] hover:text-[var(--lime)] hover:border-[var(--navy)]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 mb-8">
              {audience.map((a, i) => {
                const isFiltering = activeGroup !== "all";
                const isMatch = isFiltering && a.g === activeGroup;
                const isHidden = isFiltering && a.g !== activeGroup;
                return (
                  <div
                    key={i}
                    style={{ order: isMatch ? 0 : 1 }}
                    className={`bg-white border rounded-[11px] px-4 py-3 text-[13.5px] font-medium flex items-center gap-2.5 transition-all duration-300 ${
                      isMatch
                        ? "border-[rgba(124,156,16,0.5)] shadow-[0_8px_20px_-14px_rgba(10,22,40,0.4)]"
                        : "border-[var(--rule)]"
                    } ${isHidden ? "opacity-[0.18] grayscale" : "opacity-100"}`}
                  >
                    {a.r}
                    <span className="ml-auto [font-family:var(--mono)] text-[8.5px] tracking-[0.1em] uppercase text-[var(--muted-soft)] bg-[var(--paper-warm)] px-1.5 py-0.5 rounded-[5px]">
                      {audienceGroupLabels[a.g]}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="text-[12.5px] text-[var(--muted)] bg-white border border-[var(--rule)] border-l-[3px] border-l-[var(--lime)] rounded-[10px] px-[15px] py-3 mt-[18px] leading-[1.6]">
              <b>Prerequisites:</b> participants should have experience in
              machine learning model development and Python programming.
            </div>
          </div>

          <div className="rounded-[16px] border border-[var(--rule)] bg-white p-6">
            <h3 className="mb-2 text-[18px] font-semibold text-[var(--ink)]">
              Skill progression: entry → exit
            </h3>
            <p className="mb-5 text-[13px] leading-[1.6] text-[var(--muted)]">
              Where a typical participant starts and where they finish. Only
              the first two lines are prerequisites. Everything below is
              taught from the ground up.
            </p>

            <div ref={gridRef}>
              {skillProgression.map((p, i) => (
                <div key={p.t}>
                  {i === firstPreIndex && (
                    <div className="mb-4 flex items-center gap-3 [font-family:var(--mono)] text-[9px] uppercase tracking-[0.13em] text-[var(--muted)]">
                      <span className="h-px w-[22px] flex-none bg-[var(--rule-strong)]" />
                      Prerequisites
                      <span className="h-px flex-1 bg-[var(--rule)]" />
                    </div>
                  )}
                  <div className="mb-[15px]">
                    <div className="mb-1.5 flex items-baseline justify-between gap-2">
                      <span className="[font-family:var(--display)] text-[13px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
                        {p.t}
                      </span>
                      <span className="[font-family:var(--mono)] whitespace-nowrap text-[9px] uppercase tracking-[0.06em] text-[var(--muted)]">
                        {LEVEL_ABBR[p.el]}{" "}
                        <span aria-hidden="true" className="text-[var(--rule-strong)]">
                          →
                        </span>{" "}
                        <b className="font-semibold text-[var(--ink)]">
                          {LEVEL_ABBR[p.xl]}
                        </b>
                      </span>
                    </div>
                    <div
                      role="img"
                      aria-label={`${p.t}: ${p.el} on entry, ${p.xl} on completion`}
                      className="relative h-2 overflow-visible rounded-full bg-[var(--paper-warm)]"
                    >
                      <div
                        className="h-full rounded-full transition-all duration-[1100ms] ease-out"
                        style={{
                          width: barsOn ? `${p.x}%` : 0,
                          background:
                            "linear-gradient(90deg, var(--navy-deep), #3f5f2a 55%, var(--lime))",
                        }}
                      />
                      {p.e > 0 && (
                        <span
                          aria-hidden="true"
                          className="absolute top-1/2 z-[2] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[rgba(250,250,247,0.85)]"
                          style={{ left: `${p.e}%`, height: 8 }}
                        />
                      )}
                      <span
                        aria-hidden="true"
                        className="absolute top-1/2 z-[2] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[rgba(10,22,40,0.6)]"
                        style={{ left: `${p.x}%`, height: 15 }}
                      />
                    </div>
                  </div>
                  {i === lastPreIndex &&
                    lastPreIndex < skillProgression.length - 1 && (
                      <div className="my-4 flex items-center gap-3 [font-family:var(--mono)] text-[9px] uppercase tracking-[0.13em] text-[var(--muted)]">
                        <span className="h-px w-[22px] flex-none bg-[var(--rule-strong)]" />
                        Taught from the ground up
                        <span className="h-px flex-1 bg-[var(--rule)]" />
                      </div>
                    )}
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-[var(--rule)] pt-[15px] [font-family:var(--mono)]">
              {Object.entries(LEVEL_ABBR).map(([full, abbr]) => (
                <span
                  key={abbr}
                  className="text-[10px] tracking-[0.04em] text-[var(--muted)]"
                >
                  <b className="mr-0.5 font-semibold text-[var(--ink)]">
                    {abbr}
                  </b>
                  {full}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
