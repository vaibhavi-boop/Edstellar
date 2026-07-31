"use client";

import { useMemo, useState } from "react";
import {
  groupQuoteCatalog,
  licensePackages,
  GQ_LOCKED,
} from "@/data/mlMonitoringData";

const SIZE_OPTIONS = ["1-10", "11-25", "26-50", "51-100", "custom"];
const SESS_OPTIONS = ["2", "4", "8", "custom"];
const REQ_LABEL = { a: "One-time training", b: "Multiple training" };

function stripTraining(name) {
  return name.replace(/ Training$/, "");
}

function GqOpt({ name, value, label, checked, onChange }) {
  return (
    <label
      className={`flex cursor-pointer items-center justify-center gap-2.5 rounded-xl border px-[18px] py-4 text-center text-[14.5px] leading-[1.4] text-[var(--ink)] transition-colors ${
        checked
          ? "border-[var(--navy)] bg-[var(--lime-soft)] shadow-[0_0_0_3px_rgba(10,22,40,0.07)]"
          : "border-[var(--rule-strong)] bg-white hover:border-[var(--navy)]"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 flex-none appearance-none rounded-full border transition-[border] ${
          checked ? "border-[5px] border-[var(--navy)]" : "border-[var(--rule-strong)]"
        }`}
      />
      {label}
    </label>
  );
}

function GqStepper({ value, min, onChange, ariaLabel }) {
  return (
    <div className="mx-auto mt-3.5 flex w-[176px] items-center overflow-hidden rounded-xl border border-[var(--rule-strong)]">
      <button
        type="button"
        aria-label={`Decrease ${ariaLabel}`}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-11 w-[46px] flex-none border-none bg-[var(--paper-warm)] text-[19px] leading-none text-[var(--ink)] transition-colors hover:bg-[var(--paper-cream)]"
      >
        −
      </button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Math.max(min, +e.target.value || min))}
        aria-label={ariaLabel}
        className="w-full min-w-0 flex-1 border-none bg-white py-3 text-center [font-family:var(--mono)] text-[15px] text-[var(--ink)] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        aria-label={`Increase ${ariaLabel}`}
        onClick={() => onChange(value + 1)}
        className="h-11 w-[46px] flex-none border-none bg-[var(--paper-warm)] text-[19px] leading-none text-[var(--ink)] transition-colors hover:bg-[var(--paper-cream)]"
      >
        +
      </button>
    </div>
  );
}

function GqError({ children }) {
  return (
    <p role="alert" className="mt-4 text-center text-[12.5px] leading-[1.5] text-[#b3261e]">
      {children}
    </p>
  );
}

function GqNav({ back, children }) {
  return (
    <div className="mt-7 flex items-center gap-3.5 border-t border-[var(--rule)] pt-[22px]">
      {back && (
        <button
          type="button"
          onClick={back}
          className="mr-auto rounded-full border border-[var(--rule-strong)] px-[27px] py-[15px] text-[14px] font-semibold text-[var(--ink)] transition-colors hover:border-[var(--navy)] hover:bg-[rgba(10,22,40,0.04)]"
        >
          ← Previous
        </button>
      )}
      {children}
    </div>
  );
}

