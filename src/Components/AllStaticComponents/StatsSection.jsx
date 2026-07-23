"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function StatCard({ value, title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const numericValue = parseFloat(value);

  const hasPlus = value.endsWith("+");
  const hasPercent = value.endsWith("%");
  const hasX = value.toLowerCase().endsWith("x");

  const isNumeric = !isNaN(numericValue);

  return (
    <div
      ref={ref}
      className="flex h-full flex-col rounded-lg bg-[#242B67] p-5 sm:p-6"
    >
      <div className="mb-6 h-[3px] w-10 bg-[#D7F11E]" />

      <h3 className="text-[36px] font-semibold leading-none text-white">
        {isNumeric ? (
          <>
            {inView ? (
              <CountUp
                start={0}
                end={numericValue}
                duration={2}
                preserveValue
              />
            ) : (
              0
            )}

            {hasPlus && <span className="text-[#D7F11E]">+</span>}
            {hasPercent && <span className="text-[#D7F11E]">%</span>}
            {hasX && <span className="text-[#D7F11E]">x</span>}
          </>
        ) : (
          value
        )}
      </h3>

      <p className="mt-2 text-base leading-6 text-white">
        {title}
      </p>
    </div>
  );
}

export default function StatsSection({ items }) {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 items-stretch sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <StatCard
              key={index}
              value={item.value}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}