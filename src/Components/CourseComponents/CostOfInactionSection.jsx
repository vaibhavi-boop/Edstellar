"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";

export default function CostOfInactionSection({ data }) {
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  const first = active === 0;
  const last = active === data.cards.length - 1;

  const btn = (disabled) =>
    `flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300
    ${
      disabled
        ? "cursor-not-allowed border-[#E5E2D8] text-[#C9C5B8]"
        : "border-[#D8D5C9] text-[#0A1628] hover:bg-[#0A1628] hover:text-white hover:border-[#0A1628]"
    }`;

  return (
    <section className="bg-[#FAF8F1] py-24">
      <div className="container max-w-[980px]">

        {/* Top */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-[var(--serif)] italic">
              {data.eyebrow.label}
            </span>

            <span className="font-[var(--mono)] text-[10px] uppercase tracking-[0.3em] text-[#8D96A7]">
              {data.eyebrow.caption}
            </span>
          </div>

          <span className="font-[var(--mono)] text-[10px] uppercase tracking-[0.3em] text-[#8D96A7]">
            {data.eyebrow.count}
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[720px] font-[var(--display)] text-[58px] font-semibold leading-none tracking-[-0.05em] text-[#091B34]">
          {data.heading.title}{" "}
          <span className="font-[var(--serif)] italic font-normal">
            {data.heading.highlight}
          </span>
          <br />
          {data.heading.suffix}
        </h2>

        <p className="mt-6 max-w-[760px] text-[22px] leading-[1.7] text-[#667085]">
          {data.description}
        </p>

        {/* Navigation */}
        <div className="mt-10 mb-5 flex items-center gap-4">
          <button
            disabled={first}
            className={btn(first)}
            onClick={() => swiper.slidePrev()}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            disabled={last}
            className={btn(last)}
            onClick={() => swiper.slideNext()}
          >
            <ChevronRight size={18} />
          </button>

          <span className="font-[var(--mono)] text-[11px] uppercase tracking-[0.3em] text-[#9BA2B0]">
            {active + 1} / {data.cards.length}
          </span>
        </div>

        {/* Cards */}
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(s) => setActive(s.activeIndex)}
          slidesPerView={3.15}
          spaceBetween={18}
          speed={600}
          className="!overflow-visible"
          breakpoints={{
            0: {
              slidesPerView: 1.05,
            },
            768: {
              slidesPerView: 2.1,
            },
            1200: {
              slidesPerView: 3.15,
            },
          }}
        >
          {data.cards.map((card) => (
            <SwiperSlide key={card.id}>
              <PressureCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="mt-10 max-w-[900px] text-[14px] leading-7 text-[#8D95A4]">
          {data.disclaimer}
        </p>
      </div>
    </section>
  );
}