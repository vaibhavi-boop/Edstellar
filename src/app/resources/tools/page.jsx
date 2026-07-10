import HeroSection from "@/Components/resources/HeroSection";
import { heroData } from "@/data/heroData";
import Tools from "@/data/Tools.json";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div>
      <HeroSection {...heroData.tools} />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Tools.map((item) => (
              <div
                key={item.id}
                className="flex h-full flex-col overflow-hidden bg-white border-b-[5px] border-b-[#C8E130]"
              >
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-5 inline-flex items-center justify-center gap-2.5 self-start rounded-[10px] bg-[rgba(26,63,168,0.16)] px-[10px] py-[5px]">
                    <span className="text-sm font-medium text-[#1A3FA8]">
                      Tool
                    </span>
                  </div>

                  <Link
                    href={`/resources/tools/${item.slug}`}
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
                      href={`/resources/tools/${item.slug}`}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#264CBE] px-4 py-2 font-medium text-[#264CBE] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-[#264CBE] hover:text-white"
                    >
                      <span>{item.buttonText}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
