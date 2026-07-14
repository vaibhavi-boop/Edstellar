import { heroData } from "@/data/heroData";
import HeroSection from "@/Components/resources/HeroSection";
import Breadcrumbs from "@/Components/GlobalComponents/Breadcrumbs";
import brouchures from "@/data/brouchures.json";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div>
      <HeroSection {...heroData.brouchures} />
      <section>
        <div className="container">
          <div className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Brouchures" },
              ]}
            />
          </div>
          <h2 className="text-center text-[36px] font-semibold">
            Explore Our Brochures
          </h2>
          <p className="mx-auto mb-10 mt-4 max-w-[800px] text-center">
            Browse our collection of downloadable brochures to discover
            Edstellars corporate training, consulting, and workforce development
            solutions. Gain detailed insights into our services, methodologies,
            and capabilities to make informed learning and business decisions.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brouchures.map((item) => (
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
                      href={`/resources/brouchures/${item.slug}`}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#264CBE] px-4 py-2 font-medium text-[#264CBE] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-[#264CBE] hover:text-white"
                    >
                      <span>View Brouchure</span>
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
