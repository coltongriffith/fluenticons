# Icon site network: next sites

Fluenticons came first. Materialicons.co was built from the same code with very little extra work,
and cross-linking from Fluenticons took it to a couple hundred visitors a week. This plan picks the next
3–5 sites: free, open-source icon sets that get the same treatment. Each is a fast viewer with a page
per icon, code to copy, labeled sponsor cards, and links to its sister sites.

Nothing here is built yet.

## How the sets were picked

- **Demand:** npm weekly downloads of the set's main package (October 2026). These count developers
  using the set, not searches, but they track search interest well. For scale, `@fluentui/react-icons`
  (607k a week) supports Fluenticons' ~5,800 visitors a month.
- **SEO gap:** whether the official site has a page per icon. If it doesn't, searches like "heroicons
  arrow right" or "phosphor house icon svg" have no strong official page to beat. Fluenticons and
  Materialicons rank on exactly these.
- **Pages:** more icons × styles means more long-tail pages.
- **Fit:** how naturally it cross-links with Fluent and Material, and which advertisers its audience
  attracts.
- **License:** it has to allow redistribution (MIT, ISC, Apache 2.0 or CC0).

Third-party sites (Iconify, SVG Repo, shadcn.io, react-icons) already cover every one of these sets,
just as they did Fluent and Material before our sites ranked. They compete everywhere and decide
nothing.

## The shortlist

| Set | License | Icons | npm / week | Official per-icon pages | Notes |
| --- | --- | --- | --- | --- | --- |
| **Heroicons** (Tailwind Labs) | MIT | ~320 × 4 styles | 3.3M (`@heroicons/react`) | **No**: one search page | Tailwind audience; smallest set, so the fastest site |
| **Fluent Emoji** (Microsoft) | MIT | 1,500+ × 4 styles (3D, color, flat, high contrast) | n/a (GitHub/Figma) | **No**: GitHub and Figma only | Same Fluent brand as Fluenticons; reaches designers and marketers too |
| **Lucide** | ISC | ~1,650 | 81M (`lucide-react`)* | Yes (lucide.dev/icons/…) | Biggest demand by far; default in shadcn/ui; strongest competition |
| **Phosphor** | MIT | ~1,500 × 6 weights | 1.9M (`@phosphor-icons/react`) | **No**: single-page app | 9,000+ icon/weight pages |
| **Tabler Icons** | MIT | 6,200+ × 2 styles | 2.7M (`@tabler/icons-react`) | Per-icon URLs, but every page has the same generic title | Largest set, most long-tail pages |

\* Lucide's count is inflated by AI app builders installing it by default, but it's still the most
used set by a wide margin.

**Runners-up**
- **Bootstrap Icons** (765k): its official per-icon pages sit on getbootstrap.com, which is very hard
  to outrank.
- **Remix Icon** (132k, no per-icon pages): good gap, smaller audience.
- **Simple Icons** (424k, brand logos, CC0): huge search volume ("github logo svg") but crowded, and
  every logo is a trademark.
- **Ionicons, Material Design Icons (Pictogrammers), Octicons, Carbon:** smaller demand, or official
  pages that are already good.
- **Font Awesome:** a mixed license, Pro icons can't be shown, and fontawesome.com dominates.

## Final review and domains (Oct 26)

A second pass found existing third-party sites for several sets, and checked domains. `.co`
availability is from DNS: a name with no records almost always means unregistered. `.com` was
confirmed with the Verisign registry. Confirm each at a registrar before buying, since some `.co` names
are sold at premium prices.

| Set | Existing third-party site | Searches people make (Google autocomplete) | Domain | Status |
| --- | --- | --- | --- | --- |
| **Fluent Emoji** | fluentemoji.com: a bare single-page app with no per-emoji pages or sitemap | "fluent emoji 3d / flat / gallery", "microsoft 3d emoji download / list" | **fluentemoji.co** | Free |
| **Lucide** | lucide.dev (official, per-icon pages); shadcn.io and others | "lucide icon names / list / search / filled", "heroicons vs lucide" | **lucideicons.co** (+ lucideicons.com) | Both free |
| **Heroicons** | heroicons.dev: a single-page app with no per-icon pages | "heroicons vs lucide", "heroicons alternative" | heroicons.co is free, but it's a lookalike of the official heroicons.com. Independent names that are free: **heroiconlist.co**, allheroicons.co, heroiconsearch.co | Free |
| Phosphor | none found | "phosphor icons vs lucide", "phosphor icons duotone" | phosphoricons.co and phosphor-icons.co are free, but both are lookalikes of the official phosphoricons.com | Free (risky) |
| Tabler Icons | **tablericons.com**: static per-icon pages and a sitemap, plus the official per-icon URLs | "tabler icons list / svg / cdn" | tablericons.co | Free |

For comparison: fluenticons.com and materialicons.com are owned by other people (no site and an
unrelated font site). Your existing domains aren't lookalikes of an official icon site.

## Traffic estimate (Oct 26)

Google Trends, worldwide over the last 12 months, measured against "fluent icons". Each comparison
included "fluent icons", so the numbers are on one scale.

| Search term | Interest vs "fluent icons" |
| --- | --- |
| material icons | 10.4× |
| lucide icons | 7.3× |
| bootstrap icons | 6.0× |
| heroicons | 3.6× |
| tabler icons | 2.6× |
| phosphor icons | 2.3× |
| fluent icons | 1× |
| fluent emoji | 0.4× |
| microsoft 3d emoji | 0.07× |
| 3d emoji (generic) | 4.9× |

