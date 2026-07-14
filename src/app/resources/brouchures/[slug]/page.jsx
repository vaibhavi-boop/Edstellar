import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import brouchures from "@/data/brouchures.json";

export async function generateStaticParams() {
  return brouchures.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const brouchure = brouchures.find((item) => item.slug === slug);

  if (!brouchure) {
    return {
      title: "Brochure Not Found",
    };
  }

  return {
    title: brouchure.title,
    description: brouchure.description,
  };
}

export default async function BrouchureDetailPage({ params }) {
  const { slug } = await params;

  const brouchure = brouchures.find((item) => item.slug === slug);

  if (!brouchure) {
    notFound();
  }

  return (
    <main className="bg-[#fbfbf8]">
      <section className="relative min-h-[500px] overflow-hidden">
        <Image
          src={brouchure.image}
          alt={brouchure.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-6 py-16 text-white">
          <p className="mb-4 text-sm uppercase tracking-[3px]">
            {brouchure.category}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            {brouchure.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8">
            {brouchure.description}
          </p>

          <div className="mt-10">
            <Link
              href={brouchure.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-[#c8e130] px-7 py-3 font-medium text-[#00142d] transition hover:bg-[#b8d020]"
            >
              {brouchure.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-semibold text-[#00142d] md:text-4xl">
          About This Brochure
        </h2>

        <p className="text-lg leading-9 text-gray-700">
          {brouchure.description}
        </p>

        <div className="mt-14 rounded-xl border border-gray-200 bg-white p-8">
          <h3 className="mb-4 text-2xl font-semibold text-[#00142d]">
            View Brochure
          </h3>

          <p className="mb-8 text-gray-600">
            Explore the complete brochure for detailed information about the
            service, its capabilities, methodology, and organizational benefits.
          </p>

          <Link
            href={brouchure.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-[#00142d] px-6 py-3 font-medium text-white transition hover:bg-[#142a45]"
          >
            {brouchure.buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}
