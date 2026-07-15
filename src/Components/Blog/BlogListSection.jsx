"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import BlogCateRightSide from "@/Components/Blog/BlogCateRightSide";

export default function BlogListSection({ blogs = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const resultsRef = useRef(null);

  const blogsPerPage = 6;

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
      const blogName = blog.fieldData?.name?.toLowerCase() || "";

      return blogName.includes(normalizedSearch);
    });
  }, [publishedBlogs, searchTerm]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const safeCurrentPage = Math.min(currentPage, Math.max(totalPages, 1));

  const paginatedBlogs = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;

    return filteredBlogs.slice(startIndex, endIndex);
  }, [filteredBlogs, safeCurrentPage]);

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const timer = setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);

    setTimeout(() => {
      scrollToResults();
    }, 50);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setCurrentPage(pageNumber);

    setTimeout(() => {
      scrollToResults();
    }, 50);
  };

  const getPageNumbers = () => {
    const pages = [];

    for (let page = 1; page <= totalPages; page++) {
      const isFirstPage = page === 1;
      const isLastPage = page === totalPages;
      const isNearCurrentPage = Math.abs(page - safeCurrentPage) <= 1;

      if (isFirstPage || isLastPage || isNearCurrentPage) {
        pages.push(page);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const firstVisibleBlog =
    filteredBlogs.length > 0 ? (safeCurrentPage - 1) * blogsPerPage + 1 : 0;

  const lastVisibleBlog = Math.min(
    safeCurrentPage * blogsPerPage,
    filteredBlogs.length,
  );

  return (
    <>
      <div
        ref={resultsRef}
        className="relative scroll-mt-16 bg-[#dbe9ff] p-4 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,_#F6CF70_0%,_#255FFF_38%,_#C8E130_64%,_#BCEFC2_95%)] after:content-['']"
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
            <div className="order-2 lg:order-1 min-w-0">
              {paginatedBlogs.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {paginatedBlogs.map((blog) => (
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
                            <p className="mt-4 line-clamp-2 text-[15px] leading-7 text-gray-600">
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

                  {totalPages > 1 && (
                    <div className="mt-12">
                      <p className="mb-4 text-center text-sm text-gray-600">
                        Showing {firstVisibleBlog}–{lastVisibleBlog} of{" "}
                        {filteredBlogs.length} articles
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <button
                          type="button"
                          disabled={safeCurrentPage === 1}
                          onClick={() => handlePageChange(safeCurrentPage - 1)}
                          className="rounded-[8px] border border-[#d9ddd8] bg-white px-4 py-2 text-sm font-medium text-[#00142d] transition hover:border-[#0f1b86] hover:bg-[#0f1b86] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#d9ddd8] disabled:hover:bg-white disabled:hover:text-[#00142d]"
                        >
                          Previous
                        </button>

                        {pageNumbers.map((pageNumber, index) => {
                          const previousPage = pageNumbers[index - 1];

                          const showDots =
                            previousPage && pageNumber - previousPage > 1;

                          return (
                            <div
                              key={pageNumber}
                              className="flex items-center gap-2"
                            >
                              {showDots && (
                                <span className="px-1 text-gray-500">...</span>
                              )}

                              <button
                                type="button"
                                onClick={() => handlePageChange(pageNumber)}
                                aria-current={
                                  safeCurrentPage === pageNumber
                                    ? "page"
                                    : undefined
                                }
                                className={`flex h-10 min-w-10 items-center justify-center rounded-[8px] border px-3 text-sm font-medium transition ${
                                  safeCurrentPage === pageNumber
                                    ? "border-[#0f1b86] bg-[#0f1b86] text-white"
                                    : "border-[#d9ddd8] bg-white text-[#00142d] hover:border-[#0f1b86] hover:bg-[#0f1b86] hover:text-white"
                                }`}
                              >
                                {pageNumber}
                              </button>
                            </div>
                          );
                        })}

                        <button
                          type="button"
                          disabled={safeCurrentPage === totalPages}
                          onClick={() => handlePageChange(safeCurrentPage + 1)}
                          className="rounded-[8px] border border-[#d9ddd8] bg-white px-4 py-2 text-sm font-medium text-[#00142d] transition hover:border-[#0f1b86] hover:bg-[#0f1b86] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#d9ddd8] disabled:hover:bg-white disabled:hover:text-[#00142d]"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
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
                    onClick={handleClearSearch}
                    className="mt-6 rounded-lg bg-[#0f1b86] px-5 py-3 font-medium text-white transition hover:bg-[#0a1366]"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>

            <aside className="order-1 lg:order-2 lg:sticky lg:top-10 lg:self-start">
              <BlogCateRightSide
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
