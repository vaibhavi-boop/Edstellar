"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function GridCard({
  icon,
  value,
  description,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Extract numeric value (supports decimals)
  const numericValue = parseFloat(value);

  // Get suffix (%, x, + etc.)
  const suffix = value.replace(/[0-9.]/g, "");

  return (
    <div
      ref={ref}
      className="rounded-lg bg-[#2E316F] p-5 transition-all duration-300 hover:-translate-y-[3px]"
    >
      <div className="flex flex-col items-start lg:flex-row gap-4">
        <div className="flex min-h-12 min-w-12 items-center justify-center rounded-md bg-[#6E7B54] text-[#D9F227]">
          {icon}
        </div>

        <div>
          <h3 className="text-[36px] font-bold leading-none text-white lg:text-[42px]">
            <>
            {inView ? (
            <CountUp
            end={numericValue}
            duration={2}
            decimals={String(numericValue).includes(".") ? 1 : 0}
            />
            ) : (
            0
        )}
            <span className="text-[#D9F227]">{suffix}</span>
        </>
        </h3>
          <p className="mt-1.5 text-[16px] leading-[26px] text-white">
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
          <div className="lg:sticky lg:top-10">
            <h2 className="mb-4 text-[32px] font-semibold leading-[1.12] text-[#3a3a3a] lg:text-[36px]">
              {heading}
            </h2>

            <p className="text-[16px] leading-[24px] text-[#3a3a3a]">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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