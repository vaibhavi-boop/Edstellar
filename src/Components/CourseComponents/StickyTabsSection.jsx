"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyTabs({ data = {} }) {
  const { logo, tabs } = data;

  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || "");
  const scrollRef = useRef(null);
  const buttonRefs = useRef({});

  const handleClick = (id) => {
    setActiveTab(id);

    const section = document.getElementById(id);

    if (section) {
      const offset =
        [...document.querySelectorAll(".sticky")]
          .filter((el) => el.getBoundingClientRect().bottom > 0)
          .reduce((sum, el) => sum + el.offsetHeight, 0) || 65;

      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = () => {
    const firstSectionId = tabs?.[0]?.id;

    if (!firstSectionId) return;

    setActiveTab(firstSectionId);

    const section = document.getElementById(firstSectionId);

    if (section) {
      const offset =
        [...document.querySelectorAll(".sticky")]
          .filter((el) => el.getBoundingClientRect().bottom > 0)
          .reduce((sum, el) => sum + el.offsetHeight, 0) || 65;

      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  // Scroll-spy: highlight whichever section's tab is currently in view, and
  // keep that tab scrolled into view within the (possibly overflowing) bar.
  useEffect(() => {
    if (!tabs?.length) return;

    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (!hit) return;

        setActiveTab(hit.target.id);

        const btn = buttonRefs.current[hit.target.id];
        const sn = scrollRef.current;
        if (!btn || !sn) return;
        const left = btn.offsetLeft;
        const right = left + btn.offsetWidth;
        if (
          left < sn.scrollLeft + 16 ||
          right > sn.scrollLeft + sn.clientWidth - 16
        ) {
          sn.scrollTo({ left: Math.max(0, left - 24), behavior: "smooth" });
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [tabs]);

  if (!tabs?.length) return null;

  return (
    <div
      className="px-4 sm:px-6 lg:px-15 sticky top-0 z-[880] border-y border-t-[rgba(10,22,40,0.12)]
border-b-[rgba(10,22,40,0.12)]
bg-[rgba(250,250,247,0.94)]
backdrop-blur-[14px]
shadow-[0_10px_24px_-22px_rgba(10,22,40,0.5)]"
    >
      <div className="flex h-[50px] items-center sm:h-[60px] lg:h-[50px]">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="mr-3 shrink-0 cursor-pointer sm:mr-5 lg:mr-8"
          aria-label="Go to Home"
        >
          <img
            src={logo}
            alt="Edstellar"
            width={110}
            height={32}
            className="h-6 w-auto sm:h-7 lg:h-8"
          />
        </button>

        {/* Tabs */}
        <div
          ref={scrollRef}
          className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain scrollbar-hide"
        >
          <div className="flex min-w-max items-center gap-0.5 lg:min-w-0 lg:w-full lg:justify-between lg:gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  buttonRefs.current[tab.id] = el;
                }}
                onClick={() => handleClick(tab.id)}
                className={`rounded-lg px-3 py-1.5 text-[11.5px] font-medium whitespace-nowrap transition-all duration-300 sm:px-3.5 sm:py-2 sm:text-[12px] lg:px-4 ${
                  activeTab === tab.id
                    ? "bg-[#E8F59A] font-medium text-[#1F2937]"
                    : "text-[#0a162899] hover:bg-[#F2F0E8] hover:text-[#0A1628]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
