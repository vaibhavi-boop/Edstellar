"use client";

export default function TalentAssessmentCardSection({ data }) {
  return (
    <section className="bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mb-8 max-w-[750px]">
          <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#3A3A3A] lg:text-[36px]">
            {data.heading}
          </h2>

          <p className="text-[16px] leading-7 text-[#3A3A3A]">
            {data.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.services.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-[#E8E8E8] bg-white transition-all duration-300 hover:shadow-[0px_2px_5px_rgba(0,0,0,0.2)]"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3 flex items-start gap-3">
                  <span className="mt-[2px] h-6 w-[4px] rounded-full bg-[#c8e130]" />

                  <h3 className="text-[20px] font-semibold leading-[1.3] text-[#1a1a2a]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[16px] leading-7 text-[#555555]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}