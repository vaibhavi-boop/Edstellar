"use client";

import PrimaryButton from "../../app/Buttons/PrimaryButton";

export default function VerticleIconSection({ data }) {
  return (
    <section className="bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-5">
          <h2 className="mb-4 text-[30px] lg:text-[36px] font-semibold leading-[44px] text-[#3a3a3a]">
            {data.heading}
          </h2>

          <p className="max-w-[880px] text-[16px] leading-7 text-[#3a3a3a]">
            {data.description}
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-0 lg:gap-16 mb-6 lg:grid-cols-[520px_1fr]">
          {/* Sticky Image */}
          <div className="hidden lg:block">
            <div className="sticky top-17">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={data.image}
                  alt={data.heading}
                  width={480}
                  height={650}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mb-10 lg:hidden">
            <img
              src={data.image}
              alt={data.heading}
              width={700}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Right Side */}
          <div>
            {data.items.map((item, index) => (
              <div
                key={index}
                className="mb-4 p-2.5 group border-b border-[#E5E7EB] transition-all duration-300 last:border-b-0 hover:rounded-lg hover:bg-[#FFF5F4] hover:shadow-md"
              >
                <div className="flex flex-col gap-5 md:flex-row">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#FFF2F0] text-[20px]">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-[20px] font-semibold leading-[28px] text-[#3a3a3a]">
                      {item.title}
                    </h3>

                    <p className="mb-3 text-[16px] leading-7 text-[#3a3a3a]">
                      {item.description}
                    </p>

                    <p className="flex items-center gap-2 text-[14px] leading-6 font-medium text-[#FF5B4A]">
                      <span className="text-[16px] leading-none">•</span>
                      {item.stat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
          <div className="rounded-lg bg-[#F5F7FB] px-5 py-6">
            {data.cta.heading ? (
              // Heading with Center CTA
              <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
                <h3 className="mb-4 text-[20px] font-semibold leading-[1.2] text-[#3A3A3A]">
                  {data.cta.heading}
                </h3>

                <PrimaryButton
                  text={data.cta.button.text}
                  href={data.cta.button.href}
                  title={data.cta.button.title}
                />
              </div>
            ) : (
              // Paragraph with left CTA
              <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div className="max-w-[820px]">
                  <p className="text-[16px] leading-7 text-[#3A3A3A]">
                    {data.cta.text}
                  </p>
                </div>

                <PrimaryButton
                  text={data.cta.button.text}
                  href={data.cta.button.href}
                  title={data.cta.button.title}
                />
              </div>
            )}
          </div>

      </div>
    </section>
  );
}