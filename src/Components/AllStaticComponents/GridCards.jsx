"use client";

import * as Icons from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function GridCard({ item }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const Icon = Icons[item.icon] || Icons.Circle;

  // Supports:
  // 42%
  // 3.2X
  // 13,650+
  // 100+
  // $2.5M

  const match = item.value.match(/^([^0-9]*)([\d,.]+)(.*)$/);

  const prefix = match?.[1] || "";
  const number = match?.[2] || item.value;
  const suffix = match?.[3] || "";

  const numericValue = parseFloat(number.replace(/,/g, ""));

  return (
    <div
      ref={ref}
      className="rounded-xl bg-[#36365D] p-5 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#6E7748]">
        <Icon
          size={22}
          strokeWidth={2}
          className="text-[#D8F200]"
        />
      </div>

      {/* Value */}
      <h3 className="flex items-end gap-[2px] text-[30px] font-semibold leading-none lg:text-[36px]">
        {prefix && (
          <span className="text-[#D8F200]">
            {prefix}
          </span>
        )}

        <span className="text-white">
          {inView ? (
            <CountUp
              end={numericValue}
              duration={2}
              separator=","
              decimals={number.includes(".") ? 1 : 0}
            />
          ) : (
            0
          )}
        </span>

        {suffix && (
          <span className="text-[#D8F200]">
            {suffix}
          </span>
        )}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[16px] leading-6 text-white">
        {item.description}
      </p>
    </div>
  );
}

export default function GridCardsSection({ data }) {
  return (
    <section className="bg-white">
      <div className="container">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="mb-4 text-[30px] font-semibold leading-tight text-[#2E313F] lg:text-[36px]">
            {data.heading}
          </h2>

          <p className="text-base leading-7 text-[#2E313F]">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => (
            <GridCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}