"use client";

import { useEffect, useState } from "react";
import { quotes } from "@/data/mlMonitoringData";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!quotes || quotes.length === 0 || paused) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % quotes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [paused]);

  if (!quotes || quotes.length === 0) {
    return null;
  }

  const q = quotes[active];

  return (
    <section id="testimonials" className="border-b border-[var(--rule)] py-28">
      <div
        className="container-narrow"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Section Label */}
        <div
          className="
            mb-8
            flex
            items-baseline
            gap-3
            text-[11px]
            uppercase
            tracking-[0.24em]
            text-[var(--muted)]
            [font-family:var(--mono)]
          "
        >
          <span
            className="
              text-[16px]
              italic
              text-[var(--ink)]
              [font-family:var(--serif)]
            "
          >
            X
          </span>

          <span
            className="
              text-[16px]
              normal-case
              tracking-normal
              text-[var(--ink)]
              [font-family:var(--serif)]
            "
          >
            Proof
          </span>

          <span>· What changed afterwards</span>
        </div>

        {/* Heading */}
        <h2
          className="
            mb-9
            max-w-[20ch]
            text-[clamp(30px,4vw,50px)]
            font-bold
            leading-[1.08]
            tracking-[-0.03em]
          "
        >
          ML monitoring training{" "}
          <em className="[font-family:var(--serif)]">results</em> from real
          teams.
        </h2>

        {/* Testimonial Content */}
        <div className="min-h-[230px]">
          {/* Quote */}
          <blockquote
            className="
              mb-6
              text-[clamp(19px,2.2vw,27px)]
              italic
              leading-[1.38]
              tracking-[-0.01em]
              text-[var(--ink)]
              [font-family:var(--serif)]
            "
          >
            <span className="text-[#7c9c10]">“</span>

            {q.q}

            <span className="text-[#7c9c10]">”</span>
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={q.image}
              alt={q.w}
              className="
              h-[42px]
              w-[42px]
              md:h-[48px]
              md:w-[48px]
              flex-none
              rounded-full
              object-cover
              shadow-[0_6px_16px_-8px_rgba(10,22,40,0.5)]
              "
            />

            {/* Name + Role */}
            <div>
              <p
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-[var(--ink)]
                  [font-family:var(--mono)]
                "
              >
                {q.w}
              </p>

              <p
                className="
                  mt-[3px]
                  text-[10.5px]
                  uppercase
                  tracking-[0.1em]
                  text-[var(--muted)]
                  [font-family:var(--mono)]
                "
              >
                {q.r}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-2.5">
          {/* Dots */}
          <div className="flex gap-2.5">
            {quotes.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`
                  h-1
                  w-[34px]
                  cursor-pointer
                  rounded-full
                  border-none
                  p-0
                  transition-all
                  duration-300
                  ${
                    active === index
                      ? "bg-[var(--navy)]"
                      : "bg-[var(--rule-strong)]"
                  }
                `}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setActive(
                  (current) => (current - 1 + quotes.length) % quotes.length,
                )
              }
              className="
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--rule-strong)]
                bg-transparent
                text-[16px]
                transition-all
                hover:border-[var(--navy)]
                hover:bg-[var(--navy)]
                hover:text-[var(--lime)]
              "
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() =>
                setActive((current) => (current + 1) % quotes.length)
              }
              className="
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--rule-strong)]
                bg-transparent
                text-[16px]
                transition-all
                hover:border-[var(--navy)]
                hover:bg-[var(--navy)]
                hover:text-[var(--lime)]
              "
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
