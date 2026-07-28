export default function QuoteForm() {
  return (
    <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-[20px] border border-[#D9D9D9] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="border-b border-[#D9D9D9] bg-[#F5F2EA] px-6 py-5">
        <h2 className="text-center text-[24px] font-bold text-[#101828]">
          Request a training quote
        </h2>
      </div>

      {/* Form */}
      <form className="space-y-4 p-6">
        {/* Name & Job Title */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Jane Okafor"
              className="h-11 w-full rounded-xl border border-[#D0D5DD] px-4 text-sm outline-none transition focus:border-[#2E2F72]"
            />
          </div>

          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Head of ML"
              className="h-11 w-full rounded-xl border border-[#D0D5DD] px-4 text-sm outline-none transition focus:border-[#2E2F72]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="jane@company.com"
            className="h-11 w-full rounded-xl border border-[#D0D5DD] px-4 text-sm outline-none transition focus:border-[#2E2F72]"
          />
        </div>

        {/* Company */}
        <div>
          <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your company"
            className="h-11 w-full rounded-xl border border-[#D0D5DD] px-4 text-sm outline-none transition focus:border-[#2E2F72]"
          />
        </div>

        {/* Country & Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Country
            </label>

            <select className="h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-sm outline-none focus:border-[#2E2F72]">
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Phone
            </label>

            <input
              type="tel"
              placeholder="+91 201-555-0101"
              className="h-11 w-full rounded-xl border border-[#D0D5DD] px-4 text-sm outline-none transition focus:border-[#2E2F72]"
            />
          </div>
        </div>

        {/* Requirements */}
        <div>
          <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
            Your Training Requirements
          </label>

          <textarea
            rows={4}
            placeholder="Team size, delivery format, your production stack, preferred timing."
            className="w-full resize-none rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm outline-none transition focus:border-[#2E2F72]"
          />
        </div>

        {/* Checkbox */}
        <label className="flex items-start gap-2 text-[12px] text-[#667085]">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-gray-300"
          />

          <span>
            I agree to be contacted about this request, per the{" "}
            <a href="#" className="font-medium text-[#2E2F72] underline">
              privacy policy
            </a>
            .
          </span>
        </label>

        {/* Button */}
        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#0F172A] text-[15px] font-semibold text-[#D9FF4F] transition hover:bg-[#1E293B]"
        >
          Request my quote →
        </button>

        {/* Footer */}
        <p className="text-center text-[12px] text-[#98A2B3]">
          A specialist replies within one business day.
        </p>
      </form>
    </div>
  );
}
