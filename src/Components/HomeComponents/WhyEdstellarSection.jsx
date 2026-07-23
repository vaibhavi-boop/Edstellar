import Reveal from "./Reveal";

const ITEMS = [
  {
    num: "i.",
    title: "Outcomes,",
    titleEm: "not enrolments.",
    desc: "Every engagement is scoped against a measurable behaviour change and a board-line metric. We sign for the result, not the seat count — and your CFO sees the throughline.",
  },
  {
    num: "ii.",
    title: "One operating ",
    titleEm: "system,",
    titleSuffix: "four practices.",
    desc: "Training, coaching, consulting, and platform are not partners — they are the same firm. One contract, one taxonomy, one source of truth on your workforce capability.",
  },
  {
    num: "iii.",
    title: "Global delivery,",
    titleEm: "local fluency.",
    desc: "2,000+ vetted subject experts across 40+ countries. Programs run in your languages, against your compliance posture, on your delivery calendar — without exception.",
  },
];

export default function WhyEdstellarSection() {
  return (
    <section className="bg-paper py-32 lg:py-[140px]" id="why">
      <div className="container">
        <div className="mb-16 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
          <Reveal as="div">
            <div className="mb-1 flex items-center gap-3.5 font-mono text-[11px] tracking-[0.22em] text-ink/55 uppercase">
              <span className="opacity-55">05</span>
              <span className="h-px w-9 bg-ink/25" />
              Why Edstellar
            </div>
            <h2 className="mt-5.5 font-display text-[clamp(38px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.015em] text-ink text-balance">
              Built for the <em className="italic">seriousness</em>
              <br />
              of enterprise change.
            </h2>
          </Reveal>
          <Reveal
            as="p"
            delay={1}
            className="max-w-[520px] border-l-2 border-ink/70 pl-4.5 text-[16px] leading-[1.65] text-navy-soft"
          >
            Three commitments separate us from every commodity training
            vendor your team has already met — and they are the reason
            Fortune-listed buyers stay for the second renewal.
          </Reveal>
        </div>

        <div className="grid border-t-[1.5px] border-b-[1.5px] border-rule md:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal
              as="div"
              delay={i}
              key={it.num}
              className="relative flex flex-col gap-4.5 border-r border-rule-strong p-9 pt-12 pb-14 transition-colors duration-350 last:border-r-0 hover:bg-paper-warm"
            >
              <span className="absolute top-0 left-0 h-0.5 w-9 bg-ink/20" />
              <div className="mb-2 font-serif text-[54px] leading-[0.9] font-normal text-ink/40 italic">
                {it.num}
              </div>
              <h4 className="font-serif text-[28px] leading-[1.1] font-normal tracking-[-0.008em] text-ink">
                {it.title}
                <em className="italic">{it.titleEm}</em>
                {it.titleSuffix && (
                  <>
                    <br />
                    {it.titleSuffix}
                  </>
                )}
              </h4>
              <p className="text-[14.5px] leading-[1.65] text-navy-soft">{it.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
