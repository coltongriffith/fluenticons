// Types and helpers for the sitewide sponsor. Each site's sponsor is set in its
// own app/sponsor.ts; every placement reads it through useSponsor().

export interface SponsorConfig {
  /** Turn the sponsor on. With false, every placement shows the "Your product here" card. */
  active: boolean;
  /** Product name, shown in bold. */
  name: string;
  /** One line about the product, at most TAGLINE_MAX characters (checked at build time). */
  tagline: string;
  /** Landing page. UTM parameters are added to it (see sponsorLink). */
  url: string;
  /** Square logo in public/, e.g. "/sponsors/acme.png" (96x96 or larger). */
  logo: string;
  logoAlt: string;
  /** First and last day shown, as ISO dates ("2026-11-01"). Whole days in UTC. */
  startDate: string;
  endDate: string;
  /** Optional call to action under the tagline, e.g. "Try Acme free". */
  ctaText?: string;
}

export const TAGLINE_MAX = 70;

const dayStart = (date: string) => Date.parse(`${date}T00:00:00Z`);

/** Whether the sponsor shows at `now`: active and between startDate and endDate, inclusive. */
export function isLive(s: SponsorConfig | null | undefined, now = Date.now()): boolean {
  if (!s?.active) return false;
  const start = dayStart(s.startDate);
  const end = dayStart(s.endDate) + 86_400_000;
  return now >= start && now < end;
}

/** "Acme UI" -> "acme-ui", for utm_campaign and analytics. */
export const sponsorSlug = (name = "") =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * The sponsor's URL with utm_source, utm_medium, utm_campaign and utm_content
 * (the placement). A UTM parameter already in the sponsor's URL is kept as is.
 */
export function sponsorLink(s: SponsorConfig, placement: string, source: string): string {
  const url = new URL(s.url);
  const utm: Record<string, string> = {
    utm_source: source,
    utm_medium: "sponsor",
    utm_campaign: sponsorSlug(s.name),
    utm_content: placement,
  };
  for (const [key, value] of Object.entries(utm)) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.toString();
}

// Parsed, not pattern-matched: sponsorLink() calls new URL() on it.
function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

// A real calendar date: Date.parse turns "2026-02-30" into March 2, so the
// parsed date must come back as the same string.
const isIsoDate = (value: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  !Number.isNaN(dayStart(value)) &&
  new Date(dayStart(value)).toISOString().slice(0, 10) === value;

/** Problems with a sponsor config, checked when the site is built. */
export function sponsorProblems(s: SponsorConfig, logoExists: (path: string) => boolean): string[] {
  const problems: string[] = [];
  if (s.tagline.length > TAGLINE_MAX) {
    problems.push(`tagline is ${s.tagline.length} characters; the limit is ${TAGLINE_MAX}`);
  }
  if (!s.active) return problems;
  if (!s.name.trim()) problems.push("name is empty");
  if (!s.tagline.trim()) problems.push("tagline is empty");
  if (!isHttpsUrl(s.url)) problems.push(`url must be a full https:// link (got "${s.url}")`);
  if (!s.logo.startsWith("/")) problems.push(`logo must be a path in public/, like "/sponsors/name.png" (got "${s.logo}")`);
  else if (!logoExists(s.logo)) problems.push(`logo file not found: public${s.logo}`);
  if (!s.logoAlt.trim()) problems.push("logoAlt is empty");
  for (const key of ["startDate", "endDate"] as const) {
    if (!isIsoDate(s[key])) {
      problems.push(`${key} must be an ISO date like 2026-11-01 (got "${s[key]}")`);
    }
  }
  if (dayStart(s.endDate) < dayStart(s.startDate)) problems.push("endDate is before startDate");
  return problems;
}
