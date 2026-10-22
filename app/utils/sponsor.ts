// Types and helpers for the site's sponsors. Each site sets them in its own
// app/sponsor.ts (one sponsor or a list); every placement reads them through
// useSponsor().

export interface SponsorConfig {
  /** Turn the sponsor on. With false, every placement shows the "Your product here" card. */
  active: boolean;
  /** Advertiser or product name: the card title unless `headline` is set, the
   *  copy-confirmation credit ("Sponsored by …") and the analytics name. */
  name: string;
  /** Optional card title when it should differ from the name, e.g. a campaign line. */
  headline?: string;
  /** One line about the product, at most TAGLINE_MAX characters (checked at build time). */
  tagline: string;
  /** Landing page. Used exactly as given if it already has UTM parameters (see sponsorLink). */
  url: string;
  /** Square logo in public/, e.g. "/sponsors/acme.svg" (96x96 or larger). If an
   *  .svg is missing, the same name in .png is used; with neither, the card
   *  shows the name's initials. An animated .gif works; add the same name with
   *  -still.png (e.g. acme-still.png) for visitors who turn off animations. */
  logo: string;
  logoAlt: string;
  /** First and last day shown, as ISO dates ("2026-11-01"). Whole days in UTC. */
  startDate: string;
  endDate: string;
  /** Optional call to action under the tagline, e.g. "Try Acme free". */
  ctaText?: string;
  /** Optional brand color ("#34C694") for the call to action. Dark mode uses it as
   *  is; light mode a darker shade that reads on white. */
  ctaColor?: string;
  /** Optional countries (ISO codes, e.g. ["PL"]) whose visitors don't see this
   *  sponsor. Its card stays invisible until the browser has looked up the
   *  visitor's country (plugins/sponsor-geo.server.js), so it never shows there. */
  hiddenIn?: string[];
}

/** app/sponsor.ts exports one sponsor or a list; this always gives a list. */
export const sponsorList = (cfg: SponsorConfig | SponsorConfig[]): SponsorConfig[] => (Array.isArray(cfg) ? cfg : [cfg]);

const luminance = ([r, g, b]: number[]) =>
  [r, g, b].map((c) => (c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4).reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);

/** `hex` darkened just enough to reach 4.5:1 contrast on white (for light mode). */
export function readableOnWhite(hex: string): string {
  let rgb = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  while (1.05 / (luminance(rgb) + 0.05) < 4.5) rgb = rgb.map((c) => Math.floor(c * 0.92));
  return `#${rgb.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

export const HEADLINE_MAX = 40;

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
 * The sponsor's link. A URL that already carries UTM parameters (the sponsor
 * tagged it) is used exactly as given; otherwise utm_source, utm_medium,
 * utm_campaign and utm_content (the placement) are added.
 */
export function sponsorLink(s: SponsorConfig, placement: string, source: string): string {
  const url = new URL(s.url);
  if ([...url.searchParams.keys()].some((key) => key.startsWith("utm_"))) return s.url;
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", "sponsor");
  url.searchParams.set("utm_campaign", sponsorSlug(s.name));
  url.searchParams.set("utm_content", placement);
  return url.toString();
}

/** The logo file to show: `logo` if it exists, else the same name as .png, else "" (initials). */
export function sponsorLogo(s: SponsorConfig, logoExists: (path: string) => boolean): string {
  if (!s.logo.startsWith("/")) return "";
  return [s.logo, s.logo.replace(/\.svg$/i, ".png")].find(logoExists) || "";
}

/** A still frame for an animated .gif logo (name-still.png), shown with reduced motion; "" if none. */
export function sponsorLogoStill(s: SponsorConfig, logoExists: (path: string) => boolean): string {
  const still = s.logo.replace(/\.gif$/i, "-still.png");
  return still !== s.logo && logoExists(still) ? still : "";
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
  else if (!sponsorLogo(s, logoExists)) problems.push(`logo file not found: public${s.logo}`);
  if (!s.logoAlt.trim()) problems.push("logoAlt is empty");
  if (s.headline && s.headline.length > HEADLINE_MAX) problems.push(`headline is ${s.headline.length} characters; the limit is ${HEADLINE_MAX}`);
  if (s.ctaColor && !/^#[0-9a-f]{6}$/i.test(s.ctaColor)) problems.push(`ctaColor must be a hex color like #34C694 (got "${s.ctaColor}")`);
  for (const code of s.hiddenIn || []) {
    if (!/^[A-Z]{2}$/.test(code)) problems.push(`hiddenIn takes two-letter country codes like "PL" (got "${code}")`);
  }
  for (const key of ["startDate", "endDate"] as const) {
    if (!isIsoDate(s[key])) {
      problems.push(`${key} must be an ISO date like 2026-11-01 (got "${s[key]}")`);
    }
  }
  if (dayStart(s.endDate) < dayStart(s.startDate)) problems.push("endDate is before startDate");
  return problems;
}

/**
 * Checks every sponsor (throws, listing the problems, so the build stops) and
 * returns each one's logo files: { [slug]: { logo, still } }.
 */
export function checkSponsors(list: SponsorConfig[], logoExists: (path: string) => boolean, file: string) {
  const problems = list.flatMap((s) => sponsorProblems(s, logoExists).map((p) => `${s.name || "sponsor"}: ${p}`));
  const slugs = list.map((s) => sponsorSlug(s.name));
  const dupe = slugs.find((slug, i) => slugs.indexOf(slug) !== i);
  if (dupe) problems.push(`two sponsors are named "${dupe}"`);
  if (problems.length) throw new Error(`${file}: ${problems.join("; ")}`);
  return Object.fromEntries(list.map((s, i) => [slugs[i], { logo: sponsorLogo(s, logoExists), still: sponsorLogoStill(s, logoExists) }]));
}
