"use client";

import Image from "next/image";

export default function VerticleLineSection({ data }) {
  const {
    title,
    subtitle,
    description,
    image,
    features,
  } = data;

  return (
    <section className="bg-[#F5F6F8]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <div>
            <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#3a3a3a] lg:text-[36px]">
              {title}
            </h2>

            {subtitle ? (
              <p className="mb-5 text-[18px] font-semibold text-[#2B2B2B] lg:text-[20px]">
              {subtitle}
              </p>
            ) : null}

            <p className="mb-6 text-[16px] leading-7 text-[#666666]">
              {description}
            </p>

            <div className="relative h-[260px] overflow-hidden rounded-xl sm:h-[360px] lg:h-[420px]">
              <img
                src={image}
                alt={title}
                title={title}
                fill
                className="object-cover w-full rounded-lg"
              />
            </div>
          </div>

          {/* Right */}
          <div>
            {features.map((item, index) => (
              <div
                key={index}
                className={`relative flex gap-5 pb-3 mb-4 ${
                  index !== features.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
              >
                {/* Left Color Bar */}
                <span
                  className={`absolute left-0 top-1 h-12 w-1 rounded-full ${item.color}`}
                />

                {/* Content */}
                <div className="pl-6">
                  <h3 className="text-[20px] font-bold text-[#3a3a3a]">
                    {item.title}
                  </h3>

                  <p className="text-[16px] leading-7 text-[#3a3a3a]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}