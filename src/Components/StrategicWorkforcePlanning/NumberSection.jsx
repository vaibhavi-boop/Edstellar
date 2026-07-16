"use client";

export default function NumberSection({ data }) {
  return (
    <section className="bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[800px] text-center">
          <h2 className="mb-4 font-bold leading-[1.2] text-[#2A2A2A] text-[30px] lg:text-[36px]">
            {data.heading}
          </h2>

          <p className="text-[16px] leading-7 text-[#454545]">
            {data.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* ================= Desktop Timeline ================= */}
          <div className="absolute left-0 right-0 top-[24px] hidden lg:block">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 h-[1px] w-full -translate-y-1/2 bg-[#03307d80]" />

            {/* Small Dots (Desktop Only) */}
            <span className="absolute left-[20%] top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7C5E9]" />

            <span className="absolute left-[40%] top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7C5E9]" />

            <span className="absolute left-[60%] top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7C5E9]" />

            <span className="absolute left-[80%] top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7C5E9]" />
          </div>

          {/* ================= Mobile Timeline ================= */}
          <div className="absolute bottom-0 left-[26px] top-0 w-[2px] bg-[#03307d80] lg:hidden" />

          {/* Steps */}
          <div className="grid gap-4 lg:grid-cols-5 lg:gap-6">
            {data.steps.map((step) => (
              <div
                key={step.number}
                className="relative flex items-start gap-4 lg:block"
              >
                {/* Circle */}
                <div className="relative z-10 flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full bg-[#2A2F68] text-[22px] font-bold text-white lg:mx-auto">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 lg:mt-4">
                  <h3 className="mb-2 text-[20px] font-bold text-[#3a3a3a] lg:text-center lg:text-[20px]">
                    {step.title}
                  </h3>

                  <p className="mb-4 text-[16px] leading-7 text-[#333] lg:text-center">
                    {step.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-2.5 flex flex-wrap gap-2 lg:justify-center">
                    <span className="rounded bg-[#215aff1a] px-3 py-1 text-[12px] font-semibold text-[#3a3a3a]">
                      {step.week}
                    </span>

                    <span className="rounded border border-[#5167E8] px-3 py-1 text-[12px] font-semibold text-[#3a3a3a]">
                      {step.badge}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="mt-4 space-y-2 text-[14px] leading-6 text-[#000]">
                    {step.points.map((point, index) => (
                      <li key={index} className="mb-1 flex items-start gap-2">
                        <span className="text-xl leading-none">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}