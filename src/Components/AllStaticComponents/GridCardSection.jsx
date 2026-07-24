"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  Clock3,
  Image,
  CircleDollarSign,
  Globe,
} from "lucide-react";

const iconMap = {
  Clock3,
  Image,
  CircleDollarSign,
  Globe,
};

function GridCard({ icon, value, description, showIcon }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.startsWith("$") ? "$" : "";
  const suffix = value.replace(/[0-9.$]/g, "");

  const Icon = iconMap[icon];

  return (
    <div
      ref={ref}
      className="rounded-lg bg-[#2E316F] p-5 transition-all duration-300 hover:-translate-y-[3px]"
    >
      {showIcon ? (
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#6E7B54] text-[#D9F227]">
            {Icon && <Icon size={22} />}
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Value */}
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

            {/* Description */}
            <p className="mt-3 text-[16px] leading-[26px] text-white">
              {description}
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Green Line */}
          <div className="mb-6 h-[3px] w-10 bg-[#D9F227]" />

          {/* Value */}
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

          {/* Description */}
          <p className="mt-3 text-[16px] leading-[26px] text-white">
            {description}
          </p>
        </>
      )}
    </div>
  );
}

export default function GridCardSection({ data }) {
  const {
    heading,
    description,
    subheading,
    items,
    showIcon = false,
  } = data;

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
                icon={item.icon}
                value={item.value}
                description={item.description}
                showIcon={showIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}