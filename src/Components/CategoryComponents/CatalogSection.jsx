"use client";

import { useMemo, useState } from "react";
import { catalogSection, catalogDomains, catalogRoles, catalogPrograms } from "@/data/aiDomainData";

const PER_PAGE = 9;
const domainLabel = Object.fromEntries(catalogDomains);
const roleLabel = Object.fromEntries(catalogRoles);

function haystack(p) {
  return [p.t, p.d, domainLabel[p.dom] || "", p.roles.map((r) => roleLabel[r] || "").join(" "), p.h || "", p.isNew ? "proposed" : ""]
    .join(" ")
    .toLowerCase();
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors ${
        active
          ? "border-[var(--ink)] bg-[var(--ink)] text-white"
          : "border-[var(--rule)] bg-white text-[var(--ink)]/75 hover:border-[var(--rule-strong)]"
      }`}
    >
      {children}
    </button>
  );
}

function ProgramCard({ p }) {
  const body = (
    <>
      <span className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted-soft)]">{domainLabel[p.dom]}</span>
        {p.isNew && (
          <span className="rounded-full bg-[var(--lime-soft)] px-2 py-[2px] font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink)]">
            Proposed
          </span>
        )}
      </span>
      <span className="mt-2 block text-[15.5px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--ink)] [font-family:var(--display)]">
        {p.t}
      </span>
      <span className="mt-2 block text-[13px] leading-[1.6] text-[var(--muted)]">{p.d}</span>
      <span className="mt-4 flex items-center gap-1.5 text-[11.5px] text-[var(--muted-soft)]">
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
          <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4.6V8l2.4 1.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {p.h || "Duration on request"}
      </span>
    </>
  );

  if (p.isNew) {
    return (
      <a
        href="#apply"
        className="flex flex-col rounded-[14px] border border-[var(--rule)] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[var(--rule-strong)] hover:shadow-[0_20px_42px_-26px_rgba(10,22,40,.5)]"
      >
        {body}
      </a>
    );
  }

  return (
    <a
      href={`https://www.edstellar.com/course/${p.u}`}
      className="flex flex-col rounded-[14px] border border-[var(--rule)] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[var(--rule-strong)] hover:shadow-[0_20px_42px_-26px_rgba(10,22,40,.5)]"
    >
      {body}
    </a>
  );
}

export default function CatalogSection() {
  const { eyebrow, heading, paragraph, emptyText, allHref } = catalogSection;
  const [domain, setDomain] = useState("all");
  const [role, setRole] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalogPrograms.filter(
      (p) =>
        (domain === "all" || p.dom === domain) &&
        (role === "all" || p.roles.includes(role)) &&
        (!q || haystack(p).includes(q)),
    );
  }, [domain, role, query]);

  const pages = Math.max(1, Math.ceil(matches.length / PER_PAGE));
  const safePage = Math.min(page, pages);
  const slice = matches.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const setFilter = (setter) => (v) => {
    setter(v);
    setPage(1);
  };

  return (
    <section id="catalog" className="border-b border-[var(--rule)] bg-white py-20 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            {eyebrow.italic}
          </span>
          <span>· {eyebrow.text}</span>
          <span className="ml-auto normal-case tracking-normal text-[var(--muted-soft)]">{eyebrow.count}</span>
        </div>

        <h2 className="mb-4 max-w-[24ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
          {heading.normal} <em className="[font-family:var(--serif)] italic">{heading.italic}</em> {heading.after}
        </h2>

        <p className="mb-8 max-w-[70ch] text-[15px] leading-[1.7] text-[var(--muted)]">{paragraph}</p>

        <div className="mb-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--muted-soft)]">Discipline</span>
            {catalogDomains.map(([v, l]) => (
              <Chip key={v} active={domain === v} onClick={() => setFilter(setDomain)(v)}>
                {l}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--muted-soft)]">Role</span>
            {catalogRoles.map(([v, l]) => (
              <Chip key={v} active={role === v} onClick={() => setFilter(setRole)(v)}>
                {l}
              </Chip>
            ))}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-y border-[var(--rule)] py-3">
          <p className="text-[13px] text-[var(--muted)]">
            {matches.length
              ? `Showing ${(safePage - 1) * PER_PAGE + 1}–${(safePage - 1) * PER_PAGE + slice.length} of ${matches.length}`
              : "No program matches this selection"}
          </p>
          <div className="flex items-center gap-2 rounded-full border border-[var(--rule-strong)] bg-white px-3.5 py-1.5">
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-[var(--muted-soft)]">
              <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.6 10.6 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setFilter(setQuery)(e.target.value)}
              placeholder="Search programs"
              className="w-[180px] bg-transparent text-[13px] outline-none placeholder:text-[var(--muted-soft)]"
            />
          </div>
        </div>

        {slice.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {slice.map((p) => (
              <ProgramCard key={p.t} p={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-[16px] border border-[var(--rule)] bg-[var(--paper-warm)] p-8 text-center">
            <p className="mx-auto max-w-[52ch] text-[14px] leading-[1.7] text-[var(--muted)]">{emptyText}</p>
            <a href="#apply" className="mt-5 inline-block rounded-full bg-[var(--ink)] px-5 py-2.5 text-[13px] font-medium text-white">
              Ask for a match →
            </a>
          </div>
        )}

        {pages > 1 && (
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Program pages">
            <button
              type="button"
              disabled={safePage === 1}
              onClick={() => setPage(safePage - 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--rule-strong)] disabled:opacity-30"
            >
              ←
            </button>
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                aria-current={n === safePage ? "page" : undefined}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-[12.5px] ${
                  n === safePage ? "bg-[var(--ink)] text-white" : "text-[var(--ink)]/70 hover:bg-[var(--paper-warm)]"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              disabled={safePage === pages}
              onClick={() => setPage(safePage + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--rule-strong)] disabled:opacity-30"
            >
              →
            </button>
            <a href={allHref} className="ml-3 text-[12.5px] font-medium text-[#6f8c0f] underline-offset-2 hover:underline">
              All 130 →
            </a>
          </nav>
        )}
      </div>
    </section>
  );
}
