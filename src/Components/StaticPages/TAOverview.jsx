import Image from "next/image";
import * as Icons from "lucide-react";

function TalentAssessmentOverview({ data }) {
  return (
    <section className="bg-[#eef0f4] py-16">
      <div className="container space-y-10">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-[#00000030] bg-white"
          >
            {/* Top */}
            <div
              className={`grid items-center lg:grid-cols-2 ${
                section.image.position === "right"
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />

              <div className="p-10">
                <h2 className="mb-6 text-3xl font-semibold">{section.title}</h2>

                <p className="leading-8">{section.description}</p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid border-t border-[#00000020] md:grid-cols-3">
              {section.cards.map((feature, i) => {
                const Icon = Icons[feature.icon];

                return (
                  <div
                    key={i}
                    className="flex gap-4 border-r border-[#00000020] p-8 last:border-r-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF7B7]">
                      {Icon && (
                        <Icon
                          className="h-6 w-6 text-[#22295a]"
                          strokeWidth={2}
                        />
                      )}
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {feature.title}
                      </h3>

                      <p>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TalentAssessmentOverview;
