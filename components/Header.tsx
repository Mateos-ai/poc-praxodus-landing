"use client";

import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { localeHref, type Locale } from "@/lib/i18n";
import { asset } from "@/lib/config";

type NavContent = {
  items: readonly { label: string; href: string }[];
  cta: string;
  menu: string;
  close: string;
};

export function Header({ locale, nav }: { locale: Locale; nav: NavContent }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center gap-2"
          aria-label="Praxodus home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/logo.png")}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <Wordmark className="text-xl" />
        </Link>

        <nav className="ms-auto hidden items-center gap-7 lg:flex">
          {nav.items.map((item) => (
            <Link
              key={item.href}
              href={localeHref(locale, item.href)}
              className="text-sm font-medium text-text-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-0">
          <LanguageSwitcher locale={locale} className="hidden sm:block" />
          <Link
            href={localeHref(locale, "/contact")}
            className="hidden rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-[#04231f] transition-colors hover:bg-teal-bright sm:inline-block"
          >
            {nav.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-ink hover:bg-fog lg:hidden"
            aria-expanded={open}
            aria-label={open ? nav.close : nav.menu}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {nav.items.map((item) => (
              <Link
                key={item.href}
                href={localeHref(locale, item.href)}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-text-soft hover:bg-fog hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3 border-t border-line pt-4">
              <Link
                href={localeHref(locale, "/contact")}
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-teal px-4 py-2.5 text-center text-sm font-semibold text-[#04231f]"
              >
                {nav.cta}
              </Link>
              <LanguageSwitcher locale={locale} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
