import { rolePathsSection, catalogPrograms } from "@/data/aiDomainData";

const programByTitle = new Map(catalogPrograms.map((p) => [p.t, p]));

function hoursFor(seq) {
  const ranges = seq
    .map((t) => programByTitle.get(t))
    .filter((p) => p?.h)
    .map((p) => p.h.match(/\d+/g).map(Number));
  if (!ranges.length) return "";
  const lo = ranges.reduce((a, b) => a + b[0], 0);
  const hi = ranges.reduce((a, b) => a + b[1], 0);
  return `${lo}-${hi} hrs total`;
}

export default function PathsSection() {
  const { eyebrow, heading, paragraph, note, paths } = rolePathsSection;

  return (
    <section id="paths" className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-20 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            {eyebrow.italic}
          </span>
          <span>· {eyebrow.text}</span>
          <span className="ml-auto normal-case tracking-normal text-[var(--muted-soft)]">{eyebrow.count}</span>
        </div>

        <h2 className="mb-4 max-w-[28ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
          {heading.normal} <em className="[font-family:var(--serif)] italic">{heading.italic}</em>
        </h2>

        <p className="mb-12 max-w-[76ch] text-[15px] leading-[1.7] text-[var(--muted)]">{paragraph}</p>

        <div className="flex flex-col gap-3">
          {paths.map((p) => {
            const hrs = hoursFor(p.seq);
            return (
              <div key={p.r} className="rounded-[14px] border border-[var(--rule)] bg-[var(--white)] p-5 lg:p-6">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-[15.5px] font-semibold tracking-[-0.01em] text-[var(--ink)] [font-family:var(--display)]">
                    {p.n}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted-soft)]">
                    {p.seq.length} steps{hrs ? ` · ${hrs}` : ""}
                  </span>
                </div>
                <p className="mb-4 text-[13.5px] leading-[1.6] text-[var(--muted)]">{p.d}</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                  {p.seq.map((t, i) => {
                    const course = programByTitle.get(t);
                    const label = t.replace(/ Training$/, "");
                    return (
                      <span key={t} className="flex items-center gap-[7px]">
                        {course?.isNew ? (
                          <span className="rounded-[5px] border border-dashed border-[var(--rule-strong)] px-[9px] py-[5px] font-mono text-[9.5px] text-[var(--muted)]">
                            {label} (proposed)
                          </span>
                        ) : (
                          <a
                            href={course?.u ? `https://www.edstellar.com/course/${course.u}` : "#apply"}
                            className="rounded-[5px] bg-[var(--paper-warm)] px-[9px] py-[5px] font-mono text-[9.5px] text-[var(--ink)] transition-colors hover:bg-[var(--navy)] hover:text-[var(--lime)]"
                          >
                            {label}
                          </a>
                        )}
                        {i < p.seq.length - 1 && <span className="text-[11px] text-[#6f8c0f]">→</span>}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-[80ch] text-[12px] leading-[1.6] text-[var(--muted-soft)]">{note}</p>
      </div>
    </section>
  );
}
