"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Card = {
  icon: string;
  category: string;
  title: string;
  description: string;
  link: string;
};

type Props = {
  data: {
    heading: string;
    cards: Card[];
  };
};

export default function ServiceSlides({ data }: Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-[#31346F] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-semibold text-white">
            {data.heading}
          </h2>

          <div className="hidden gap-4 md:flex">
            <button
              ref={prevRef}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8BB2FF] text-white transition hover:bg-white hover:text-[#31346F]"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              ref={nextRef}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8BB2FF] text-white transition hover:bg-white hover:text-[#31346F]"
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
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
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
              <div className="flex h-full min-h-[490px] flex-col rounded-3xl border border-white/10 bg-[#2e3054] p-7 transition duration-300 hover:-translate-y-2 hover:border-lime-400">
                {/* Top */}
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#454A80]">
                    <Image
                      src={card.icon}
                      alt=""
                      width={22}
                      height={22}
                    />
                  </div>

                  <span className="rounded-lg bg-[#454A80] px-4 py-2 text-sm font-semibold text-[#D9FF34]">
                    {card.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-[20px] font-bold leading-[38px] text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-grow text-[18px] leading-9 text-white/90">
                  {card.description}
                </p>

                {/* Divider */}
                <div className="my-8 h-px bg-white/20" />

                {/* Link */}
                <Link
                  href={card.link}
                  className="group inline-flex items-center gap-3 text-lg font-semibold text-[#D9FF34]"
                >
                  Explore service

                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile arrows */}
        <div className="mt-8 flex justify-center gap-4 md:hidden">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8BB2FF] text-white"
            onClick={() => prevRef.current?.click()}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8BB2FF] text-white"
            onClick={() => nextRef.current?.click()}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}