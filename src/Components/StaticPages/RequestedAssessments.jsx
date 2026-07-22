function RequestedAssessments({ data }) {
  return (
    <section className="bg-[#2d2f6b]">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-4xl font-semibold text-white">
            {data.title}
          </h2>
          <p className="text-white">{data.description}</p>
        </div>

        <div>
          {data.items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border bg-[#ffffff0a] text-white px-[24px] py-[20px] border-[#ffffff14] mb-4"
            >
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div
                    className="w-[48px] h-[48px] bg-[#b8dda154] text-[#c8e130] rounded-lg text-center 
content-center text-xl font-bold"
                  >
                    {item.id}
                  </div>
                  <div>
                    <h3 className=" text-xl font-medium">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>

                <div>
                  {item.count ? (
                    <div className="text-xl font-bold">
                      {item.count.value}
                      <span className="text-[#c8e130]">
                        {item.count.suffix}
                      </span>
                    </div>
                  ) : item.badge ? (
                    <span className="inline-block rounded text-black bg-[#c8e130] py-1 px-2 text-sm font-bold">
                      {item.badge.text}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RequestedAssessments;
