"use client";

import Link from "next/link";
import { Check, Play, Download } from "lucide-react";

export default function CourseInfoBar({ data }) {
  return (
    <div className="pt-4 pb-18 bg-white">
      <div className="container">
        {/* Feature Pills */}

        <div className="mb-6 flex flex-wrap gap-3">
          {data.features.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-[#0a16281f] bg-white px-4 py-2 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D7F11E]">
                <Check size={12} strokeWidth={3} className="text-[#242B67]" />
              </span>

              <span className="text-[14px] font-medium text-[#1F2937]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Dark Card */}

        <div className="rounded-[20px] bg-[#0F1B2D] p-5 text-white">
          <div className="flex flex-wrap items-center justify-between gap-8">
            {/* Left Side */}

            <div className="flex flex-wrap items-center">
              {data.stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`pr-4 ${
                    index !== data.stats.length - 1
                      ? "mr-4 border-r border-white/15"
                      : ""
                  }`}
                >
                  <h3 className="text-[22px] font-semibold leading-none text-[#c8f135]">
                    {item.value}
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    {item.label}
                  </p>
                </div>
              ))}

              {/* Trainers */}
              <div className="ml-4 flex items-center gap-4 border-r border-white/15 pr-4">
                <div className="flex items-center">
                  <img
                    src={data.trainers.avatar}
                    alt="Expert Trainers"
                    width={100}
                    height={30}
                    className="h-8 w-auto"
                  />
                </div>

                <div>
                  <h4 className="text-[12px] font-semibold">
                    <span className="text-[#D7F11E]">
                      {data.trainers.count}
                    </span>{" "}
                    {data.trainers.title}
                  </h4>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/60">
                    {data.trainers.subtitle}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="ml-3">
                <div className="mb-2 flex items-center gap-1">
                  {Array.from({ length: data.rating.stars }).map((_, index) => (
                    <img
                      key={index}
                      src={data.rating.starIcon}
                      alt="Star"
                      width={12}
                      height={12}
                    />
                  ))}
                </div>

                <p className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                  {data.rating.score} · {data.rating.reviews}
                </p>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {data.buttons.map((button) => (
                <Link
                  key={button.text}
                  href={button.href}
                  className={`${
                    button.type === "preview"
                      ? "course-btn course-btn-preview"
                      : "course-btn course-btn-brochure"
                  } text-[12px] group flex items-center gap-3 rounded-full border border-white/14 bg-white/5 px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#C5E826] hover:bg-white/10`}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D7F11E]/20 transition-all duration-300 group-hover:bg-[#C5E826]">
                    {button.type === "preview" ? (
                      <Play
                        size={14}
                        fill="currentColor"
                        className="course-btn-icon text-[#C5E826] transition-all duration-300 group-hover:text-[#0F1B2D]"
                      />
                    ) : (
                      <Download
                        size={14}
                        className="course-btn-icon text-[#C5E826] transition-all duration-300 group-hover:text-[#0F1B2D]"
                      />
                    )}
                  </span>

                  <span className="font-medium text-white">{button.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#7A8495]">
            {data.groupQuote.text}
          </span>

          <Link
            href={data.groupQuote.href}
            className="group relative text-[10px] uppercase tracking-[0.28em] text-[#6f8c0f] transition-colors duration-300 hover:text-[#0A1628]"
          >
            {data.groupQuote.linkText}

            <span className="absolute -bottom-[1px] left-0 h-[1px] w-full origin-left scale-x-100 bg-[#C5E826] transition-all duration-300 group-hover:bg-[#0A1628]"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
