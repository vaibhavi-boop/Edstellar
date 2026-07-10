import Templates from "@/data/Templates.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TemplatePage({ params }) {
  const { slug } = await params;

  const template = Templates.find((item) => item.slug === slug);

  if (!template) {
    notFound();
  }

  return (
    <section>
      <main className="container">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-x-2">
            <Link href="/">Home</Link> &#10140;
            <Link href="/resources">Resources</Link> &#10140;
            <Link href="/resources/templates">Templates</Link> &#10140;
            <p className="">{template.title}</p>
            <h1 className="mb-6 text-4xl font-semibold">{template.title}</h1>
            <p className="whitespace-pre-line text-lg leading-8">
              {template.content}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={template.image}
              alt={template.title}
              className="mb-4  w-full object-cover"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
