import HeroSection from "@/Components/resources/HeroSection";
import { heroData } from "@/data/heroData";
import Link from "next/link";
const resources = [
  {
    title: "Tools",
    description:
      "Interactive assessments and diagnostic tools for L&D professionals.",
    count: "9",
    slug: "resources/tools",
  },
  {
    title: "Templates",
    description:
      "Ready-to-use templates for training plans, needs analysis, and more.",
    count: "13",
    slug: "resources/templates",
  },
  {
    title: "Brochures",
    description: "Detailed service brochures and program overviews.",
    count: "9",
  },
  {
    title: "Case Studies",
    description: "Real-world client success stories and measurable outcomes.",
    count: "9",
  },
];

function page() {
  return (
    <>
      <HeroSection {...heroData.resources} />

      <section className="bg-[#fbfbf8] py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {resources.map((item) => (
              <Link
                key={item.title}
                href={item.slug || "#"}
                className="group block"
              >
                <div className="flex h-full flex-col rounded-2xl border border-[#d9ddd8] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#264CBE] hover:shadow-xl md:p-10">
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <p className="rounded-full bg-[#EEF3FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#264CBE]">
                      {item.count} Resources
                    </p>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#264CBE]/20 text-[#264CBE] transition-all duration-300 group-hover:bg-[#264CBE] group-hover:text-white">
                      →
                    </span>
                  </div>

                  <h3 className="mb-4 text-[28px] font-semibold leading-tight text-[#00142d]">
                    {item.title}
                  </h3>

                  <p className="mb-8 text-[17px] leading-7 text-[#425066]">
                    {item.description}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-3 text-sm font-semibold text-[#264CBE] transition-all duration-300 group-hover:gap-5">
                    Explore Resources
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
