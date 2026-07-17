import Image from "next/image";
import Script from "next/script";
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
    `http://187.127.140.202:8081/api/v2/resources/blog/${slug}`,
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
  const blog = response.resource;

  const title = blog.title || "";
  const desc = blog.excerpt;
  const category = blog.categories?.map((c) => c.name || c).join(", ") || "";

  const authorName = blog.presenter_name || "";
  const authorAvatar = blog.hero_image_url || "";

  const updatedOn = blog.published_at || "";

  const readTime = blog.read_time_minutes
    ? `${blog.read_time_minutes} min read`
    : "";

  const content = blog.body_html || "";
  

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
          <p className="max-w-[900px] mx-auto">{desc}</p>

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
