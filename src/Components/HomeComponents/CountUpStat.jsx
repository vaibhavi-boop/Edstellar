"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CountUpStat({ target, suffix = "", label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="font-display text-[52px] leading-none font-normal tracking-[-0.022em] text-ink [font-variant-numeric:tabular-nums]">
        {inView ? (
          <CountUp start={0} end={target} duration={1.4} preserveValue />
        ) : (
          0
        )}
        {suffix && <span className="font-normal text-ink/60 italic">{suffix}</span>}
      </div>
      <div className="font-mono text-[10.5px] tracking-[0.18em] text-navy-soft uppercase">
        {label}
      </div>
    </div>
  );
}