**Calibration from our own sites**
- Fluenticons: ~5,800 visitors a month on 1× demand. Microsoft has no viewer of its own, so
  Fluenticons is *the* viewer. That's the best case: about 5,800 visitors a month per 1× of demand.
- Materialicons: ~800–1,000 visitors a month (a couple hundred a week) on 10.4× demand, within its
  first months, up against Google's own icon pages and many other sites. That's the crowded case:
  about 90 a month per 1× early on, rising as the site ages.

**Rough monthly visitors.** These are order-of-magnitude estimates, easily off by 2–3× either way.
They don't count the long tail of per-icon searches, which drives much of Fluenticons' traffic.

| Site | Demand | Situation | First ~3 months | After ~12 months |
| --- | --- | --- | --- | --- |
| Lucide | 7.3× | Crowded, like Material | ~400–900 | ~1,500–5,000 |
| Heroicons | 3.6× | The official site is a single page with no per-icon pages, but it takes the "heroicons" searches itself | ~200–600 | ~800–2,500 |
| Fluent Emoji | 0.4× | No official viewer, like Fluent; the only competitor is thin | ~200–500 | ~800–2,300, plus any per-emoji "3d … emoji png" searches it wins |

## Recommended order (final)

The Trends data changes the order. Fluent Emoji's own search demand is small (0.4× Fluenticons'), so
even winning it outright caps it around Fluenticons' level or below. Lucide has 7× the demand, and
Materialicons already shows this kind of site gets traffic quickly even against a strong official site.

1. **Lucide: lucideicons.co** (also register lucideicons.com and redirect it). The most traffic, near
   Materialicons' demand. It gets the "lucide icon names / list / search" searches and "vs" guides,
   plus equivalents in Fluent and Material that lucide.dev doesn't show.
2. **Fluent Emoji: fluentemoji.co.** The surest to rank and the easiest cross-promotion with
   Fluenticons, but a smaller ceiling. Its upside is ranking per-emoji pages for the much bigger generic
   "3d emoji" searches (4.9×). Only the static emoji are open source (MIT); leave the animated Teams
   emoji out.
3. **Heroicons: heroiconlist.co** (not heroicons.co, a lookalike of the official site). A premium
   Tailwind audience, but the official site keeps the main searches and the set is small (~320 icons).

Phosphor drops out for now because every good domain is a lookalike of the official site. Tabler drops
because tablericons.com already does what we'd build.

Since each site costs little to build, Lucide and Fluent Emoji can go up close together: they cover
the biggest upside and the surest win. Each launch gets the Materialicons checklist: sitemap, Search
Console, directory submissions, and links from the existing sites.

## What makes it a network

- **"Same icon in other sets":** every icon page links to the matching icon on each sister site (home
  → Heroicons home, Lucide house, Phosphor house…). `scripts/cross-links.mjs` already matches Fluent ↔
  Material and extends to N sets. This is the main SEO engine: every new site makes every existing
  page more useful.
- **Comparison guides** on the stronger site of each pair: "Lucide vs Heroicons", "Phosphor vs
  Lucide", "Fluent vs Material". These are high-intent searches, and each guide links into both sites.
- **A sister-site strip** in each hero ("Also: Fluent, Material, Heroicons…"), like Materialicons' "Also"
  badge today, plus a network footer.
- **Network sponsorship:** one booking runs a card across every site. The sponsor system already
  takes a list per site; add a network price on the sponsor page ("all N sites, X visitors a month").
- **One codebase:** each site is `sites/<name>` (data import, `site.js`, `sponsor.ts`) on the shared
  layer, its own Cloudflare Pages project and its own deploy workflow, like Materialicons.

## Things to get right

- **Domains: don't use a lookalike of the official site.** `heroicons.co` next to Tailwind's
  `heroicons.com`, or `phosphoricons.co` next to `phosphoricons.com`, risks a trademark or domain
  complaint and looks like typosquatting. Keep the "not affiliated with …" line every site has.
- **Not a doorway network.** Google penalizes groups of near-identical sites that exist to link to
  each other. Each site must stand alone: a different icon set, its own per-icon copy (as done for
  Fluent and Material), and links that help the reader (the matching icon) rather than sitewide
  keyword links.
- **Cloudflare limits on the free plan:** 20,000 files per site (Material is at ~18,900; Tabler and
  Fluent Emoji need the same OG-image budgeting), and 500 builds a month across the account (one
  deploy per merge per site adds up). **Pages must stay static:** the 100,000-a-day Functions
  allowance is shared by every site on the account, as the October alert showed.
- **Upstream updates:** extend the "Update icons from Microsoft and Google" workflow to each new set.
- **Fluent Emoji file sizes:** 3D PNGs are large (the repo is ~130 MB). Serve resized PNGs and keep
  originals as downloads.

## Measuring it

- One GA4 property per site (or one property with a stream per site), plus Search Console for each.
- Benchmark each launch against Materialicons' first 8 weeks: impressions, clicks, weekly visitors.
- After each launch, check referral clicks between sister sites to see which links work.
- A site that's flat after ~3 months gets more cross-links and guides before the next site launches.
