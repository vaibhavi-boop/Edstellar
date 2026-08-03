"use client";

import { useState } from "react";

export default function ExpandSection({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white">
      <div className="container">
        <div className="max-w-[760px]">

          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span className="font-[var(--serif)] text-[16px] italic text-[#0A1628]">
              {data.eyebrow.italic}
            </span>

            <span className="text-[#9CA3AF]">·</span>

            <span className="font-[var(--mono)] text-[12px] uppercase tracking-[0.35em] text-[#6F7485]">
              {data.eyebrow.text}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-8 text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-[#0A1628]">
            {data.title.normal}{" "}
            <span className="font-[var(--serif)] italic font-normal">
              {data.title.italic}
            </span>
          </h2>

          {/* Intro */}
          <p className="text-[16px] leading-[1.8] text-[#5F6B7A]">
            {data.intro}
          </p>

          {/* Expanded text */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              expanded ? "mt-10 max-h-[600px]" : "max-h-0"
            }`}
          >
            <p className="whitespace-pre-line text-[16px] leading-[1.8] text-[#0A1628]">
              {data.more}
            </p>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="group mt-10 inline-flex flex-col items-start"
          >
            <span className="font-[var(--mono)] text-[12px] uppercase tracking-[0.35em] text-[#0A1628]">
              {expanded ? data.showLessText : data.readMoreText}
            </span>

            <span className="h-px w-[78px] bg-[#0A1628] transition-all duration-300 group-hover:w-full" />
          </button>
        </div>
      </div>
    </section>
  );
}