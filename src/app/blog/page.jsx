import Link from "next/link";

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
      <section className="bg-[#0f1b86] py-16">
        <div className="container">
          <h1 className="mx-auto mb-4 w-full max-w-[1000px] text-center text-[40px] font-semibold text-white">
            Discover the Latest Topics on{" "}
            <span className="font-serif italic">
              Training, L&D, Talent & Skill Development
            </span>
          </h1>

          <p className="mx-auto w-full max-w-[1000px] text-center text-white">
            Welcome to Edstellar, where the future of corporate training,
            learning and development takes center stage. Dive into our latest
            collection of articles, news, and featured content tailored for
            organizations, HR and L&D teams keen on advancing their talent,
            leadership and employee development strategies.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-[36px]">
            Our Recent <span className="font-serif italic">Blogs</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.fieldData.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.fieldData["cover-photo"]?.url}
                    alt={blog.fieldData.name}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <p className="mb-3 text-sm font-medium text-blue-600">
                    {new Date(
                      blog.fieldData["post-published-date"],
                    ).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>

                  <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                    {blog.fieldData.name}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-gray-600">
                    {blog.fieldData.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="text-sm font-medium text-gray-500">
                      {blog.fieldData.views} Views
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
        </div>
      </section>
    </>
  );
}
