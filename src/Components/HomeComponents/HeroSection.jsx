import { Fragment } from "react";
import Reveal from "./Reveal";
import CountUpStat from "./CountUpStat";

const CAP_COLS = ["Eng", "Ops", "Cml", "Fin", "Risk", "Data", "Lead", "PM"];

const CAP_ROWS = [
  { label: "AI Fluency", values: [3, 2, 1, 2, 1, 4, 2, 2], scanIdx: 5 },
  { label: "Exec Comms", values: [2, 2, 3, 3, 2, 1, 4, 3], scanIdx: null },
  { label: "Cross-Func Delivery", values: [3, 3, 2, 2, 2, 2, 3, 4], scanIdx: 7 },
  { label: "Risk & Regulatory", values: [1, 2, 1, 3, 4, 1, 2, 2], scanIdx: null },
  { label: "Commercial Acumen", values: [1, 2, 4, 2, 2, 1, 3, 2], scanIdx: null },
];

const CELL_SHADE = {
  1: "bg-navy/[0.14]",
  2: "bg-navy/[0.32]",
  3: "bg-navy/[0.58]",
  4: "bg-navy",
};

const STATS = [
  { target: 500, suffix: "+", label: "Enterprises Served" },
  { target: 40, suffix: "+", label: "Countries · Live Delivery" },
  { target: 10000, suffix: "+", label: "Training Hours Delivered" },
  { target: 2000, suffix: "+", label: "Vetted Subject Experts" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-16 lg:pt-20">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_520px] lg:gap-20">
          <div>
            <Reveal
              as="div"
              className="mb-7 inline-flex items-center gap-3.5 font-mono text-[10.5px] tracking-[0.22em] text-ink/60 uppercase"
            >
              <span className="h-px w-9 bg-ink/35" />
              An Editorial · For Decision-Makers
            </Reveal>

            <Reveal as="div" delay={1}>
              <h1 className="font-display text-[clamp(54px,7.6vw,114px)] leading-[0.94] font-normal tracking-[-0.025em] text-ink text-balance">
                The science of <em className="italic font-normal">capability,</em>
                <br />
                <span className="font-light text-navy-soft">
                  delivered with the
                </span>
                <br />
                precision.
              </h1>
            </Reveal>

            <Reveal as="p" delay={2} className="mt-9 max-w-[600px] text-[16.5px] leading-[1.65] text-navy-soft">
              <span className="float-left mr-2.5 pt-1.5 font-serif text-[54px] leading-[0.85] font-medium text-ink/50 italic">
                E
              </span>
              dstellar pairs enterprise-grade L&amp;D consulting with measurable
              training, executive coaching, and a skills intelligence platform —
              so every learning investment maps to business outcomes your board
              can read.
            </Reveal>

            <Reveal as="div" delay={3} className="mt-10 flex flex-wrap gap-3.5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-navy bg-navy px-7 py-4 text-sm font-semibold text-lime transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,22,40,0.25)]"
              >
                Talk to us
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-2.5 rounded-full border border-rule-strong px-7 py-4 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-navy hover:text-lime"
              >
                Explore the Platform
              </a>
            </Reveal>
          </div>

          <Reveal as="div" delay={2} className="flex flex-col gap-6">
            <aside
              aria-label="Capability heatmap"
              className="relative border border-rule bg-paper p-5.5 px-6"
            >
              <div className="mb-3.5 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-navy-soft uppercase">
                  Capability Map · Acme Industrials
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  <span className="animate-live-pulse h-1.5 w-1.5 rounded-full bg-lime" />
                  Live
                </span>
              </div>

              <h3 className="mb-4 font-serif text-[18px] leading-[1.25] font-normal text-ink">
                14,820 employees, modelled across{" "}
                <em className="text-lime italic">capability</em> ×
                function.
              </h3>

              <div
                aria-hidden="true"
                className="my-2 mb-3.5 grid grid-cols-[100px_repeat(8,1fr)] items-center gap-[3px]"
              >
                <span />
                {CAP_COLS.map((c) => (
                  <span
                    key={c}
                    className="text-center font-mono text-[8.5px] tracking-[0.14em] text-muted uppercase"
                  >
                    {c}
                  </span>
                ))}

                {CAP_ROWS.map((row) => (
                  <Fragment key={row.label}>
                    <span className="pr-1.5 text-[10.5px] leading-[1.25] text-navy-soft">
                      {row.label}
                    </span>
                    {row.values.map((v, i) => (
                      <span
                        key={i}
                        className={`relative aspect-square transition-colors duration-300 ${CELL_SHADE[v]} ${
                          row.scanIdx === i ? "animate-scan-cell" : ""
                        }`}
                      />
                    ))}
                  </Fragment>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-rule pt-2.5 font-mono text-[9.5px] tracking-[0.16em] text-muted uppercase">
                <span>Coverage 96.4%</span>
                <span className="flex items-center gap-1.5">
                  <span>Low</span>
                  <span className="flex gap-0.5">
                    <i className="block h-2.5 w-2.5 bg-navy/[0.05]" />
                    <i className="block h-2.5 w-2.5 bg-navy/[0.32]" />
                    <i className="block h-2.5 w-2.5 bg-navy/[0.58]" />
                    <i className="block h-2.5 w-2.5 bg-navy" />
                  </span>
                  <span>High</span>
                </span>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>

      {/* Trust strip */}
      <div className="mt-22 border-t-[1.5px] border-b-[1.5px] border-rule bg-paper-warm py-11">
        <div className="container grid grid-cols-2 items-center gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((s, i) => (
            <Reveal
              as="div"
              delay={i}
              key={s.label}
              className={`relative ${
                i !== STATS.length - 1
                  ? "md:after:absolute md:after:top-2 md:after:right-[-24px] md:after:bottom-2 md:after:w-px md:after:bg-rule-strong md:after:content-['']"
                  : ""
              }`}
            >
              <CountUpStat target={s.target} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
