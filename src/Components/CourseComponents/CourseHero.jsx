"use client";
import { useState } from "react";
import { Info } from "lucide-react";

const nodes = [
  { id: "govern", text: "⚖️", className: "left-[18px] top-[65px]", label: "Govern fairness", desc: "track bias, fairness, and compliance for responsible ML in regulated settings." },
  { id: "detect", text: "📉", className: "left-[82px] top-[15px]", label: "Detect drift", desc: "catch data and concept drift before it quietly degrades model accuracy in production." },
  { id: "track", text: "📊", className: "right-[18px] top-[65px]", label: "Track performance", desc: "monitor accuracy, error, and slice-level metrics against agreed thresholds." },
  { id: "alert", text: "🚨", className: "right-[36px] bottom-[45px]", label: "Alert & respond", desc: "fire ML-specific alerts, run incident response, and learn from post-incident reviews." },
  { id: "retrain", text: "🔁", className: "bottom-[18px] left-[104px]", label: "Retrain", desc: "trigger and govern retraining, then roll out safely with A/B and shadow deployment." },
  { id: "explain", text: "🔍", className: "bottom-[45px] left-[36px]", label: "Explain", desc: "monitor SHAP feature importance and explanation stability for auditable decisions." },
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
    <section id="top" className="relative z-10 bg-[#fff]">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
         <div>
          <div className="max-w-[480px] mb-6 text-[12px] leading-5 uppercase tracking-[0.28em] text-[#fff]">
            {breadcrumb}
          </div>

          <h1 className="mb-3 max-w-3xl font-[var(--display)] text-[clamp(30px,5vw,64px)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#fff]">
            {headline}{" "}
            <span className="[font-family:var(--serif)] font:semibold text-[#6b8f00] italic font-normal">
              {headlineEm}
            </span>
            <br />
            {headlineSuffix}
          </h1>

          <p className="mb-5 max-w-md font-[var(--body)] text-lg md:text-xl leading-8 text-[#fff] italic">
             {subtitle} 
          </p>

          <p className="mb-8 max-w-xl font-[var(--body)] text-base md:text-lg leading-7 md:leading-8 text-[#fff]">
            {lede}
          </p>

          {/* Tooltip code start */}
          <div className="mb-8 max-w-xl font-[var(--body)] text-[14px] font-bold leading-[22px] tracking-[0.12em] text-[#fff]">
            {lede1.map((item, index) => (
              <span key={index} className="inline-flex items-center">
                {index > 0 && (
                  <span className="mx-3 h-1.5 w-1.5 rounded-full bg-lime-700" />
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
                          <circle cx="8" cy="8" r="7"
                            className="fill-transparent stroke-[#fff] transition-all duration-200 group-hover:fill-[#fff] group-hover:stroke-[#000]"
                            strokeWidth="1.2"
                          />

                          {/* Dot */}
                          <circle cx="8" cy="4.5" r="0.8"
                            className="fill-[#fff] transition-all duration-400 group-hover:fill-[#0a1628]"
                          />

                          {/* i */}
                          <rect x="7.35" y="6.2"
                            width="1.3"
                            height="4.2"
                            rx="0.65"
                            className="fill-[#fff] transition-all duration-400 group-hover:fill-[#0a1628]"
                          />
                        </svg>
                      </span>

                      {/* Tooltip */}
                      <div className="pointer-events-none absolute left-[30px] top-full z-50 w-[330px] rounded-[16px] bg-[#fafafa] px-3 py-1 opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
                      >
                        {/* Arrow */}
                        <span className="absolute -top-[6px] left-[30px] h-3 w-3 rotate-45 bg-[#0a1628]" />

                        {/* Heading */}
                        <p className="text-[10px] font-semibold tracking-[0.28em] text-[#215aff]">
                          {item.tooltip.title}
                        </p>

                        {/* Description */}
                        <p className="text-[11px] font-bold leading-[18px] text-[#2a2a2a]">
                          {item.tooltip.description}
                        </p>
                      </div>
                    </>
                  )}
                </span>
              </span>
            ))}
          </div> {/* Tooltip code end*/}

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

          <img
            src={data.image.src}
            alt={data.image.alt}
            title={data.title}
            className="absolute inset-0 z-[-2] h-full w-full object-cover object-right"
          />

        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className=" text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
      <p className="mt-3 font-[var(--display)] text-base font-extrabold text-[#07162c]">
        {value}
      </p>
      {sub && (
        <p className="mt-1 font-[var(--body)] text-xs text-slate-500">{sub}</p>
      )}
    </div>
  );
}

function CircleIcon({ className, text, active, onMouseEnter }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`absolute flex h-10 w-10 items-center justify-center rounded-full text-lg shadow-md cursor-pointer transition-colors duration-200 ${
        active ? "bg-lime-300" : "bg-[#10213a]"
      } ${className}`}
    >
      {text}
    </div>
  );
}
