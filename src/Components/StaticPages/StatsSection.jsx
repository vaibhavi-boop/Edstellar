function StatsSection({ data }) {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div key={index} className="rounded-lg bg-[#22295a] p-8 text-white">
              <div className="mb-6 h-[2px] w-10 bg-[#c8e130]" />

              <div className="mb-3 text-5xl font-bold">
                {item.value}
                <span className="text-[#c8e130]">{item.suffix}</span>
              </div>

              <p className="text-sm leading-6">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
