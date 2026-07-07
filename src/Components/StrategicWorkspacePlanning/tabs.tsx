"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

type Service = {
  id: number;
  button: string;
  number: string;
  title: string;
  description1: string;
  description2: string;
  image: string;
  points: string[];
};

type Props = {
  data: {
    heading: string;
    tabs: Service[];
  };
};

export default function Tabs({ data }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  const service = data.tabs[activeTab];

  return (
    <section className="bg-[#F6F7FB] py-20 px-6">
      <div className="mx-auto max-w-[1280px]">

        {/* Heading */}

        <h2 className="text-[36px] font-bold text-[#3a3a3a]">
          {data.heading}
        </h2>

        {/* Tabs */}

        <div className="mt-8 flex flex-wrap gap-4">
          {data.tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`rounded-full border px-7 py-3 text-[15px] font-semibold transition-all duration-300
              ${
                activeTab === index
                  ? "bg-[#2A2F68] text-white border-[#2A2F68]"
                  : "bg-white text-[#5c5e6e] border-[#D6D8E6] hover:border-[#2A2F68]"
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

            <div className="p-8">

              <div className="text-[48px] leading-[48px] font-bold text-[#ECEEF4]">
                {service.number}
              </div>

              <h3 className="mt-2 text-[20px] leading-[28px] font-bold text-[#222]">
                {service.title}
              </h3>

              <p className="mt-3 text-[16px] leading-8 text-[#555]">
                {service.description1}
              </p>

              <p className="mt-3 text-[16px] leading-8 text-[#555]">
                {service.description2}
              </p>

              <div className="mt-6">

                {service.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 border-b border-[#000] py-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-white shrink-0"
                      fill="#9DB614"
                    />

                    <span className="text-[16px] text-[#333]">
                      {point}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Right */}

            <div className="bg-[#2A2F68] p-8">

              <div className="relative h-full min-h-[580px] w-full overflow-hidden rounded-lg">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="500px"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}