import Tools from "@/data/Tools.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ToolsPage({ params }) {
  const { slug } = await params;

  const tool = Tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }
  return (
    <main className="bg-[#fbfbf8]">
      {/* Hero */}
      <section className="border-b border-[#d9ddd8] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              {/* Breadcrumb */}
              <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#5b6475]">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/resources">Resources</Link>
                <span>/</span>
                <Link href="/resources/tools">Tools</Link>
                <span>/</span>
                <span className="font-medium text-[#00142d]">{tool.title}</span>
              </div>

              <span className="rounded-full bg-[#e9f7db] px-4 py-1 text-sm font-semibold text-[#5a8f00]">
                {tool.category}
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-tight text-[#00142d]">
                {tool.title}
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#425066]">
                {tool.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#6b7280]">
                <span>📅 {tool.date}</span>
                <span>⏱ {tool.readingTime}</span>
                <span>👤 {tool.author.name}</span>
              </div>

              <button className="mt-10 rounded-lg bg-[#c8f135] px-8 py-4 font-semibold text-[#00142d] transition hover:bg-[#b8de2f]">
                {tool.buttonText}
              </button>
            </div>

            <div>
              <img
                src={tool.thumbnail}
                alt={tool.title}
                className="mb-4  w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="mb-8 text-4xl font-bold text-[#00142d]">Overview</h2>

          <div className="space-y-6 text-lg leading-8 text-[#425066]">
            <p>{tool.content.intro}</p>
            <p>{tool.content.why}</p>
            <p>{tool.content.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#00142d]">
            Key Features
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tool.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-[#d9ddd8] bg-[#fbfbf8] p-8"
              >
                <div className="mb-4 text-3xl">✓</div>

                <h3 className="text-xl font-semibold text-[#00142d]">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#00142d]">
            Benefits
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {tool.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-xl border border-[#d9ddd8] bg-white p-6"
              >
                <span className="text-2xl text-[#95c11f]">✔</span>

                <p className="text-lg text-[#425066]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#00142d]">
            How It Works
          </h2>

          <div className="space-y-8">
            {tool.howItWorks.map((step) => (
              <div
                key={step.step}
                className="flex gap-6 rounded-xl border border-[#d9ddd8] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c8f135] text-xl font-bold">
                  {step.step}
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-[#00142d]">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-[#425066]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#00142d]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {tool.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-[#d9ddd8] bg-white p-6"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#00142d]">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-[#425066]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#00142d] py-24 text-center text-white">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>

          <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-white/80">
            Discover how this tool can help your organization improve learning,
            performance, and business outcomes.
          </p>

          <button className="mt-10 rounded-lg bg-[#c8f135] px-10 py-4 font-semibold text-[#00142d] transition hover:bg-[#b8de2f]">
            {tool.buttonText}
          </button>
        </div>
      </section>
    </main>
  );
}
