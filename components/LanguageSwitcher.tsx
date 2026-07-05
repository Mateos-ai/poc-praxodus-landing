"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { asset } from "@/lib/config";

const META: Record<Locale, { flag: string; code: string; label: string }> = {
  en: { flag: "🇬🇧", code: "EN", label: "English" },
  he: { flag: "🇮🇱", code: "HE", label: "עברית" },
};

export function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Full navigation (plain <a>) so the server re-renders <html dir/lang>
  // correctly. usePathname() strips basePath, so re-add it via asset().
  const hrefFor = (target: Locale) => {
    const path = pathname.replace(/^\/(en|he)/, `/${target}`) || `/${target}`;
    return asset(path);
  };

  const current = META[locale];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-sm font-medium text-text-soft transition-colors hover:bg-fog hover:text-ink"
      >
        <span aria-hidden className="text-base leading-none">
          {current.flag}
        </span>
        <span className="font-mono text-xs tracking-wide">{current.code}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-lg shadow-ink/5"
        >
          {locales.map((l) => {
            const m = META[l];
            const active = l === locale;
            return (
              <li key={l} role="option" aria-selected={active}>
                <a
                  href={hrefFor(l)}
                  hrefLang={l}
                  className={`flex items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-fog ${
                    active ? "font-semibold text-ink" : "text-text-soft"
                  }`}
                >
                  <span aria-hidden className="text-base leading-none">
                    {m.flag}
                  </span>
                  <span>{m.label}</span>
                  <span className="ms-auto font-mono text-[10px] uppercase text-muted">
                    {m.code}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
