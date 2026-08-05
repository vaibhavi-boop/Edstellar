export default function WhyNow({ data }) {
  return (
    <section
      id="why-now"
      className="border-y border-[#d9d7cf] bg-[#f2f0e8] py-20 md:py-24"
    >
      <div className="container">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[14px] italic text-[#092c4c] [font-family:var(--serif)]">
              {data.title}
            </span>

            <span className="text-[10px] text-[#aaa69c]">•</span>

            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#777b82]">
              {data.label}
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8b8c8d]">
            {data.count}
          </span>
        </div>

        <h2 className="max-w-[650px] text-[clamp(38px,4vw,52px)] font-bold leading-[0.98] tracking-[-0.045em]">
          {data.heading.normal}{" "}
          <em className="[font-family:var(--serif)] font-normal italic">
            {data.heading.italic}
          </em>
        </h2>

        <p className="mt-6 max-w-[720px] text-[15px] leading-[1.75] text-[#68717c]">
          {data.paragraph}
        </p>

        <div className="mt-10 overflow-hidden rounded-[15px] border border-[#d7d9dc] bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {data.stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`px-6 py-6 ${
                  index !== data.stats.length - 1
                    ? "border-b border-[#d7d9dc] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="text-[40px] font-bold leading-none tracking-[-0.04em] text-[#092c4c] md:text-[42px]">
                  {stat.value}
                </div>

                <p className="mt-4 max-w-[280px] text-[12px] leading-[1.7] text-[#68717c]">
                  {stat.paragraph}
                </p>

                <div className="mt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[#999b9e]">
                  {stat.source}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-[11px] leading-[1.6] text-[#8b8d91]">
          {data.note}
        </p>
      </div>
    </section>
  );
}
