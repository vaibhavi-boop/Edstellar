import { Section } from "lucide-react";
import Templates from "@/data/Templates.json";
import Link from "next/link";

function page() {
  return (
    <>
      <section className="bg-[#0a1628]">
        <div className="container">
          <h1 className="text-white text-center text-[42px]">
            Free L&D Tools and Templates
          </h1>
          <p className="text-white text-center max-w-[800px] mx-auto">
            Streamline training management, accelerate employee development, and
            measure learning impact with ready-to-use Excel, PDF, and online
            editable tools.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center text-[42px]">
            Explore Our Curated L&D Templates
          </h1>
          <p className="text-center max-w-[800px] mx-auto mb-10">
            Get access to extensive library features ready-to-use Excel
            templates, PDF frameworks, and online editable tools that address
            every stage of the learning lifecycle—from training needs analysis
            and skill assessments to performance evaluations and program ROI
            measurement. Whether you're an HR professional, L&D specialist, or
            training manager, our collection of free tools and templates is
            designed to streamline your workflows, enhance training
            effectiveness, and deliver measurable business impact. We regularly
            update our collection with new resources to keep you ahead of
            industry trends and emerging L&D best practices.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {Templates.map((item) => (
              <div key={item.id} className="bg-white ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 h-52 w-full object-cover"
                />
                <div className="p-4 ">
                  <span className="text-sm text-blue-600">{item.category}</span>
                  <Link
                    key={item.title}
                    href={`/resources/templates/${item.slug}`}
                    className="block"
                  >
                    <h3 className="mt-2 text-xl font-semibold hover:text-blue-600">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-gray-600">{item.description}</p>

                  <p className="mt-4 text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
