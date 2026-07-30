import { capability } from "@/data/mlMonitoringData";

export default function CapabilitySection() {
  return (
    <section
      id="capability"
      className="
        relative
        isolate
        overflow-hidden
        bg-[var(--navy)]
        py-[56px]
        text-[var(--paper)]
        [--r1:100px]
        [--r2:129px]
        [--r3:158px]
        [--sw:14px]
        [--ax:100%]
        [--ay:50%]
        [--a0:180deg]
        [--sweep:180deg]
      "
    >
      {/* =========================================
          RIGHT-SIDE CONCENTRIC CIRCLE MOTIF
          Matches the original HTML radial gradients
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
          rounded-[inherit]
        "
        style={{
          background: `
            radial-gradient(
              circle at var(--ax) var(--ay),
              transparent 0 var(--r1),
              rgba(146,180,234,.20) var(--r1) calc(var(--r1) + var(--sw)),
              transparent calc(var(--r1) + var(--sw))
            ),
            radial-gradient(
              circle at var(--ax) var(--ay),
              transparent 0 var(--r2),
              rgba(119,157,216,.24) var(--r2) calc(var(--r2) + var(--sw)),
              transparent calc(var(--r2) + var(--sw))
            ),
            radial-gradient(
              circle at var(--ax) var(--ay),
              transparent 0 var(--r3),
              rgba(37,95,255,.29) var(--r3) calc(var(--r3) + var(--sw)),
              transparent calc(var(--r3) + var(--sw))
            )
          `,
          maskImage:
            "conic-gradient(from var(--a0) at var(--ax) var(--ay), #000 0 var(--sweep), transparent var(--sweep))",
          WebkitMaskImage:
            "conic-gradient(from var(--a0) at var(--ax) var(--ay), #000 0 var(--sweep), transparent var(--sweep))",
        }}
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="container relative z-10">

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-[30px]
            lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)]
            lg:gap-[52px]
          "
        >

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="min-w-0">

            {/* Kicker */}

            <div
              className="
                mb-[14px]
                text-[10px]
                uppercase
                tracking-[0.17em]
                text-[var(--lime)]
                [font-family:var(--mono)]
              "
            >
              {capability.kicker}
            </div>


            {/* Heading */}

            <h2
              className="
                mb-[14px]
                max-w-[20ch]
                text-[clamp(26px,2.6vw,34px)]
                font-bold
                leading-[1.18]
                tracking-[-0.03em]
                text-[var(--paper)]
              "
            >
              {capability.title}
            </h2>


            {/* Description */}

            <p
              className="
                mb-[24px]
                max-w-[44ch]
                text-[15px]
                leading-[1.65]
                text-[rgba(250,250,247,0.7)]
              "
            >
              {capability.description}
            </p>


            {/* CTA */}

            <button
              type="button"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border-0
                bg-[var(--lime)]
                px-[24px]
                py-[12px]
                text-[13px]
                font-bold
                text-[var(--navy)]
                transition-all
                duration-200
                hover:bg-[#d3f752]
                hover:-translate-y-[1px]
                focus:outline-none
                focus:ring-2
                focus:ring-[var(--lime)]
                focus:ring-offset-2
                focus:ring-offset-[var(--navy)]
              "
            >
              {capability.cta}

              <span className="ml-[5px]" aria-hidden="true">
                →
              </span>
            </button>

          </div>


          {/* =====================================
              RIGHT CHECKLIST
          ===================================== */}

          <ul
            className="
              m-0
              grid
              list-none
              grid-cols-1
              gap-[13px]
              p-0
            "
          >
            {capability.points.map((point, index) => (
              <li
                key={`${point}-${index}`}
                className="
                  flex
                  items-start
                  gap-[12px]
                  text-[14px]
                  leading-[1.5]
                  text-[var(--paper)]
                  md:text-[15px]
                "
              >

                {/* Check Circle */}

                <span
                  aria-hidden="true"
                  className="
                    mt-[1px]
                    grid
                    h-[22px]
                    w-[22px]
                    flex-none
                    place-items-center
                    rounded-full
                    bg-[rgba(200,241,53,0.16)]
                    text-[11px]
                    text-[var(--lime)]
                  "
                >
                  ✓
                </span>


                {/* Text */}

                <span>
                  {point}
                </span>

              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}