"use client";
import { useState } from "react";
import { lifecycle } from "@/data/mlMonitoringData";

const LIFEICON = {
  "01": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l5-6 4 4 5-8" />
      <path d="M3 21h18" />
      <circle cx="17" cy="7" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  "02": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  "03": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a5 5 0 0 0-5 5c0 4-2 6-2 6h14s-2-2-2-6a5 5 0 0 0-5-5z" />
      <path d="M10.5 20a1.8 1.8 0 0 0 3 0" />
    </svg>
  ),
  "04": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 11a8 8 0 1 0-.9 4.5" />
      <path d="M20 5v5h-5" />
    </svg>
  ),
  "05": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M11 8v.01M11 11v3" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  ),
  "06": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 7h14M7 7l-3 6h6zM17 7l-3 6h6z" />
      <path d="M2 13a4 4 0 0 0 8 0M14 13a4 4 0 0 0 8 0" />
    </svg>
  ),
};

export default function LifecycleSection() {
  const [active, setActive] = useState(0);
  const m = lifecycle[active];

  return (
    <section
      id="lifecycle"
      className="relative isolate overflow-hidden bg-[var(--navy)] py-28 border-b border-white/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden rounded-[inherit] lg:block"
        style={{
          background: `
            radial-gradient(
              circle at 100% 50%,
              transparent 0 200px,
              rgba(146,180,234,.20) 200px calc(200px + 27px),
              transparent calc(200px + 27px)
            ),
            radial-gradient(
              circle at 100% 50%,
              transparent 0 258px,
              rgba(119,157,216,.24) 258px calc(258px + 27px),
              transparent calc(258px + 27px)
            ),
            radial-gradient(
              circle at 100% 50%,
              transparent 0 317px,
              rgba(37,95,255,.29) 317px calc(317px + 27px),
              transparent calc(317px + 27px)
            )
          `,
          maskImage:
            "conic-gradient(from 180deg at 100% 50%, #000 0 180deg, transparent 180deg)",
          WebkitMaskImage:
            "conic-gradient(from 180deg at 100% 50%, #000 0 180deg, transparent 180deg)",
        }}
      />

      <div className="container relative z-10">

        <div className="text-[11px] tracking-[0.24em] uppercase text-white/60 mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] text-[16px] text-white">III</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-white">Lifecycle</span>
          · Six stages, one loop
        </div>

        <h2 className="text-[var(--paper)] font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          The <em className="[font-family:var(--serif)] italic">monitoring lifecycle</em> your team will run.
        </h2>
        <p className="text-white/75 text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-14 max-w-[64ch]">
          This is the operational loop your teams will run after the training. Select a stage to see what it covers and where it sits in the curriculum.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
          <div className="flex flex-col gap-2">
            {lifecycle.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left rounded-[14px] px-5 py-[18px] border flex gap-4 items-center transition-all cursor-pointer [font-family:var(--body)] ${
                  active === i
                    ? "bg-[var(--navy-soft)] border-[var(--lime)]"
                    : "bg-[rgba(255,255,255,0.04)] border-white/14 hover:border-[var(--lime)]/40"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] [&_svg]:h-[19px] [&_svg]:w-[19px] ${
                    active === i
                      ? "bg-[var(--lime)] text-[var(--navy)]"
                      : "bg-[rgba(200,241,53,0.1)] text-[var(--lime)]"
                  }`}
                >
                  {LIFEICON[item.ix]}
                </span>
                <span className="[font-family:var(--display)] font-semibold text-[15.5px] text-white tracking-[-0.01em]">{item.t}</span>
              </button>
            ))}
          </div>

          <div className="bg-[var(--navy-soft)] border border-white/14 rounded-[18px] p-6 lg:p-9 min-h-[280px]">
            <p className="[font-family:var(--serif)] italic text-[clamp(21px,2.5vw,28px)] leading-[1.3] text-white mb-4 [&_b]:text-[var(--lime)] [&_b]:not-italic [&_b]:font-bold"
               dangerouslySetInnerHTML={{ __html: m.over }} />
            <p className="text-[15px] leading-[1.7] text-white/80 mb-5">{m.p}</p>
            <p className="[font-family:var(--mono)] text-[10px] tracking-[0.16em] uppercase text-[var(--lime)] mb-3">{m.t} · {m.mods}</p>
            <ul className="space-y-1">
              {m.does.map((d, i) => (
                <li key={i} className="flex gap-2.5 text-[14px] text-white/82">
                  <span className="text-[var(--lime)]">→</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
