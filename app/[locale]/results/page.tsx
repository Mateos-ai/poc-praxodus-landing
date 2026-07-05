import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const p = t.resultsPage;

  return (
    <main>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* KPI band */}
          <dl className="grid grid-cols-2 gap-5 rounded-2xl border border-line bg-white p-7 sm:grid-cols-4 sm:p-9">
            {p.kpis.map((kpi) => (
              <div key={kpi.label} className="flex flex-col">
                <dt className="font-mono text-3xl font-medium tabular-nums text-teal">
                  {kpi.value}
                </dt>
                <dd className="mt-1 text-sm text-text-soft">{kpi.label}</dd>
              </div>
            ))}
          </dl>

          {/* Verticals */}
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {p.verticals.map((v) => (
              <div
                key={v.sector}
                className="flex flex-col rounded-2xl border border-line bg-white p-7"
              >
                <h2 className="text-lg font-semibold text-ink">{v.sector}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-soft">
                  {v.body}
                </p>
                <div className="mt-5 flex gap-6 border-t border-line pt-4">
                  {v.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="font-mono text-xl font-medium text-teal-deep">
                        {m.value}
                      </span>
                      <span className="text-xs text-muted">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Highlight */}
          <div className="mt-5 grid gap-6 rounded-2xl bg-ink p-8 text-paper sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10 sm:p-10">
            <div>
              <p className="eyebrow !text-teal">{p.highlight.eyebrow}</p>
              <p className="mt-2 font-mono text-4xl font-medium tabular-nums text-teal sm:text-5xl">
                {p.highlight.value}
              </p>
            </div>
            <p className="text-lg leading-relaxed text-fog/80">
              {p.highlight.body}
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-sm text-muted">{p.footnote}</p>
        </div>
      </section>

      <CtaBand locale={locale as Locale} content={t.cta} />
    </main>
  );
}
