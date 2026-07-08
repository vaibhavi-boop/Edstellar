import Link from "next/link";
import { notFound } from "next/navigation";
import courses from "@/data/course.json";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const categoryCourses = courses.filter(
    (course) => course.category === category
  );

  if (categoryCourses.length === 0) {
    notFound();
  }

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-4xl font-bold capitalize mb-10">
        {category.replace(/-/g, " ")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoryCourses.map((course) => (
          <Link
            key={course.slug}
            href={`/corporate-training/${category}/${course.slug}`}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">
              {course.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {course.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}