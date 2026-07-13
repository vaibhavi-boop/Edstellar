import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between border-4 border-[#779dd8] gap-8 rounded-2xl bg-[#f3f6ea] px-4 py-14 text-center lg:flex-row lg:px-16 lg:text-left">
        <div className="max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold leading-tight text-[#00142d] md:text-4xl">
            Industry insights you won’t delete. Delivered to your inbox weekly.
          </h2>

          <p className="text-lg leading-8 text-[#425066]">
            Updates, tutorials, resources, and insights. Read practical tips and
            food for thoughtful action for readers at all levels.
          </p>
        </div>

        <Link
          href="/book-a-demo"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#c8e130] px-8 py-4 text-base font-medium text-[#00142d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8d120]"
        >
          Request a demo
        </Link>
      </div>
    </section>
  );
}
