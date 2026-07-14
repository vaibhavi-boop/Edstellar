import Brochures from "@/data/Brochures.json";
import { notFound } from "next/navigation";

export default async function BrochurePage({ params }) {
  const { slug } = await params;

  const brochure = Brochures.find((item) => item.slug === slug);

  if (!brochure) {
    notFound();
  }

  return (
    <main className="container">
      <h1>{brochure.title}</h1>
      <p>{brochure.description}</p>
    </main>
  );
}
