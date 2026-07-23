"use client";

import { startTransition, useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".blog-content h2, .blog-content h3",
    );

    const usedIds = new Set();

    const items = Array.from(elements).map((heading, index) => {
      const text = heading.textContent?.trim() || `Heading ${index + 1}`;

      const baseId =
        heading.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-");

      let uniqueId = baseId || `heading-${index}`;

      let count = 1;

      while (usedIds.has(uniqueId)) {
        uniqueId = `${baseId}-${count}`;
        count++;
      }

      usedIds.add(uniqueId);
      heading.id = uniqueId;

      // Keeps the heading visible below a sticky header
      heading.style.scrollMarginTop = "110px";

      return {
        id: uniqueId,
        text,
        level: heading.tagName.toLowerCase(),
      };
    });

    startTransition(() => {
      setHeadings(items);
    });
  }, []);

  if (!headings.length) return null;

  return (
    <aside className="toc-wrapper sticky top-24 h-[80vh] w-[200px] min-w-[200px] self-start overflow-y-auto">
      <h3 className="mb-5 text-[16px] font-medium leading-5 text-[#1B40A9]">
        Content
      </h3>

      <nav>
        {headings.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block border-l-2 border-transparent px-2 py-[5px] text-[12px] leading-4 text-[#1d1d1d] transition-all hover:border-l-black hover:bg-[rgba(41,98,255,0.1)] ${
              item.level === "h3" ? "ml-3" : ""
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
