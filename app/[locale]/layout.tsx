import type { Metadata } from "next";
import { Rubik, Assistant, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import { locales, isLocale, dir, type Locale } from "@/lib/i18n";
import { asset } from "@/lib/config";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHe = locale === "he";
  return {
    metadataBase: new URL("https://praxodus.com"),
    title: {
      default: isHe
        ? "Praxodus — אימוץ AI תעשייתי מקצה לקצה"
        : "Praxodus — Industrial AI Adoption, End-to-End",
      template: "%s · Praxodus",
    },
    description: isHe
      ? "מתקנים את הרצפה, לא עוד מצגת. מיפוי, פיילוט והטמעה של סוכני AI אוטונומיים על קו הייצור."
      : "Fix the floor, not the slide deck. We map, pilot, and deploy autonomous AI agents on your production line.",
    icons: {
      icon: asset("/favicon.ico"),
      shortcut: asset("/favicon.ico"),
      apple: asset("/logo.png"),
    },
    openGraph: {
      title: "Praxodus — Industrial AI Adoption",
      description: isHe
        ? "מתקנים את הרצפה, לא עוד מצגת."
        : "Fix the floor, not the slide deck.",
      type: "website",
      locale: isHe ? "he_IL" : "en_US",
      images: [{ url: asset("/logo.png"), width: 500, height: 500, alt: "Praxodus" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const t = getDictionary(typedLocale);

  return (
    <html
      lang={typedLocale}
      dir={dir(typedLocale)}
      className={`${rubik.variable} ${assistant.variable} ${plexMono.variable}`}
    >
      <body>
        <Header locale={typedLocale} nav={t.nav} />
        {children}
        <Footer locale={typedLocale} content={t.footer} />
      </body>
    </html>
  );
}
