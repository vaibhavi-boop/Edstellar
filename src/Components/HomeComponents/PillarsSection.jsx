import Image from "next/image";
import Reveal from "./Reveal";

const ARROW = (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path d="M1 4h12m0 0L10 1m3 3L10 7" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const MINIVIZ_HEIGHTS = [42, 58, 36, 72, 48, 84, 64, 92, 76, 88, 70, 96];

const PILLARS = [
  {
    idx: "01",
    kind: "Practice",
    image: "/Images/Home/lnd-od-consulting.jpg",
    title: "L&D OD ",
    titleEm: "Consulting",
    desc: "Diagnose the structure, redesign the system. We benchmark, model, and rebuild your learning function — strategy, capability frameworks, governance.",
    cta: "Engage advisory",
  },
  {
    idx: "02",
    kind: "Platform",
    image: "/Images/Home/skills-intelligence-platform.jpg",
    title: "Skills Intelligence ",
    titleEm: "Platform",
    desc: "One canonical view of capability across your workforce — gap analysis, role taxonomies, learning ROI — wired into your HRIS in days, not quarters.",
    cta: "See the platform",
    platform: true,
  },
  {
    idx: "03",
    kind: "Practice",
    image: "/Images/Home/executive-coaching.jpg",
    title: "Executive ",
    titleEm: "Coaching",
    desc: "1:1 and cohort coaching for senior leaders, calibrated to your succession plan. Certified coaches, signal-rich diagnostics, board-ready outcomes.",
    cta: "Engage a coach",
  },
  {
    idx: "04",
    kind: "Practice",
    image: "/Images/Home/corporate-training.jpg",
    title: "Corporate ",
    titleEm: "Training",
    desc: "Outcome-first training programs across 2,000+ skill areas — instructor-led, virtual, blended — delivered in your languages, your time zones, your standards.",
    cta: "Explore programs",
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-paper py-28 lg:py-[130px]" id="pillars">
      <div className="container">
        <div className="mb-16 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
          <Reveal as="div">
            <div className="mb-1 flex items-center gap-3.5 font-mono text-[11px] tracking-[0.22em] text-ink/55 uppercase">
              <span className="opacity-55">02</span>
              <span className="h-px w-9 bg-ink/25" />
              Capabilities
            </div>
            <h2 className="mt-5.5 font-display text-[clamp(38px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.015em] text-ink text-balance">
              Four pillars,
              <br />
              <em className="italic">one operating system</em>
              <br />
              for capability.
            </h2>
          </Reveal>
          <Reveal
            as="p"
            delay={1}
            className="max-w-[520px] border-l-2 border-ink/70 pl-4.5 text-[16px] leading-[1.65] text-navy-soft"
          >
            From C-suite coaching to enterprise-wide skills intelligence, our
            practices are designed to interlock — so the strategy your CHRO
            sets becomes the behaviour your business sees, on the ground, in
            measurable weeks.
          </Reveal>
        </div>

        <div className="grid border-t-[1.5px] border-l border-rule sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal
              as="article"
              delay={i}
              key={p.title}
              id={p.platform ? "platform" : undefined}
              className="group relative flex min-h-[480px] flex-col overflow-hidden border-r border-b-[1.5px] border-rule bg-paper transition-colors duration-400 hover:bg-paper-warm"
            >
              <div className="relative aspect-4/3 overflow-hidden border-b border-rule bg-navy">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale-[0.4] contrast-[1.02] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:contrast-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(10,22,40,0.55),rgba(250,250,247,0.18))] mix-blend-multiply" />
                {p.platform && (
                  <span className="absolute top-4 right-4 z-[2] bg-lime px-2.5 py-1 font-mono text-[9.5px] tracking-[0.18em] text-navy uppercase">
                    Platform
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 pb-8 lg:p-7 lg:pb-8">
                <div className="mb-5.5 flex justify-between font-mono text-[10.5px] tracking-[0.22em] text-ink/50">
                  <span>— {p.idx} ·</span>
                  <b className="font-normal tracking-[0.16em] text-muted">
                    {p.kind}
                  </b>
                </div>
                <h3 className="mb-3.5 font-serif text-[28px] leading-[1.1] font-normal tracking-[-0.005em] text-ink">
                  {p.title}
                  <em className="italic">{p.titleEm}</em>
                </h3>
                <p className="text-sm leading-[1.6] text-navy-soft">{p.desc}</p>

                {p.platform && (
                  <div
                    aria-hidden="true"
                    className="mt-4 flex h-12 items-end gap-[3px] border-t border-rule pt-3"
                  >
                    {MINIVIZ_HEIGHTS.map((h, hi) => (
                      <i
                        key={hi}
                        style={{ height: `${h}%`, animationDelay: `${0.05 + hi * 0.05}s` }}
                        className="animate-rise-bar flex-1 bg-[linear-gradient(180deg,var(--lime),var(--lime-soft))]"
                      />
                    ))}
                  </div>
                )}

                <span className="mt-auto flex items-center gap-2.5 pt-5.5 font-mono text-[10.5px] tracking-[0.2em] text-ink/50 uppercase transition-all duration-300 group-hover:gap-4 group-hover:opacity-90">
                  {p.cta}
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
