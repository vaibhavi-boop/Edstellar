"use client";
import { Check } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import PrimaryButton from "../../app/Buttons/PrimaryButton";
import SecondryButton from "../../app/Buttons/SecondryButton";

export default function HeroSection({ data, breadcrumbs }) {
  return (
    <section className="bg-[#242B67]">
      <div className="container">
        <div className="grid items-start gap-8 lg:gap-10 lg:grid-cols-[1fr_520px]">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-7 lg:mb-5">
              <Breadcrumb items={breadcrumbs} />
            </div>
            {/* Heading */}
            <h1 className="mb-6 text-[36px] font-semibold leading-[1.12] text-white lg:text-[48px]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

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
            
            {/* Buttons */}

            <div className="flex gap-5">
              {data.buttons?.[0]?.text && (
                <PrimaryButton
                  text={data.buttons[0].text}
                  href={data.buttons[0].href}
                  title={data.buttons[0].title}
                />
              )}

              {data.buttons?.[1]?.text && (
                <SecondryButton
                  text={data.buttons[1].text}
                  href={data.buttons[1].href}
                  title={data.buttons[1].title}
                />
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
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