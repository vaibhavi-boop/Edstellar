"use client";

import { useInView } from "react-intersection-observer";

const DELAY_CLASS = {
  0: "",
  1: "delay-[80ms]",
  2: "delay-150",
  3: "delay-[240ms]",
  4: "delay-300",
};

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] ${DELAY_CLASS[delay] || ""} ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
