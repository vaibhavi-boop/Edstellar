import {
  why,
  whyStats,
  alsoFromEdstellar,
} from "@/data/mlMonitoringData";

/* =========================================
   EXACT DOT-GRID MAP FROM ORIGINAL HTML
========================================= */

const MAP_GRID =
  "............................#########...............................................|............................#########.....................#################.........|....#############............#######..........####.....###########################..|...####################.......####..###......#######################################|...######################......##...........######################################..|.....#....#################.............##..#################################.##....|...........##################..........###.################################...##....|............#################............###################################........|.............##############..............#################################.#........|.............############...............##...###########################..#.........|.............############...............#####...#.######################.##.........|...............########.................###############################.#...........|...............#####..##...............##############.#################.............|................####..##..............################....#############.............|..................#####..#............#################....###.#####..#.............|....................###...............#################....##...###...#.............|......................######..........################.....#....###...##............|.......................######..........##############...........###.####............|.......................########.............########............##.####.............|.......................##########...........########.............#.####.###.........|.......................###########..........########..............###....####.......|........................##########..........#######.....................###.........|........................#########............######.##.................#####........|.........................########............#####..##...............########.......|.........................#######.............#####..#...............##########......|.........................######..............#####..................##########......|.........................#####................###....................#########......|.........................####.............................................###.....##|........................####................................................#.....#.|.........................##......................................................#..|.........................##.........................................................|.........................#..........................................................";


/* =========================================
   WORLD MAP COMPONENT
========================================= */

function WorldMap() {
  const rows = MAP_GRID.split("|");
  const cols = rows[0].length;
  const rowCount = rows.length;

  return (
    <div
      className="ed-map w-full pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${cols} ${rowCount}`}
        preserveAspectRatio="xMidYMid meet"
        className="block h-auto w-full"
      >
        {rows.map((row, rowIndex) =>
          [...row].map((cell, colIndex) => {
            if (cell !== "#") return null;

            return (
              <circle
                key={`${rowIndex}-${colIndex}`}
                cx={colIndex + 0.5}
                cy={rowIndex + 0.5}
                r="0.38"
                fill="var(--navy)"
                opacity="0.22"
              />
            );
          }),
        )}
      </svg>
    </div>
  );
}


/* =========================================
   WHY EDSTELLAR SECTION
========================================= */

export default function WhyEdstellarSection() {
  return (
    <section
      id="why"
      className="block border-b border-[var(--rule)] bg-[var(--paper-warm)] py-20 md:py-28"
    >
      <div className="container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-14">

          {/* Left Content */}

          <div>
            <div className="mb-7 flex items-baseline gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
              <span className="text-[16px] italic text-[var(--ink)] [font-family:var(--serif)]">
                IX
              </span>

              <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
                Provider
              </span>

              <span>· The delivery model</span>
            </div>

            <h2 className="max-w-[20ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
              Why choose Edstellar for{" "}
              <em className="[font-family:var(--serif)]">
                ML monitoring
              </em>{" "}
              training.
            </h2>

            <p className="mt-6 max-w-[64ch] text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-[var(--muted)]">
              Edstellar is a corporate training provider delivering
              instructor-led ML Model Monitoring programs to teams of every
              size, from a single squad to an entire engineering organization,
              on-site, virtual, or blended, with hands-on programs built and
              led by practitioners.
            </p>
          </div>

          {/* Exact Dotted World Map */}

          <WorldMap />

        </div>


        {/* =====================================
            STATS
        ===================================== */}

        <div className="mb-3 grid grid-cols-1 overflow-hidden rounded-[10px] border border-[var(--rule)] bg-white sm:grid-cols-2 lg:grid-cols-4">

          {whyStats.map((stat, index) => (
            <div
              key={`${stat.value}-${index}`}
              className={`
                border-b border-[var(--rule)] p-5
                sm:border-r
                sm:last:border-b-0
                sm:nth-child-2:border-r-0
                lg:border-b-0
                lg:last:border-r-0
              `}
            >
              <strong className="block text-[clamp(20px,2vw,26px)] font-bold leading-none tracking-[-0.03em] text-[var(--ink)]">
                {stat.value}
              </strong>

              <span className="mt-3 block text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)] [font-family:var(--mono)]">
                {stat.label}
              </span>
            </div>
          ))}

        </div>


        {/* =====================================
            WHY EDSTELLAR CARDS
        ===================================== */}

        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">

          {why.map((item, index) => (
            <article
              key={`${item.t}-${index}`}
              className="group rounded-[12px] border border-[var(--rule)] bg-white p-6 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-28px_rgba(10,22,40,0.45)]"
            >

              {/* Icon */}

              <div className="mb-5 flex h-[36px] w-[36px] items-center justify-center rounded-[8px] bg-[var(--lime)]/20 text-[16px] transition-transform duration-300 group-hover:scale-105">
                <span aria-hidden="true">
                  {item.ic}
                </span>
              </div>


              {/* Title */}

              <h3 className="mb-2 text-[14px] font-bold tracking-[-0.02em] text-[var(--ink)]">
                {item.t}
              </h3>


              {/* Description */}

              <p className="text-[11px] leading-[1.55] text-[var(--muted)]">
                {item.d}
              </p>

            </article>
          ))}

        </div>


        {/* =====================================
            ALSO FROM EDSTELLAR
        ===================================== */}

        <div className="mt-12 border-t border-[var(--rule)] pt-8">

          <span className="mb-4 block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted)] [font-family:var(--mono)]">
            Also from Edstellar
          </span>


          <div className="grid grid-cols-1 overflow-hidden rounded-[10px] border border-[var(--rule)] bg-white sm:grid-cols-2 lg:grid-cols-3">

            {alsoFromEdstellar.map((item, index) => (
              <a
                key={`${item.title}-${index}`}
                href={item.href}
                className="group relative border-b border-[var(--rule)] p-5 transition-colors duration-200 hover:bg-[var(--paper-warm)]"
              >

                <div className="pr-8">

                  <span className="block text-[11px] font-semibold text-[var(--ink)]">
                    {item.title}
                  </span>

                  <span className="mt-2 block max-w-[30ch] text-[9px] leading-[1.5] text-[var(--muted)]">
                    {item.description}
                  </span>

                </div>


                {/* Arrow */}

                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 text-[11px] text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>

              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}