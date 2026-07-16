import BlogListSection from "@/Components/Blog/BlogListSection";
import BlogMainPageCTA from "@/Components/Blog/BlogMainPageCTA";
import Tabs from "@/Components/Blog/Tabs";
import Image from "next/image";

async function getBlogs() {
  const res = await fetch("https://webflow-blog-api.vercel.app/api/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <>
      <section className="relative overflow-hidden bg-[#0f1b86] py-16">
        <div className="absolute inset-y-0 right-0">
          <Image
            src="/Images/blog/Eds banner.webp"
            alt="Banner Image"
            width={168}
            height={312}
            className="h-full w-auto object-cover"
            priority
          />
        </div>

        <div className="container relative z-10">
          <h1 className="mx-auto mb-4 w-full max-w-[1000px] text-center text-4xl font-semibold text-white">
            Discover the Latest Topics on Training, L&amp;D, Talent &amp; Skill
            Development
          </h1>

          <p className="mx-auto max-w-[1000px] text-center text-white">
            Welcome to Edstellar, where the future of corporate training,
            learning and development takes center stage. Dive into our latest
            collection of articles, news, and featured content tailored for
            organizations, HR and L&amp;D teams keen on advancing their talent,
            leadership and employee development strategies. From innovative
            skill-building techniques to transformative learning experiences,
            Edstellar is your premier source for insights and trends that
            empower your team to excel in today&apos;s fast-paced world.
          </p>
        </div>
      </section>

      <Tabs blogs={blogs} />

      <BlogListSection blogs={blogs} />
      <BlogMainPageCTA />
    </>
  );
}
