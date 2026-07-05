import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { CheckList } from "@/components/CheckList";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function WhatWeDoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const p = t.whatPage;

  return (
    <main>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="space-y-5">
            {p.blocks.map((block, i) => (
              <div
                key={block.title}
                className="grid gap-6 rounded-2xl border border-line bg-white p-7 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-9"
              >
                <span className="font-mono text-2xl font-medium text-teal-deep sm:w-12">
                  0{i + 1}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                    {block.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-text-soft">
                    {block.body}
                  </p>
                  <CheckList items={block.points} className="mt-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale as Locale} content={t.cta} />
    </main>
  );
}
