// The agent API's icon logic: lookup, search, recommendations and code. The
// HTTP API (agent/http.js) and the MCP server (agent/mcp.js) both call these
// functions, so they always return the same results.
//
// Data: app/generated/api-catalog.json, written by scripts/build-icon-data.mjs
// from data/icons.json (the same catalogue the website uses). Names and code
// come from app/utils/iconCode.js, shared with the icon pages. Every React
// component name is built from a size and style listed for that icon in
// Microsoft's @fluentui/svg-icons package, which @fluentui/react-icons is
// generated from, so the API never returns a component that doesn't exist.
import catalog from "../app/generated/api-catalog.json" with { type: "json" };
import boosts from "../data/search-boosts.json" with { type: "json" };
import SYNONYMS from "./synonyms.js";
import { STYLE_ORDER, codeTabs, cdnUrl, pascalName, reactName } from "../app/utils/iconCode.js";

export const SITE = "https://fluenticons.co";
export const REACT_PACKAGE = "@fluentui/react-icons";
export const versions = catalog.versions;
export const STYLES = STYLE_ORDER;
export const PLATFORMS = ["react", "svg", "blazor", "flutter", "xaml", "font", "android", "ios", "powerapps"];

// ---- Text ------------------------------------------------------------------
const STOP = new Set(
  "a an the of for to and or with in on at by from as is are be it its this that my our your icon icons symbol symbols fluent ui glyph".split(" ")
);
const NO_STEM = new Set(["news", "ios", "gas", "bus", "plus", "status", "focus", "canvas", "lens", "series", "analytics"]);
export function stem(t) {
  if (NO_STEM.has(t) || t.length < 4) return t;
  if (t.endsWith("ies") && t.length > 4) return `${t.slice(0, -3)}y`;
  if (/(ches|shes|sses|xes)$/.test(t)) return t.slice(0, -2);
  if (t.endsWith("s") && !t.endsWith("ss") && !t.endsWith("us")) return t.slice(0, -1);
  return t;
}
export const words = (text) =>
  String(text)
    .replace(/([a-z])([A-Z])/g, "$1 $2") // UserLock -> User Lock
    .toLowerCase()
    .replace(/([a-z])([0-9])/g, "$1 $2")
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
const tokens = (text) => words(text).filter((w) => !STOP.has(w)).map(stem);
const compact = (text) => String(text).toLowerCase().replace(/[^a-z0-9]/g, "");

const synonyms = new Map();
for (const [key, values] of Object.entries(SYNONYMS)) {
  const k = stem(key);
  synonyms.set(k, [...new Set([...(synonyms.get(k) || []), ...values.map(stem)])].filter((v) => v !== k));
}

// ---- Catalogue ---------------------------------------------------------------
const topics = new Set(catalog.topics);
export const icons = catalog.icons.map(([slug, name, description, keywords, variants, related, legacy]) => {
  const kw = keywords ? keywords.split(",") : [];
  return {
    slug,
    name,
    description,
    keywords: kw,
    variants,
    related,
    legacy: Boolean(legacy),
    categories: kw.filter((k) => topics.has(k)),
    pascal: pascalName(slug),
    // Search fields
    nameTokens: tokens(name),
    keywordTokens: new Set(kw.flatMap(tokens)),
    descriptionTokens: new Set(tokens(description)),
    compact: compact(slug),
  };
});
const bySlug = new Map(icons.map((i) => [i.slug, i]));
const byCompact = new Map(icons.map((i) => [i.compact, i]));

const STYLE_RE = /^(.*?)(\d+)?(filled|regular|color|light)$/;

// An icon from any spelling of its name: "PersonLock", "person_lock",
// "person-lock", "Person Lock" or a component such as "PersonLock24Regular".
// Returns { icon, size?, style? } or null.
export function findIcon(input) {
  const key = compact(input);
  if (!key) return null;
  const icon = byCompact.get(key);
  if (icon) return { icon };
  const m = key.match(STYLE_RE);
  if (m && byCompact.has(m[1])) {
    return { icon: byCompact.get(m[1]), size: m[2] ? Number(m[2]) : undefined, style: m[3] };
  }
  return null;
}

