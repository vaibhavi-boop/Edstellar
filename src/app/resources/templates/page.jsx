import Templates from "@/data/Templates.json";
import { heroData } from "@/data/heroData";
import HeroSection from "@/Components/resources/HeroSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
function Page() {
  return (
    <>
      <HeroSection {...heroData.templates} />
      <section className="py-20">
        <div className="container">
          <h2 className="text-center text-[42px] font-semibold">
            Explore Our Curated L&D Templates
          </h2>

          <p className="mx-auto mb-10 mt-4 max-w-[800px] text-center">
            Get access to extensive library features ready-to-use Excel
            templates, PDF frameworks, and online editable tools that address
            every stage of the learning lifecycle—from training needs analysis
            and skill assessments to performance evaluations and program ROI
            measurement.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Templates.map((item) => (
              <div
                key={item.id}
                className="flex h-full flex-col overflow-hidden bg-white border-b-[5px] border-b-[#C8E130]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-5 inline-flex items-center justify-center gap-2.5 self-start rounded-[10px] bg-[rgba(26,63,168,0.16)] px-[10px] py-[5px]">
                    <img
                      src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/6908313532c25dfd7d330fa8_Template%20icon-Photoroom%201.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium text-[#1A3FA8]">
                      Template
                    </span>
                  </div>

                  <Link
                    href={`/resources/templates/${item.slug}`}
                    className="block"
                  >
                    <h3 className="mt-2 text-xl font-semibold hover:text-blue-600">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-gray-600">{item.description}</p>

                  <p className="mb-4 mt-4 text-sm text-gray-500">{item.date}</p>

                  <div className="mt-auto">
                    <Link
                      href={`/resources/templates/${item.slug}`}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#264CBE] px-4 py-2 font-medium text-[#264CBE] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-[#264CBE] hover:text-white"
                    >
                      <span>Download Template</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
