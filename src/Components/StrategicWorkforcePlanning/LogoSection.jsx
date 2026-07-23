"use client";

import Image from "next/image";

export default function LogoSection({ data }) {
  return (
    <section className="overflow-hidden bg-[#31346F]">
      <div className="container">
        <div className="mb-12 mx-auto max-w-[900px] text-center">
          <h2 className="mb-4 text-center text-[30px] leading-[42px] font-semibold text-white lg:text-[36px]">
            {data.heading}
          </h2>

          <p className="text-center text-[16px] text-white">
            {data.description}
          </p>
        </div>

        {/* Top Row */}
        <div className="relative mb-10 overflow-hidden">
          <div className="flex w-max animate-marquee gap-11">
            {[...data.topRow, ...data.topRow].map((logo, index) => (
              <div
                key={index}
                className="flex h-[58px] w-[150px] shrink-0 items-center justify-center rounded bg-white"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  title={logo.title}
                  width={120}
                  height={44}
                  className="h-auto max-h-[48px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee-reverse gap-11">
            {[...data.bottomRow, ...data.bottomRow].map((logo, index) => (
              <div
                key={index}
                className="flex h-[58px] w-[150px] shrink-0 items-center justify-center rounded bg-white"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  title={logo.title}
                  width={120}
                  height={44}
                  className="h-auto max-h-[52px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}