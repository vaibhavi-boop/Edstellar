import { outcomesForkSection } from "@/data/aiDomainData";
import ArcsMotif from "./ArcsMotif";

function StepRow({ step, isLast }) {
  const on = step.programs.length > 0;
  return (
    <div className={`relative ${isLast ? "" : "pb-6"}`}>
      <span
        aria-hidden="true"
        className={`absolute top-[5px] left-[-30px] h-[11px] w-[11px] rounded-full border-2 max-[620px]:left-[-24px] ${
          on ? "border-[var(--lime)] bg-[var(--lime)]" : "border-white/35 bg-[var(--navy-soft)]"
        }`}
      />
      <div className="mb-1.5 text-[18px] font-semibold tracking-[-0.02em] text-white [font-family:var(--display)]">
        {step.n}
      </div>
      <p className="mb-2.5 max-w-[64ch] text-[13.5px] leading-[1.7] text-white/70">{step.d}</p>
      {on && (
        <div className="flex flex-wrap gap-1.5">
          {step.programs.map((p) => (
            <span
              key={p.t}
              className={`rounded-[5px] px-2 py-1 font-mono text-[9px] tracking-[0.03em] ${
                p.isNew
                  ? "border border-dashed border-white/30 text-white/55"
                  : "border border-white/16 bg-[var(--navy-soft)] text-white"
              }`}
            >
              {p.t.replace(/ Training$/, "")}
              {p.isNew ? " (proposed)" : ""}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Group({ tag, steps, isBranch, isLastGroup }) {
  return (
    <div className={`relative pl-[30px] max-[620px]:pl-6 ${isBranch ? "mt-[26px]" : ""}`}>
      <span
        aria-hidden="true"
        className={`absolute left-[5px] w-px bg-white/20 ${isLastGroup ? "top-2 h-[calc(100%-46px)]" : "top-2 bottom-2"}`}
      />
      <p className={`mb-4 font-mono text-[9px] uppercase tracking-[0.14em] ${isBranch ? "text-[var(--lime)]" : "text-white/50"}`}>
        {tag}
      </p>
      {steps.map((step, i) => (
        <StepRow key={step.n} step={step} isLast={i === steps.length - 1} />
      ))}
    </div>
  );
}

export default function CapabilityForkSection() {
  const { eyebrow, heading, paragraph, note, shared, branches } = outcomesForkSection;
  const noteParts = note.split(/(proposed)/);

  return (
    <section id="outcomes" className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--navy)] py-20 md:py-24">
      <ArcsMotif />
      <div className="container relative z-10">
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

        <p className="mb-14 max-w-[72ch] text-[15px] leading-[1.7] text-white/70">{paragraph}</p>

        <div className="max-w-[820px]">
          <Group tag={shared.tag} steps={shared.steps} isBranch={false} isLastGroup={false} />
          {branches.map((b, i) => (
            <Group key={b.tag} tag={b.tag} steps={b.steps} isBranch isLastGroup={i === branches.length - 1} />
          ))}
        </div>

        <p className="mt-7 max-w-[78ch] text-[12.5px] leading-[1.6] text-white/45">
          {noteParts.map((part, i) =>
            part === "proposed" ? (
              <b
                key={i}
                className="rounded-[4px] border border-dashed border-white/30 px-[5px] py-px font-mono text-[9px] font-normal uppercase tracking-[0.1em] text-white/55"
              >
                proposed
              </b>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
      </div>
    </section>
  );
}
