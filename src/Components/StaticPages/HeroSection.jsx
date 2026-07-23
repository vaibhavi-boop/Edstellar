import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ data }) {
  return (
    <section className="bg-[#22295a] py-20">
      <div className="container">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-semibold leading-tight text-white">
              <span className="text-[#c8e130]">{data.title.highlight}</span>{" "}
              {data.title.text}
            </h1>

            <p className="mb-8 text-lg leading-8 text-white/90">
              {data.description}
            </p>

            <div className="mb-8 space-y-3">
              {data.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c8e130] text-[#22295a]">
                    ✓
                  </span>
                  <span className="text-white">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {data.actions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={
                    action.style === "primary"
                      ? "rounded-lg bg-[#c8e130] px-6 py-3 font-medium text-[#22295a]"
                      : "rounded-lg border border-white px-6 py-3 font-medium text-white"
                  }
                >
                  {action.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={520}
              height={520}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
