import Link from "next/link";
function BlogMainPageCTA() {
  return (
    <div>
      <div class="bg-[#3a3c7e] p-5 md:p-10 flex flex-col">
        <div className="container">
          <div className="max-w-[500px] flex flex-col mx-auto items-center">
            <h2 className="text-2xl text-center mb-[10px] text-white">
              Contact Us
            </h2>
            <p className="mb-[20px] text-center text-white">
              Partner with Edstellar to transform your skill development
              initiatives with our corporate training and coaching programs.
            </p>
            <Link
              class="rounded-[8px] bg-[#c8e130] px-6 py-3 text-center font-medium text-[#22295a] no-underline transition-all duration-300"
              href="/"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogMainPageCTA;
