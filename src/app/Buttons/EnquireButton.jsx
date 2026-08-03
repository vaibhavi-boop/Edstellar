import Link from "next/link";

export default function EnquireButton({
  href,
  text,
  title,
  id,
  className = "",
}) {
  return (
    <Link
      id={id}
      href={href}
      title={title}
      className={`rounded-full border border-[var(--rule-strong)] bg-white px-[27px] py-[15px] text-sm font-bold text-[var(--ink)] transition-all duration-300 hover:border-[var(--navy)] ${className}`}
    >
      {text}
    </Link>
  );
}