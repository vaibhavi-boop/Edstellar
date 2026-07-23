"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SlidesSection({ data }) {
  const { heading, description } = data;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Supports both old and new data
  const slides = data.slides
    ? data.slides
    : [
        {
          quote: data.quote,
          avatar: data.avatar,
          name: data.name,
          company: data.company,
        },
      ];

  const isSlider = slides.length > 1;

  return (
    <section className="bg-[#F5F7FC]">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_680px] lg:items-start lg:gap-10">

          {/* Left */}
          <div className="flex h-full flex-col justify-between">
            <div>
              <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#3a3a3a] lg:text-[36px]">
                {heading}
              </h2>

              <p className="text-[16px] leading-7 text-[#3a3a3a]">
                {description}
              </p>
            </div>

            {isSlider && (
              <div className="mt-10 flex justify-end gap-10">
                <button
                  ref={prevRef}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8FB6FF] text-white"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  ref={nextRef}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8FB6FF] text-white"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Right */}
          {isSlider ? (
            <Swiper
              className="w-full"
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              autoHeight={true}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {slides.map((item, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="flex h-auto md:h-[390px] flex-col rounded-lg bg-white p-5 lg:p-10">
                    <p className="flex-1 border-b border-[#E8EAF1] pb-4 text-[18px] italic font-medium leading-8 text-[#3a3a3a] lg:text-[20px]">
                      "{item.quote}"
                    </p>

                    <div className="mt-5 flex items-center gap-4">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={52}
                        height={52}
                        className="rounded-full object-cover"
                      />

                      <div>
                        <h4 className="text-[16px] font-semibold text-[#3a3a3a]">
                          {item.name}
                        </h4>

                        <p className="text-[14px] text-[#5c5e6e]">
                          {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="rounded-xl bg-white p-6 shadow-[0_2px_24px_#0958f429] sm:p-8 lg:p-10">
              <p className="border-b border-[#E8EAF1] pb-4 text-[18px] italic font-medium leading-8 text-[#3a3a3a] lg:text-[20px]">
                "{slides[0].quote}"
              </p>

              <div className="mt-5 flex items-center gap-4">
                <Image
                  src={slides[0].avatar}
                  alt={slides[0].name}
                  width={52}
                  height={52}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="text-[16px] font-semibold text-[#3a3a3a]">
                    {slides[0].name}
                  </h4>

                  <p className="text-[14px] text-[#5c5e6e]">
                    {slides[0].company}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}