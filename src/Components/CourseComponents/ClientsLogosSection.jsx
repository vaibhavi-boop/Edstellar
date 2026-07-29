"use client";

import Image from "next/image";

export default function ClientsLogosSection({ data }) {
  if (!data?.logos?.length) return null;

  return (
    <section className="overflow-hidden bg-[#F5F3ED] py-10">
      <div className="container">
        <p className="mb-7 text-[12px] font-medium uppercase tracking-[0.35em] text-[rgba(10,22,40,0.6)]">
          {data.title}
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-clients-logo-marquee items-center gap-8">
          {[...data.logos, ...data.logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex h-12 w-32 shrink-0 items-center justify-center rounded-lg border border-[#E8E8E8] bg-white px-2 py-1"
            >
              <Image
                src={logo.image}
                alt={logo.alt}
                width={120}
                height={48}
                className="max-h-8 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}