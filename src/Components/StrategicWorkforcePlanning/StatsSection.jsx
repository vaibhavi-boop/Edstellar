"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function StatCard({ value, title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const numericValue = Number(value.replace(/\D/g, ""));
  const hasPlus = value.includes("+");
  const isNumeric = !isNaN(numericValue) && numericValue > 0;

  return (
    <div
      ref={ref}
      className="rounded-lg bg-[#242B67] p-6"
    >
      <div className="mb-6 h-[3px] w-8 bg-[#D7F11E]" />

      <h3 className="text-[36px] font-semibold leading-none text-white sm:text-[42px]">
        {isNumeric ? (
          <>
            {inView ? (
              <CountUp end={numericValue} duration={2} />
            ) : (
              0
            )}

            {hasPlus && (
              <span className="text-[#D7F11E]">+</span>
            )}
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
    <section className="section bg-[#F5F5F5]">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <StatCard
              key={index}
              value={item.value}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}