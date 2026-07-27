"use client";

import {
  Factory,
  Cpu,
  Landmark,
  Stethoscope,
  ShoppingCart,
  Plane,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
} from "lucide-react";

const icons = {
  Factory,
  Cpu,
  Landmark,
  Stethoscope,
  ShoppingCart,
  Plane,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
};

export default function IndustrySection({ data }) {
  return (
    <section className="bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[950px] text-center">
          <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#3A3A3A] lg:text-[36px]">
            {data.heading}
          </h2>

          <p className="mx-auto max-w-[700px] text-[16px] leading-7 text-[#3A3A3A]">
            {data.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.industries.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.id}
                className="group rounded-lg border border-[#D9D9D9] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-[5px] hover:border-[#C8E130]"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF5B8] transition-all duration-300 group-hover:bg-[#C8E130]">
                  {Icon && (
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className="text-[#555555] transition-colors duration-300 group-hover:text-[#1E1E1E]"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-[20px] font-semibold leading-[1.3] text-[#3A3A3A]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] leading-6 text-[#3A3A3A]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}