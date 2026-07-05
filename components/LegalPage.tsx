import { PageHero } from "@/components/PageHero";

type LegalSection = { heading: string; body: string };

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  updatedLabel,
  updated,
  reviewNote,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: readonly LegalSection[];
  updatedLabel: string;
  updated: string;
  reviewNote: string;
}) {
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} lead={intro} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {updatedLabel}: {updated}
          </p>
          <div className="mt-8 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-semibold text-ink">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-text-soft">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 rounded-xl border border-line bg-fog px-5 py-4 text-sm text-muted">
            {reviewNote}
          </p>
        </div>
      </section>
    </main>
  );
}
