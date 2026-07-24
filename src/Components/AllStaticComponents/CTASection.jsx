"use client";

import Link from "next/link";
import PrimaryButton from "../../app/Buttons/PrimaryButton";

export default function CTASection({ data }) {
  return (
    <section className="bg-[#31346F] py-16">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
          {/* Heading */}
          <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-white lg:text-[36px]">
            {data.heading}
          </h2>

          {/* Description */}
          <p className="mb-8 text-[16px] leading-7 text-white/90">
            {data.subheading}
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {data.primaryButton?.text && (
              <PrimaryButton
                text={data.primaryButton.text}
                href={data.primaryButton.link}
                title={data.primaryButton.text}
              />
            )}

            {data.secondaryButton?.text && (
              <Link
                href={data.secondaryButton.link}
                title={data.secondaryButton.title}
                className="inline-flex w-full items-center justify-center rounded-lg border border-white px-6 py-3 text-[16px] font-semibold text-white transition hover:bg-white hover:text-[#31346F] sm:w-auto"
              >
                {data.secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}