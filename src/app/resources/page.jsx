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
      <section className="bg-[#0a1628]">
        <div className="container">
          <h1 className="text-[42px] text-center text-white">Resources</h1>
        </div>
      </section>
      <section className="bg-[#fbfbf8] py-16">
        <div className="mx-auto w-full max-w-[1460px] px-6">
          <div className="grid grid-cols-1 border border-[#d9ddd8] md:grid-cols-2">
            {resources.map((item) => (
              <Link key={item.title} href={item.slug || "#"} className="block">
                <div className="group border-b border-[#d9ddd8] p-10 transition-all duration-300 hover:bg-white md:p-14 md:even:border-l md:[&:nth-child(n+3)]:border-b-0">
                  <h3 className="mb-5 text-[30px] font-semibold leading-tight text-[#00142d]">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-[18px] leading-7 text-[#425066]">
                    {item.description}
                  </p>

                  <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.35em] text-[#00142d]">
                    {item.count} Resources
                  </p>

                  <span className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.35em] text-[#00142d] transition-all duration-300 group-hover:gap-5">
                    Explore <span className="text-lg">→</span>
                  </span>
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
