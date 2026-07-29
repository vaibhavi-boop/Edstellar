"use client";

import { useState } from "react";

export default function StickyCourseTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || "");

  const handleClick = (id) => {
    setActiveTab(id);

    const section = document.getElementById(id);

    if (section) {
      const offset = 90; // Sticky navbar height
      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  if (!tabs?.length) return null;

  return (
    <section className="sticky top-0 z-50 border-y border-[#E5E7EB] bg-white shadow-sm">
      <div className="container">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max items-center gap-6 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                className={`rounded-xl px-5 py-2 text-[15px] font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#D8EE6A] text-[#1F2937]"
                    : "text-[#6B7280] hover:bg-[#F5F5F5] hover:text-[#111827]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}