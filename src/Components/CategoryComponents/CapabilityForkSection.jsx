import { outcomesForkSection } from "@/data/aiDomainData";

function ProgramChip({ program }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-[5px] text-[11px] leading-none ${
        program.isNew
          ? "border-[var(--lime)]/40 text-[var(--lime)]"
          : "border-white/20 text-white/75"
      }`}
    >
      {program.t.replace(/ Training$/, "")}
      {program.isNew && <span className="ml-1 text-white/50">(proposed)</span>}
    </span>
  );
}

function Step({ step, reached }) {
  return (
    <div
      className={`rounded-[14px] border px-5 py-5 ${
        reached ? "border-[var(--lime)]/35 bg-white/[0.04]" : "border-white/12 bg-white/[0.02]"
      }`}
    >
      <div className="text-[15.5px] font-semibold tracking-[-0.01em] text-white [font-family:var(--display)]">{step.n}</div>
      <p className="mt-2 text-[13.5px] leading-[1.6] text-white/70">{step.d}</p>
      {step.programs.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {step.programs.map((p) => (
            <ProgramChip key={p.t} program={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CapabilityForkSection() {
  const { eyebrow, heading, paragraph, note, shared, branches } = outcomesForkSection;

  return (
    <section id="outcomes" className="border-b border-white/10 bg-[var(--navy)] py-20 md:py-24">
      <div className="container">
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

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {shared.steps.map((step) => (
            <Step key={step.n} step={step} reached />
          ))}
        </div>

        <div className="my-8 flex items-center gap-3 text-white/30">
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">then the track splits</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {branches.map((branch) => (
            <div key={branch.tag} className="rounded-[18px] border border-white/12 p-5 lg:p-6">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--lime)]">{branch.tag}</p>
              <div className="flex flex-col gap-3">
                {branch.steps.map((step) => (
                  <Step key={step.n} step={step} reached />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[80ch] text-[12px] leading-[1.6] text-white/45">{note}</p>
      </div>
    </section>
  );
}
