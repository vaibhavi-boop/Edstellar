"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function HeroSection({ data }) {
  return (
    <section className="Section bg-[#242B67]">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_520px]">
          {/* Left Content */}
          <div>
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-3 text-sm text-white/80">
              {data.breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-white">
                      {item.label}
                    </span>
                  )}

                  {index < data.breadcrumbs.length - 1 && <span>›</span>}
                </div>
              ))}
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-5xl font-semibold leading-[1.12] text-white lg:text-[48px]">
              {data.heading}
            </h1>

            {/* Description */}
            <p className="mb-5 max-w-xl text-[16px] leading-7 text-white/90">
              {data.description}
            </p>

            {/* Features */}
            <div className="mb-10 space-y-2">
              {data.features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-[16px] text-white"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="group inline-flex items-center gap-3 rounded-lg bg-[#D7F11E] px-6 py-3 text-[16px] font-medium text-black transition hover:bg-lime-300">
              {data.buttonText}
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[590px] w-[520px] overflow-hidden rounded-2xl">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}