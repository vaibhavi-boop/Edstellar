"use client";

import { useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SlidesStatsSection({ data }) {
  const { heading, slides } = data;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#F5F7FC]">
      <div className="container">
        {/* Heading */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-[30px] font-semibold leading-[1.2] text-[#3A3A3A] lg:text-[36px]">
            {heading}
          </h2>

          <div className="flex gap-8">
            <button
              ref={prevRef}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2d2f6b] text-[#2d2f6b] transition hover:bg-[#2d2f6b] hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              ref={nextRef}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2d2f6b] text-[#2d2f6b] transition hover:bg-[#2d2f6b] hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={0}
          
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="w-full"
        >
        {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!w-full">
              <div className="grid w-full gap-8 lg:grid-cols-[620px_1fr] lg:items-center">

                {/* Left Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={slide.image}
                    alt={slide.company}
                    title={slide.title}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>

                {/* Right Content */}
                <div>

                  <div className="border-l-4 border-[#2E316F] pl-5">
                    <p className="mb-5 text-[16px] font-semibold italic leading-7 text-[#3A3A3A]">
                      "{slide.quote}"
                    </p>
                  </div>

                  <h3 className="text-[14px] font-semibold leading-[24px]">
                    {slide.company}
                  </h3>

                  <div className="mt-7 grid gap-5 md:grid-cols-3">
                    {slide.stats.map((stat, statIndex) => (
                      <StatCard
                        key={statIndex}
                        stat={stat}
                        active={activeIndex === index}
                      />
                    ))}
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

function StatCard({ stat, active }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const hasSlash = stat.value.includes("/");
  const hasDollar = stat.value.startsWith("$");

  const numeric = parseFloat(stat.value.replace("$", ""));
  const isNumber = !isNaN(numeric) && !hasSlash;

  return (
    <div ref={ref}>
      <div className="text-[42px] font-bold leading-[48px] text-[#2F54EB]">
        {active && inView ? (
          hasSlash ? (
            <>
              {stat.value}
              {stat.suffix}
            </>
          ) : isNumber ? (
            <>
                {hasDollar && (
                    <span className="text-[#C5E826]">$</span>
                )}

                <CountUp
                    end={numeric}
                    duration={2}
                    decimals={stat.value.includes(".") ? 1 : 0}
                />

                {stat.suffix && (
                    <span className="text-[#C5E826]">
                    {stat.suffix}
                    </span>
                )}
            </>
          ) : (
            <>
              {stat.value}
              {stat.suffix}
            </>
          )
        ) : (
          <>
            {stat.value}
            {stat.suffix}
          </>
        )}
      </div>

      <p className="text-[16px] leading-6 text-[#3A3A3A]">
        {stat.title}
      </p>
    </div>
  );
}