// Names close to a misspelled or invented one ("PersonLok", "UserLock"): the
// best search matches, then names within a couple of typos.
export function suggest(input, n = 5) {
  const key = compact(input).replace(/(\d+)?(filled|regular|color|light)$/, "");
  const out = search(input, { limit: n }).map((h) => h.icon);
  if (out.length < n && key.length >= 3) {
    const max = Math.max(2, Math.floor(key.length / 5));
    const close = icons
      .filter((i) => stylesOf(i).length && !out.includes(i) && Math.abs(i.compact.length - key.length) <= max)
      .map((i) => [distance(i.compact, key), i])
      .filter(([d]) => d <= max)
      .sort((a, b) => a[0] - b[0]);
    out.push(...close.slice(0, n - out.length).map(([, i]) => i));
  }
  return out.map((i) => i.pascal);
}

function distance(a, b) {
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[b.length];
}

// ---- Variants ------------------------------------------------------------------
export const sizesOf = (icon, style) => (icon.variants[style] || []).map((v) => v[0]);
export const stylesOf = (icon) => STYLE_ORDER.filter((s) => icon.variants[s]?.length);
export const allSizes = (icon) => [...new Set(stylesOf(icon).flatMap((s) => sizesOf(icon, s)))].sort((a, b) => a - b);

// The variant to use for a request: the requested style (else regular, then
// filled, then whatever exists) at the requested size (else 24, else the
// nearest). null when a requested style or size doesn't exist for this icon.
export function pickVariant(icon, { style, size } = {}) {
  const styles = stylesOf(icon);
  const s = style ? (styles.includes(style) ? style : null) : styles[0];
  if (!s) return null;
  const list = icon.variants[s];
  if (size) {
    const v = list.find((x) => x[0] === size);
    return v ? { style: s, variant: v } : null;
  }
  const v = list.find((x) => x[0] === 24) || [...list].sort((a, b) => Math.abs(a[0] - 24) - Math.abs(b[0] - 24))[0];
  return { style: s, variant: v };
}

function reactInfo(icon, pick) {
  if (!pick) return null;
  const component = reactName(icon.slug, pick.variant[0], pick.style);
  return {
    component,
    package: REACT_PACKAGE,
    import: `import { ${component} } from "${REACT_PACKAGE}";`,
    style: pick.style,
    size: pick.variant[0],
  };
}

const pageUrl = (icon) => `${SITE}/icon/${icon.slug.replace(/_/g, "-")}/`;

// Compact result for lists (search, recommendations, related icons).
export function summary(icon, opts = {}, score) {
  const pick = pickVariant(icon, opts);
  return {
    name: icon.pascal,
    slug: icon.slug,
    displayName: icon.name,
    ...(score !== undefined && { score }),
    styles: stylesOf(icon),
    sizes: allSizes(icon),
    keywords: icon.keywords,
    ...(icon.legacy && { deprecated: true }),
    react: reactInfo(icon, pick),
    svgUrl: pick ? cdnUrl(versions.svgIcons, icon.slug, pick.variant[0], pick.style) : null,
    url: pageUrl(icon),
  };
}

// Full details for one icon.
export function details(icon) {
  const styles = stylesOf(icon);
  const components = Object.fromEntries(
    styles.map((s) => [s, Object.fromEntries(icon.variants[s].map(([size]) => [size, reactName(icon.slug, size, s)]))])
  );
  const platforms = Object.fromEntries(
    styles.map((s) => [s, platformsFor(icon, s, pickVariant(icon, { style: s }).variant)])
  );
  const pick = pickVariant(icon);
  return {
    name: icon.pascal,
    slug: icon.slug,
    displayName: icon.name,
    description: icon.description || null,
    keywords: icon.keywords,
    categories: icon.categories,
    ...(icon.legacy && {
      deprecated: true,
      note: "Retired from Microsoft's packages: not available in @fluentui/react-icons. Use a related icon.",
    }),
    styles,
    sizes: Object.fromEntries(styles.map((s) => [s, sizesOf(icon, s)])),
    react: {
      package: REACT_PACKAGE,
      components,
      ...(pick && { default: reactInfo(icon, pick) }),
    },
    platforms,
    svgUrls: Object.fromEntries(
      styles.map((s) => [s, Object.fromEntries(sizesOf(icon, s).map((size) => [size, cdnUrl(versions.svgIcons, icon.slug, size, s)]))])
    ),
    url: pageUrl(icon),
    related: icon.related
      .map((slug) => bySlug.get(slug))
      .filter((r) => r && stylesOf(r).length)
      .map((r) => ({ name: r.pascal, slug: r.slug, displayName: r.name })),
    source: { package: "@fluentui/svg-icons", version: versions.svgIcons },
  };
}

const platformsFor = (icon, style, variant) =>
  codeTabs({ slug: icon.slug, name: icon.name, style, variant, versions }).map((t) => t.key);

