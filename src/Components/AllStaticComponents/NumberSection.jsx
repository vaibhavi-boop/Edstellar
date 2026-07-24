"use client";

import { CheckCircle2 } from "lucide-react";

export default function NumberSection({ data }) {
  const totalSteps = data.steps?.length || 0;

  return (
    <section className="bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[800px] text-center">
          <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#2A2A2A] lg:text-[36px]">
            {data.heading}
          </h2>

          <p className="text-[16px] leading-7 text-[#454545]">
            {data.subheading}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* ================= Desktop Timeline ================= */}
          <div className="absolute left-0 right-0 top-[24px] hidden lg:block">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 h-[1px] w-full -translate-y-1/2 bg-[#03307d80]" />

            {/* Dots */}
            {Array.from({ length: Math.max(totalSteps - 1, 0) }).map(
              (_, index) => (
                <span
                  key={index}
                  className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7C5E9]"
                  style={{
                    left: `${((index + 1) * 100) / totalSteps}%`,
                  }}
                />
              )
            )}
          </div>

          {/* ================= Mobile Timeline ================= */}
          <div className="absolute bottom-0 left-[18px] top-0 w-[2px] bg-[#03307d80] lg:hidden" />

          {/* Steps */}
          <div
            className="grid gap-4 lg:gap-6"
            style={{
              gridTemplateColumns: `repeat(${totalSteps}, minmax(0,1fr))`,
            }}
          >
            {data.steps.map((step) => {
              const week = step.week?.trim();
              const badge = step.badge?.trim();
              const points =
                step.points?.filter((point) => point?.trim()) || [];

              return (
                <div
                  key={step.number}
                  className="group relative flex items-start gap-4 lg:block"
                >
                  {/* Circle */}
                  <div
                    className="
                      relative z-10
                      flex h-9 w-9 flex-shrink-0 items-center justify-center
                      rounded-full
                      bg-[#2A2F68]
                      text-[22px] font-bold text-white
                      transition-all duration-300 ease-in-out
                      group-hover:bg-[#D3E41B]
                      group-hover:text-[#2A2F68]
                      lg:mx-auto lg:h-14 lg:w-14
                    "
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:mt-5">
                    <h3 className="mb-2 text-[20px] font-bold text-[#3A3A3A] lg:text-center">
                      {step.title}
                    </h3>

                    <p className="mb-4 text-[16px] leading-7 text-[#333] lg:text-center">
                      {step.description}
                    </p>

                    {(week || badge) && (
                      <div className="mb-2.5 flex flex-wrap gap-2 lg:justify-center">
                        {week && (
                          <span className="rounded bg-[#215AFF1A] px-3 py-1 text-[12px] font-semibold text-[#3A3A3A]">
                            {week}
                          </span>
                        )}

                        {badge && (
                          <span className="rounded border border-[#5167E8] px-3 py-1 text-[12px] font-semibold text-[#3A3A3A]">
                            {badge}
                          </span>
                        )}
                      </div>
                    )}

                    {points.length > 0 && (
                      <ul className="mt-4 space-y-2 text-[14px] leading-6 text-[#000]">
                        {points.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2"
                          >
                            <span className="text-xl leading-none">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        {data.highlight && (
          <div className="mx-auto mt-10 max-w-[900px] rounded-xl bg-[#2A2F68] p-5 lg:p-6">
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#49507F]">
                <CheckCircle2
                  className="h-6 w-6 text-[#D3E41B]"
                  strokeWidth={2.2}
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-[16px] leading-8 text-white">
                  <span className="font-bold">
                    {data.highlight.title}{" "}
                  </span>
                  {data.highlight.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}