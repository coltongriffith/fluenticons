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

## Recommended order (revised)

1. **Fluent Emoji: fluentemoji.co.** Start here. The strongest pick on every count:
   - The only existing site is thin.
   - The demand reaches beyond developers ("microsoft 3d emoji download").
   - The domain is free and isn't a lookalike.
   - It's the same Fluent brand, so every Fluenticons page can link to it from day one.

   One page per emoji showing its 3D, color, flat and high-contrast styles, with PNG/SVG downloads, the
   character to copy, the Unicode code point and the name. Only the static emoji are open source
   (MIT); the animated Teams emoji aren't, so leave them out.
2. **Lucide: lucideicons.co** (also register lucideicons.com and redirect it). The biggest developer
   demand. It's harder to rank against lucide.dev, but by launch it gets links from three sites. Lead
   with what lucide.dev doesn't do: equivalents in other sets, more frameworks and "vs" guides.
3. **Heroicons: heroiconlist.co** (or another non-lookalike name). The weakest existing competition
   and a premium Tailwind audience, but the smallest set (~320 icons), so the fewest pages.

Phosphor drops out for now because every good domain is a lookalike of the official site. Tabler drops
because tablericons.com already does what we'd build.

One at a time works: launch Fluent Emoji, give it about 4 weeks to be indexed and linked, then start
Lucide. Each launch gets the Materialicons checklist: sitemap, Search Console, directory submissions,
and links from the existing sites.

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
