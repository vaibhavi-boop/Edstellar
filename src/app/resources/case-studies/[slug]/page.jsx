function page() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="grid grid-cols-[1fr_420px] gap-10">
            <div>
              <img
                src="https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/64ad5c0ce36a0585e4dc7a8b_Group%201000001896%20(1).webp"
                alt="invensis"
              />
            </div>
            <div>
              <div
                className="bg-[#3a3c7e] rounded-lg p-10 flex flex-col
"
              >
                <h2 className="text-2xl text-center mb-[10px] text-white">
                  Discover the power of managed training services
                </h2>
                <p className="mb-[10px] text-center text-white">
                  Let Edstellar handle your organization's training needs. Focus
                  on your business while we support your growth.
                </p>
                <a className="rounded-[8px] bg-[#c8e130] px-6 py-3 text-center font-medium text-[#22295a] no-underline transition-all duration-300">
                  Schedule a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
