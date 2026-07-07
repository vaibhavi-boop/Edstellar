"use client";

import { Stats } from "fs";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Stat = {
  value: string;
  title: string;
};

type StatsProps = {
  items: Stat[];
};

function StatCard({ value, title }: Stats) {
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

      <h3 className="text-[42px] font-bold leading-none text-white">
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

      <p className="mt-2 text-white">
        {title}
      </p>
    </div>
  );
}

export default function Stats({
  items,
}: StatsProps) {
  return (
    <section className="bg-[#F5F5F5] py-[60px] px-[40px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-5 lg:grid-cols-4">
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