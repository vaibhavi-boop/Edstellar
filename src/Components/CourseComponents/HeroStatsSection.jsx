"use client";

import Image from "next/image";

export default function HeroStats({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section className="bg-white !pt-0 pb-5">
      <div className="container">
        <div className="grid overflow-hidden rounded-[20px] border border-[#E6E6E6] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => (
            <div
              key={item.id}
              className={`
                flex items-center gap-3 px-5 py-5 sm:px-6
                border-b border-[#E6E6E6]
                md:border-b-0
                lg:border-r lg:border-[#E6E6E6]
                ${
                  index === data.items.length - 1
                    ? "border-b-0 lg:border-r-0"
                    : ""
                }
                ${
                  data.items.length === 4 && index >= 2
                    ? "md:border-b-0"
                    : ""
                }
                ${
                  data.items.length === 4 && index % 2 === 0
                    ? "md:border-r md:border-[#E6E6E6] lg:border-r"
                    : "md:border-r-0"
                }
              `}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={72}
                  height={36}
                  className="h-auto w-[56px] shrink-0 object-contain sm:w-[64px] lg:w-[72px]"
                />
              )}

              <div>
                <h3 className="text-[20px] font-bold leading-none text-[#0A1628] sm:text-[22px]">
                  {item.value}
                </h3>

                <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#6F7485] sm:text-[10px] sm:tracking-[0.25em]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}