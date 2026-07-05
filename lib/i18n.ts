export const locales = ["en", "he"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale): "ltr" | "rtl" {
  return locale === "he" ? "rtl" : "ltr";
}

/** Arrow that points "forward" in reading direction. */
export function forwardArrow(locale: Locale): string {
  return locale === "he" ? "←" : "→";
}

/**
 * Prefix an internal path with the active locale.
 * Leaves external links, mailto:, tel:, and #anchors untouched.
 */
export function localeHref(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}
