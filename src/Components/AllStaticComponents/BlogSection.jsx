"use client";

import Link from "next/link";

export default function BlogSection({ data }) {
  if (!data || !data.items?.length) return null;

  return (
    <section className="bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="mb-3 text-[30px] font-semibold leading-[1.15] text-[#3a3a3a] lg:text-[36px]">
            {data.heading}{" "}
            <span className="text-[#3E63F5]">
              {data.highlight}
            </span>
          </h2>

          <p className="max-w-[900px] text-[18px] leading-8 text-[#3a3a3a]">
            {data.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="group transition-transform duration-300 ease-in-out hover:-translate-y-[5px]"
            >
              {/* Image */}
              <Link href={item.url}>
                <div className="overflow-hidden rounded-[12px]">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    title={item.title}
                    className="h-[200px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="pt-5">
                {/* Badge */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-[3px] bg-[linear-gradient(90deg,#3A50CC_0%,#92B4EA_100%)] px-3 py-1 text-[12px] uppercase tracking-wide text-white">
                    {item.type}
                  </span>

                  <span className="text-[14px] font-medium text-[#636e80]">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <Link href={item.url}>
                  <h3 className="mb-2.5 text-[16px] font-semibold leading-[1.35] text-[#3a3a3a] transition-colors duration-300 group-hover:text-[#3E63F5] group-hover:underline">
                    {item.title}
                  </h3>
                </Link>

                {/* Date */}
                <p className="text-[16px] font-medium text-[#7A7A7A]">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}