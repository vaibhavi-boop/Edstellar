import Reveal from "./Reveal";

const STEPS = [
  {
    ord: "i. Diagnose",
    title: "Map the",
    titleEm: "capability gap.",
    desc: "Skills audits, role taxonomies, and stakeholder interviews — modelled against the strategy your CHRO is being measured on, not a generic competency library.",
    tag: "2 — 3 weeks",
  },
  {
    ord: "ii. Design",
    title: "Engineer the",
    titleEm: "learning system.",
    desc: "Curriculum architecture, coach matching, governance, and the ROI model your CFO will see at quarter-close. Signed off before a single session is scheduled.",
    tag: "3 — 4 weeks",
  },
  {
    ord: "iii. Deliver",
    title: "Run with",
    titleEm: "local fluency.",
    desc: "2,000+ vetted experts, 40+ countries, in your languages and your time zones. A single Principal owns delivery quality across every cohort, every region.",
    tag: "8 — 16 weeks",
  },
  {
    ord: "iv. Measure",
    title: "Prove the",
    titleEm: "business impact.",
    desc: "Behavioural shift, productivity uplift, retention deltas — tracked in the Skills Intelligence Platform and reported in board-ready cuts. Outcomes you can renew on.",
    tag: "Continuous",
  },
];

export default function MethodologySection() {
  return (
    <section className="bg-paper py-28 lg:py-[130px]" id="method">
      <div className="container">
        <div className="mb-16 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
          <Reveal as="div">
            <div className="mb-1 flex items-center gap-3.5 font-mono text-[11px] tracking-[0.22em] text-ink/55 uppercase">
              <span className="opacity-55">04</span>
              <span className="h-px w-9 bg-ink/25" />
              Methodology
            </div>
            <h2 className="mt-5.5 font-display text-[clamp(38px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.015em] text-ink text-balance">
              A four-step protocol,
              <br />
              repeated <em className="italic">with discipline.</em>
            </h2>
          </Reveal>
          <Reveal
            as="p"
            delay={1}
            className="max-w-[520px] border-l-2 border-ink/70 pl-4.5 text-[16px] leading-[1.65] text-navy-soft"
          >
            We do not improvise on enterprise capability. Every engagement
            runs the same protocol — diagnostic before design, evidence
            before delivery, measurement before renewal — so the work is
            auditable end to end.
          </Reveal>
        </div>

        <div className="grid border-t-[1.5px] border-b-[1.5px] border-rule sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              as="div"
              delay={i}
              key={s.ord}
              className="group relative border-r border-rule-strong p-8 pt-9 pb-11 transition-colors duration-300 last:border-r-0 hover:bg-paper-warm before:absolute before:top-[-1.5px] before:left-0 before:h-0.5 before:w-0 before:bg-ink/40 before:transition-[width] before:duration-600 before:ease-[cubic-bezier(.2,.7,.2,1)] before:content-[''] hover:before:w-full"
            >
              <div className="mb-14 flex justify-between font-mono text-[10.5px] tracking-[0.22em] text-muted">
                <span>Step</span>
                <b className="font-normal text-ink/50">{s.ord}</b>
              </div>
              <h4 className="mb-3.5 font-serif text-[32px] leading-[1.08] font-normal tracking-[-0.008em] text-ink">
                {s.title}
                <br />
                <em className="italic">{s.titleEm}</em>
              </h4>
              <p className="text-[13.5px] leading-[1.6] text-navy-soft">{s.desc}</p>
              <span className="mt-5.5 inline-block border border-rule bg-paper-warm px-2.5 py-1.5 font-mono text-[10px] tracking-[0.18em] text-ink uppercase">
                {s.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
