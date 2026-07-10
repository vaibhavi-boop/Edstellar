export default function NumberSection({ data }) {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-[28px] font-bold leading-[1.2] text-[#2A2A2A] sm:text-[32px] lg:text-[36px] lg:leading-[44px]">
            {data.heading}
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-[#454545]">
            {data.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Desktop Timeline Line */}
          <div className="absolute left-0 right-0 top-[28px] hidden h-[2px] bg-[#CBD5F0] lg:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {data.steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Mobile Vertical Line */}
                <div className="absolute left-[26px] top-[54px] bottom-0 w-[2px] bg-[#CBD5F0] lg:hidden last:hidden" />

                {/* Circle */}
                <div className="relative flex justify-center lg:justify-center">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#2A2F68] text-[22px] font-bold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4 text-center">
                  <h3 className="text-[24px] font-bold text-[#3a3a3a] lg:text-[20px]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[16px] leading-7 text-[#333]">
                    {step.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    <span className="whitespace-nowrap rounded bg-[#215aff1a] px-3 py-1 text-[12px] font-semibold text-[#3a3a3a]">
                      {step.week}
                    </span>

                    <span className="whitespace-nowrap rounded border border-[#5167E8] px-3 py-1 text-[12px] font-semibold leading-[18px] text-[#3a3a3a]">
                      {step.badge}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="mt-2.5 space-y-2 text-left text-[14px] leading-6 text-[#3a3a3a]">
                    {step.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>•</span>
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