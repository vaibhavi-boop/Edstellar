import { methodSection } from "@/data/aiDomainData";
import { alsoFromEdstellar } from "@/data/categorydata";
import AlsoFromEdstellar from "@/Components/CourseComponents/AlsoFromEdstellar";

export default function MethodSection() {
  const { eyebrow, heading, paragraph, loopNote, stages } = methodSection;

  return (
    <section id="lifecycle" className="border-b border-[var(--rule)] bg-[var(--paper)] py-20 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            {eyebrow.italic}
          </span>
          <span>· {eyebrow.text}</span>
          <span className="ml-auto normal-case tracking-normal text-[var(--muted-soft)]">{eyebrow.count}</span>
        </div>

        <h2 className="mb-4 max-w-[24ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
          {heading.normal} <em className="[font-family:var(--serif)] italic">{heading.italic}</em>
        </h2>

        <p className="mb-14 max-w-[70ch] text-[15px] leading-[1.7] text-[var(--muted)]">{paragraph}</p>

        <ol className="flex flex-col md:flex-row md:items-start">
          {stages.map((s, i) => (
            <li key={s.ix} className="flex flex-1 gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:w-full md:flex-row">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--ink)] font-mono text-[12px] text-white">
                  {s.ix}
                </span>
                {i < stages.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="my-1 w-px flex-1 bg-[var(--rule-strong)] md:my-0 md:ml-2 md:h-px md:w-auto"
                  />
                )}
              </div>
              <div className="pb-8 md:w-full md:pt-4 md:pr-4 md:pb-0">
                <div className="text-[15.5px] font-semibold tracking-[-0.01em] text-[var(--ink)] [font-family:var(--display)]">
                  {s.t}
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-[var(--ink)]/80">{s.p.split(". ")[0]}.</p>
                <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted-soft)]">
                  {s.mods}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 flex items-center gap-2 text-[13px] text-[var(--muted)]">
          <b className="text-[var(--ink)]">↻</b> {loopNote}
        </p>

        {alsoFromEdstellar && (
          <AlsoFromEdstellar heading={alsoFromEdstellar.heading} alsoFrom={alsoFromEdstellar.alsoFrom} />
        )}
      </div>
    </section>
  );
}
