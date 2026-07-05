/**
 * Base path the site is served under (e.g. "/poc-praxodus-landing" on GitHub
 * Pages, "" everywhere else). Next prefixes <Link> and _next assets with the
 * config basePath automatically, but NOT raw <img src> or metadata icon URLs —
 * use asset() for those.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
