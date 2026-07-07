type Step = {
  number: string;
  title: string;
  description: string;
  week: string;
  badge: string;
  points: string[];
};

type Props = {
  data: {
    heading: string;
    description: string;
    steps: Step[];
  };
};

export default function NumberSection({ data }: Props) {
  return (
    <section className="bg-[#fff] px-6 py-20">
      <div className="mx-auto max-w-[1280px]">
        
        {/* Heading */}
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-[36px] font-bold leading-[44px] text-[#2A2A2A]">
            {data.heading}
          </h2>

          <p className="mt-6 text-[16px] leading-[24px] text-[#454545]">
            {data.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-[28px] h-[2px] bg-[#CBD5F0]" />

          {/* Steps */}
          <div className="relative grid grid-cols-5 gap-8">
            {data.steps.map((step) => (
              <div key={step.number}>
                {/* Circle */}
                <div className="relative flex justify-center">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#2A2F68] text-[22px] font-bold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <div className="mt-2 text-center">
                  <h3 className="text-[32px] font-bold text-[#2B2B2B]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[16px] leading-[24px] text-[#333]">
                    {step.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex justify-center gap-3">
                  <span className="whitespace-nowrap rounded bg-[#215aff1a] px-2 py-1 text-[12px] font-semibold text-[#3a3a3a]">
                    {step.week}
                  </span>

                  <span className="rounded border border-[#5167E8] px-3 py-1 text-[12px] leading-[18px] content-center font-semibold text-[#3a3a3a]">
                    {step.badge}
                  </span>
                </div>

                {/* Points */}
                <ul className="mt-2 text-[14px] leading-6 text-[#3a3a3a]">
                  {step.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}