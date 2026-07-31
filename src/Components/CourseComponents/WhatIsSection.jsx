"use client";
import { useState } from "react";

export default function WhatIsSection({
  mark = "About · A two-minute primer",
  title,
  titleEm,
  intro,
  more,
  rows,
  oldLabel = "Traditional software monitoring",
  newLabel,
}) {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="bg-[var(--paper)] py-28 border-b border-[var(--rule)]">
      <div className="container">
        <div className="text-[11px] tracking-[0.24em] uppercase text-[var(--muted)] mb-[18px] [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] text-[14px] text-[var(--ink)]">
            I
          </span>{" "}
          {mark}
        </div>

        <h2 className="mb-9 text-[var(--ink)] leading-[1.08] text-[clamp(30px,4vw,50px)] font-bold tracking-[-0.03em] [font-family:var(--display)]">
          {title}{" "}
          <span className="[font-family:var(--serif)] italic font-semibold text-[var(--ink)]">
            {titleEm.replace(/\?$/, "")}
          </span>
          <span className="[font-family:var(--display)] font-bold">?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <p className="text-base leading-[1.75] text-[var(--muted)]">
              {intro}
            </p>
            {more && (
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: open ? 1000 : 0, opacity: open ? 1 : 0 }}
              >
                {more.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.75] mt-4 text-[var(--muted)]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}
            {more && (
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex gap-1.5 mt-5 bg-transparent border-none [border-bottom:1px_solid_var(--rule-strong)] pb-[3px] text-[11px] tracking-[0.16em] uppercase cursor-pointer text-[var(--ink)] [font-family:var(--mono)] outline-none"
              >
                {open ? "Show less ×" : "Read more +"}
              </button>
            )}
          </div>

          <div className="border border-[var(--rule)] rounded-[18px] overflow-hidden bg-[var(--white)]">
            <div className="grid grid-cols-2">
              <div className="px-4 sm:px-5 py-4 text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-[var(--muted)] border-b border-[var(--rule)]">
                {oldLabel}
              </div>
              <div className="px-4 sm:px-5 py-4 text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-[#6f8c0f] bg-[rgba(200,241,53,0.1)] border-b border-[var(--rule)]">
                {newLabel}
              </div>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className={`grid grid-cols-2${i < rows.length - 1 ? " border-b border-[var(--rule)]" : ""}`}
              >
                <div className="px-[13px] sm:px-5 py-3.5 text-[12.5px] sm:text-[13.5px] leading-[1.5] text-[var(--muted)]">
                  {r.old}
                </div>
                <div className="px-[13px] sm:px-5 py-3.5 text-[12.5px] sm:text-[13.5px] leading-[1.5] font-normal text-[var(--ink)] bg-[rgba(200,241,53,0.05)]">
                  {r.new}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
