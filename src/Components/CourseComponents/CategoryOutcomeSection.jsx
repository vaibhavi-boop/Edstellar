"use client";

export default function CategoryOutcomeSection({ data }) {
  return (
    <section className="relative overflow-hidden bg-[#07162C] text-white">
      <div className="container">

      {/* Right Rings */}
      <div className="pointer-events-none absolute right-[-320px] top-[275px] hidden xl:block">

        <div className="h-[640px] w-[640px] rounded-full border-[26px] border-[#294C99] flex items-center justify-center">

          <div className="h-[540px] w-[540px] rounded-full border-[26px] border-[#30466C] flex items-center justify-center">

            <div className="h-[440px] w-[440px] rounded-full border-[26px] border-[#30466C] flex items-center justify-center">

            </div>

          </div>

        </div>

      </div>

      <div >

        {/* Left Content */}
        <div className="max-w-[720px]">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">

            <p className="font-serif text-[16px] italic">
              {data.eyebrow.left}
            </p>

            <span className="text-[#7F8DA3]">•</span>

            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8C98AA]">
              {data.eyebrow.right}
            </p>

          </div>

          {/* Heading */}
          <h2 className="mb-5 max-w-[680px] text-[30px] font-bold leading-[1.04] tracking-[-0.04em] lg:text-[40px]">

            {data.heading.line1}

            <br />

            {data.heading.line2}{" "}

            <span className="font-serif font-semibold italic">
              {data.heading.italic}
            </span>

          </h2>

          {/* Description */}
          <p className="max-w-[750px] text-[16px] leading-[1.85] text-[#B1BAC9]">
            {data.description}
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mt-12 lg:mt-10">

            <div className="relative ">
                      {data.tracks.map((section, sectionIndex) => (
            <div key={sectionIndex} className="relative pb-8">

            {/* Vertical line for this section */}
            <div
              className={`absolute left-[6px] top-[26px] w-px bg-[#3B4B66] ${
                section.items.length > 1 ? "h-[150px]" : "h-[120px]"
              }`}
            />

              {/* Category */}
              <div className="relative mb-4 flex items-center">

                {/* Category Label */}
                <p className="ml-7 font-mono text-[10px] font-semibold uppercase tracking-[0.34em] text-[#fafaf780]">
                  {section.category}
                </p>

              </div>

              {/* Items */}
              <div className="ml-7">

                {section.items.map((item, index) => (

                  <div
                    key={index}
                    className={`relative ${
                      index !== section.items.length - 1 ? "pb-8" : ""
                    }`}
                  >

                    {/* Item Dot */}
                    <span
                      className={`absolute -left-[29px] top-[6px] h-[14px] w-[14px] rounded-full border-2 ${
                        item.active
                          ? "border-[#D7F11E] bg-[#D7F11E]"
                          : "border-[#707C93] bg-[#07162C]"
                      }`}
                    />

                    {/* Title */}
                    <h3 className="mb-1.5 text-[18px] font-semibold leading-none text-white">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-3 max-w-[600px] text-[12px] leading-[1.85] text-[#AEB8C8]">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">

                        {item.tags.map((tag, tagIndex) => (

                          <span
                            key={tagIndex}
                            className="rounded-[4px] border border-[#566684] bg-[#152643] px-[8px] py-[4px] font-mono text-[10px] tracking-[0.04em] text-[#EDF3FF]"
                          >
                            {tag}
                          </span>

                        ))}

                      </div>
                    )}

                  </div>

                ))}

              </div>

            </div>
          ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-0 max-w-[700px]">

          <p className="text-[14px] leading-[1.9] text-[#8F9AAF]">
            {data.footer}
          </p>

        </div>

      </div>
     </div>
    </section>
  );
}