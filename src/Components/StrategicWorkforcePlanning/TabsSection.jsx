"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function TabsSection({
  data,
  centered = false,

}) {
  const [activeTab, setActiveTab] = useState(0);
  if (!data || !data.tabs?.length) return null;
  const service = data.tabs[activeTab];

  return (
    <section className="bg-[#F6F7FB]">
      <div className="container">

        {/* Heading */}
        <div
          className={`${
            centered
              ? "mx-auto mb-8 max-w-[900px] text-left lg:text-center"
              : "mb-8"
          }`}
        >
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#3a3a3a] lg:text-[36px]">
            {data.heading}
          </h2>

          {data.showDescription && (
            <p className="mt-5 max-w-[780px] text-[16px] leading-7 text-[#3a3a3a]">
              {data.description}
            </p>
          )}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 lg:gap-4">
          {data.tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`rounded-full border px-5 py-3 text-[14px] font-semibold transition-all duration-300 sm:px-6 sm:text-[15px] ${
                activeTab === index
                  ? "border-[#2A2F68] bg-[#2A2F68] text-white"
                  : "border-[#D6D8E6] bg-white text-[#5c5e6e] hover:border-[#2A2F68]"
              }`}
            >
              {tab.button}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8 overflow-hidden rounded-xl border border-[#E6D4C7] bg-white">
          <div className="grid lg:grid-cols-[1fr_500px]">

            {/* Left */}
            <div className="p-5 lg:p-8">

              <div className="text-[36px] font-bold leading-none text-[#ECEEF4] sm:text-[42px] lg:text-[48px]">
                {service.number}
              </div>

              <h3 className="mt-3 text-[22px] font-bold leading-[1.3] text-[#222] lg:text-[20px]">
                {service.title}
              </h3>

              <p className="mt-4 text-[16px] leading-7 text-[#555]">
                {service.description1}
              </p>

              <p className="mt-4 text-[16px] leading-7 text-[#555]">
                {service.description2}
              </p>

              <div className="mt-6">
                {service.points.map((point, index) => (
                  <div
                    key={index}
                    className="mb-2 flex items-start gap-3 border-b border-[#000] pb-2"
                  >
                    <CheckCircle2
                      size={26}
                      className="mt-0.5 shrink-0 text-white"
                      fill="#9DB614"
                    />

                    <span className="text-[16px] leading-7 text-[#333]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right */}
            <div className="bg-[#2A2F68] p-5 lg:p-8">
              <img
                src={service.image}
                alt={service.alt}
                title={service.title}
                className="w-full rounded-lg object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}