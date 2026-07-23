import Image from "next/image";

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
import BlogApiContent from "@/Components/article/BlogApiContent";

import { cleanBlogHtml } from "@/app/utils/cleanBlogHtml";

async function getBlog(slug) {
  try {
    const response = await fetch(
      `http://187.127.140.202:8081/api/v2/resources/blog/${encodeURIComponent(
        slug,
      )}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data?.resource || null;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#2D3BC8]">
        <div className="px-5 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">404</h1>

          <p className="text-white/70">Blog not found</p>

          <p className="mt-2 break-all text-sm text-white/70">Slug: {slug}</p>
        </div>
      </main>
    );
  }

  const title = blog.title || "Blog";

  const description = blog.excerpt || "";

  const category =
    blog.categories
      ?.map((item) => {
        if (typeof item === "string") {
          return item;
        }

        return item?.name || "";
      })
      .filter(Boolean)
      .join(", ") || "";

  const authorName = blog.presenter_name || "";

  /*
    Confirm this field is really the author's image.

    If your API has presenter_image_url or author_image_url,
    use that instead of hero_image_url.
  */
  const authorAvatar =
    blog.presenter_image_url ||
    blog.author_image_url ||
    blog.hero_image_url ||
    "";

  const updatedOn = blog.published_at ? blog.published_at.split("T")[0] : "";

  const readTime = blog.read_time_minutes
    ? `${blog.read_time_minutes} min read`
    : "";

  const content = cleanBlogHtml(blog.body_html || "");

  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 text-white md:py-28"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/672af632823a23f66a00034a_Rectangle%2028584.svg')",
        }}
      >
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-6 text-center">
          {category && (
            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
              {category}
            </span>
          )}

          <h1 className="mx-auto mb-4 mt-6 max-w-[900px] text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto max-w-[900px] text-base leading-7 text-white/85 md:text-lg">
              {description}
            </p>
          )}

          <div className="mx-auto mt-12 max-w-2xl border-y border-white/10 py-6">
            <div className="flex items-center justify-center gap-4">
              {authorAvatar && (
                <Image
                  src={authorAvatar}
                  alt={authorName || "Blog author"}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
              )}

              {(authorName || updatedOn) && (
                <div className="text-left">
                  {authorName && (
                    <p className="text-base">
                      by <span className="font-medium">{authorName}</span>
                    </p>
                  )}

                  {updatedOn && (
                    <p className="mt-1 text-sm font-medium text-white/80">
                      Updated On {updatedOn}
                    </p>
                  )}
                </div>
              )}
            </div>

            {readTime && (
              <p className="mt-6 text-sm text-white/80">{readTime}</p>
            )}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="container">
          <div className="p-4">
            <Breadcrumbs
              items={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Blog",
                  href: "/blog",
                },
                {
                  label: title,
                },
              ]}
            />
          </div>
        </div>
      </div>

      {content && (
        <section className="bg-white py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 lg:grid-cols-[200px_minmax(0,1fr)_270px]">
            <aside className="hidden lg:block">
              <TableOfContents />
            </aside>

            <BlogApiContent content={content} />

            <aside className="relative hidden h-full lg:block">
              <div className="mb-4 h-[16.6%]">
                <div className="sticky top-20">
                  <TrainingCard />
                </div>
              </div>

              <div className="mb-4 h-[16.6%]">
                <div className="sticky top-20">
                  <TrainingCatalogCTA />
                </div>
              </div>

              <div className="mb-4 h-[16.6%]">
                <div className="sticky top-20">
                  <CoachingCTA />
                </div>
              </div>

              <div className="mb-4 h-[16.6%]">
                <div className="sticky top-20">
                  <SkillMatrixCTA />
                </div>
              </div>

              <div className="mb-4 h-[16.6%]">
                <div className="sticky top-20">
                  <BlogTrainingCTA />
                </div>
              </div>

              <div className="mb-4 h-[16.6%]">
                <div className="sticky top-20">
                  <RelatedPost />
                </div>
              </div>
            </aside>
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
