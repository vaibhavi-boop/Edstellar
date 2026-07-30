import { related, learningPath } from "@/data/mlMonitoringData";
import { learningPathSvgs } from "@/data/mlmonitoring-learningpathsvgs";

export default function RelatedApplySection() {
  return (
    <section className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-28">
      <div className="container">

        {/* Label */}
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] text-[var(--ink)] [font-family:var(--serif)]">
            XIV
          </span>

          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            Explore
          </span>

          <span>· Adjacent programs</span>
        </div>

        {/* Heading */}
        <h2 className="mb-3 max-w-[22ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em]">
          Where this fits in your team&apos;s{" "}
          <em className="[font-family:var(--serif)]">
            learning path.
          </em>
        </h2>

        {/* Description */}
        <p className="mb-8 max-w-[72ch] text-[15px] leading-[1.7] text-[var(--muted)]">
          In the standard ML lifecycle, monitoring sits after deployment, not
          after model building. You ship a model, keep it healthy in
          production, turn what monitoring tells you into managed risk, then
          extend the same discipline as your systems change.
        </p>

        {/* Learning Path */}
        <div className="mb-9 grid grid-cols-1 gap-[12px] md:grid-cols-2 lg:grid-cols-4">
          {learningPath.map((item, i) => {
            const CardTag = item.active ? "div" : "a";
            const cardProps = item.active ? {} : { href: item.href };
            return (
            <div key={i} className="flex items-stretch gap-[12px]">

              {/* Course Card */}
              <CardTag
                {...cardProps}
                className={`group flex flex-1 flex-col rounded-[16px] border p-[18px] transition-all duration-300 ease-out will-change-transform ${
                  item.active
                    ? "border-[var(--navy)] bg-[var(--navy)] text-white"
                    : "border-[var(--rule)] bg-white hover:-translate-y-1 hover:border-[var(--rule-strong)] hover:shadow-[0_24px_50px_-34px_rgba(10,22,40,.45)]"
                }`}
              >

                {/* SVG */}
                <div className="mb-[13px] aspect-[2/1] w-full overflow-hidden rounded-[11px]">
                  <div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105">
                    {learningPathSvgs[item.image]}
                  </div>
                </div>

                {/* Label */}
                <p className="mb-[7px] text-[9px] uppercase tracking-[0.14em] [font-family:var(--mono)]">
                  {item.label}
                </p>

                {/* Title */}
                <h4 className="mb-[7px] min-h-[38px] text-[15px] font-semibold leading-[1.25] tracking-[-0.02em]">
                  {item.title}
                </h4>

                {/* Description */}
                <p
                  className={`text-[12.5px] leading-[1.5] ${
                    item.active
                      ? "text-white/65"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {item.text}
                </p>

                {/* Duration */}
                <p
                  className={`mt-auto flex items-center gap-[7px] pt-[13px] text-[9.5px] uppercase tracking-[0.11em] [font-family:var(--mono)] ${
                    item.active ? "text-white/60" : "text-[var(--muted)]"
                  }`}
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="h-[13px] w-[13px] flex-none"
                  >
                    <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M8 4.6V8l2.4 1.6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item.duration}
                </p>
              </CardTag>

              {/* Arrow (kept in flow but invisible on the last card so every column stays the same width) */}
              <span
                aria-hidden={i === learningPath.length - 1}
                className={`hidden h-[26px] w-[26px] flex-none self-center items-center justify-center rounded-full border border-[var(--rule)] bg-white text-[12px] text-[var(--muted)] lg:flex ${
                  i === learningPath.length - 1 ? "invisible" : ""
                }`}
              >
                →
              </span>
            </div>
            );
          })}
        </div>

        {/* Related Courses */}
        <h3 className="mb-5 text-[18px] font-semibold">
          More related courses
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((course, i) => (
            <a
              key={i}
              href={course.u}
              className="flex flex-col gap-[12px] rounded-[14px] border border-[var(--rule)] bg-white p-[22px] transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-[var(--rule-strong)] hover:shadow-[0_20px_42px_-26px_rgba(10,22,40,.5)]"
            >
              <h4 className="text-[16px] font-semibold leading-[1.3] tracking-[-0.01em]">
                {course.t}
              </h4>

              <div className="mt-auto flex flex-wrap gap-[14px] text-[10.5px] uppercase tracking-[0.08em] text-[var(--muted-soft)] [font-family:var(--mono)]">
                <span>{course.d}</span>
                <span>Instructor-led</span>
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