"use client";

import { ArrowRight } from "lucide-react";
import PrimaryButton from "../../app/Buttons/PrimaryButton";

export default function StaticCardSection({ data }) {
  const { heading, description, items } = data;

  return (
    <section className="section bg-[#F7F7F7]">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-[950px] text-center">
          <h2 className="text-[28px] font-bold leading-[1.15] text-[#3a3a3a] sm:text-[32px] lg:text-[36px]">
            {heading}
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-[#5F6368]">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="mb-10 mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[8px] border-l-[4px] border-[#D94848] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition-all duration-300
                hover:-translate-y-[5px]
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]
              "
            >
              {/* Icon */}
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#FFF2F2] text-[#D94848]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-[20px] font-semibold leading-[1.3] text-[#1c1c1c]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-7 text-[#5F6368]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center justify-center">
          <p className="mb-5 max-w-[600px] text-center text-[16px] leading-7 text-[#5F6368]">
            If any of these resonate, you are in the right place. Our strategic
            workforce planning consulting practice is built to address them
            through governed frameworks, measurable outcomes, and consultant-led
            delivery.
          </p>

          {/* Button */}
          <PrimaryButton
            text={data.button.text}
            href={data.button.href}
            title={data.button.title}
          />
        </div>
      </div>
    </section>
  );
}