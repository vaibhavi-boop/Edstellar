"use client";

export default function TimelineSection({ data }) {
  const { heading, description, timeline } = data;

  return (
    <section className="bg-[#353772]">
      <div className="container">

        <div className="mb-10">
          <h2 className="text-white text-[30px] lg:text-[36px] font-bold leading-tight mb-4">
            {heading}
          </h2>

          <p className="max-w-5xl text-[#E5E7EB] leading-7">
            {description}
          </p>
        </div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-4.5 lg:left-5.5 top-0 bottom-0 w-[3px] bg-[#ffffff1a]" />

          <div className="space-y-5">

            {timeline.map((item, index) => (

              <div
                key={index}
                className="group relative flex gap-2 lg:gap-8">

                {/* Number */}
                <div className="relative z-10">

                  <div
                    className="w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-[#4C4F87] flex items-center justify-center text-white font-semibold transition-all duration-300
                    group-hover:bg-[#D7F11E]
                    group-hover:text-black"
                  >
                    {item.number}
                  </div>

                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-lg border border-[#c5e82633] bg-[#ffffff0a] p-3 lg:p-6 transition-all duration-300 group-hover:border-[#D7F11E]"
                >
                  <div className="flex justify-between gap-6 max-lg:flex-col lg:flex-row">

                    <div className="max-w-3xl">

                      <h3 className="text-white text-xl font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[#ECECF2] leading-7 mb-2.5">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-3">

                        {item.tags.map((tag) => (

                          <span
                            key={tag}
                            className="rounded-md bg-[#ffffff14] px-3 py-1 text-xs font-semibold text-[#c8e130]"
                          >
                            ✓ {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 h-fit max-lg:self-start">
                      <span
                        className="rounded-md bg-[#c8e130] text-#3a3a3a px-3 py-1 text-xs font-semibold"
                      >
                        {item.duration}
                      </span>

                      <span
                        className="rounded-md bg-[#eef0f41a] text-white px-3 py-1 text-xs font-semibold"
                      >
                        {item.type}
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}