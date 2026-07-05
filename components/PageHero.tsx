export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 80% -20%, rgba(15,166,151,0.18), transparent 55%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(180deg, black, transparent 80%)",
          WebkitMaskImage: "linear-gradient(180deg, black, transparent 80%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog/80">
          {lead}
        </p>
      </div>
    </section>
  );
}
