import { heroData } from "@/data/heroData";
import HeroSection from "@/Components/resources/HeroSection";
import Breadcrumbs from "@/Components/GlobalComponents/Breadcrumbs";
import Link from "next/link";

function page() {
  return (
    <div>
      <HeroSection {...heroData.casestudies} />
      <section>
        <div className="container">
          <div className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Case Studies" },
              ]}
            />
          </div>
          <h2 className="text-center text-[36px] font-semibold">
            Customer Success Stories
          </h2>
          <p className="mx-auto mb-10 mt-4 max-w-[800px] text-center">
            Discover real-world examples of how leading organizations have
            transformed employee learning, optimized training delivery, and
            accelerated business growth with Edstellar.
          </p>

          <div className="grid grid-cols-3">
            <Link
              href="/resources/case-studies/invensis-technologies-uses-edstellar-to-streamline-training-process"
              className="relative h-[450px]  overflow-hidden rounded-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/6488601fa3922c655ff29f72_6486c0b425fd30c156dd130e_Group%201000001901.webp')",
              }}
            >
              {/* Optional dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-end p-8">
                <h2 className="max-w-xl text-xl font-semibold leading-tight text-white">
                  Invensis Technologies Uses Edstellar to Streamline Training
                  Process
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
