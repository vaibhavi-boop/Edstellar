import { ReactNode } from "react";

type Insight = {
  icon: ReactNode;
  value: string;
  description: string;
};

type DataInsightsProps = {
  heading: string;
  description: string;
  items: Insight[];
};

export default function DataInsights({
  heading,
  description,
  items,
}: DataInsightsProps) {
  return (
    <section className="bg-white py-[60px] px-[40px]">
      <div className="mx-auto max-w-[1280px]">

        <div className="grid grid-cols-[400px_1fr] gap-4 items-start">

          {/* Left Content */}
          <div className="sticky top-10">
            <h2 className="text-[36px] mb-4 font-semibold leading-[1.12] text-[#3a3a3a]">
              {heading}
            </h2>

            <p className="text-[16px] leading-[24px] text-[#3a3a3a]">
              {description}
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-4">

            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-[#2E316F] p-5 transition-all duration-300 hover:-translate-y-[3px]"
              >
                <div className="flex items-start gap-4">

                  <div className="flex min-h-12 min-w-12 items-center justify-center rounded-md bg-[#6E7B54] text-[#D9F227]">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[42px] font-bold leading-none text-[#D9F227]">
                      {item.value}
                    </h3>

                    <p className="mt-1.5 text-[16px] leading-6.5 text-white">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}