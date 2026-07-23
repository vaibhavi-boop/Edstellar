import Image from "next/image";
import Reveal from "./Reveal";

const ARROW = (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path d="M1 4h12m0 0L10 1m3 3L10 7" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const INSIGHTS = [
  {
    kind: "Research",
    read: "14 min read",
    image: "/Images/Home/skills-intelligence-platform.jpg",
    dek: "An eighteen-month study across 312 enterprises on the half-life of operational AI skills — and what to do with workforces that learnt them in 2024.",
    title: "The ",
    titleEm: "compounding cost",
    titleSuffix: " of a stale skills taxonomy.",
    cta: "Read paper",
  },
  {
    kind: "Framework",
    read: "9 min read",
    image: "/Images/Home/insight-coaching-portfolio.jpg",
    dek: "A four-quadrant model for sequencing executive coaching across a leadership bench — when to invest, when to observe, when to intervene.",
    title: "Coaching is a ",
    titleEm: "portfolio,",
    titleSuffix: " not a perk.",
    cta: "Read framework",
  },
  {
    kind: "Briefing",
    read: "6 min read",
    image: "/Images/Home/insight-learning-pnl.jpg",
    dek: "The board metrics that separate L&D as a cost line from L&D as a strategic instrument — and the five your CFO already trusts.",
    title: "What a ",
    titleEm: "credible",
    titleSuffix: " learning P&L looks like.",
    cta: "Read briefing",
  },
];

export default function InsightsSection() {
  return (
    <section
      className="border-t-[1.5px] border-b-[1.5px] border-rule bg-paper-warm py-28 lg:py-[130px]"
      id="insights"
    >
      <div className="container">
        <div className="mb-16 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
          <Reveal as="div">
            <div className="mb-1 flex items-center gap-3.5 font-mono text-[11px] tracking-[0.22em] text-ink/55 uppercase">
              <span className="opacity-55">06</span>
              <span className="h-px w-9 bg-ink/25" />
              Insights
            </div>
            <h2 className="mt-5.5 font-display text-[clamp(38px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.015em] text-ink text-balance">
              Field notes from the
              <br />
              <em className="italic">capability frontier.</em>
            </h2>
          </Reveal>
          <Reveal
            as="p"
            delay={1}
            className="max-w-[520px] border-l-2 border-ink/70 pl-4.5 text-[16px] leading-[1.65] text-navy-soft"
          >
            Original research and short-form theses from our Principals —
            written for the L&amp;D leader who reads to decide, not to be
            entertained.
          </Reveal>
        </div>

        <div className="grid border-t border-l border-rule md:grid-cols-3">
          {INSIGHTS.map((it, i) => (
            <Reveal
              as="article"
              delay={i}
              key={it.kind}
              className="group relative flex min-h-[480px] flex-col overflow-hidden border-r border-b border-rule bg-paper transition-colors duration-350 hover:bg-paper-warm lg:min-h-[520px]"
            >
              <div className="relative aspect-video overflow-hidden border-b border-rule bg-navy">
                <Image
                  src={it.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale-[0.35] contrast-[1.02] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(150deg,rgba(10,22,40,0.4),rgba(250,250,247,0.1))] mix-blend-multiply" />
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-6 pb-7">
                <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                  <b className="font-medium text-[#8fa300]">{it.kind}</b>
                  <span>{it.read}</span>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-navy-soft">{it.dek}</p>
                <h4 className="mt-auto font-serif text-2xl leading-[1.16] font-normal tracking-[-0.005em] text-ink">
                  {it.title}
                  <em className="text-[#8fa300] italic">{it.titleEm}</em>
                  {it.titleSuffix}
                </h4>
                <span className="mt-3.5 flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.2em] text-[#8fa300] uppercase transition-all duration-300 group-hover:gap-4">
                  {it.cta}
                  {ARROW}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
