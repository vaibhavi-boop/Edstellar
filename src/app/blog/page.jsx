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

          <div className="grid grid-cols-3 gap-5">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.fieldData.slug}`}
                className="rounded-xl border p-2 transition hover:bg-gray-50"
              >
                <img
                  src={blog.fieldData["cover-photo"]?.url}
                  alt={blog.fieldData.name}
                  className="h-60 w-full rounded-lg object-cover mb-4"
                />

                <h3 className="text-xl font-semibold">{blog.fieldData.name}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {blog.fieldData.slug}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
