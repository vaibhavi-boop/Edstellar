import Link from "next/link";
import blogTags from "@/data/blogTags.json";

export default function BlogTagsPage() {
  return (
    <main className="bg-[#ffffff] px-4 py-8 shadow-[4px_4px_13px_4px_#0000001f] rounded-[8px]">
      <div className="mx-auto w-full  px-6">
        <h1 className="mb-10 text-4xl font-semibold text-[#00142d]">
          Blog Topics
        </h1>

        <div className="flex flex-wrap gap-3">
          {blogTags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tag/${tag.slug}`}
              title={`Click Here to View ${tag.title} Related Articles`}
              className="rounded-[8px] border border-[#d9ddd8] bg-white p-3 text-sm font-medium text-[#00142d] transition-all duration-300 hover:border-[#c8e130] hover:bg-[#c8e130]"
            >
              {tag.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
