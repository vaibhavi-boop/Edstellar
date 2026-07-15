"use client";

import Link from "next/link";
import blogTags from "@/data/blogTags.json";

export default function BlogCateRightSide({
  searchTerm,
  onSearchChange,
  onClearSearch,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="rounded-[8px] bg-white p-8 shadow-[4px_4px_13px_4px_#0000001f]">
      <div className="mx-auto w-full">
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="blog-search" className="sr-only">
            Search blogs
          </label>

          <div className="flex overflow-hidden rounded-[8px] border border-[#d9ddd8] focus-within:border-[#0f1b86]">
            <input
              id="blog-search"
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search blogs..."
              className="min-w-0 flex-1 bg-white px-4 py-3 text-sm text-[#00142d] outline-none placeholder:text-[#64748b]"
            />

            <button
              type="submit"
              className="bg-[#0f1b86] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0a1366]"
            >
              Search
            </button>
          </div>
        </form>

        {searchTerm.trim() && (
          <button
            type="button"
            onClick={onClearSearch}
            className="mb-6 text-sm font-medium text-[#0f1b86] underline underline-offset-4"
          >
            Clear search
          </button>
        )}

        <h2 className="mb-5 text-2xl font-semibold text-[#00142d]">
          Blog Topics
        </h2>

        <div className="flex flex-wrap gap-3">
          {blogTags.map((tag) => (
            <Link
              key={tag.id}
              href={`/blog/category/${tag.slug}`}
              title={`Click Here to View ${tag.title} Related Articles`}
              className="rounded-[8px] border border-[#d9ddd8] bg-white px-4 py-2 text-[12px] font-medium text-[#00142d] transition-all duration-300 hover:border-[#c8e130] hover:bg-[#c8e130]"
            >
              {tag.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
