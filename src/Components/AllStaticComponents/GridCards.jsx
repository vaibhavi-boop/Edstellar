"use client";

import * as Icons from "lucide-react";

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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => {
            const Icon = Icons[item.icon] || Icons.Circle;

            // Split value into number + suffix
            const match = item.value.match(/^([\d.,]+)(.*)$/);
            const number = match?.[1] || item.value;
            const suffix = match?.[2] || "";

            return (
              <div
                key={index}
                className="rounded-xl bg-[#36365D] p-5"
              >
                {/* Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#6E7748]">
                  <Icon size={22} strokeWidth={2} className="text-[#D8F200]" />
                </div>

                {/* Value */}
                <h3 className="flex items-end gap-1 text-[30px] font-semibold leading-none text-white lg:text-[36px]">
                  <span>{number}</span>
                  {suffix && (
                    <span className="text-[#D8F200] text-[30px] lg:text-[36px]">
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
          })}
        </div>
      </div>
    </section>
  );
}