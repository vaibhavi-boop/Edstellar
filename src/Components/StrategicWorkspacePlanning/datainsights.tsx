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

        <div className="grid grid-cols-[430px_1fr] gap-10 items-start">

          {/* Left Content */}
          <div className="sticky top-10">
            <h2 className="text-[42px] font-bold leading-[1.12] text-[#1c1c1c]">
              {heading}
            </h2>

            <p className="mt-8 text-[18px] leading-[32px] text-[#2C2C2C]">
              {description}
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-4">

            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-[#2E316F] p-8 transition-all duration-300 hover:-translate-y-[5px]"
              >
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#6E7B54] text-[#D9F227]">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[52px] font-bold leading-none text-[#D9F227]">
                      {item.value}
                    </h3>

                    <p className="mt-4 text-[16px] leading-9 text-white">
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