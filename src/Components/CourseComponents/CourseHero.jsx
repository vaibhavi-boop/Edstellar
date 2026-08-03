"use client";

import CourseButton from "@/app/Buttons/CourseButton";
import EnquireButton from "@/app/Buttons/EnquireButton";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CourseHero({
  breadcrumb,
  headline,
  headlineEm,
  headlineSuffix,
  subtitle,
  lede,
  lede1,
  buttons,
  data,
}) {
  const [openTooltip, setOpenTooltip] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const checkScreen = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };

      checkScreen();

      window.addEventListener("resize", checkScreen);

      return () => window.removeEventListener("resize", checkScreen);
    }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-[38px] pb-[54px]">
      <div className="container">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-[34px]">
          {/* Photo bleed */}
          <div
            role="img"
            aria-label={data.image.alt}
            className="pointer-events-none absolute top-[-64px] bottom-[-24px] right-[-20px] right-0 z-0 hidden lg:block"
            style={{
              width: "72%",
              backgroundImage: `url(${data.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, #000 40%)",
              maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, #000 40%)",
            }}
          />

          <div className="relative z-10 lg:max-w-[46%]">
            {/* Breadcrumb */}
            <div className="mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-[var(--mono)] text-[9px] uppercase tracking-[0.08em] text-[var(--muted-soft)] sm:text-[9.5px] md:text-[10px]">
              {breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center gap-1.5">
                  {item.href ? (
                    <Link
                      href={item.href}
                      title={item.title}
                      className="transition-colors duration-200 hover:text-[var(--ink)]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span title={item.title}>{item.label}</span>
                  )}

                  {index < breadcrumb.length - 1 && (
                    <span className="opacity-50">/</span>
                  )}
                </span>
              ))}
            </div>

            <h1 className="mb-[10px] max-w-3xl font-[var(--display)] text-[clamp(30px,3.5vw,47px)] font-bold leading-[1.05] tracking-[-0.035em] text-[var(--ink)]">
              {headline}{" "}
              <span className="[font-family:var(--serif)] italic font-bold text-[#6f8c0f]">
                {headlineEm}
              </span>
              <br />
              {headlineSuffix}
            </h1>

            <p className="mb-[14px] max-w-[38ch] [font-family:var(--serif)] text-[clamp(17px,1.6vw,21px)] italic leading-[1.3] text-[var(--ink)]">
              {subtitle}
            </p>

            <p className="mb-5 max-w-[60ch] text-[clamp(14px,1.1vw,16px)] leading-[1.6] text-[var(--muted)]">
              {lede}
            </p>

            {/* Meta row */}
            <div className="max-w-[450px] mb-5 flex flex-wrap items-center gap-x-[14px] gap-y-2.5 font-[var(--mono)] text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ink)]">
              {lede1.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-x-[14px]"
                >
                  {index > 0 && (
                    <span className="h-[5px] w-[5px] rounded-full bg-[var(--lime)]" />
                  )}

                  <span className="relative inline-flex items-center gap-[7px]">
                    <span>{item.text}</span>

                    {item.tooltip && (
                      <>
                        <button
                            type="button"
                            aria-expanded={openTooltip === index}
                            aria-label={`More about ${item.text}`}
                            onMouseEnter={() => {
                              if (isDesktop) setOpenTooltip(index);
                            }}
                            onMouseLeave={() => {
                              if (isDesktop) setOpenTooltip(null);
                            }}
                            onClick={() => {
                              if (!isDesktop) {
                                setOpenTooltip(openTooltip === index ? null : index);
                              }
                            }}
                            className={`flex h-4 w-4 flex-none items-center justify-center rounded-full border [font-family:var(--serif)] text-[11px] italic leading-none transition-colors duration-200 ${
                              openTooltip === index
                                ? "border-[var(--navy)] bg-[var(--navy)] text-[var(--lime)]"
                                : "border-[var(--rule-strong)] bg-transparent text-[var(--muted)] hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--lime)]"
                            }`}
                          >
                            i
                        </button>

                        <div
                          role="tooltip"
                          className={`absolute left-0 top-full z-50 mt-[11px] w-[330px] max-w-[78vw] rounded-[14px] bg-[var(--navy)] px-[18px] py-4 shadow-[0_26px_54px_-28px_rgba(10,22,40,0.75)] transition-all duration-200 ${
                            openTooltip === index
                              ? "pointer-events-auto translate-y-0 opacity-100"
                              : "pointer-events-none -translate-y-[5px] opacity-0"
                          }`}
                        >
                          <span className="absolute -top-[6px] left-[22px] h-3 w-3 rotate-45 rounded-[2px] bg-[var(--navy)]" />
                          <p className="font-[var(--mono)] text-[9.5px] font-normal uppercase tracking-[0.15em] text-[var(--lime)]">
                            {item.tooltip.title}
                          </p>
                          <p className="mt-[7px] font-[var(--body)] text-[13px] font-normal normal-case leading-[1.65] tracking-normal text-[var(--paper)]">
                            {item.tooltip.description}
                          </p>
                        </div>
                      </>
                    )}
                  </span>
                </span>
              ))}
            </div>

            {/* CTAs Buttons */}
            <div className="flex flex-wrap gap-3">
              <CourseButton
                {...buttons.course}
              />

              <EnquireButton
                {...buttons.enquire}
              />
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}