"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ServiceSlides({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="services" className="bg-[#31346F]">
      <div className="container">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-center md:justify-between">
          <h2 className="text-[30px] font-semibold leading-[1.2] text-white lg:text-[36px]">
            {data.heading}
          </h2>

          {/* Desktop Navigation */}
          <div className="hidden gap-4 md:flex">
            <button
              ref={prevRef}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BB2FF] text-white transition hover:bg-white hover:text-[#31346F]"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              ref={nextRef}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BB2FF] text-white transition hover:bg-white hover:text-[#31346F]"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {data.cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="group flex h-full min-h-[380px] flex-col rounded-[8px] border border-white/10 bg-[#2E3054] p-5 transition-all duration-300 hover:border-lime-400 hover:bg-[#3A3C7E]">
                {/* Top */}
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#454A80] text-[#D9FF34] transition-all duration-300 group-hover:bg-[#D9FF34] group-hover:text-[#31346F]">
                    {card.icon}
                  </div>

                  <span className="rounded-lg bg-[#454A80] px-4 py-2 text-sm font-semibold text-[#D9FF34]">
                    {card.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-[20px] font-bold leading-[28px] text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-grow text-[16px] leading-7 text-white/90">
                  {card.description}
                </p>

                {/* Divider */}
                <div className="mb-5 h-px bg-white/20" />

                {/* Link */}
                <Link
                  href={card.link}
                  className="group inline-flex items-center gap-3 text-[16px] font-semibold text-[#D9FF34] lg:text-[18px]"
                >
                  Explore service

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Navigation */}
        <div className="mt-8 flex justify-center gap-4 md:hidden">
          <button
            onClick={() => prevRef.current?.click()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BB2FF] text-white transition hover:bg-white hover:text-[#31346F]"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => nextRef.current?.click()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BB2FF] text-white transition hover:bg-white hover:text-[#31346F]"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}