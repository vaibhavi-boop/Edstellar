"use client";

import { useState } from "react";

const SIZE_OPTIONS = ["1-10", "11-25", "26-50", "51-100", "custom"];
const SESS_OPTIONS = ["2", "4", "8", "custom"];
const STEPS = [1, 2, 3, 4];

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
  const [tab, setTab] = useState("a");
  const [step, setStep] = useState(1);
  const [size, setSize] = useState("");
  const [sizeCustom, setSizeCustom] = useState(120);
  const [scope, setScope] = useState("");
  const [freq, setFreq] = useState("");
  const [sess, setSess] = useState("");
  const [sessCustom, setSessCustom] = useState(12);
  const [errors, setErrors] = useState({});

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

  const isValid = (n) => {
    if (n === 1) {
      if (!size) return false;
      if (size === "custom" && !(sizeCustom > 0)) return false;
      return true;
    }
    if (n === 2) return !!scope;
    if (n === 3) {
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
    if (n > step && !isValid(step)) {
      setErrors((e) => ({ ...e, [step]: true }));
      return;
    }
    setErrors({});
    setStep(n);
  };

  const handleContinue = () => {
    const detail = { size: sizeText(), scope, freq: freqText() };
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
    <section className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-28">
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
              onClick={() => setTab("a")}
              className={`flex-1 border-none border-b-2 px-5 py-4 text-[14px] font-semibold transition-colors ${
                tab === "a"
                  ? "border-b-[var(--navy)] bg-white text-[var(--ink)]"
                  : "border-b-transparent bg-transparent text-[var(--muted)]"
              }`}
            >
              One-time / Recurring
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "b"}
              onClick={() => setTab("b")}
              className={`flex-1 border-none border-b-2 px-5 py-4 text-[14px] font-semibold transition-colors ${
                tab === "b"
                  ? "border-b-[var(--navy)] bg-white text-[var(--ink)]"
                  : "border-b-transparent bg-transparent text-[var(--muted)]"
              }`}
            >
              Multiple Programs
            </button>
          </div>

          <div className="px-6 py-[34px] sm:px-10">
            {tab === "a" ? (
              <div>
                {/* progress dots */}
                <ol aria-hidden="true" className="mb-[34px] flex items-center justify-center">
                  {STEPS.map((n, i) => (
                    <li key={n} className="flex items-center">
                      {i > 0 && (
                        <i className="block w-16 border-t border-dashed border-[var(--rule-strong)]" />
                      )}
                      <b
                        className={`grid h-[30px] w-[30px] place-items-center rounded-full border [font-family:var(--mono)] text-[12px] font-normal transition-colors ${
                          n === step
                            ? "border-[var(--navy)] bg-white text-[var(--ink)]"
                            : n < step
                              ? "border-[var(--lime)] bg-[var(--lime)] text-[var(--ink)]"
                              : "border-[var(--rule-strong)] bg-white text-[var(--muted-soft)]"
                        }`}
                      >
                        {n}
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
                        onClick={() => goTo(2)}
                        className="ml-auto flex items-center gap-2 rounded-full bg-[var(--navy)] px-7 py-4 text-[14px] font-semibold text-[var(--lime)] transition-transform hover:-translate-y-0.5"
                      >
                        Next →
                      </button>
                    </GqNav>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="mb-6 text-center [font-family:var(--display)] text-[clamp(19px,2vw,25px)] font-bold leading-[1.25] tracking-[-0.025em]">
                      Is this requirement only for{" "}
                      <em className="[font-family:var(--serif)] italic">
                        ML Model Monitoring
                      </em>
                      ?
                    </h3>
                    <div
                      role="radiogroup"
                      className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(268px,1fr))]"
                    >
                      <GqOpt
                        name="gqScope"
                        value="ML Model Monitoring only"
                        checked={scope === "ML Model Monitoring only"}
                        onChange={() => setScope("ML Model Monitoring only")}
                        label="ML Model Monitoring only"
                      />
                      <GqOpt
                        name="gqScope"
                        value="Multiple training programs"
                        checked={scope === "Multiple training programs"}
                        onChange={() => setScope("Multiple training programs")}
                        label="We need multiple training programs"
                      />
                    </div>
                    {errors[2] && (
                      <GqError>Please choose one option to continue.</GqError>
                    )}
                    <GqNav back={() => goTo(1)}>
                      <button
                        type="button"
                        onClick={() => goTo(3)}
                        className="rounded-full bg-[var(--navy)] px-7 py-4 text-[14px] font-semibold text-[var(--lime)] transition-transform hover:-translate-y-0.5"
                      >
                        Next →
                      </button>
                    </GqNav>
                  </div>
                )}

                {step === 3 && (
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

                    {errors[3] && (
                      <GqError>Please choose one option to continue.</GqError>
                    )}
                    <GqNav back={() => goTo(2)}>
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
                        <dt className="text-[var(--muted)]">Scope</dt>
                        <dd className="text-right font-semibold text-[var(--ink)]">
                          {scope || "Not selected"}
                        </dd>
                        <dt className="text-[var(--muted)]">Frequency</dt>
                        <dd className="text-right font-semibold text-[var(--ink)]">
                          {freqText() || "Not selected"}
                        </dd>
                      </dl>
                    </div>
                    <p className="mt-[18px] text-center text-[13px] leading-[1.65] text-[var(--muted)]">
                      Continue to the request form and these answers travel
                      with it. We reply within one business day with a
                      tailored proposal.
                    </p>
                    <GqNav back={() => goTo(3)}>
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
            ) : (
              <div>
                <h3 className="mb-4 text-center [font-family:var(--display)] text-[clamp(19px,2vw,25px)] font-bold leading-[1.25] tracking-[-0.025em]">
                  Quoting several programs at once.
                </h3>
                <p className="mx-auto mb-6 max-w-[60ch] text-center text-[15px] leading-[1.7] text-[var(--muted)]">
                  If you are planning training across more than one topic,
                  send us the full list and we will price it as a single
                  program of work rather than a set of separate quotes.
                </p>
                <ol className="mx-auto mb-[26px] max-w-[520px] list-none space-y-[15px]">
                  <li className="relative pl-11 text-[14.5px] leading-[1.6] text-[var(--ink)]">
                    <span className="absolute left-0 top-[-1px] grid h-7 w-7 place-items-center rounded-full bg-[var(--navy)] [font-family:var(--mono)] text-[12px] text-[var(--lime)]">
                      1
                    </span>
                    Download the{" "}
                    <a
                      href="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/667ea8fe9eec28c6354305f8_Edstellar-Training%20Requirement%20Template%20-%20Revised%20FInal%20(1)%20(1).xlsx"
                      className="text-[var(--ink)] underline underline-offset-[3px]"
                    >
                      training requirement template
                    </a>{" "}
                    (.xlsx).
                  </li>
                  <li className="relative pl-11 text-[14.5px] leading-[1.6] text-[var(--ink)]">
                    <span className="absolute left-0 top-[-1px] grid h-7 w-7 place-items-center rounded-full bg-[var(--navy)] [font-family:var(--mono)] text-[12px] text-[var(--lime)]">
                      2
                    </span>
                    Add the workshops your teams need, with rough headcount
                    for each.
                  </li>
                  <li className="relative pl-11 text-[14.5px] leading-[1.6] text-[var(--ink)]">
                    <span className="absolute left-0 top-[-1px] grid h-7 w-7 place-items-center rounded-full bg-[var(--navy)] [font-family:var(--mono)] text-[12px] text-[var(--lime)]">
                      3
                    </span>
                    Email it to{" "}
                    <a
                      href="mailto:contact@edstellar.com"
                      className="text-[var(--ink)] underline underline-offset-[3px]"
                    >
                      contact@edstellar.com
                    </a>
                    , or attach it to the request form at the bottom of this
                    page.
                  </li>
                </ol>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="mailto:contact@edstellar.com?subject=Multi-program%20training%20requirement"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-[22px] py-3 text-[13px] font-semibold text-[var(--lime)] no-underline transition-transform hover:-translate-y-0.5"
                  >
                    Email your requirement →
                  </a>
                  <a
                    href="https://www.edstellar.com/corporate-training-pricing"
                    className="inline-flex items-center rounded-full border border-[var(--rule-strong)] px-[27px] py-[15px] text-[14px] font-semibold text-[var(--ink)] no-underline transition-colors hover:border-[var(--navy)] hover:bg-[rgba(10,22,40,0.04)]"
                  >
                    See package pricing
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
