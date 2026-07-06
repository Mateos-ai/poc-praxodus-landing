import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { asset } from "@/lib/config";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("");
}

function MemberCard({
  name,
  role,
  img,
}: {
  name: string;
  role: string;
  img?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(img)}
          alt={name}
          loading="lazy"
          className="aspect-square w-full object-cover object-top"
        />
      ) : (
        <div
          aria-hidden
          className="flex aspect-square w-full items-center justify-center bg-fog font-display text-6xl font-semibold text-teal-deep"
        >
          {initials(name)}
        </div>
      )}
      <div className="p-5">
        <p className="font-semibold text-ink">{name}</p>
        <p className="mt-0.5 text-sm text-text-soft">{role}</p>
      </div>
    </div>
  );
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const p = t.teamPage;
  const members = t.teamMembers;

  return (
    <main>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-mono text-sm uppercase tracking-[0.16em] text-teal-deep">
            {p.leadershipHeading}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {members.leadership.map((m) => (
              <MemberCard key={m.name} name={m.name} role={m.role} img={m.img} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand locale={locale as Locale} content={t.cta} />
    </main>
  );
}
