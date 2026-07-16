"use client";

import Image from "next/image";

export default function SlidesSection({ data }) {
  const {
    heading,
    description,
    quote,
    avatar,
    name,
    company,
  } = data;

  return (
    <section className="bg-[#F5F7FC]">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_680px] lg:items-start lg:gap-10">
          {/* Left */}
          <div>
            <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#3a3a3a] lg:text-[36px]">
              {heading}
            </h2>

            <p className="text-[16px] leading-7 text-[#3a3a3a]">
              {description}
            </p>
          </div>

          {/* Right */}
          <div className="rounded-xl bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <p className="border-b border-[#E8EAF1] pb-4 text-[18px] italic font-medium leading-8 text-[#3a3a3a] lg:text-[20px]">
              "{quote}"
            </p>

            <div className="mt-5 flex items-center gap-4">
              <Image
                src={avatar}
                alt={name}
                width={52}
                height={52}
                className="rounded-full object-cover"
              />

              <div>
                <h4 className="text-[16px] font-semibold text-[#3a3a3a]">
                  {name}
                </h4>

                <p className="text-[14px] text-[#5c5e6e]">
                  {company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}