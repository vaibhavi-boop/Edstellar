function TimeLine({ data }) {
  return (
    <section>
      <div className="container">
        <h2 className="mx-auto mb-4 max-w-[600px] text-center text-4xl font-semibold">
          {data.title}
        </h2>

        <p className="mx-auto mb-16 max-w-[650px] text-center text-gray-600">
          {data.description}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((item, index) => (
            <div
              key={item.id || index}
              className="relative flex flex-col items-center"
            >
              {index < data.steps.length - 1 && (
                <div className="absolute left-1/2 top-6 z-0 hidden h-[2px] w-full bg-[#03307d80] lg:block" />
              )}

              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#22295a] text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="mt-6 text-center">
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {data.highlight && (
          <div className="mx-auto mt-16 max-w-[850px] rounded-xl bg-[#22295a] p-8 text-white">
            <p className="leading-8">
              <span className="font-semibold">{data.highlight.title} </span>
              {data.highlight.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TimeLine;
