"use client";

export default function MostRequestedAssessment({ data }) {
  const cardClass =
    "group rounded-lg border border-white/10 bg-white/[0.04] px-6 py-5 transition-all duration-300 hover:border-[#D5EF25]/40 hover:bg-white/[0.06]";

  const numberClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/15 text-[18px] font-bold text-[#D5EF25] transition-all duration-300 group-hover:bg-[#D5EF25] group-hover:text-[#1E255C]";

  const titleClass =
    "mb-1 text-[20px] font-semibold leading-7 text-white";

  const countClass =
    "text-[22px] font-semibold text-white transition-colors duration-300 group-hover:text-[#D5EF25]";

  return (
    <section className="bg-[#32356D] py-20">
      <div className="container mx-auto max-w-[960px]">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="mb-2 text-[36px] font-semibold leading-[44px] text-white lg:text-[40px] lg:leading-[48px]">
            {data.heading}
          </h2>

          <p className="text-[15px] leading-6 text-white/70">
            {data.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {data.items.map((item) => (
            <div key={item.id} className={cardClass}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-start gap-4">
                  <div className={numberClass}>
                    {String(item.id).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <h3 className={titleClass}>{item.title}</h3>

                    <p className="text-[15px] leading-6 text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  {item.count ? (
                    <div className={countClass}>
                      {item.count.value.toLocaleString()}
                      <span className="text-[#D5EF25]">
                        {item.count.suffix}
                      </span>
                    </div>
                  ) : (
                    item.badge && (
                      <span className="inline-flex rounded-md bg-[#D5EF25] px-3 py-1 text-sm font-semibold text-black transition-transform duration-300 group-hover:scale-105">
                        {item.badge.text}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}