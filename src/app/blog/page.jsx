import Link from "next/link";
import BlogCateRightSide from "@/Components/Blog/BlogCateRightSide";
import Tabs from "@/Components/Blog/Tabs";

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
          <img
            src="/Images/blog/Eds banner.webp"
            alt=""
            className="h-full w-auto object-cover"
          />
        </div>

        <div className="container relative z-10">
          <h1 className="mx-auto mb-4 w-full max-w-[1000px] text-center text-[40px] font-semibold text-white">
            Discover the Latest Topics on Training, L&D, Talent & Skill
            Development
          </h1>

          <p className="mx-auto max-w-[1000px] text-center text-white">
            Welcome to Edstellar, where the future of corporate training,
            learning and development takes center stage. Dive into our latest
            collection of articles, news, and featured content tailored for
            organizations, HR and L&D teams keen on advancing their talent,
            leadership and employee development strategies. From innovative
            skill-building techniques to transformative learning experiences,
            Edstellar is your premier source for insights and trends that
            empower your team to excel in today&apos;s fast-paced world. Join us
            in shaping the next generation of industry leaders.
          </p>
        </div>
      </section>
      <Tabs blogs={blogs} />

      <div className="bg-[#dbe9ff] p-4 mb-8 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:content-[''] after:bg-[linear-gradient(to_right,_#F6CF70_0%,_#255FFF_38%,_#C8E130_64%,_#BCEFC2_95%)]">
        <h2 className="text-center text-[30px]">
          Explore the Latest Blog Posts
        </h2>
      </div>
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* First column: blog cards */}
            <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2">
              {blogs.map((blog) => (
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

                    <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                      {blog.fieldData.name}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-gray-600">
                      {blog.fieldData.description}
                    </p>

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

            {/* Second column: categories */}
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <BlogCateRightSide />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
