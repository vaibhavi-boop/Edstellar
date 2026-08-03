"use client";

import { useEffect, useRef, useState } from "react";
import WhyEdstellarCards from "./WhyEdstellarCards";
import AlsoFromEdstellar from "./AlsoFromEdstellar";

/* =========================================
   COUNT-UP STAT
   Parses "10,000+" -> prefix "", target 10000, suffix "+", and animates
   from 0 to target once the stat scrolls into view.
========================================= */

function CountUpStat({ value }) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const ref = useRef(null);
  const [display, setDisplay] = useState(match ? "0" : value);

  useEffect(() => {
    if (!match || !ref.current) return;

    const target = parseInt(match[2].replace(/,/g, ""), 10);
    const prefix = match[1];
    const suffix = match[3];
    let animationFrame;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        observer.disconnect();

        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
          if (progress < 1) animationFrame = requestAnimationFrame(tick);
        };

        animationFrame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  if (!match) return <span ref={ref}>{value}</span>;

  return <span ref={ref}>{display}</span>;
}

/* =========================================
   EXACT DOT-GRID MAP FROM ORIGINAL HTML
========================================= */

const MAP_GRID =
  "............................#########...............................................|............................#########.....................#################.........|....#############............#######..........####.....###########################..|...####################.......####..###......#######################################|...######################......##...........######################################..|.....#....#################.............##..#################################.##....|...........##################..........###.################################...##....|............#################............###################################........|.............##############..............#################################.#........|.............############...............##...###########################..#.........|.............############...............#####...#.######################.##.........|...............########.................###############################.#...........|...............#####..##...............##############.#################.............|................####..##..............################....#############.............|..................#####..#............#################....###.#####..#.............|....................###...............#################....##...###...#.............|......................######..........################.....#....###...##............|.......................######..........##############...........###.####............|.......................########.............########............##.####.............|.......................##########...........########.............#.####.###.........|.......................###########..........########..............###....####.......|........................##########..........#######.....................###.........|........................#########............######.##.................#####........|.........................########............#####..##...............########.......|.........................#######.............#####..#...............##########......|.........................######..............#####..................##########......|.........................#####................###....................#########......|.........................####.............................................###.....##|........................####................................................#.....#.|.........................##......................................................#..|.........................##.........................................................|.........................#..........................................................";

function WorldMap() {
  const rows = MAP_GRID.split("|");
  const cols = rows[0].length;
  const rowCount = rows.length;

  return (
    <div className="ed-map w-full pointer-events-none" aria-hidden="true">
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

export default function WhyEdstellarSection({
  whyheading,
  whyStats,
  why,
  alsoFromEdstellar,
}) {
  return (
    <section
      id="why"
      className="block border-b border-[var(--rule)] bg-[var(--paper-warm)] py-20 md:py-28"
    >
      <div className="container">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-14">
          <div>
            <div className="mb-7 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
              <span className="text-[16px] text-[var(--ink)] [font-family:var(--serif)]">
                {whyheading.section.number}
              </span>

              <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
                {whyheading.section.label}
              </span>

              <span>· {whyheading.section.description}</span>
            </div>

            <h2 className="max-w-[20ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
              {whyheading.section.title.text}{" "}
              <em className="[font-family:var(--serif)]">
                {whyheading.section.title.highlight}
              </em>{" "}
              {whyheading.section.title.suffix}
            </h2>

            <p className="mt-6 max-w-[64ch] text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-[var(--muted)]">
              {whyheading.section.paragraph}
            </p>
          </div>

          <WorldMap />
        </div>

        <div className="mb-3 grid grid-cols-1 overflow-hidden rounded-[14px] border border-[var(--rule)] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {whyStats.map((stat, index) => (
            <div
              key={`${stat.value}-${index}`}
              className={`
                border-b border-[var(--rule)] px-[22px] py-[18px]
                last:border-b-0
                sm:border-r
                sm:[&:nth-child(2n)]:border-r-0
                sm:[&:nth-child(n+3)]:border-b-0
                lg:border-b-0
                lg:last:border-r-0
              `}
            >
              <strong className="block [font-family:var(--display)] text-[23px] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
                {stat.value.includes(" & ") ? (
                  <>
                    {stat.value.split(" & ")[0]}
                    <span className="mx-[1px] font-normal text-[var(--muted)]">
                      {" "}
                      &{" "}
                    </span>
                    {stat.value.split(" & ")[1]}
                  </>
                ) : (
                  <CountUpStat value={stat.value} />
                )}
              </strong>

              <span className="mt-3 block text-[9.5px] font-normal uppercase tracking-[0.11em] text-[var(--muted)] [font-family:var(--mono)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {why && <WhyEdstellarCards items={why} />}
        {alsoFromEdstellar && (
          <AlsoFromEdstellar
            heading={alsoFromEdstellar.heading}
            alsoFrom={alsoFromEdstellar.alsoFrom}
          />
        )}
      </div>
    </section>
  );
}
