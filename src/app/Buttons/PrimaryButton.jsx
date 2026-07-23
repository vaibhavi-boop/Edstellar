"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrimaryButton({
  text,
  href = "#",
  title = "",
  className = "",
}) {
  return (
    <Link
      href={href}
      title={title}
      className={`group inline-flex items-center gap-3 rounded-lg border border-[#c8e130] bg-[#c8e130] px-5 py-2 lg:px-6 lg:py-3 text-[16px] font-medium text-[#3a3a3a] transition-all duration-400 hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white ${className}`}
    >
      <span>{text}</span>

      <ArrowRight
        size={22}
        className="transition-all duration-400 group-hover:translate-x-1"
      />
    </Link>
  );
}