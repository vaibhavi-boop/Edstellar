"use client";

import PrimaryButton from "../../app/Buttons/PrimaryButton";

export default function ToolsCardSection({ data }) {
  return (
    <section className="bg-[#2F336B]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}
          <div>
            <img
              src={data.image.src}
              alt={data.image.alt}
              title={data.image.title}
              className="h-full w-full rounded-[8px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-white lg:text-[36px]">
              {data.heading}
            </h2>

            <p className="mb-4 text-[16px] leading-6 text-white">
              {data.subheading}
            </p>

            {/* Primary Button */}
            <PrimaryButton
              text={data.buttons[0].text}
              href={data.buttons[0].href}
              title={data.buttons[0].title}
            />

            {/* Bottom Text */}
            <p className="mt-2 text-[16px] leading-6 text-white">
              3 minutes · Instant score · No commitment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}