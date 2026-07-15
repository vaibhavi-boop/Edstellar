"use client";

import Link from "next/link";
import PrimaryButton from "../../app/Buttons/PrimaryButton";

export default function CTASection({ data }) {
  return (
    <section className="bg-[#31346F] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h2 className="mb-4 text-[28px] font-semibold leading-[1.2] text-white sm:text-[32px] lg:text-[36px]">
          {data.heading}
        </h2>

        {/* Description */}
        <p className="mb-8 text-[16px] leading-7 text-white/90">
          {data.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {data.button?.text && (
            <PrimaryButton
              text={data.button.text}
              href={data.button.href}
              title={data.button.title}
            />
          )}

          {data.secondaryButton?.text ? (
            <Link
              href={data.secondaryButton.link}
              className="inline-flex w-full items-center justify-center rounded-lg border border-white px-6 py-3 text-[16px] font-semibold text-white transition hover:bg-white hover:text-[#31346F] sm:w-auto"
            >
            {data.secondaryButton.text}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}