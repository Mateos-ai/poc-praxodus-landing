export function Wordmark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={`font-display font-bold tracking-[0.03em] ${
        onDark ? "text-paper" : "text-ink"
      } ${className}`}
    >
      PRAX<span className="text-teal">ODUS</span>
    </span>
  );
}
