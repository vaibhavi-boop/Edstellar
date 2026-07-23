"use client";

import PrimaryButton from "../../app/Buttons/PrimaryButton";

export default function StaticCardSection({ data }) {
  const isGreen = data.variant === "green";

  return (
    <section className="bg-[#F7F7F7]">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-[950px] text-center">
          <h2
            className="text-[30px] font-bold leading-[1.15] text-[#3A3A3A] lg:text-[36px]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          <p className="max-w-[850px] mt-5 text-[16px] leading-7 text-[#5F6368]">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div
          className={`mx-auto mt-12 mb-10 grid gap-6
            ${
              isGreen
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
        >
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`
                rounded-lg bg-white p-5
                shadow-[0_2px_16px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]

                ${
                  isGreen
                    ? "border-t-4 border-[#C8E130]"
                    : "border-l-4 border-[#D94848]"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  mb-5 flex h-10 w-10 items-center justify-center rounded-md
                  ${
                    isGreen
                      ? "bg-[#F5F6F8] text-[#3A3A3A]"
                      : "bg-[#FFF2F2] text-[#D94848]"
                  }
                `}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-[18px] font-semibold leading-[1.3] text-[#1C1C1C]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-7 text-[#5F6368]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA (Only for red variant) */}
        {!isGreen && data.button && (
          <div className="flex flex-col items-center justify-center">
            {data.ctaText && (
              <p className="mb-5 max-w-[600px] text-center text-[16px] leading-7 text-[#5F6368]">
                {data.ctaText}
              </p>
            )}

            <PrimaryButton
              text={data.button.text}
              href={data.button.href}
              title={data.button.title}
            />
          </div>
        )}
      </div>
    </section>
  );
}