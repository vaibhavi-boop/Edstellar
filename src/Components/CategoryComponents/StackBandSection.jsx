import { stackCoverageSection } from "@/data/aiDomainData";

export default function StackBandSection() {
  const { label, paragraph, note, groups } = stackCoverageSection;
  const flat = groups.flatMap((g) => g.items);

  return (
    <section
      aria-label="Model and framework coverage"
      className="overflow-hidden border-t border-b border-[var(--rule)] bg-[var(--white)] pt-11 pb-10 text-center"
    >
      <div className="container">
        <p className="mb-3 font-mono text-[9.5px] uppercase tracking-[0.15em] text-[var(--muted)]">{label}</p>
        <p className="mx-auto mb-[26px] max-w-[62ch] text-[13.5px] leading-[1.7] text-[var(--muted)]">{paragraph}</p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-clients-logo-marquee items-center">
          {[...flat, ...flat].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-[5px] flex min-h-[50px] shrink-0 items-center justify-center rounded-[11px] border border-[var(--rule)] bg-[var(--paper)] px-5 py-3 whitespace-nowrap transition-colors hover:border-[var(--rule-strong)] hover:bg-[var(--paper-warm)]"
            >
              <span className="text-[15px] font-semibold tracking-[-0.015em] text-[var(--ink)] [font-family:var(--display)]">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="mx-auto mt-[26px] max-w-[80ch] text-[11.5px] leading-[1.65] text-[var(--muted-soft)]">{note}</p>
      </div>
    </section>
  );
}
