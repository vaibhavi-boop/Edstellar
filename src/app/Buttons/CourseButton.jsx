import Link from "next/link";

export default function CourseButton({
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
      className={`rounded-full bg-[var(--navy)] px-[28px] py-4 text-sm font-bold text-[var(--lime)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(7,22,44,0.28)] ${className}`}
    >
      {text}
    </Link>
  );
}