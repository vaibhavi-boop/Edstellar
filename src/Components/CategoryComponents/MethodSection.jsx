import { methodSection } from "@/data/aiDomainData";
import { alsoFromEdstellar } from "@/data/categorydata";
import AlsoFromEdstellar from "@/Components/CourseComponents/AlsoFromEdstellar";

export default function MethodSection() {
  const { eyebrow, heading, paragraph, loopNote, stages } = methodSection;

  return (
    <section id="lifecycle" className="border-b border-[var(--rule)] bg-white py-20 md:py-24">
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

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-3">
          {stages.map((s) => (
            <li key={s.ix} className="relative rounded-[14px] border border-[var(--rule)] bg-[var(--paper-warm)] p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] font-mono text-[12px] text-white">
                {s.ix}
              </span>
              <div className="mt-4 text-[15.5px] font-semibold tracking-[-0.01em] text-[var(--ink)] [font-family:var(--display)]">
                {s.t}
              </div>
              <p
                className="mt-2 [font-family:var(--serif)] text-[14.5px] italic leading-[1.4] text-[var(--ink)]/85 [&_b]:not-italic [&_b]:font-bold [&_b]:text-[#6f8c0f]"
                dangerouslySetInnerHTML={{ __html: s.over }}
              />
              <span className="mt-4 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted-soft)]">
                {s.mods}
              </span>
              <ul className="mt-3 space-y-1.5">
                {s.does.map((d, i) => (
                  <li key={i} className="flex gap-2 text-[12px] leading-[1.5] text-[var(--ink)]/75">
                    <span className="text-[#6f8c0f]">→</span>
                    {d}
                  </li>
                ))}
              </ul>
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
