import { related } from "@/data/categorydata";

export default function RelatedDomainsSection() {
  return (
    <section id="related" className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-28">
      <div className="container">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            Adjacent
          </span>

          <span>· Related domains</span>
        </div>

        <h2 className="mb-3 max-w-[22ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em]">
          Explore related{" "}
          <em className="[font-family:var(--serif)] italic">
            training domains.
          </em>
        </h2>

        <p className="mb-9 max-w-[72ch] text-[15px] leading-[1.7] text-[var(--muted)]">
          AI capability rarely sits alone. These domains are the ones
          enterprises most often build alongside it.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((course, i) => (
            <a
              key={i}
              href={course.u}
              className="flex flex-col gap-[12px] rounded-[14px] border border-[var(--rule)] bg-white p-[22px] transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-[var(--rule-strong)] hover:shadow-[0_20px_42px_-26px_rgba(10,22,40,.5)]"
            >
              <h4 className="text-[16px] capitalize font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--ink)]">
                {course.t}
              </h4>

              <div className="mt-auto flex flex-wrap gap-[14px] text-[10.5px] uppercase tracking-[0.08em] text-[var(--muted-soft)] [font-family:var(--mono)]">
                <span className="capitalize">{course.d}</span>
                <span>INSTRUCTOR-LED</span>
              </div>

              <span className="block text-[11px] uppercase tracking-[0.12em] text-[#6f8c0f] [font-family:var(--mono)]">
                View course →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
