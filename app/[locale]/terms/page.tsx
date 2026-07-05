import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const l = t.legal;

  return (
    <LegalPage
      eyebrow={t.footer.columns[2].heading}
      title={l.terms.title}
      intro={l.terms.intro}
      sections={l.terms.sections}
      updatedLabel={l.updatedLabel}
      updated={l.updated}
      reviewNote={l.reviewNote}
    />
  );
}
