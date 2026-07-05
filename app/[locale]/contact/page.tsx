import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, forwardArrow, type Locale } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const p = t.contactPage;
  const arrow = forwardArrow(locale as Locale);

  return (
    <main>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {p.options.map((opt) => (
              <div
                key={opt.title}
                className="flex flex-col rounded-2xl border border-line bg-white p-7"
              >
                <h2 className="text-lg font-semibold text-ink">{opt.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-soft">
                  {opt.body}
                </p>
                <a
                  href={opt.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep transition-colors hover:text-teal"
                >
                  {opt.cta} <span aria-hidden>{arrow}</span>
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-xl border border-teal/30 bg-teal-tint px-5 py-4 text-sm text-text-soft">
            {p.dataNote}
          </p>
        </div>
      </section>
    </main>
  );
}
