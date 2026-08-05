import { stackCoverageSection } from "@/data/aiDomainData";

export default function StackBandSection() {
  const { label, paragraph, note, groups } = stackCoverageSection;
  const flat = groups.flatMap((g) => g.items);

  return (
    <section aria-label="Model and framework coverage" className="overflow-hidden border-b border-[var(--rule)] bg-white py-16">
      <div className="container">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">{label}</p>
        <p className="mt-2 max-w-[64ch] text-[14px] leading-[1.7] text-[var(--muted)]">{paragraph}</p>
      </div>

      <div className="relative mt-8 w-full overflow-hidden">
        <div className="flex w-max animate-clients-logo-marquee items-center gap-3">
          {[...flat, ...flat].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[var(--rule)] bg-[var(--paper-warm)] px-5 text-[13px] font-medium text-[var(--ink)]/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="mt-8 text-[11px] leading-[1.6] text-[var(--muted-soft)]">{note}</p>
      </div>
    </section>
  );
}
