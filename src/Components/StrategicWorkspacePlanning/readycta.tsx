"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  data: {
    heading: string;
    description: string;
    primaryButton: {
      text: string;
      link: string;
    };
    secondaryButton: {
      text: string;
      link: string;
    };
  };
};

export default function ReadyCTA({ data }: Props) {
  return (
    <section className="bg-[#31346F] px-10 py-15">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[36px] mb-4 font-semibold leading-tight text-white">
          {data.heading}
        </h2>

        <p className="mb-6 text-[16px] text-center leading-7 text-white/90">
          {data.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={data.primaryButton.link}
            className="group inline-flex items-center gap-3 rounded-lg bg-[#D9FF34] px-6 py-3 text-[16px] font-semibold text-[#222] transition hover:bg-[#C8EB2F]"
          >
            {data.primaryButton.text}

            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            href={data.secondaryButton.link}
            className="rounded-lg border border-white px-6 py-3 text-[16px] font-semibold text-white transition hover:bg-white hover:text-[#31346F]"
          >
            {data.secondaryButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
}