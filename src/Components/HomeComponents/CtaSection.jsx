import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden border-b-[1.5px] border-rule bg-navy py-24 text-paper lg:py-[120px]"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(199,204,242,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,204,242,0.05)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,#000_30%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[30%] -right-[15%] h-[780px] w-[780px] rounded-full bg-[radial-gradient(circle,rgba(59,79,232,0.22),rgba(59,79,232,0)_60%)] blur-[20px]"
      />

      <div className="container relative grid items-center gap-10 lg:grid-cols-[1.2fr_auto] lg:gap-12">
        <Reveal as="div">
          <div className="mb-6 flex items-center gap-3.5 font-mono text-[10.5px] tracking-[0.22em] text-lime uppercase">
            <span className="h-px w-9 bg-lime" />
            An open invitation
          </div>
          <h3 className="font-serif text-[clamp(34px,4vw,56px)] leading-[1.04] font-normal tracking-[-0.014em] text-paper text-balance">
            Bring us your <em className="text-lime italic">hardest capability problem.</em>
            <br />
            We will bring you a measurable plan in fourteen days.
          </h3>
          <p className="mt-4.5 max-w-[520px] text-[15.5px] leading-[1.6] font-light text-paper/72">
            A 30-minute briefing with a Principal — no pitch deck, no funnel,
            no obligation. Bring a CHRO, a CLO, or your Head of L&amp;D; we
            will calibrate to the room.
          </p>
        </Reveal>

        <Reveal as="div" delay={1} className="flex flex-wrap gap-3.5">
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 rounded-full border border-lime bg-lime px-7 py-4 text-sm font-semibold text-navy transition-colors duration-200 hover:border-lime-soft hover:bg-lime-soft"
          >
            Schedule a briefing
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M1 5h12m0 0L9 1m4 4L9 9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="square"
              />
            </svg>
          </a>
          <a
            href="#platform"
            className="inline-flex items-center gap-2.5 rounded-full border border-paper/42 px-7 py-4 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-paper hover:text-navy"
          >
            Explore the platform
          </a>
        </Reveal>
      </div>
    </section>
  );
}
