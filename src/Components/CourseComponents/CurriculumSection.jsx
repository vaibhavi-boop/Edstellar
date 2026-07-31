"use client";
import { Fragment, useState } from "react";
import {
  modules,
  curriculumFilters,
  curriculumMeta,
  curriculumMethod,
  trainers,
} from "@/data/mlMonitoringData";

function formatHours(hrs) {
  const h = Math.floor(hrs || 0);
  const m = Math.round(((hrs || 0) - h) * 60);
  return `${h}${m ? `:${String(m).padStart(2, "0")}` : ""} h`;
}

function initials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function CurriculumSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openMod, setOpenMod] = useState(null);
  const reviewers = trainers.slice(0, 3);

  return (
    <section id="curriculum" className="py-28 border-b border-[var(--rule)]">
      <div className="container xl:pr-[440px]">
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

          <div className="w-full sm:w-[330px] rounded-[14px] border border-[var(--rule)] bg-white px-[15px] py-[13px] transition-shadow hover:shadow-[0_16px_36px_-28px_rgba(10,22,40,0.45)]">
            <div className="mb-2 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-[8px] bg-[var(--lime-soft)] text-[12px] text-[var(--navy)]"
              >
                ★
              </span>
              <h4 className="min-w-0 [font-family:var(--display)] text-[12.5px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--ink)]">
                Designed by Edstellar and industry practitioners
              </h4>
              <div aria-hidden="true" className="ml-auto flex flex-none">
                {reviewers.map((t, i) => (
                  <span
                    key={t.name}
                    className="h-[23px] w-[23px] flex-none rounded-full border-2 border-white bg-[var(--navy)] bg-cover bg-center text-[8.5px] text-[var(--lime)] shadow-[0_3px_9px_-3px_rgba(10,22,40,0.4)] [font-family:var(--mono)]"
                    style={{
                      marginLeft: i === 0 ? 0 : "-7px",
                      backgroundImage: t.image ? `url(${t.image})` : undefined,
                    }}
                  >
                    {!t.image && (
                      <span className="flex h-full w-full items-center justify-center">
                        {initials(t.name)}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[11.5px] leading-[1.55] text-[var(--muted)]">
              Built by engineers who run ML monitoring in production, then
              tailored to your stack before delivery.
            </p>
          </div>
        </div>

        <div className="mt-[6px] mb-[30px] rounded-[16px] border border-[var(--rule)] bg-white px-[28px] py-[26px]">
          <div className="grid grid-cols-1 gap-[14px] items-start md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4">
            {curriculumMethod.flow.map((step, i) => (
              <Fragment key={step.k}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden pt-[2px] text-[18px] text-[var(--rule-strong)] md:block"
                  >
                    →
                  </span>
                )}
                <div className="col-span-1">
                  <span className="mb-1.5 block [font-family:var(--display)] text-[15px] font-bold tracking-[-0.02em] text-[var(--ink)]">
                    {step.k}
                  </span>
                  <p className="text-[12.5px] leading-[1.55] text-[var(--muted)]">
                    {step.p}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="mt-6 border-t border-[var(--rule)] pt-[22px]">
            <div
              role="img"
              aria-label={`Learn ${curriculumMethod.split.learn} percent, Practice ${curriculumMethod.split.practice} percent, Apply ${curriculumMethod.split.apply} percent`}
              className="flex h-[10px] w-full overflow-hidden rounded-full bg-[var(--paper-warm)]"
            >
              <span
                className="h-full bg-[#9db668]"
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
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 [font-family:var(--mono)] text-[10.5px] uppercase tracking-[0.08em] text-[var(--muted)]">
              <span className="inline-flex items-center gap-[7px]">
                <i className="h-[9px] w-[9px] rounded-[3px] bg-[#9db668]" />
                Learn {curriculumMethod.split.learn}%
              </span>
              <span className="inline-flex items-center gap-[7px]">
                <i className="h-[9px] w-[9px] rounded-[3px] bg-[var(--lime)]" />
                Practice {curriculumMethod.split.practice}%
              </span>
              <span className="inline-flex items-center gap-[7px]">
                <i className="h-[9px] w-[9px] rounded-[3px] bg-[var(--navy)]" />
                Apply {curriculumMethod.split.apply}%
              </span>
            </div>
            <p className="mt-[13px] max-w-[76ch] text-[12px] leading-[1.6] text-[var(--muted)]">
              {curriculumMethod.splitNote}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-[9px] border-t border-[var(--rule)] pt-[18px]">
            <span className="[font-family:var(--mono)] text-[9.5px] uppercase tracking-[0.14em] text-[var(--muted)]">
              Delivered as
            </span>
            {curriculumMethod.formats.map((f) => (
              <span
                key={f}
                className="rounded-full bg-[var(--paper-warm)] px-[14px] py-[6px] text-[12.5px] font-medium text-[var(--ink)]"
              >
                {f}
              </span>
            ))}
            <span className="h-4 w-px bg-[var(--rule)]" />
            {curriculumMethod.caps.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[var(--rule-strong)] bg-white px-[14px] py-[6px] [font-family:var(--mono)] text-[11px] font-medium tracking-[0.03em] text-[var(--ink)]"
              >
                {c}
              </span>
            ))}
            <span className="ml-0 flex-1 basis-full text-[12px] text-[var(--muted)] md:ml-auto md:flex-none md:basis-auto">
              {curriculumMethod.capsNote}
            </span>
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
                    <p className="text-[12.5px] text-[var(--muted)] mt-[3px]">
                      {m.sub}
                    </p>
                    {curriculumMeta[m.no] && (
                      <div className="mt-[9px] flex flex-wrap items-center gap-[9px] text-[10px] font-normal tracking-[0.04em] text-[var(--muted)] [font-family:var(--mono)]">
                        <span
                          className={`rounded-[5px] px-[9px] py-[3px] text-[9px] font-semibold uppercase tracking-[0.1em] ${
                            curriculumMeta[m.no].band === "Apply"
                              ? "bg-[rgba(10,22,40,0.1)] text-[var(--navy)]"
                              : curriculumMeta[m.no].band === "Learn"
                                ? "bg-[rgba(157,182,104,0.18)] text-[#5f7320]"
                                : "bg-[rgba(200,241,53,0.22)] text-[#5f7320]"
                          }`}
                        >
                          {curriculumMeta[m.no].band}
                        </span>
                        <span className="h-[3px] w-[3px] rounded-full bg-[var(--rule-strong)]" />
                        <span>{curriculumMeta[m.no].topics} topics</span>
                        <span className="h-[3px] w-[3px] rounded-full bg-[var(--rule-strong)]" />
                        <span>~{formatHours(curriculumMeta[m.no].hrs)}</span>
                        {curriculumMeta[m.no].lab &&
                          curriculumMeta[m.no].labKind !== "intro" && (
                            <>
                              <span className="h-[3px] w-[3px] rounded-full bg-[var(--rule-strong)]" />
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
                  <div className="pt-[4px] pr-6 pb-[22px] pl-[58px]">
                    {m.groups.map((g, gi) => (
                      <div key={gi} className="mt-[14px]">
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
                      <div
                        className={`mt-[18px] flex items-start gap-[14px] rounded-[12px] border px-[17px] py-[15px] ${
                          curriculumMeta[m.no].labKind === "capstone"
                            ? "border-[var(--rule-strong)] bg-[rgba(10,22,40,0.05)]"
                            : curriculumMeta[m.no].labKind === "intro"
                              ? "border-[var(--rule)] bg-[var(--paper-warm)]"
                              : "border-[rgba(200,241,53,0.4)] bg-[rgba(200,241,53,0.09)]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex-none text-[16px] ${
                            curriculumMeta[m.no].labKind === "capstone"
                              ? "text-[var(--navy)]"
                              : curriculumMeta[m.no].labKind === "intro"
                                ? "text-[var(--muted)]"
                                : "text-[#5f7320]"
                          }`}
                        >
                          ⚡
                        </span>
                        <div>
                          <div className="mb-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#5f7320]">
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
