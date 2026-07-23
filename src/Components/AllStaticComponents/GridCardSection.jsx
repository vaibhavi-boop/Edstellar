"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function GridCard({ value, description }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Extract number, prefix and suffix
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.startsWith("$") ? "$" : "";
  const suffix = value.replace(/[0-9.$]/g, "");

  return (
    <div
      ref={ref}
      className="rounded-lg bg-[#2E316F] p-5 transition-all duration-300 hover:-translate-y-[3px]"
    >
      <div className="flex flex-col gap-6">
        {/* Top Green Line */}
        <div className="h-[3px] w-10 bg-[#D9F227]"></div>

        {/* Content */}
        <div>
          <h3 className="text-[36px] font-bold leading-none lg:text-[42px]">
            <span className="text-[#D9F227]">{prefix}</span>

            <span className="text-white">
              {inView ? (
                <CountUp
                  end={numericValue}
                  duration={2}
                  decimals={String(numericValue).includes(".") ? 1 : 0}
                />
              ) : (
                0
              )}
            </span>

            <span className="text-[#D9F227]">{suffix}</span>
          </h3>

          <p className="mt-2 text-[16px] leading-[26px] text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GridCardSection({ data }) {
  const { heading, subheading, description, items } = data;

  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid items-start gap-8 lg:grid-cols-[400px_1fr]">
          {/* Left Content */}
          <div className="mb-10 max-w-5xl">
            <h2 className="mb-4 text-[30px] font-semibold leading-[1.12] text-[#3a3a3a] lg:text-[36px]">
              {heading}
            </h2>

            <p className="text-[16px] leading-[30px] text-[#3a3a3a]">
              {description || subheading}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {items.map((item, index) => (
              <GridCard
                key={index}
                value={item.value}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}