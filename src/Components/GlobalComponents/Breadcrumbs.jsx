import Link from "next/link";

function Breadcrumbs({ items }) {
  return (
    <nav className="flex flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}

          {index !== items.length - 1 && (
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.66667L5 4.33333L1 1"
                stroke="black"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