export default function GroupQuoteSection() {
  const [tab, setTab] = useState("a"); // a = one-time training, b = multiple training
  const [step, setStep] = useState(1);
  const [size, setSize] = useState("");
  const [sizeCustom, setSizeCustom] = useState(120);
  const [freq, setFreq] = useState("");
  const [sess, setSess] = useState("");
  const [sessCustom, setSessCustom] = useState(12);
  const [errors, setErrors] = useState({});

  // step 3 — program picker
  const [pickMode, setPickMode] = useState("select"); // select | upload
  const [query, setQuery] = useState("");
  const [chosen, setChosen] = useState(() => new Set([GQ_LOCKED]));
  const [fileName, setFileName] = useState("");

  const multi = tab === "b";
  const path = multi ? [1, 3, 4, 5] : [1, 4, 5];
  const stepIdx = path.indexOf(step);

  const sizeText = () => {
    if (!size) return "";
    return size === "custom" ? `${sizeCustom} people` : `${size} people`;
  };

  const freqText = () => {
    if (!freq) return "";
    if (freq === "One time") return "One time";
    if (!sess) return "Recurring";
    return `Recurring, ${sess === "custom" ? sessCustom : sess} sessions`;
  };

  const progText = () => {
    const list = [...chosen];
    const extra = list.filter((n) => n !== GQ_LOCKED);
    const bits = [];
    if (extra.length)
      bits.push(`${list.length} programs: ${list.map(stripTraining).join(", ")}`);
    if (fileName) bits.push(`list attached (${fileName})`);
    return bits.join(" · ") || "This program only";
  };

  const filteredCatalog = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groupQuoteCatalog
      .map((group) => ({
        g: group.g,
        items: group.items.filter(([n]) => !q || n.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  const toggleProgram = (name, locked) => {
    if (locked) return;
    setChosen((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const isValid = (n) => {
    if (n === 1) {
      if (!size) return false;
      if (size === "custom" && !(sizeCustom > 0)) return false;
      return true;
    }
    if (n === 3) return chosen.size > 0 || !!fileName;
    if (n === 4) {
      if (!freq) return false;
      if (freq === "Recurring") {
        if (!sess) return false;
        if (sess === "custom" && !(sessCustom > 1)) return false;
      }
      return true;
    }
    return true;
  };

  const goTo = (n) => {
    const targetIdx = path.indexOf(n);
    if (targetIdx > stepIdx && !isValid(step)) {
      setErrors((e) => ({ ...e, [step]: true }));
      return;
    }
    setErrors({});
    setStep(n);
  };

  const switchTab = (nextTab) => {
    setTab(nextTab);
    setStep(1);
    setErrors({});
  };

  const handleContinue = () => {
    const detail = {
      size: sizeText(),
      scope: REQ_LABEL[tab],
      freq: freqText(),
      programs: multi ? progText() : "This program only",
    };
    if (typeof window !== "undefined") {
      sessionStorage.setItem("gqCarry", JSON.stringify(detail));
      window.dispatchEvent(new CustomEvent("gq:complete", { detail }));
      const apply = document.getElementById("apply");
      if (apply) {
        const top = apply.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
        setTimeout(() => {
          document.getElementById("lfName")?.focus({ preventScroll: true });
        }, 600);
      }
    }
  };

  return (
    <section id="group-quote" className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-28">
      <div className="container">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] text-[16px] italic normal-case tracking-normal text-[var(--ink)]">
            Group quote
          </span>
          · Three questions, then the form
        </div>

        <h2 className="mb-4 max-w-[20ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em]">
          Get a proposal{" "}
          <em className="[font-family:var(--serif)] italic">
            shaped to your needs
          </em>
          .
        </h2>

        <p className="mb-8 max-w-[64ch] text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-[var(--muted)]">
          Answer three quick questions about team size, scope, and how often
          you need the program run. Your answers carry into the request form
          at the bottom of this page, so you only fill in your details once.
        </p>

        <div className="overflow-hidden rounded-[20px] border border-[var(--rule-strong)] bg-white shadow-[0_1px_0_rgba(10,22,40,0.04),0_30px_60px_-40px_rgba(10,22,40,0.4)]">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Quote request type"
            className="flex border-b border-[var(--rule)] bg-[var(--paper-warm)]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "a"}
              onClick={() => switchTab("a")}
              className={`flex-1 border-none border-b-2 px-5 py-4 text-[14px] font-semibold transition-colors ${
                tab === "a"
                  ? "border-b-[var(--navy)] bg-white text-[var(--ink)]"
                  : "border-b-transparent bg-transparent text-[var(--muted)]"
              }`}
            >
              One-time training
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "b"}
              onClick={() => switchTab("b")}
              className={`flex-1 border-none border-b-2 px-5 py-4 text-[14px] font-semibold transition-colors ${
                tab === "b"
                  ? "border-b-[var(--navy)] bg-white text-[var(--ink)]"
                  : "border-b-transparent bg-transparent text-[var(--muted)]"
              }`}
            >
              Multiple training
            </button>
          </div>

          <div className="px-6 py-[34px] sm:px-10">
            {/* progress dots */}
            <ol aria-hidden="true" className="mb-[34px] flex items-center justify-center">
              {path.map((n, i) => (
                <li key={n} className="flex items-center">
                  {i > 0 && (
                    <i className="block w-16 border-t border-dashed border-[var(--rule-strong)]" />
                  )}
                  <b
                    className={`grid h-[30px] w-[30px] place-items-center rounded-full border [font-family:var(--mono)] text-[12px] font-normal transition-colors ${
                      n === step
                        ? "border-[var(--navy)] bg-white text-[var(--ink)]"
                        : i < stepIdx
                          ? "border-[var(--lime)] bg-[var(--lime)] text-[var(--ink)]"
                          : "border-[var(--rule-strong)] bg-white text-[var(--muted-soft)]"
                    }`}
                  >
                    {i + 1}
                  </b>
                </li>
              ))}
            </ol>

            {step === 1 && (
              <div>
                <h3 className="mb-6 text-center [font-family:var(--display)] text-[clamp(19px,2vw,25px)] font-bold leading-[1.25] tracking-[-0.025em]">
                  How many team members need training?
                </h3>
                <div
                  role="radiogroup"
                  className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fit,minmax(158px,1fr))]"
                >
                  {SIZE_OPTIONS.map((opt) => (
                    <GqOpt
                      key={opt}
                      name="gqSize"
                      value={opt}
                      checked={size === opt}
                      onChange={() => setSize(opt)}
                      label={opt === "custom" ? "Custom" : opt.replace("-", "–")}
                    />
                  ))}
                </div>
                {size === "custom" && (
                  <GqStepper
                    value={sizeCustom}
                    min={1}
                    onChange={setSizeCustom}
                    ariaLabel="number of team members"
                  />
                )}
                {errors[1] && (
                  <GqError>
                    Please choose a team size, or enter your own number.
                  </GqError>
                )}
                <GqNav>
                  <button
                    type="button"
                    onClick={() => goTo(multi ? 3 : 4)}
                    className="ml-auto flex items-center gap-2 rounded-full bg-[var(--navy)] px-7 py-4 text-[14px] font-semibold text-[var(--lime)] transition-transform hover:-translate-y-0.5"
                  >
                    Next →
                  </button>
                </GqNav>
              </div>
            )}

            {step === 3 && multi && (
              <div>
                <div className="mb-5 text-center [font-family:var(--display)] text-[clamp(19px,2vw,25px)] font-bold leading-[1.25] tracking-[-0.025em]">
                  Which programs do you need?
                </div>

                <div className="mx-auto mb-[22px] flex w-max rounded-full border border-[var(--rule-strong)] bg-white p-[3px]">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={pickMode === "select"}
                    onClick={() => setPickMode("select")}
                    className={`rounded-full px-[18px] py-[9px] text-[12.5px] font-semibold transition-colors ${
                      pickMode === "select"
                        ? "bg-[var(--navy)] text-[var(--lime)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Select from the catalog
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={pickMode === "upload"}
                    onClick={() => setPickMode("upload")}
                    className={`rounded-full px-[18px] py-[9px] text-[12.5px] font-semibold transition-colors ${
                      pickMode === "upload"
                        ? "bg-[var(--navy)] text-[var(--lime)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Upload a list
                  </button>
                </div>

                {pickMode === "select" ? (
                  <div>
                    <div className="relative mx-auto mb-3.5 max-w-[440px]">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[13px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--muted-soft)]"
                      >
                        <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M10.6 10.6 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search 2,000+ programs by name"
                        autoComplete="off"
                        spellCheck="false"
                        aria-label="Search programs"
                        className="w-full rounded-[10px] border border-[var(--rule-strong)] bg-white py-[11px] pl-9 pr-[14px] text-[14px] text-[var(--ink)] outline-none focus:border-[var(--navy)] focus:shadow-[0_0_0_3px_rgba(10,22,40,0.07)]"
                      />
                    </div>

                    <p className="mx-auto mb-2.5 flex max-w-[440px] items-center justify-between gap-3 [font-family:var(--mono)] text-[9.5px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      <span>
                        {chosen.size} program{chosen.size === 1 ? "" : "s"} selected
                      </span>
                      {chosen.size > 1 && (
                        <button
                          type="button"
                          onClick={() => setChosen(new Set([GQ_LOCKED]))}
                          className="text-[#6f8c0f] underline underline-offset-[3px]"
                        >
                          Clear all
                        </button>
                      )}
                    </p>

                    {filteredCatalog.length > 0 ? (
                      <div className="mx-auto max-h-[220px] max-w-[440px] overflow-y-auto rounded-xl border border-[var(--rule)] bg-white sm:max-h-[266px]">
                        {filteredCatalog.map((group) => (
                          <div key={group.g}>
                            <div className="bg-[var(--paper-warm)] px-3.5 py-1.5 [font-family:var(--mono)] text-[8.5px] uppercase tracking-[0.14em] text-[var(--muted-soft)]">
                              {group.g}
                            </div>
                            {group.items.map(([name, hrs, locked]) => {
                              const checked = chosen.has(name);
                              return (
                                <label
                                  key={name}
                                  className={`flex cursor-pointer items-start gap-[11px] border-b border-[var(--rule)] px-3.5 py-2.5 transition-colors last:border-b-0 ${
                                    locked
                                      ? "cursor-default bg-[var(--paper-warm)] opacity-[0.72]"
                                      : "hover:bg-[var(--paper-warm)]"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    disabled={locked}
                                    onChange={() => toggleProgram(name, locked)}
                                    className={`mt-[1px] h-[17px] w-[17px] flex-none appearance-none rounded-[5px] border-[1.5px] border-[var(--rule-strong)] ${
                                      checked ? "bg-[var(--lime)] [border-color:var(--lime)]" : "bg-white"
                                    }`}
                                  />
                                  <span className="text-[13.5px] leading-[1.45] text-[var(--ink)]">
                                    {stripTraining(name)}
                                    {hrs && (
                                      <span className="mt-0.5 block [font-family:var(--mono)] text-[9px] tracking-[0.06em] text-[var(--muted-soft)]">
                                        {hrs}
                                        {locked ? " · this course" : ""}
                                      </span>
                                    )}
                                    {!hrs && locked && (
                                      <span className="mt-0.5 block [font-family:var(--mono)] text-[9px] tracking-[0.06em] text-[var(--muted-soft)]">
                                        this course
                                      </span>
                                    )}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mx-auto mt-3 max-w-[440px] text-center text-[13px] leading-[1.65] text-[var(--muted)]">
                        No program matches that. Use <b>Upload a list</b> and
                        send us the full set, or add it in the message field
                        on the form.
                      </p>
                    )}

                    {chosen.size >= 3 && (
                      <p className="mx-auto mt-4 max-w-[440px] rounded-[10px] bg-[var(--paper-warm)] px-4 py-[13px] text-[12.5px] leading-[1.65] text-[var(--muted)]">
                        Selecting several programs? We will quote per-program{" "}
                        <b className="font-semibold text-[var(--ink)]">and</b>{" "}
                        as an annual package, and tell you which comes out
                        cheaper. Nothing to choose here.
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <ol className="mx-auto mb-[18px] max-w-[440px] list-none">
                      {[
                        <>
                          Download the{" "}
                          <a
                            href="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/667ea8fe9eec28c6354305f8_Edstellar-Training%20Requirement%20Template%20-%20Revised%20FInal%20(1)%20(1).xlsx"
                            className="text-[var(--ink)] underline underline-offset-[3px]"
                          >
                            training requirement template
                          </a>
                        </>,
                        "Add the workshops your teams need, with rough headcount for each",
                        <>
                          Upload it below, or email it to{" "}
                          <a
                            href="mailto:contact@edstellar.com"
                            className="text-[var(--ink)] underline underline-offset-[3px]"
                          >
                            contact@edstellar.com
                          </a>
                        </>,
                      ].map((content, i) => (
                        <li
                          key={i}
                          className="relative mb-3 pl-8 text-[13.5px] leading-[1.6] text-[var(--muted)] last:mb-0"
                        >
                          <span className="absolute left-0 top-0 grid h-[21px] w-[21px] place-items-center rounded-full bg-[var(--navy)] [font-family:var(--mono)] text-[10px] text-[var(--lime)]">
                            {i + 1}
                          </span>
                          {content}
                        </li>
                      ))}
                    </ol>

                    <label className="mx-auto flex max-w-[440px] cursor-pointer flex-col items-center gap-1 rounded-xl border border-dashed border-[var(--rule-strong)] bg-[var(--paper-warm)] px-5 py-[26px] transition-colors hover:border-[var(--navy)] hover:bg-white">
                      <input
                        type="file"
                        accept=".xls,.xlsx,.csv"
                        className="hidden"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                      />
                      <b className="text-[14px] text-[var(--ink)]">Choose a file</b>
                      <span className="[font-family:var(--mono)] text-[9.5px] uppercase tracking-[0.1em] text-[var(--muted-soft)]">
                        .xls, .xlsx or .csv
                      </span>
                    </label>
                    {fileName && (
                      <p className="mx-auto mt-3 max-w-[440px] text-center text-[13px] text-[#4a6b12]">
                        Attached: {fileName}
                      </p>
                    )}
                  </div>
                )}

                {errors[3] && (
                  <GqError>Select at least one program, or upload your list.</GqError>
                )}
                <GqNav back={() => goTo(1)}>
                  <button
                    type="button"
                    onClick={() => goTo(4)}
                    className="rounded-full bg-[var(--navy)] px-7 py-4 text-[14px] font-semibold text-[var(--lime)] transition-transform hover:-translate-y-0.5"
                  >
                    Next →
                  </button>
                </GqNav>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="mb-6 text-center [font-family:var(--display)] text-[clamp(19px,2vw,25px)] font-bold leading-[1.25] tracking-[-0.025em]">
                  Is this a one-time program or a recurring one?
                </h3>
                <div
                  role="radiogroup"
                  className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(268px,1fr))]"
                >
                  <GqOpt
                    name="gqFreq"
                    value="One time"
                    checked={freq === "One time"}
                    onChange={() => {
                      setFreq("One time");
                      setSess("");
                    }}
                    label="One time"
                  />
                  <GqOpt
                    name="gqFreq"
                    value="Recurring"
                    checked={freq === "Recurring"}
                    onChange={() => setFreq("Recurring")}
                    label="Recurring"
                  />
                </div>

                {freq === "Recurring" && (
                  <div>
                    <p className="mt-[26px] mb-3.5 text-center [font-family:var(--mono)] text-[10.5px] uppercase tracking-[0.15em] text-[var(--muted)]">
                      How many sessions do you expect?
                    </p>
                    <div
                      role="radiogroup"
                      className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fit,minmax(158px,1fr))]"
                    >
                      {SESS_OPTIONS.map((opt) => (
                        <GqOpt
                          key={opt}
                          name="gqSess"
                          value={opt}
                          checked={sess === opt}
                          onChange={() => setSess(opt)}
                          label={opt === "custom" ? "Custom" : opt}
                        />
                      ))}
                    </div>
                    {sess === "custom" && (
                      <GqStepper
                        value={sessCustom}
                        min={2}
                        onChange={setSessCustom}
                        ariaLabel="number of sessions"
                      />
                    )}
                  </div>
                )}

                {errors[4] && (
                  <GqError>Please choose one option to continue.</GqError>
                )}
                <GqNav back={() => goTo(multi ? 3 : 1)}>
                  <button
                    type="button"
                    onClick={() => goTo(5)}
                    className="rounded-full bg-[var(--navy)] px-7 py-4 text-[14px] font-semibold text-[var(--lime)] transition-transform hover:-translate-y-0.5"
                  >
                    Next →
                  </button>
                </GqNav>
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 className="mb-6 text-center [font-family:var(--display)] text-[clamp(19px,2vw,25px)] font-bold leading-[1.25] tracking-[-0.025em]">
                  Review your selection.
                </h3>
                <div className="rounded-[14px] bg-[var(--paper-warm)] px-6 py-[22px]">
                  <b className="mb-3.5 block [font-family:var(--mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                    Your requirement so far
                  </b>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-[14px]">
                    <dt className="text-[var(--muted)]">Training program</dt>
                    <dd className="text-right font-semibold text-[var(--ink)]">
                      ML Model Monitoring
                    </dd>
                    <dt className="text-[var(--muted)]">Team members</dt>
                    <dd className="text-right font-semibold text-[var(--ink)]">
                      {sizeText() || "Not selected"}
                    </dd>
                    <dt className="text-[var(--muted)]">Request type</dt>
                    <dd className="text-right font-semibold text-[var(--ink)]">
                      {REQ_LABEL[tab]}
                    </dd>
                    <dt className="text-[var(--muted)]">Frequency</dt>
                    <dd className="text-right font-semibold text-[var(--ink)]">
                      {freqText() || "Not selected"}
                    </dd>
                    <dt className="text-[var(--muted)]">Programs</dt>
                    <dd className="text-right font-semibold text-[var(--ink)]">
                      {multi ? progText() : "This program only"}
                    </dd>
                  </dl>
                </div>
                <p className="mt-[18px] text-center text-[13px] leading-[1.65] text-[var(--muted)]">
                  Continue to the request form and these answers travel with
                  it. We reply within one business day with a tailored
                  proposal.
                </p>
                <GqNav back={() => goTo(4)}>
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="rounded-full bg-[var(--navy)] px-7 py-4 text-[14px] font-semibold text-[var(--lime)] transition-transform hover:-translate-y-0.5"
                  >
                    Continue to the form →
                  </button>
                </GqNav>
              </div>
            )}
          </div>
        </div>

        {/* Annual / enterprise license packages */}
        <div className="mt-10 border-t border-[var(--rule)] pt-[34px]">
          <p className="mb-2.5 [font-family:var(--mono)] text-[9.5px] uppercase tracking-[0.15em] text-[var(--muted)]">
            For annual and enterprise-wide buying
          </p>
          <h3 className="mb-2.5 [font-family:var(--display)] text-[clamp(19px,2vw,24px)] font-bold leading-[1.25] tracking-[-0.025em]">
            Buying a year of training, not one program?
          </h3>
          <p className="mb-[22px] max-w-[78ch] text-[13.5px] leading-[1.7] text-[var(--muted)]">
            Where L&amp;D holds an annual budget, license packages price the
            whole year at once instead of raising a purchase order per
            workshop. Hours and licenses are pooled across teams, programs and
            locations, so unused capacity is not stranded in one department.
          </p>

          <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-[var(--rule)] bg-white sm:grid-cols-2 lg:grid-cols-4">
            {licensePackages.map((p, i) => (
              <div
                key={p.n}
                className={`relative flex flex-col border-[var(--rule)] px-5 pb-5 pt-[22px] border-b last:border-b-0 sm:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(n+3)]:border-b sm:[&:nth-child(n+3)]:border-t lg:border-t-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(n+3)]:border-b-0 ${
                  p.best ? "sm:rounded-[14px] sm:shadow-[inset_0_0_0_2px_var(--navy)] sm:border-r-transparent" : ""
                }`}
              >
                <span className="mb-[9px] block min-h-[17px] [font-family:var(--mono)] text-[8px] uppercase tracking-[0.12em]">
                  {p.best && (
                    <span className="self-start rounded-[4px] bg-[var(--lime)] px-2 py-[3px] text-[var(--navy)]">
                      Most chosen
                    </span>
                  )}
                </span>
                <div className="mb-3 [font-family:var(--display)] text-[16px] font-bold tracking-[-0.02em] text-[var(--ink)]">
                  {p.n}
                </div>
                <div className="[font-family:var(--display)] text-[clamp(22px,2.4vw,28px)] font-bold leading-none tracking-[-0.035em] text-[var(--ink)]">
                  {p.fig}
                </div>
                <span className="my-[5px] mb-[14px] block [font-family:var(--mono)] text-[8.5px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  {p.u}
                </span>
                <div className="border-t border-[var(--rule)] pt-3 text-[13px] leading-[1.5] text-[var(--ink)]">
                  {p.hrs}
                </div>
                <div className="mt-auto pt-2.5 text-[12px] leading-[1.5] text-[var(--muted-soft)]">
                  {p.who}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-[18px] max-w-[80ch] text-[12.5px] leading-[1.7] text-[var(--muted-soft)]">
            Packages are priced per engagement and quoted against your actual
            mix of programs.{" "}
            <a
              href="https://www.edstellar.com/corporate-training-pricing#table"
              className="text-[var(--ink)] underline decoration-[var(--rule-strong)] underline-offset-[3px] hover:text-[#6f8c0f] hover:decoration-[#6f8c0f]"
            >
              See the full package table
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
