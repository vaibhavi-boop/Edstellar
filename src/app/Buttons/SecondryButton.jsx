"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SecondryButton({
  text,
  href = "#",
  title = "",
  className = "",
}) {
  return (
    <Link
  href={href}
  title={title}
  className={`group inline-flex items-center gap-3 rounded-lg bg-[#22295a00] border border-[#fff] px-6 py-3 text-[16px] text-white font-medium transition-all duration-400 hover:bg-[#2563EB] hover:border-[#2563EB] ${className}`}
>
  <span>{text}</span>
  <ArrowRight
    size={22}
    className="transition-all duration-400 group-hover:translate-x-1"
  />
</Link>
  );
}