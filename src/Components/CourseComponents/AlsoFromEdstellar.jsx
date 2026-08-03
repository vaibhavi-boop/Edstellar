function AlsoFromEdstellar({ heading, alsoFrom }) {
  return (
    <div className="container">
      <div className="mt-12 border-t border-[var(--rule)] pt-8">
        <span className="mb-4 block text-[9.5px] font-normal uppercase tracking-[0.16em] text-[var(--muted)] [font-family:var(--mono)]">
          {heading}
        </span>
        <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-[var(--rule-strong)] bg-white sm:grid-cols-2 lg:grid-cols-3">
          {alsoFrom.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={item.href}
              className="group flex items-start gap-[13px] border-b border-r-0 border-[var(--rule-strong)] px-5 py-4 transition-colors duration-200 last:border-b-0 hover:bg-[var(--paper-warm)] sm:border-r [@media(min-width:640px)_and_(max-width:1023px)]:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(n+5)]:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0"
            >
              <div className="min-w-0 flex-1">
                <span className="block text-[14px] text-[var(--ink)] transition-colors duration-200 group-hover:text-[#6f8c0f]">
                  {item.title}
                </span>

                <span className="mt-1 block max-w-[30ch] text-[12px] leading-[1.5] text-[var(--muted)]">
                  {item.description}
                </span>
              </div>

              <span
                aria-hidden="true"
                className="flex-none pt-1 text-[13px] text-[var(--muted-soft)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#6f8c0f]"
              >
                →
              </span>
            </a>
          ))}
        </div>{" "}
      </div>
    </div>
  );
}

export default AlsoFromEdstellar;