// Code for one variant and platform, using the same generator as the icon pages.
// Returns { error } when the platform isn't published for that variant.
export function code(icon, { platform = "react", style, size } = {}) {
  const pick = pickVariant(icon, { style, size });
  if (!pick) {
    return {
      error: "variant_not_found",
      message: `${icon.pascal} has no ${[size && `${size} px`, style].filter(Boolean).join(" ")} variant.`,
      available: Object.fromEntries(stylesOf(icon).map((s) => [s, sizesOf(icon, s)])),
    };
  }
  const tabs = codeTabs({ slug: icon.slug, name: icon.name, style: pick.style, variant: pick.variant, versions });
  const tab = tabs.find((t) => t.key === platform);
  if (!tab) {
    return {
      error: "platform_not_available",
      message: `${platform} code isn't published for ${icon.pascal} (${pick.style}, ${pick.variant[0]} px).`,
      available: tabs.map((t) => t.key),
    };
  }
  return {
    name: icon.pascal,
    slug: icon.slug,
    displayName: icon.name,
    platform,
    style: pick.style,
    size: pick.variant[0],
    ...(platform === "react" && { react: reactInfo(icon, pick) }),
    svgUrl: cdnUrl(versions.svgIcons, icon.slug, pick.variant[0], pick.style),
    ...(tab.note && { note: tab.note }),
    code: tab.code,
    url: pageUrl(icon),
  };
}

// ---- Search ----------------------------------------------------------------------
// Deterministic ranking over names, keywords and descriptions, with synonyms
// for words people use that Microsoft's names don't ("billing" -> payment,
// receipt, wallet…). Exact names always come first. An inverted index keeps
// a query to about a millisecond.
const W_NAME = 3;
const W_KEYWORD = 1.6;
const W_DESCRIPTION = 0.6;
const W_SYNONYM = 0.65;

// token -> [[icon index, weight, name token or null]]
const postings = new Map();
const post = (t, entry) => (postings.get(t) || postings.set(t, []).get(t)).push(entry);
icons.forEach((icon, i) => {
  for (const t of new Set(icon.nameTokens)) post(t, [i, W_NAME, t]);
  for (const t of icon.keywordTokens) if (!icon.nameTokens.includes(t)) post(t, [i, W_KEYWORD, null]);
  for (const t of icon.descriptionTokens) {
    if (!icon.nameTokens.includes(t) && !icon.keywordTokens.has(t)) post(t, [i, W_DESCRIPTION, null]);
  }
});
const vocabulary = [...postings.keys()].sort();

// Postings for a word, plus longer words it starts with ("calend" -> calendar)
// at a lower weight when the word was typed (not for synonyms).
function lookup(t, prefix) {
  const out = postings.get(t) ? [...postings.get(t)] : [];
  if (!prefix || t.length < 4) return out;
  let lo = 0;
  let hi = vocabulary.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (vocabulary[mid] < t) lo = mid + 1;
    else hi = mid;
  }
  for (let j = lo; j < vocabulary.length && vocabulary[j].startsWith(t); j++) {
    if (vocabulary[j] === t) continue;
    for (const [i, w, n] of postings.get(vocabulary[j])) {
      if (w !== W_DESCRIPTION) out.push([i, w === W_NAME ? w * 0.6 : w * 0.5, n]);
    }
  }
  return out;
}

// Query words, each with the synonyms that may stand in for it (earlier
// synonyms count slightly more).
function queryGroups(q) {
  const groups = [];
  const seen = new Set();
  for (const t of tokens(q)) {
    if (seen.has(t)) continue;
    seen.add(t);
    const syns = (synonyms.get(t) || []).map((s, k) => ({ t: s, w: W_SYNONYM * (1 - 0.04 * k) }));
    groups.push([{ t, w: 1 }, ...syns]);
  }
  return groups;
}

