"use client";

import { useState } from "react";
import { Plus} from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  data: {
    heading: string;
    description: string;
    items: FAQ[];
  };
};

export default function FAQs({ data }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-white py-15 px-10">
      <div className="mx-auto max-w-[950px]">

        <h2 className="mb-4 text-[36px] font-semibold text-[#3d3d3d]">
          {data.heading}
        </h2>

        <p className="text-[16px] text-[#3d3d3d]">
          {data.description}
        </p>

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
                  className="flex w-full items-center justify-between py-2 text-left"
                >
                  <h3 className="py-3 text-[20px] font-semibold leading-7 text-[#222222]">
                    {item.question}
                  </h3>

                  <span className="flex h-8 w-8 items-center justify-center text-[#243C74]">
                    <Plus
                    size={24}
                    strokeWidth={2.5}
                    className={`transition-transform duration-800 ease-in-out ${
                    open ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-800 ${
                    open
                      ? "grid-rows-[1fr] pb-8"
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
    </section>
  );
}