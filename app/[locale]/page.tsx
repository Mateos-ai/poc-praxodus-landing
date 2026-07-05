import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, forwardArrow, localeHref, type Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const arrow = forwardArrow(locale as Locale);

  return (
    <main>
        {/* ---------------- HERO ---------------- */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 80% -10%, rgba(15,166,151,0.20), transparent 55%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage:
                "linear-gradient(180deg, black, transparent 70%)",
              WebkitMaskImage:
                "linear-gradient(180deg, black, transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              {t.hero.title[0]}
              <br />
              <span className="text-teal">{t.hero.title[1]}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog/80">
              {t.hero.lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={localeHref(locale as Locale, "/contact")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-[#04231f] transition-colors hover:bg-teal-bright"
              >
                {t.hero.ctaPrimary} <span aria-hidden>{arrow}</span>
              </Link>
              <Link
                href={localeHref(locale as Locale, "/how-it-works")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-medium text-paper transition-colors hover:bg-white/5"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">
              {t.hero.stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="font-mono text-3xl font-medium tabular-nums text-teal">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-sm text-fog/60">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------------- PAINS ---------------- */}
        <section className="border-b border-line bg-paper py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">{t.pains.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              {t.pains.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-text-soft">{t.pains.lead}</p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {t.pains.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-7"
                >
                  <span className="font-mono text-4xl font-medium text-teal">
                    {item.stat}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-soft">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- WHAT WE DO ---------------- */}
        <section id="what-we-do" className="scroll-mt-16 bg-fog py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">{t.what.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              {t.what.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-text-soft">{t.what.lead}</p>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.what.items.slice(0, 4).map((item, i) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-line bg-white p-7"
                >
                  <span className="font-mono text-sm font-medium text-teal-deep">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-soft">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            {/* Governance strip */}
            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-teal/30 bg-teal-tint p-7 sm:flex-row sm:items-center sm:gap-6">
              <span className="font-mono text-sm font-medium text-teal-deep sm:w-16">
                05
              </span>
              <h3 className="text-lg font-semibold text-ink">
                {t.what.items[4].title}
              </h3>
              <p className="text-sm leading-relaxed text-text-soft sm:flex-1">
                {t.what.items[4].body}
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- HOW IT WORKS ---------------- */}
        <section
          id="how-it-works"
          className="scroll-mt-16 border-b border-line bg-paper py-24"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">{t.how.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              {t.how.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-text-soft">{t.how.lead}</p>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.how.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-line bg-white p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-mono text-sm font-medium text-paper">
                      {i + 1}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-soft">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- RESULTS ---------------- */}
        <section id="results" className="scroll-mt-16 bg-fog py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">{t.results.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              {t.results.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-text-soft">
              {t.results.lead}
            </p>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {t.results.items.map((item) => (
                <div
                  key={item.sector}
                  className="rounded-2xl border border-line bg-white p-7"
                >
                  <h3 className="text-lg font-semibold text-ink">
                    {item.sector}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-soft">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* highlight */}
            <div className="mt-5 grid gap-6 rounded-2xl bg-ink p-8 text-paper sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10 sm:p-10">
              <div>
                <p className="eyebrow !text-teal">{t.results.highlight.label}</p>
                <p className="mt-2 font-mono text-4xl font-medium tabular-nums text-teal sm:text-5xl">
                  {t.results.highlight.value}
                </p>
              </div>
              <p className="text-lg leading-relaxed text-fog/80">
                {t.results.highlight.body}
              </p>
            </div>
            <p className="mt-6 text-sm text-muted">{t.results.footnote}</p>
          </div>
        </section>

        {/* ---------------- TEAM ---------------- */}
        <section
          id="team"
          className="scroll-mt-16 border-b border-line bg-paper py-24"
        >
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <p className="eyebrow">{t.team.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {t.team.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-soft">
              {t.team.lead}
            </p>
            <Link
              href={localeHref(locale as Locale, "/team")}
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-teal-deep transition-colors hover:text-teal"
            >
              {t.team.cta} <span aria-hidden>{arrow}</span>
            </Link>
          </div>
        </section>

        {/* ---------------- FINAL CTA ---------------- */}
        <section
          id="contact"
          className="scroll-mt-16 bg-ink py-24 text-paper"
        >
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="eyebrow">{t.cta.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fog/80">
              {t.cta.lead}
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="mailto:hello@praxodus.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-4 text-base font-semibold text-[#04231f] transition-colors hover:bg-teal-bright"
              >
                {t.cta.button} <span aria-hidden>{arrow}</span>
              </a>
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-slate">
              {t.cta.reassurance}
            </p>
          </div>
        </section>
    </main>
  );
}
