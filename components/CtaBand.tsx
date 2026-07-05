import { forwardArrow, type Locale } from "@/lib/i18n";

export type CtaContent = {
  eyebrow: string;
  title: string;
  lead: string;
  button: string;
  reassurance: string;
};

export function CtaBand({
  locale,
  content,
  id = "contact",
  href = "mailto:hello@praxodus.com",
}: {
  locale: Locale;
  content: CtaContent;
  id?: string;
  href?: string;
}) {
  const arrow = forwardArrow(locale);
  return (
    <section id={id} className="scroll-mt-16 bg-ink py-24 text-paper">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{content.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fog/80">
          {content.lead}
        </p>
        <div className="mt-9 flex justify-center">
          <a
            href={href}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-4 text-base font-semibold text-[#04231f] transition-colors hover:bg-teal-bright"
          >
            {content.button} <span aria-hidden>{arrow}</span>
          </a>
        </div>
        <p className="mt-5 font-mono text-xs uppercase tracking-wider text-slate">
          {content.reassurance}
        </p>
      </div>
    </section>
  );
}
