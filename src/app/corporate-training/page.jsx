import Link from "next/link";
import categories from "@/data/categories.json";

export default function CorporateTrainingPage() {
  return (
    <main className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-10">
        Corporate Training
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/corporate-training/${category.slug}`}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >

            <h2 className="text-2xl font-semibold mt-4">
              {category.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}