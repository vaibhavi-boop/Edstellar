import { related, learningPath } from "@/data/mlMonitoringData";
import { learningPathSvgs } from "@/data/mlmonitoring-learningpathsvgs";

export default function RelatedApplySection() {
  return (
    <section className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-28">
      <div className="container">

        {/* Label */}
        <div className="mb-8 flex items-baseline gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic text-[var(--ink)] [font-family:var(--serif)]">
            XIV
          </span>

          <span className="text-[16px] normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
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
        <div className="mb-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {learningPath.map((item, i) => (
            <div key={i} className="flex items-center gap-4">

              {/* Course Card */}
              <div
                className={`flex min-h-[260px] flex-1 flex-col rounded-[14px] border p-[14px] ${
                  item.active
                    ? "border-[var(--navy)] bg-[var(--navy)] text-white"
                    : "border-[var(--rule)] bg-white"
                }`}
              >

                {/* SVG */}
                <div className="mb-4 h-[78px] w-full overflow-hidden rounded-[10px]">
                  {learningPathSvgs[item.image]}
                </div>

                {/* Label */}
                <p className="mb-2 text-[9px] uppercase tracking-[0.16em] [font-family:var(--mono)]">
                  {item.label}
                </p>

                {/* Title */}
                <h4 className="mb-2 text-[14px] font-semibold leading-[1.2]">
                  {item.title}
                </h4>

                {/* Description */}
                <p
                  className={`text-[11px] leading-[1.55] ${
                    item.active
                      ? "text-white/65"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {item.text}
                </p>

                {/* Duration */}
                <p className="mt-auto pt-5 text-[9px] uppercase tracking-[0.14em] [font-family:var(--mono)]">
                  ◷ {item.duration}
                </p>
              </div>

              {/* Arrow */}
              {i < learningPath.length - 1 && (
                <span className="hidden h-[20px] w-[20px] flex-none items-center justify-center rounded-full border border-[var(--rule)] bg-white text-[11px] lg:flex">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Related Courses */}
        <h3 className="mb-5 text-[18px] font-semibold">
          More related courses
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((course, i) => (
            <div
              key={i}
              className="rounded-[12px] border border-[var(--rule)] bg-white p-[18px]"
            >
              <h4 className="text-[14px] font-semibold leading-[1.25]">
                {course.t}
              </h4>

              <div className="mt-3 flex gap-4 text-[9px] uppercase tracking-[0.12em] text-[var(--muted-soft)] [font-family:var(--mono)]">
                <span>{course.d}</span>
                <span>Instructor-led</span>
              </div>

              <span className="mt-4 block text-[10px] uppercase tracking-[0.12em] text-[#6f8c0f] [font-family:var(--mono)]">
                View course →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}