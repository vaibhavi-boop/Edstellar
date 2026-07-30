"use client";
import { useState } from "react";
import Link from "next/link";

const nodes = [
  {
    id: "govern",
    text: "⚖️",
    className: "left-[18px] top-[65px]",
    label: "Govern fairness",
    desc: "track bias, fairness, and compliance for responsible ML in regulated settings.",
  },
  {
    id: "detect",
    text: "📉",
    className: "left-[82px] top-[15px]",
    label: "Detect drift",
    desc: "catch data and concept drift before it quietly degrades model accuracy in production.",
  },
  {
    id: "track",
    text: "📊",
    className: "right-[18px] top-[65px]",
    label: "Track performance",
    desc: "monitor accuracy, error, and slice-level metrics against agreed thresholds.",
  },
  {
    id: "alert",
    text: "🚨",
    className: "right-[36px] bottom-[45px]",
    label: "Alert & respond",
    desc: "fire ML-specific alerts, run incident response, and learn from post-incident reviews.",
  },
  {
    id: "retrain",
    text: "🔁",
    className: "bottom-[18px] left-[104px]",
    label: "Retrain",
    desc: "trigger and govern retraining, then roll out safely with A/B and shadow deployment.",
  },
  {
    id: "explain",
    text: "🔍",
    className: "bottom-[45px] left-[36px]",
    label: "Explain",
    desc: "monitor SHAP feature importance and explanation stability for auditable decisions.",
  },
];

const defaultCaption =
  "Hover a stage to see how this programme keeps production models healthy across the full monitoring lifecycle.";

export default function CourseHero({
  breadcrumb,
  headline,
  headlineEm,
  headlineSuffix,
  subtitle,
  lede,
  lede1,
  data,
}) {
  const [active, setActive] = useState(null);
  const activeNode = nodes.find((n) => n.id === active);

  return (
    <section id="Home" className="relative text-[#fff]">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* absolute image */}
          <img
            src={data.image.src}
            alt={data.image.alt}
            title={data.title}
            className="absolute top-0 right-0 z-0 h-full object-cover pointer-events-none"
            style={{
              width: "72%",
              objectPosition: "center right",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, #000 38%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, #000 38%)",
            }}
          />
          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center gap-1 text-[12px] uppercase tracking-[0.28em] text-[#0a162873]">
              {breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center">
                  {item.href ? (
                    <Link
                      href={item.href}
                      title={item.title}
                      className="transition-colors hover:text-[#0A1628]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span title={item.title} className="text-[#0A1628]">
                      {item.label}
                    </span>
                  )}

                  {index < breadcrumb.length - 1 && (
                    <span className="mx-2">/</span>
                  )}
                </span>
              ))}
            </div>
            <h1 className="mb-3 max-w-3xl font-[var(--display)] text-[clamp(30px,5vw,64px)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#0A1628]">
              {headline}{" "}
              <span className="[font-family:var(--serif)] font:bold text-[#6b8f00] italic font-normal">
                {headlineEm}
              </span>
              <br />
              {headlineSuffix}
            </h1>
            <p className="mb-5 max-w-md font-[var(--body)] text-lg md:text-xl leading-8 text-[#0A1628] italic">
              {subtitle}
            </p>
            <p className="mb-8 max-w-xl font-[var(--body)] text-base md:text-lg leading-7 md:leading-8 text-[#0A1628]">
              {lede}
            </p>
            {/* Tooltip code start */}
            <div className="mb-8 max-w-xl font-[var(--body)] text-[14px] font-bold leading-[22px] tracking-[0.12em] text-[#0A1628]">
              {lede1.map((item, index) => (
                <span key={index} className="inline-flex items-center">
                  {index > 0 && (
                    <span className="mx-3 h-1.5 w-1.5 rounded-full bg-[#C8F135]" />
                  )}

                  <span className="group relative inline-flex items-center">
                    <span>{item.text}</span>

                    {item.tooltip && (
                      <>
                        {/* Custom Info Icon */}
                        <span className="ml-1 flex h-4 w-4 items-center justify-center cursor-pointer">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Circle */}
                            <circle
                              cx="8"
                              cy="8"
                              r="7"
                              className="fill-transparent stroke-[#0a162838] transition-all duration-200 group-hover:fill-[#0A1628] group-hover:stroke-[#0A1628]"
                              strokeWidth="1.2"
                            />

                            {/* Dot */}
                            <circle
                              cx="8"
                              cy="4.5"
                              r="0.8"
                              className="fill-[#0a162899] italic transition-all duration-400 group-hover:fill-[#C8F135]"
                            />

                            {/* i */}
                            <rect
                              x="7.35"
                              y="6.2"
                              width="1.3"
                              height="4.2"
                              rx="0.65"
                              className="fill-[#0a162899] italic transition-all duration-400 group-hover:fill-[#C8F135]"
                            />
                          </svg>
                        </span>

                        {/* Tooltip */}
                        <div className="pointer-events-none absolute left-[30px] top-full mt-2 z-50 w-[330px] rounded-[16px] bg-[#0A1628] px-3 py-2.5 opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                          {/* Arrow */}
                          <span className="absolute -top-[6px] left-[30px] h-3 w-3 rotate-45 bg-[#0a1628]" />

                          {/* Heading */}
                          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#C8F135]">
                            {item.tooltip.title}
                          </p>

                          {/* Description */}
                          <p className="text-[11px] font-bold leading-[18px] text-[#fff]">
                            {item.tooltip.description}
                          </p>
                        </div>
                      </>
                    )}
                  </span>
                </span>
              ))}
            </div>{" "}
            {/* Tooltip code end*/}
            {/* Buttons*/}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#course-outline"
                className="rounded-full bg-[#07162C] px-8 py-4 text-sm font-bold text-lime-300 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(7,22,44,0.28)]"
              >
                View course outline
              </a>
              <a
                href="#enquire"
                className="rounded-full border border-[#C9CDD3] bg-white px-8 py-4 text-sm font-bold text-[#07162C] transition-all duration-300 hover:border-[#07162C]"
              >
                Enquire now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
