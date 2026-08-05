export default function CapabilityTransformation({ data }) {
  return (
    <section
      id="transformation"
      className="border-y border-[#d9d7cf] bg-[var(--paper)] py-20 md:py-24"
    >
      <div className="container">
        {/* Top meta */}
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

        {/* Heading */}
        <h2 className="max-w-[750px] text-[clamp(36px,4vw,52px)] font-bold leading-[0.98] tracking-[-0.045em] ]">
          {data.heading.normal}{" "}
          <em className="[font-family:var(--serif)] font-normal italic">
            {data.heading.italic}
          </em>
          {data.heading.normalAfter}
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-[720px] text-[16px] leading-[1.65] text-[#68717c] md:text-[15px]">
          {data.paragraph}
        </p>

        {/* Before / After table */}
        <div className="mt-9 overflow-hidden rounded-[14px] border border-[#d7d9dc] bg-white">
          {/* Table header */}
          <div className="grid grid-cols-2 border-b border-[#d7d9dc] bg-[#f1efe7]">
            <div className="border-r border-[#d7d9dc] px-5 py-3">
              <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-[#777b82]">
                {data.beforeLabel}
              </span>
            </div>

            <div className="px-5 py-3">
              <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-[#8a9c17]">
                {data.afterLabel}
              </span>
            </div>
          </div>

          {/* Rows */}
          {data.shifts.map((shift, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 ${
                index !== data.shifts.length - 1
                  ? "border-b border-[#d7d9dc]"
                  : ""
              }`}
            >
              {/* Before */}
              <div className="border-b border-[#d7d9dc] px-5 py-5 md:border-b-0 md:border-r md:py-[17px]">
                <p className="text-[14px] leading-[1.7] text-[rgba(10,22,40,0.6)]">
                  {shift.before}
                </p>
              </div>

              {/* After */}
              <div className="px-5 py-5 md:py-[17px]">
                <div className="flex gap-3">
                  <span className="mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#a9e91b]" />

                  <p className="text-[14px] leading-[1.7] text-[#0A1628]">
                    {shift.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-5 max-w-[800px] text-[13px] leading-[1.6] text-[rgba(10,22,40,0.45)]">
          {data.note}
        </p>
      </div>
    </section>
  );
}
