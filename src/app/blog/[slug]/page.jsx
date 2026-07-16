import Image from "next/image";
import { ExternalLink } from "lucide-react";
import "@/Components/Blog/styles/BlogContent.css";
import "@/Components/Blog/styles/Games.css";
import "@/Components/Blog/styles/CoporateCompanies.css";
import "@/Components/Blog/styles/InDemandSkills.css";
import "@/Components/Blog/styles/Faq.css";
import Breadcrumbs from "@/Components/GlobalComponents/Breadcrumbs";

import TrainingCard from "@/Components/Blog/TrainingCard";
import BlogFaqScript from "@/Components/Blog/BlogFaqScript";
import TableOfContents from "@/Components/Blog/TableOfContents";
import TrainingCatalogCTA from "@/Components/Blog/TrainingCatalogCTA";
import BlogTrainingCTA from "@/Components/Blog/BlogTrainingCTA";
import CoachingCTA from "@/Components/Blog/CoachingCTA";
import SkillMatrixCTA from "@/Components/Blog/SkillMatrixCTA";
import RelatedPost from "@/Components/Blog/RelatedPost";
import LDStrategySection from "@/Components/Blog/LearningStrartergySection";
import FeaturedPostSection from "@/Components/Blog/FeaturedBlogs";
import FreeTemplatesSection from "@/Components/Blog/FreeTemplates";
import BlogCategorySection from "@/Components/Blog/BlogCategorySection";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `https://webflow-blog-api.vercel.app/api/blogs/${slug}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#2D3BC8]">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-white/70">Blog not found</p>
          <p className="text-white/70">Slug: {slug}</p>
        </div>
      </main>
    );
  }

  const response = await res.json();
  const blog = response.fieldData || response.blog?.fieldData || response;

  const title = blog.title || blog.name || "";
  const desc = blog.description;
  const category =
    blog.category ||
    blog.newFormatBlogsSections ||
    blog["primary-keyword"] ||
    "";

  const authorName =
    blog.author?.name || blog.authorName || blog["author-name"] || "";

  const authorAvatar =
    blog.author?.avatar?.url ||
    blog.author?.avatar ||
    blog.authorImage?.url ||
    blog.authorImage ||
    blog["author-image"]?.url ||
    blog["author-image"] ||
    "";

  const updatedOn =
    blog.author?.updatedOn ||
    blog.updatedDate ||
    blog["post-published-date"] ||
    blog["updated-on"] ||
    "";

  const readTime = blog.readTime || blog["read-time"] || "";

  const badgeText = blog.badgeText || blog["badge-text"] || "What's New";

  const content =
    blog.content ||
    blog.content2 ||
    blog["post-body"] ||
    blog["blog-content"] ||
    blog["main-content"] ||
    "";

  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white py-28"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/672af632823a23f66a00034a_Rectangle%2028584.svg')",
        }}
      >
        <div className="relative z-10 mx-auto max-w-5xl text-center py-6">
          {category && (
            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
              {category}
            </span>
          )}

          <h1 className="mx-auto mt-6 mb-4 max-w-[900px] text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-4clexl">
            {title}
          </h1>
          <p className="max-w-[900px]">{desc}</p>

          <div className="mx-auto mt-12 max-w-2xl border-y border-white/10 py-6">
            <div className="flex items-center justify-center gap-4">
              {authorAvatar && (
                <Image
                  src={authorAvatar}
                  alt={authorName || "Author"}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              )}

              <div className="text-left">
                {authorName && (
                  <p className="text-base">
                    by <span className="font-medium">{authorName}</span>
                  </p>
                )}

                {updatedOn && (
                  <p className="mt-1 text-sm font-medium">
                    Updated On {updatedOn?.split("T")[0]}
                  </p>
                )}
              </div>
            </div>

            {readTime && <p className="mt-6 text-sm">{readTime}</p>}
          </div>

          {badgeText && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="{container} flex h-5 w-5 items-center justify-center rounded-full bg-[#BFDB38]/30">
                <span className="h-2.5 w-2.5 rounded-full bg-[#BFDB38]" />
              </span>

              <span className="text-sm font-medium">{badgeText}</span>
              <ExternalLink className="h-4 w-4" />
            </div>
          )}
        </div>
      </section>
      <div>
        <div className="container">
          <div className="p-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: title },
              ]}
            />
          </div>
        </div>
      </div>

      {content && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_auto_270px] gap-4">
            <div className="hidden lg:block">
              <TableOfContents />
            </div>

            <div
              className="blog-content min-w-0"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />

            <div className="hidden h-full lg:block relative ">
              <div className="h-[16.6%] mb-4">
                <div className="sticky top-20">
                  <TrainingCard />
                </div>
              </div>
              <div className="h-[16.6%] mb-4">
                <div className="sticky top-20">
                  <TrainingCatalogCTA />
                </div>
              </div>
              <div className="h-[16.6%] mb-4">
                <div className="sticky top-20">
                  <CoachingCTA />
                </div>
              </div>
              <div className="h-[16.6%] mb-4">
                <div className="sticky top-20">
                  <SkillMatrixCTA />
                </div>
              </div>
              <div className="h-[16.6%] mb-4">
                <div className="sticky top-20">
                  <BlogTrainingCTA />
                </div>
              </div>
              <div className="h-[16.6%] mb-4">
                <div className="sticky top-20">
                  <RelatedPost />
                </div>
              </div>
            </div>
          </div>
          <BlogFaqScript />
        </section>
      )}

      <LDStrategySection />
      <FeaturedPostSection />
      <FreeTemplatesSection />
      <BlogCategorySection />
    </>
  );
}
