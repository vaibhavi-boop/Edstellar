"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setWidth(scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[1000] h-[3px] bg-[var(--lime)] transition-[width] duration-100 ease-linear"
      style={{ width: `${width}%` }}
    />
  );
}
