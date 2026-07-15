"use client";
import Link from "next/link";
import { useMemo, useState, useRef } from "react";
import BlogCateRightSide from "@/Components/Blog/BlogCateRightSide";

export default function BlogListSection({ blogs = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const resultsRef = useRef(null);

  const publishedBlogs = useMemo(() => {
    return blogs.filter(
      (blog) =>
        blog.fieldData?.slug &&
        blog.fieldData?.name &&
        !blog.isDraft &&
        !blog.isArchived,
    );
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return publishedBlogs;
    }

    return publishedBlogs.filter((blog) => {
      const fieldData = blog.fieldData || {};

      const searchableContent = [fieldData.name]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(normalizedSearch);
    });
  }, [publishedBlogs, searchTerm]);

  return (
    <>
      <div
        className="relative mb-8 bg-[#dbe9ff] p-4 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,_#F6CF70_0%,_#255FFF_38%,_#C8E130_64%,_#BCEFC2_95%)] after:content-['']"
        ref={resultsRef}
      >
        <h2 className="text-center text-[30px]">
          {searchTerm.trim()
            ? `Search Results for "${searchTerm}"`
            : "Explore the Latest Blog Posts"}
        </h2>

        {searchTerm.trim() && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1 ? "article" : "articles"} found
          </p>
        )}
      </div>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0">
              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {filteredBlogs.map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.fieldData.slug}`}
                      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={
                            blog.fieldData["cover-photo"]?.url ||
                            "/Images/blog/default-blog.webp"
                          }
                          alt={blog.fieldData.name || "Blog cover"}
                          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-6">
                        {blog.fieldData["post-published-date"] && (
                          <p className="mb-3 text-sm font-medium text-blue-600">
                            {new Date(
                              blog.fieldData["post-published-date"],
                            ).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        )}

                        <h3 className="text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                          {blog.fieldData.name}
                        </h3>

                        {blog.fieldData.description && (
                          <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-gray-600">
                            {blog.fieldData.description}
                          </p>
                        )}

                        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                          <span className="text-sm font-medium text-gray-500">
                            {blog.fieldData.views || 0} Views
                          </span>

                          <span className="flex items-center gap-2 font-semibold text-blue-700 transition-all duration-300 group-hover:gap-4">
                            Read More
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14M13 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">
                  <h3 className="text-2xl font-semibold text-[#00142d]">
                    No blogs found
                  </h3>

                  <p className="mt-3 text-gray-600">
                    No blog articles matched “{searchTerm}”.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="mt-6 rounded-lg bg-[#0f1b86] px-5 py-3 font-medium text-white transition hover:bg-[#0a1366]"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-10 lg:self-start">
              <BlogCateRightSide
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
