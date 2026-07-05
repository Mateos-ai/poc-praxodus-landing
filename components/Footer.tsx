import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import type { Dictionary } from "@/lib/dictionaries";
import { localeHref, type Locale } from "@/lib/i18n";

export function Footer({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary["footer"];
}) {
  const year = 2026;
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link href={`/${locale}`} className="text-2xl" aria-label="Praxodus home">
              <Wordmark onDark />
            </Link>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-slate">
              {content.tagline}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-fog/70">
              {content.dataNote}
            </p>
          </div>

          {content.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-teal">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => {
                  const isInternal = link.href.startsWith("/");
                  const href = localeHref(locale, link.href);
                  const cls =
                    "text-sm text-fog/80 transition-colors hover:text-paper";
                  return (
                    <li key={link.label}>
                      {isInternal ? (
                        <Link href={href} className={cls}>
                          {link.label}
                        </Link>
                      ) : (
                        <a href={href} className={cls}>
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Praxodus. {content.rights}
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Tel Aviv · Israel
          </p>
        </div>
      </div>
    </footer>
  );
}
