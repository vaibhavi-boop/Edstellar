import Templates from "@/data/Templates.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/Components/GlobalComponents/Breadcrumbs";

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
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Templates", href: "/resources/templates" },
                { label: template.title },
              ]}
            />
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
