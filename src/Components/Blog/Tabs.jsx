"use client";
import Breadcrumbs from "../GlobalComponents/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    id: "Editor-Pick",
    label: "Editor's Pick",
  },
  {
    id: "Most-Popular",
    label: "Most Popular",
  },
];

export default function Tabs({ blogs = [] }) {
  const [activeTab, setActiveTab] = useState("Editor-Pick");

  const publishedBlogs = blogs.filter(
    (blog) =>
      blog.fieldData?.slug &&
      blog.fieldData?.name &&
      !blog.isDraft &&
      !blog.isArchived,
  );

  // First blog for the large featured card
  const featuredBlog = publishedBlogs[0];

  // Remaining blogs for tabs
  const remainingBlogs = publishedBlogs.slice(1);

  const editorPickBlogs = remainingBlogs.slice(1, 5);
  const mostPopularBlogs = remainingBlogs.slice(6, 10);

  const activeBlogs =
    activeTab === "Editor-Pick" ? editorPickBlogs : mostPopularBlogs;

  const featuredData = featuredBlog?.fieldData;

  const featuredImage =
    featuredData?.["cover-photo"]?.url ||
    featuredData?.["og-image"]?.url ||
    "/Images/blog/blog-placeholder.webp";

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_570px] lg:gap-16">
          {/* Featured blog */}
          <div>
            <Breadcrumbs
              className="mb-2"
              items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
            />
            <h2 className="mb-10 text-2xl font-semibold">
              Featured Blog Posts
            </h2>

            {featuredBlog ? (
              <Link
                href={`/blog/${featuredData.slug}`}
                className="group block overflow-hidden rounded-xl bg-white shadow-[4px_4px_13px_#0000001f]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={featuredImage}
                    loading="eager"
                    width={600}
                    height={340}
                    alt={
                      featuredData?.["cover-photo"]?.alt ||
                      featuredData?.name ||
                      "Featured blog"
                    }
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  {featuredData?.["post-published-date"] && (
                    <p className="mb-3 text-sm font-medium text-[#1b40a9]">
                      {new Date(
                        featuredData["post-published-date"],
                      ).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  )}

                  <h3 className="text-2xl font-semibold leading-snug text-[#00142d] transition group-hover:text-[#1b40a9]">
                    {featuredData.name}
                  </h3>

                  {featuredData.description && (
                    <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                      {featuredData.description}
                    </p>
                  )}

                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#1b40a9]">
                    Read More
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ) : (
              <p className="text-gray-500">No featured blog found.</p>
            )}
          </div>

          {/* Tabs */}
          <div className="overflow-hidden rounded-xl bg-white shadow-[4px_4px_13px_#0000001f]">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 border-b-2 px-5 py-4 text-center font-medium transition ${
                    activeTab === tab.id
                      ? "border-[#1b40a9] bg-gradient-to-b from-transparent via-[#acc8ff80] via-[68%] to-[#acc8ff] text-[#00142d]"
                      : "border-transparent text-gray-500 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="px-6">
              {activeBlogs.map((blog) => {
                const blogData = blog.fieldData;

                const imageUrl =
                  blogData["cover-photo"]?.url ||
                  blogData["og-image"]?.url ||
                  "/Images/blog/blog-placeholder.webp";

                return (
                  <Link
                    key={blog.id}
                    href={`/blog/${blogData.slug}`}
                    className="group grid grid-cols-[120px_minmax(0,1fr)] gap-4 border-b border-gray-200 py-5 last:border-b-0"
                  >
                    <Image
                      src={imageUrl}
                      alt={
                        blogData["cover-photo"]?.alt || blogData.name || "Blog"
                      }
                      width={120}
                      height={85}
                      className="h-[85px] w-[120px] rounded-md object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="line-clamp-2 font-semibold leading-6 text-[#00142d] group-hover:text-[#1b40a9]">
                        {blogData.name}
                      </h3>

                      {blogData.description && (
                        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                          {blogData.description}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}

              {activeBlogs.length === 0 && (
                <p className="py-8 text-center text-gray-500">
                  No blogs found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
