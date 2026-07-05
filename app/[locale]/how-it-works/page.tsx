import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { CheckList } from "@/components/CheckList";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const p = t.howPage;

  return (
    <main>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />

      {/* Steps */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {p.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-mono text-sm font-medium text-paper">
                    {i + 1}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {step.step}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-ink">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-fog py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 rounded-2xl bg-ink p-8 text-paper sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow !text-teal">{p.governance.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                {p.governance.title}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-fog/80">
                {p.governance.body}
              </p>
            </div>
            <ul className="space-y-3 self-center">
              {p.governance.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-fog/90"
                >
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
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What this is NOT */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="eyebrow">{p.notList.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            {p.notList.title}
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {p.notList.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-soft">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale as Locale} content={t.cta} />
    </main>
  );
}
