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
      className={`group inline-flex items-center gap-3 rounded-lg bg-[#D7F11E] px-6 py-3 text-[16px] font-medium text-black transition-all duration-300 hover:bg-gradient-to-r hover:from-[#4F7DF7] hover:to-[#2D63F2] hover:text-white ${className}`}
    >
      <span>{text}</span>

      <ArrowRight
        size={22}
        className="transition-all duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}