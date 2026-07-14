"use client";
import { Check } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import PrimaryButton from "../../app/Buttons/PrimaryButton";

export default function HeroSection({ data, breadcrumbs }) {
  return (
    <section className="bg-[#242B67]">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_520px]">
          {/* Left Content */}
          <div>
            <Breadcrumb items={breadcrumbs} />
            {/* Heading */}
            <h1 className="mb-6 text-4xl font-semibold leading-[1.12] text-white lg:text-[48px]">
              {data.heading}
            </h1>

            {/* Description */}
            <p className="mb-5 text-[16px] leading-7 text-white/90">
              {data.description}
            </p>

            {/* Features */}
            <div className="mb-10 space-y-2">
              {data.features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[16px] text-white"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25 mt-1">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <PrimaryButton
              text={data.button.text}
              href={data.button.href}
              title={data.button.title}
            />
          </div>

          {/* Right Image */}
          <div>
            <img 
              src={data.image}
              alt={data.imageAlt}
              title={data.title}
              className="object-cover w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}