// Hits for a query: [{ icon, score }] best first, score 0–1.
export function search(q, { style, size, category, exact = false, limit = 10 } = {}) {
  const query = String(q || "").trim();
  if (!query) return [];
  const named = findIcon(query)?.icon;
  const eligible = (icon) =>
    stylesOf(icon).length && // published variants only (nothing to use otherwise)
    (!(style || size) || pickVariant(icon, { style, size })) &&
    (!cat || icon.categories.some((c) => stem(c) === cat) || icon.keywordTokens.has(cat));
  const cat = category ? stem(String(category).toLowerCase().trim()) : null;
  if (exact) return named && eligible(named) ? [{ icon: named, score: 1 }] : [];

  const groups = queryGroups(query);
  // icon index -> per group: { best, used: Set of name tokens that matched }
  const found = new Map();
  groups.forEach((group, g) => {
    for (const { t, w } of group) {
      for (const [i, weight, nameToken] of lookup(t, w === 1)) {
        let row = found.get(i);
        if (!row) found.set(i, (row = groups.map(() => ({ best: 0, direct: false, used: new Set() }))));
        const cell = row[g];
        const s = weight * w;
        if (s > cell.best) cell.best = s;
        if (nameToken) {
          // A word matched as typed marks only itself as used; synonyms mark
          // theirs unless the word itself is in the name.
          if (w === 1) {
            if (!cell.direct) cell.used.clear();
            cell.direct = true;
            cell.used.add(nameToken);
          } else if (!cell.direct) cell.used.add(nameToken);
        }
      }
    }
  });
  if (named) found.set(icons.indexOf(named), found.get(icons.indexOf(named)) || groups.map(() => ({ best: 0, used: new Set() })));

  const boost = boosts[query.toLowerCase()] || {};
  const hits = [];
  for (const [i, row] of found) {
    const icon = icons[i];
    if (!eligible(icon)) continue;
    const matched = row.filter((c) => c.best > 0).length;
    const coverage = groups.length ? matched / groups.length : 0;
    const total = row.reduce((n, c) => n + c.best, 0);
    let score = groups.length ? (total / (groups.length * W_NAME)) * (0.4 + 0.6 * coverage) : 0;
    // Prefer the plain icon ("Home") to variations of it ("Home Checkmark").
    const used = new Set(row.flatMap((c) => [...c.used]));
    const extra = icon.nameTokens.filter((t) => !used.has(t) && !/^\d+$/.test(t)).length;
    score *= Math.max(0.55, 1 - 0.09 * extra);
    if (icon.legacy) score *= 0.5;
    score += boost[icon.slug] || 0;
    if (icon === named) score = Math.max(score, 1) + 1;
    hits.push({ icon, score });
  }
  hits.sort((a, b) => b.score - a.score || a.icon.name.length - b.icon.name.length || a.icon.slug.localeCompare(b.icon.slug));
  // Reported as 0–1 on a gentler curve: a synonym-only match (e.g. "billing" -> Payment) reads about 0.8.
  return hits.slice(0, limit).map((h) => ({ icon: h.icon, score: Math.round(Math.sqrt(Math.min(1, h.score)) * 100) / 100 }));
}

// ---- Recommendations -------------------------------------------------------------
// One icon per UI item ("Home", "Billing"…), all in the same style and size,
// without repeating an icon. The label counts twice as much as the description.
export function recommend(items, { style, size } = {}) {
  const used = new Set();
  const opts = { style: style || "regular", size: size || 24 };
  return items.map((item) => {
    const label = String(item.label || "").trim();
    const description = String(item.description || "").trim();
    const named = findIcon(label)?.icon;
    const byLabel = search(label, { ...opts, limit: 12 });
    const byBoth = description ? search(`${label} ${description}`, { ...opts, limit: 12 }) : [];
    const scores = new Map();
    for (const h of byLabel) scores.set(h.icon, (scores.get(h.icon) || 0) + h.score * 2);
    for (const h of byBoth) scores.set(h.icon, (scores.get(h.icon) || 0) + h.score);
    // An icon named exactly like the label ("Home", "Settings") wins.
    if (scores.has(named)) scores.set(named, scores.get(named) + 1);
    const ranked = [...scores.entries()]
      .map(([icon, s]) => ({ icon, score: Math.min(s, description ? 3 : 2) / (description ? 3 : 2) }))
      .sort((a, b) => b.score - a.score);
    const pick = ranked.find((r) => !used.has(r.icon.slug));
    if (!pick) return { label, icon: null, component: null, confidence: 0, alternatives: [] };
    used.add(pick.icon.slug);
    const react = reactInfo(pick.icon, pickVariant(pick.icon, opts));
    return {
      label,
      icon: pick.icon.pascal,
      slug: pick.icon.slug,
      displayName: pick.icon.name,
      component: react.component,
      import: react.import,
      confidence: Math.round(Math.min(1, pick.score) * 100) / 100,
      alternatives: ranked
        .filter((r) => r !== pick)
        .slice(0, 3)
        .map((r) => ({ icon: r.icon.pascal, component: reactName(r.icon.slug, opts.size, opts.style) })),
    };
  });
}

// One import line for a set of recommendations.
export function importLine(recs) {
  const names = [...new Set(recs.map((r) => r.component).filter(Boolean))];
  return names.length ? `import { ${names.join(", ")} } from "${REACT_PACKAGE}";` : null;
}
