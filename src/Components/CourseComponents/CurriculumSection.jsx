"use client";
import { useState } from "react";
import {
  modules,
  curriculumFilters,
  curriculumMeta,
  curriculumMethod,
} from "@/data/mlMonitoringData";

function formatHours(hrs) {
  const h = Math.floor(hrs || 0);
  const m = Math.round(((hrs || 0) - h) * 60);
  return `${h}${m ? `:${String(m).padStart(2, "0")}` : ""} h`;
}

export default function CurriculumSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openMod, setOpenMod] = useState(null);

  return (
    <section id="curriculum" className="py-28 border-b border-[var(--rule)]">
      <div className="container xl:pr-[466px]">
        <div className="text-[11px] tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] text-[16px] text-[var(--ink)]">
            VI
          </span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">
            Curriculum
          </span>
          · 10 modules · 8 labs + capstone
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4">
          ML Model Monitoring{" "}
          <em className="[font-family:var(--serif)] italic">course outline</em>.
        </h2>

        <div className="mb-7">
          <p className="mb-4 text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] max-w-[64ch]">
            Filter by what your team needs most, open any module for the
            detail, then build an agenda to send with your quote request.
          </p>

          <div className="w-full sm:w-[330px] rounded-[14px] border border-[var(--rule)] bg-white p-[15px] transition-shadow hover:shadow-[0_16px_36px_-28px_rgba(10,22,40,0.45)]">
            <div className="mb-2 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-[8px] bg-[var(--lime-soft)] text-[12px] text-[var(--navy)]"
              >
                ★
              </span>
              <h4 className="min-w-0 text-[12.5px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--ink)]">
                Designed by Edstellar and industry practitioners
              </h4>
            </div>
            <p className="text-[11.5px] leading-[1.55] text-[var(--muted)]">
              Built by engineers who run ML monitoring in production, then
              tailored to your stack before delivery.
            </p>
          </div>
        </div>

        <div className="mb-9 rounded-[16px] border border-[var(--rule)] bg-white p-6">
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {curriculumMethod.flow.map((step, i) => (
              <div key={step.k} className="flex items-start gap-3">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:block text-[var(--muted-soft)] mt-1"
                  >
                    →
                  </span>
                )}
                <div>
                  <span className="block text-[12px] font-bold uppercase tracking-[0.12em] text-[#6f8c0f] [font-family:var(--mono)]">
                    {step.k}
                  </span>
                  <p className="mt-1 text-[13px] leading-[1.5] text-[var(--muted)]">
                    {step.p}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            role="img"
            aria-label={`Learn ${curriculumMethod.split.learn} percent, Practice ${curriculumMethod.split.practice} percent, Apply ${curriculumMethod.split.apply} percent`}
            className="flex h-2 w-full overflow-hidden rounded-full bg-[var(--paper-warm)]"
          >
            <span
              className="h-full bg-[#c9d6e8]"
              style={{ width: `${curriculumMethod.split.learn}%` }}
            />
            <span
              className="h-full bg-[var(--lime)]"
              style={{ width: `${curriculumMethod.split.practice}%` }}
            />
            <span
              className="h-full bg-[var(--navy)]"
              style={{ width: `${curriculumMethod.split.apply}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-[var(--muted)]">
            <span>Learn {curriculumMethod.split.learn}%</span>
            <span>Practice {curriculumMethod.split.practice}%</span>
            <span>Apply {curriculumMethod.split.apply}%</span>
          </div>
          <p className="mt-2 text-[12.5px] text-[var(--muted)]">
            {curriculumMethod.splitNote}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[var(--rule)] pt-4 text-[11.5px] text-[var(--muted)]">
            <span className="font-semibold text-[var(--ink)]">
              Delivered as
            </span>
            {curriculumMethod.formats.map((f) => (
              <span
                key={f}
                className="rounded-full bg-[var(--paper-warm)] px-3 py-1"
              >
                {f}
              </span>
            ))}
            <span className="mx-1 h-4 w-px bg-[var(--rule)]" />
            {curriculumMethod.caps.map((c) => (
              <span key={c} className="font-medium text-[var(--ink)]">
                {c}
              </span>
            ))}
            <span>{curriculumMethod.capsNote}</span>
          </div>
        </div>

        <div className="flex gap-2.5 flex-wrap mb-7">
          {curriculumFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`[font-family:var(--mono)] text-[11px] tracking-[0.1em] uppercase px-[15px] py-2.5 rounded-full border transition-all cursor-pointer ${
                activeFilter === f.value
                  ? "bg-[var(--navy)] text-[var(--lime)] border-[var(--navy)]"
                  : "border-[var(--rule-strong)] text-[var(--muted)] hover:border-[var(--navy)] hover:text-[var(--ink)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {modules.map((m, i) => {
            const isOpen = openMod === i;
            const dimmed =
              activeFilter !== "all" && !m.tag.includes(activeFilter);
            return (
              <div
                key={i}
                className={`border border-[var(--rule)] rounded-[16px] bg-white overflow-hidden transition-all duration-300 ${dimmed ? "opacity-40 grayscale" : ""}`}
              >
                <div
                  onClick={() => setOpenMod(isOpen ? null : i)}
                  className="w-full flex items-center gap-[18px] px-6 py-5 cursor-pointer"
                >
                  <span className="[font-family:var(--mono)] text-[12px] tracking-[0.1em] text-[#6f8c0f] flex-shrink-0">
                    {m.no}
                  </span>
                  <div className="flex-1">
                    <span className="[font-family:var(--display)] font-semibold text-[17px] tracking-[-0.02em]">
                      {m.t}
                    </span>
                    <p className="text-[12.5px] text-[var(--muted)] mt-0.5">
                      {m.sub}
                    </p>
                    {curriculumMeta[m.no] && (
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10.5px] uppercase tracking-[0.08em] text-[var(--muted-soft)] [font-family:var(--mono)]">
                        <span
                          className={`rounded-full px-2 py-0.5 font-bold ${
                            curriculumMeta[m.no].band === "Learn"
                              ? "bg-[#e5edf7] text-[#3a5a8a]"
                              : curriculumMeta[m.no].band === "Apply"
                                ? "bg-[var(--navy)]/10 text-[var(--navy)]"
                                : "bg-[var(--lime)]/20 text-[#6f8c0f]"
                          }`}
                        >
                          {curriculumMeta[m.no].band}
                        </span>
                        <span>·</span>
                        <span>{curriculumMeta[m.no].topics} topics</span>
                        <span>·</span>
                        <span>~{formatHours(curriculumMeta[m.no].hrs)}</span>
                        {curriculumMeta[m.no].lab &&
                          curriculumMeta[m.no].labKind !== "intro" && (
                            <>
                              <span>·</span>
                              <span>
                                {curriculumMeta[m.no].labKind === "capstone"
                                  ? "Capstone"
                                  : "1 lab"}
                              </span>
                            </>
                          )}
                      </div>
                    )}
                  </div>

                  {/* Expand button */}
                  <span
                    className={`flex-shrink-0 w-[30px] h-[30px] rounded-full border border-[var(--rule-strong)] flex items-center justify-center transition-transform duration-300 text-[18px] leading-none ${isOpen ? "rotate-[135deg] bg-[var(--navy)] text-[var(--lime)] border-[var(--navy)]" : ""}`}
                  >
                    +
                  </span>
                </div>

                {isOpen && (
                  <div className="px-6 pb-6 pl-[58px]">
                    {m.groups.map((g, gi) => (
                      <div key={gi} className="mt-4">
                        <h5 className="[font-family:var(--display)] font-semibold text-[14px] mb-1.5">
                          {g.g}
                        </h5>
                        <ul className="list-none">
                          {g.items.map((item, ii) => (
                            <li
                              key={ii}
                              className="flex gap-2.5 text-[13.5px] text-[var(--muted)] py-1 leading-[1.5]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--lime)] flex-shrink-0 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {curriculumMeta[m.no]?.lab && (
                      <div className="mt-5 rounded-[12px] border border-[var(--lime)]/40 bg-[var(--lime)]/10 p-4">
                        <div className="mb-1.5 flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6f8c0f]">
                          <span aria-hidden="true">⚡</span>
                          {curriculumMeta[m.no].labKind === "capstone"
                            ? "Capstone"
                            : curriculumMeta[m.no].labKind === "intro"
                              ? "Guided walkthrough"
                              : "Hands-on lab"}
                        </div>
                        <b className="block text-[14px] text-[var(--ink)]">
                          {curriculumMeta[m.no].lab}
                        </b>
                        <p className="mt-1 text-[13px] leading-[1.5] text-[var(--muted)]">
                          {curriculumMeta[m.no].labDesc}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
