"use client";

import { useState } from "react";

export default function StickyTabs({ data }) {
  const { logo, tabs } = data;

  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || "");

  const handleClick = (id) => {
    setActiveTab(id);

    const section = document.getElementById(id);

    if (section) {
      const stickyNav = document.querySelector(".sticky");
      const offset = stickyNav ? stickyNav.offsetHeight : 65;

      const top =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

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
      const stickyNav = document.querySelector(".sticky");
      const offset = stickyNav ? stickyNav.offsetHeight : 65;

      const top =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  if (!tabs?.length) return null;

  return (
    <div
      className="px-15 sticky top-0 z-[880] border-y border-t-[rgba(10,22,40,0.12)]
      border-b-[rgba(10,22,40,0.12)]
      bg-[rgba(250,250,247,0.94)]
      backdrop-blur-[14px]
      shadow-[0_10px_24px_-22px_rgba(10,22,40,0.5)]"
    >
      <div className="flex h-[65px] items-center">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="mr-8 shrink-0 cursor-pointer"
          aria-label="Go to Home"
        >
          <img
            src={logo}
            alt="Edstellar"
            width={110}
            height={32}
            className="h-8 w-auto"
          />
        </button>

        {/* Tabs */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max items-center lg:min-w-0 lg:w-full lg:justify-between">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                className={`rounded-lg px-4 py-2 text-[12px] font-medium whitespace-nowrap transition-all duration-300 ${
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