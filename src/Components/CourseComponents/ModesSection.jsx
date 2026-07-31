"use client";

import Image from "next/image";
import { useState } from "react";
import { modes, modeLabels } from "@/data/mlMonitoringData";

export default function ModesSection() {
  const [active, setActive] = useState(0);
  const m = modes[active];

  return (
    <section id="modes" className="border-b border-[var(--rule)] py-28">
      <div className="container xl:pr-[440px]">
        {/* Section Label */}
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] text-[16px] text-[var(--ink)]">
            VIII
          </span>
          <span className="[font-family:var(--serif)] text-[16px] italic normal-case tracking-normal text-[var(--ink)]">
            Modes
          </span>
          · How delivery works
        </div>

        <h2 className="mb-4 max-w-[20ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em]">
          Training delivery:{" "}
          <em className="[font-family:var(--serif)] italic">onsite, virtual</em>
          , and offsite.
        </h2>

        <p className="mb-8 max-w-[64ch] text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-[var(--muted)]">
          We design training your teams actually engage with, then deliver it
          the way that suits you, in 10+ languages through a vetted global
          trainer network.
        </p>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 border-b border-[var(--rule)]">
          {modeLabels.map((l, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative mr-[22px] border-none bg-transparent px-1.5 py-[14px] [font-family:var(--display)] text-[16px] font-semibold tracking-[-0.01em] transition-colors ${
                active === i ? "text-[var(--ink)]" : "text-[var(--muted)]"
              }`}
            >
              <span className="mb-1 block text-[10px] uppercase tracking-[0.14em] text-[var(--muted-soft)] [font-family:var(--mono)]">
                {l.lbl}
              </span>

              {l.h}

              {active === i && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--lime)]" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_340px]">
          {/* Left */}
          <div>
            <h3 className="mb-3 text-[24px] font-semibold tracking-[-0.02em] [font-family:var(--display)]">
              {m.h}
            </h3>

            <p className="text-[15px] leading-[1.7] text-[var(--muted)]">
              {m.d}
            </p>

            <ul className="mt-5">
              {m.li.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 border-t border-[var(--rule)] py-[9px] text-[14.5px] leading-[1.5] text-[var(--muted)]"
                >
                  <span className="font-bold text-[#6f8c0f]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[340px] overflow-hidden rounded-[20px] border border-[var(--rule)] bg-[var(--paper-warm)]">
              <Image
                src={m.img}
                alt={m.alt}
                width={340}
                height={280}
                className="h-[280px] w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,22,40,0.6),rgba(10,22,40,0.05)_55%)]" />

              <span className="absolute bottom-4 left-4 rounded-full bg-[var(--lime)] px-[13px] py-[6px] [font-family:var(--mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--navy)]">
                {m.big}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
