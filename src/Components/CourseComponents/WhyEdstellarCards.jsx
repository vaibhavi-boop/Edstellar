function WhyEdstellarCards({ items }) {
  return (
    <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={`${item.t}-${index}`}
          className="group rounded-[16px] border border-[var(--rule)] bg-white p-[28px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_22px_46px_-28px_rgba(10,22,40,.5)]"
        >
          {/* Icon */}
          <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-[rgba(200,241,53,.18)] text-[20px] transition-transform duration-300 group-hover:scale-105">
            <span aria-hidden="true">{item.ic}</span>
          </div>

          <h3 className="mb-2 [font-family:var(--display)] text-[18px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
            {item.t}
          </h3>

          <p className="text-[14px] leading-[1.6] text-[var(--muted)]">
            {item.d}
          </p>
        </article>
      ))}
    </div>
  );
}

export default WhyEdstellarCards;
