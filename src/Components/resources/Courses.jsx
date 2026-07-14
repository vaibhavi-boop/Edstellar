import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      title: "ML Model Monitoring Training",
      slug: "https://www.edstellar.com/course/ml-model-monitoring-training",
    },
    {
      title: "Real-Time Feature Engineering Training",
      slug: "https://www.edstellar.com//course/real-time-feature-engineering-training",
    },
    {
      title: "AI Decision Support Systems Training",
      slug: "https://www.edstellar.com//course/ai-decision-support-systems-training",
    },
    {
      title: "Supply Chain Decision Making Training",
      slug: "https://www.edstellar.com//course/supply-chain-decision-making-training",
    },
    {
      title: "Decision-Making in a Crisis Training",
      slug: "https://www.edstellar.com//course/decision-making-in-a-crisis-training",
    },
    {
      title: "Employee Experience (EX) Design and Measurement Training",
      slug: "https://www.edstellar.com//course/employee-experience-ex-design-and-measurement-training",
    },
    {
      title: "LLM Observability Training",
      slug: "https://www.edstellar.com//course/llm-observability-training",
    },
    {
      title: "Streaming Data Mesh Training",
      slug: "https://www.edstellar.com//course/streaming-data-mesh-training",
    },
    {
      title: "Multi-Modal Vector Search Training",
      slug: "https://www.edstellar.com//course/multi-modal-vector-search-training",
    },
    {
      title: "PostgreSQL Performance Tuning Training",
      slug: "https://www.edstellar.com//course/postgresql-performance-tuning-training",
    },
    {
      title: "Platform Engineering Training",
      slug: "https://www.edstellar.com//course/platform-engineering-training",
    },
    {
      title: "Cloud-Native Java Performance Engineering Training",
      slug: "https://www.edstellar.com//course/cloud-native-java-performance-engineering-training",
    },
    {
      title: "Building Internal Developer Platforms (IDP) Training",
      slug: "https://www.edstellar.com//course/building-internal-developer-platforms-idp-training",
    },
    {
      title: "Micro-Frontends Architecture Training",
      slug: "https://www.edstellar.com//course/micro-frontends-architecture-training",
    },
    {
      title: "Change Management for Generative AI Adoption Training",
      slug: "https://www.edstellar.com//course/change-management-for-generative-ai-adoption-training",
    },
    {
      title: "AI-Augmented Leadership Communication Training",
      slug: "https://www.edstellar.com//course/ai-augmented-leadership-communication-training",
    },
    {
      title: "LangChain Application Development Training",
      slug: "https://www.edstellar.com//course/langchain-application-development-training",
    },
    {
      title: "Human Factors Engineering Training",
      slug: "https://www.edstellar.com//course/human-factors-engineering-training",
    },
    {
      title: "IoT for Fleet Management Training",
      slug: "https://www.edstellar.com//course/iot-for-fleet-management-training",
    },
    {
      title: "Quantitative Investment Decision Training",
      slug: "https://www.edstellar.com//course/quantitative-investment-decision-training",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="container">
        <h2 className="text-3xl md:text-[42px] mb-10 md: font-semibold leading-[1.15]">
          Explore our Latest Corporate Training Courses
        </h2>

        <div className="flex flex-wrap gap-3">
          {courses.map((courses, index) => (
            <Link
              key={index}
              href="{courses.slug}"
              className="rounded-md border border-[#b9cbf4] bg-white px-4 py-3 text-[16px] font-medium leading-none text-[#111827] transition-all duration-300 hover:border-[#7da2f7] hover:bg-[#edf3ff]"
            >
              {courses.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
