import Reveal from "./Reveal";

const ARROW = (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const STEPS = [
  {
    layer: "Layer 01",
    kind: "Function",
    title: "Business ",
    titleEm: "Function",
    items: ["Engineering", "Operations", "Commercial", "Risk & Compliance"],
    hi: 1,
  },
  {
    layer: "Layer 02",
    kind: "Role",
    title: "Role ",
    titleEm: "Family",
    items: ["Plant Manager", "Ops Director", "Supply-Chain Lead", "Reliability Eng."],
    hi: 1,
  },
  {
    layer: "Layer 03",
    kind: "Cluster",
    title: "Skill ",
    titleEm: "Cluster",
    items: ["Operational AI", "Cross-Func Delivery", "Decision Quality", "Stakeholder Mgmt"],
    hi: 1,
  },
  {
    layer: "Layer 04",
    kind: "Skill",
    title: "Discrete ",
    titleEm: "Skill",
    items: ["Forecast modelling", "Conflict resolution", "Scenario planning", "Vendor negotiation"],
    hi: 1,
  },
  {
    layer: "Layer 05",
    kind: "Proficiency",
    title: "Verified ",
    titleEm: "Proficiency",
    items: ["L1 — Aware", "L2 — Applied", "L3 — Proficient", "L4 — Expert"],
    hi: 2,
  },
];

export default function TaxonomySection() {
  return (
    <section
      className="border-t-[1.5px] border-rule bg-paper-warm py-28 lg:py-[130px]"
      id="taxonomy"
    >
      <div className="container">
        <div className="mb-16 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
          <Reveal as="div">
            <div className="mb-1 flex items-center gap-3.5 font-mono text-[11px] tracking-[0.22em] text-ink/55 uppercase">
              <span className="opacity-55">03</span>
              <span className="h-px w-9 bg-ink/25" />
              Taxonomy
            </div>
            <h2 className="mt-5.5 font-display text-[clamp(38px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.015em] text-ink text-balance">
              How we model
              <br />
              <em className="italic">capability,</em> end to end.
            </h2>
          </Reveal>
          <Reveal
            as="p"
            delay={1}
            className="max-w-[520px] border-l-2 border-ink/70 pl-4.5 text-[16px] leading-[1.65] text-navy-soft"
          >
            Every engagement runs against the same five-layer schema — from
            business function down to verifiable proficiency — so the
            language your CHRO, CFO, and line managers use is finally the
            same.
          </Reveal>
        </div>

        <Reveal
          as="div"
          className="mt-4 grid border-[1.5px] border-rule bg-paper lg:grid-cols-5"
        >
          {STEPS.map((s, i) => (
            <div
              key={s.layer}
              className="relative border-r-0 border-b border-rule-strong p-6 pt-7.5 pb-8.5 transition-colors duration-300 last:border-r-0 hover:bg-paper-warm lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <div className="mb-3.5 flex justify-between font-mono text-[9.5px] tracking-[0.22em] text-ink/55 uppercase">
                <span>{s.layer}</span>
                <b className="font-normal text-muted">{s.kind}</b>
              </div>
              <h5 className="mb-3.5 font-serif text-2xl leading-[1.16] font-normal tracking-[-0.005em] text-ink">
                {s.title}
                <em className="italic">{s.titleEm}</em>
              </h5>
              <ul className="mt-2.5 flex flex-col gap-1.5">
                {s.items.map((item, ii) => (
                  <li
                    key={item}
                    className={`border-l px-2 py-1.5 font-mono text-xs tracking-[0.02em] ${
                      ii === s.hi
                        ? "border-ink bg-ink/[0.06] font-medium text-ink"
                        : "border-rule-strong bg-paper-warm text-navy-soft"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {i < STEPS.length - 1 && (
                <div className="absolute top-1/2 right-[-7px] z-[2] hidden h-3.5 w-3.5 -translate-y-1/2 items-center justify-center bg-paper text-ink/50 lg:flex">
                  {ARROW}
                </div>
              )}
            </div>
          ))}
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-rule-strong pt-4.5 font-mono text-[10.5px] tracking-[0.18em] text-muted uppercase">
          <span>Schema v.4 · 2,400+ skills · 38 languages</span>
          <span>
            <b className="font-medium text-ink">Wired to your HRIS</b> in days,
            not quarters
          </span>
        </div>
      </div>
    </section>
  );
}
