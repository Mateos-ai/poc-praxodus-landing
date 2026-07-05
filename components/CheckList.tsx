export function CheckList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-text-soft">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="mt-0.5 shrink-0 text-teal"
          >
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
