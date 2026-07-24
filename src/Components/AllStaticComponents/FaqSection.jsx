"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqSection({ data }) {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="container">
        <div className="mx-auto max-w-[950px]">
        {/* Heading */}
        <h2 className="mb-4 font-semibold leading-[1.2] text-[#3d3d3d] text-[30px] lg:text-[36px]">
          {data.heading}
        </h2>

        {/* Description */}
        <p className="mb-6 text-[16px] leading-7 text-[#3d3d3d]">
          {data.subheading}
        </p>

        {/* FAQ Items */}
        <div>
          {data.items.map((item, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                className="border-b border-[#232323]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <h3 className="pr-4 text-[18px] font-semibold leading-7 text-[#222222] sm:text-[20px]">
                    {item.question}
                  </h3>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#243C74]">
                    <Plus
                      size={24}
                      strokeWidth={2.5}
                      className={`transition-transform duration-700 ${
                        open ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-700 ${
                    open
                      ? "grid-rows-[1fr] pb-6"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl text-[16px] leading-7 text-[#3E3E3E]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       </div>
      </div>
    </section>
  );
}