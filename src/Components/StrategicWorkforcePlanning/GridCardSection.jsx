"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function GridCard({ icon, value, description }) {
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
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        {/* Icon */}
        <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-md bg-[#6E7B54] text-[#D9F227]">
          {icon}
        </div>

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
              ) : ( 0 )}
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
  const { heading, description, items } = data;

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid items-start gap-8 lg:grid-cols-[400px_1fr]">
          {/* Heading */}
          <div className="mb-10 max-w-5xl">
            <h2 className="mb-4 text-[32px] font-semibold leading-[1.12] text-[#3a3a3a] lg:text-[36px]">
              {heading}
            </h2>

            <p className="text-[16px] leading-[30px] text-[#3a3a3a]">
              {description}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {items.map((item, index) => (
              <GridCard
                key={index}
                icon={item.icon}
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