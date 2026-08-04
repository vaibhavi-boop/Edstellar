"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function CostOfInactionSection({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="bg-[#F7F3EB]">
      <div className="container">

        {/* ================= Header ================= */}

        <div className="mb-10">

          {/* Left */}

          <div>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Left */}
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-3">
                <p className="font-serif text-[16px] italic text-[#07162C]">
                  {data.eyebrow.label}
                </p>

                <span className="text-[#B7B7B7]">•</span>

                <p className="text-[12px] uppercase tracking-[3px] text-[#8E8E8E]">
                  {data.eyebrow.caption}
                </p>
              </div>

              {/* Right */}
              <p className="text-[12px] uppercase tracking-[3px] text-[#8E8E8E]">
                {data.eyebrow.count}
              </p>

            </div>

            <h2 className="mb-5 max-w-[900px] text-[30px] font-semibold leading-[1.1] text-[#07162C] lg:text-[42px]">

              {data.heading.title.first}{" "}

              <span className="font-serif font-semibold italic font-normal">
                {data.heading.title.italic}
              </span>

              <br />

              {data.heading.title.second}

            </h2>

          </div>

          {/* Right */}

          <div className="flex items-end">

            <p className="max-w-[700px] text-[16px] leading-8 text-[#5F6977]">
              {data.heading.description}
            </p>

          </div>

        </div>

        {/* ================= Navigation ================= */}

        <div className="mb-10 flex items-center gap-3">

          <div className="flex items-center gap-4">

            <button
              ref={prevRef}
              disabled={isBeginning}
              onClick={() => swiper?.slidePrev()}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                isBeginning
                  ? "cursor-not-allowed border-[#E5E5E5] bg-[#F7F7F7] text-[#BDBDBD]"
                  : "border-[#D8D8D8] bg-white hover:bg-[#07162C] hover:text-white"
              }`}
            >
              <ArrowLeft size={12} />
            </button>

            <button
              ref={nextRef}
              disabled={isEnd}
              onClick={() => swiper?.slideNext()}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                isEnd
                  ? "cursor-not-allowed border-[#E5E5E5] bg-[#F7F7F7] text-[#BDBDBD]"
                  : "border-[#D8D8D8] bg-white hover:bg-[#07162C] hover:text-white"
              }`}
            >
              <ArrowRight size={12} />
            </button>

          </div>

          <div className="text-sm font-semibold text-[#0a162873]">

            {currentSlide}
            <span className="mx-1 text-[#0a162873]">/</span>
            {data.cards.length}

          </div>

        </div>

        {/* ================= Slider ================= */}

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setSwiper(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.15,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 2.4,
            },

            1280: {
              slidesPerView: 3.15,
            },
          }}
        >
          {data.cards.map((card, index) => (
            <SwiperSlide key={index}>
              <article className="mb-8 flex h-full min-h-[380px] flex-col gap-3.5 overflow-hidden rounded-2xl border border-[#E5E0D7] bg-white">

                {/* Green Top Border */}
                <div
                  className="h-[3px] w-full rounded-t-2xl"
                  style={{
                    
                      background: "linear-gradient(90deg, #0A1628, #3f5f2a 60%, #C8F135)",
                  }}
                />

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 lg:p-6">

                  {/* Tag */}
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[2px] text-[#8B8B8B]">
                    {card.tag}
                  </p>

                  {/* Value */}
                  <h3 className="mb-1.5 text-[24px] font-bold leading-none text-[#07162C] lg:text-[36px]">
                    {card.value}
                  </h3>

                  {/* Highlight */}
                  <h4 className="mb-3 max-w-[260px] text-[14px] font-semibold leading-6 text-[#6f8c0f]">
                    {card.highlight}
                  </h4>

                  {/* Description */}
                  <p className="flex-1 text-[14px] leading-6 text-[#0a162899]">
                    {card.description}
                  </p>

                  {/* Source */}
                  <div className="mt-5 border-t border-[#ECE7DE] pt-3.5">

                    <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#0a162873]">
                      {card.source}
                    </p>

                  </div>

                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer */}

        <p className="max-w-[750px] text-[12px] leading-5 text-[#0a162873]">
          {data.footer}
        </p>
      </div>
    </section>
  );
}