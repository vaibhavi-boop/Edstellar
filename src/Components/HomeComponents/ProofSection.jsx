import Image from "next/image";
import Reveal from "./Reveal";

const METRICS = [
  { v: "+14", suffix: "pts", k: "High-potential retention" },
  { v: "−31", suffix: "%", k: "Time-to-productivity" },
  { v: "412", suffix: "", k: "Leaders coached" },
  { v: "1,840", suffix: "", k: "Programs · 9 months" },
  { v: "96", suffix: "%", k: "Satisfaction · verified" },
];

const LOGOS = [
  { name: "ASTOR & CO.", style: "" },
  { name: "Vermilion", style: "italic" },
  { name: "NORTHWAVE", style: "mono" },
  { name: "Halden Group", style: "" },
  { name: "Lumen.", style: "italic" },
  { name: "KESTREL/9", style: "mono" },
];

export default function ProofSection() {
  return (
    <section
      className="border-t-[1.5px] border-b-[1.5px] border-rule bg-paper-cream py-28 lg:py-[130px]"
      id="proof"
    >
      <div className="container grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <Reveal
          as="figure"
          className="relative min-h-[420px] overflow-hidden border-[1.5px] border-rule lg:min-h-[560px]"
        >
          <Image
            src="/Images/Home/case-study-chro.jpg"
            alt="Marianne Holst"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover grayscale-[0.3] contrast-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(10,22,40,0.22),rgba(10,15,42,0.18))] mix-blend-multiply" />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 bg-[linear-gradient(180deg,rgba(10,15,42,0)_0%,rgba(10,15,42,0.92)_80%)] px-6 py-5.5 text-paper">
            <div>
              <div className="font-serif text-[22px] leading-[1.1] font-medium italic">
                Marianne Holst
              </div>
              <div className="mt-1.5 font-mono text-[10px] tracking-[0.18em] text-lime uppercase">
                CHRO · Fortune 500 Industrials
              </div>
            </div>
            <div className="font-serif text-[46px] leading-[0.95] tracking-[-0.02em] text-paper">
              <em className="text-lime italic">+14</em>pts
              <span className="block font-mono text-[9px] tracking-[0.18em] text-lime uppercase">
                HiPo retention
              </span>
            </div>
          </figcaption>
        </Reveal>

        <Reveal as="div" delay={1} className="flex flex-col justify-between">
          <div>
            <div className="mb-7 flex items-center gap-3.5 font-mono text-[11px] tracking-[0.22em] text-ink/55 uppercase">
              <span className="h-px w-9 bg-ink/25" />
              Case · Global Industrials, FY26
            </div>
            <p className="font-serif text-[clamp(28px,3.2vw,42px)] leading-[1.16] font-normal tracking-[-0.008em] text-ink text-balance">
              <span className="text-[1.15em] leading-none text-ink/35 italic">
                &ldquo;
              </span>
              Edstellar replaced four vendors and an internal team. Inside two
              quarters our leadership bench had a{" "}
              <em className="italic">measurable</em> capability score, and our
              retention of high-potentials moved{" "}
              <em className="italic">fourteen points.</em>
              <span className="text-[1.15em] leading-none text-ink/35 italic">
                &rdquo;
              </span>
            </p>
          </div>

          <div className="mt-9 border-t border-rule pt-7">
            <div className="mb-4.5 flex justify-between font-mono text-[10.5px] tracking-[0.2em] text-ink/50 uppercase">
              <span>Engagement Metrics</span>
              <span className="text-muted">Q1 — Q3</span>
            </div>
            <div className="grid grid-cols-2 border border-rule bg-paper sm:grid-cols-5">
              {METRICS.map((m) => (
                <div
                  key={m.k}
                  className="flex flex-col gap-2 border-r border-b border-rule p-4 last:border-r-0 sm:border-b-0"
                >
                  <div className="font-serif text-[30px] leading-none tracking-[-0.015em] text-ink [font-variant-numeric:tabular-nums]">
                    <em className="font-normal italic">{m.v}</em>
                    {m.suffix}
                  </div>
                  <div className="font-mono text-[10px] leading-[1.35] tracking-[0.14em] text-muted uppercase">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container mt-22">
        <Reveal
          as="div"
          className="mb-6 text-center font-mono text-[10.5px] tracking-[0.22em] text-muted uppercase"
        >
          — Trusted by enterprise buyers across six continents —
        </Reveal>
        <Reveal
          as="div"
          delay={1}
          aria-label="Selected clients"
          className="grid grid-cols-3 border-t border-b border-rule md:grid-cols-6"
        >
          {LOGOS.map((l) => (
            <div
              key={l.name}
              className={`flex h-[84px] items-center justify-center border-r border-rule text-xl font-medium text-navy-soft transition-colors duration-250 last:border-r-0 hover:bg-paper hover:text-ink ${
                l.style === "italic"
                  ? "font-serif italic"
                  : l.style === "mono"
                    ? "font-mono text-[13px] tracking-[0.1em] uppercase"
                    : "font-serif tracking-[0.04em]"
              }`}
            >
              {l.name}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
