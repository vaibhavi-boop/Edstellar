"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "skills", label: "Skills" },
  { id: "outcomes", label: "Outcomes" },
  { id: "curriculum", label: "Curriculum" },
  { id: "audience", label: "Audience" },
  { id: "modes", label: "Modes" },
  { id: "why", label: "Why Edstellar" },
  { id: "faq", label: "FAQ" },
  { id: "apply", label: "Apply" },
];

export default function CourseSideNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden min-[1180px]:flex fixed left-[22px] top-1/2 -translate-y-1/2 z-[850] flex-col gap-[13px]"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById(s.id)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className={`group relative w-[11px] h-[11px] rounded-full border-[1.5px] transition-all duration-300 cursor-pointer ${
            active === s.id
              ? "bg-[var(--navy)] border-[var(--navy)] scale-125"
              : "border-[var(--rule-strong)] bg-transparent hover:border-[var(--navy)]"
          }`}
        >
          <span className="pointer-events-none absolute left-[22px] top-1/2 -translate-y-1/2 whitespace-nowrap [font-family:var(--mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] bg-[var(--paper)] border border-[var(--rule)] px-[9px] py-[5px] rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
