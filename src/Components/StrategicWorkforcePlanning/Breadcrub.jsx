"use client";

import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          {item.href ? (
            <Link
              href={item.href}
              title={item.title}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-white">
              {item.label}
              
            </span>
          )}

          {index < items.length - 1 && (
            <svg
              width="5"
              height="9"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L1 11"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}