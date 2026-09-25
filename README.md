# Fluenticons Viewer

3,000+ open source icon designs from [Microsoft](https://github.com/microsoft/fluentui-system-icons), in every size (10–48 px) and style (Regular, Filled, Color, Light), with copy-ready code for React, Blazor, Flutter, WinUI/WPF, Android, iOS and Power Apps.
![Fluent Icons](https://fluenticons.co/social.png)

This site is not affiliated or connected to Microsoft in any way, this is just a viewer for the open-source icons from them.

This site was made because I had to open their [Figma](https://www.figma.com/community/file/836835755999342788) file every time I wanted any icons from their list, there was no search or proper tool to view them, hence I made this website as a small weekend project.

---

### ***New version disclaimer.***
This is still under development and I have been trying to work on this a little at a time. It could be updated over time without any announcement, if you'd like to contribute, you're welcome to open a PR.

You can still find the old version [here](https://github.com/fayazara/fluenticons-old)


### What's new in v2?

- No more hacks, I've used actual SVG's now, so I was able to add some new features like manipulating them.
- You can copy snippets for SVGs, Vue component, React Component, HTML Image.
- You can download SVGs, PNGs, WEBP, Vue component, React Component now.
- Manipulate colors to see how the icon looks.
- More performant, loads way too fast now. (Scores 100 on Lighthouse Yay!!). Was surprised to see the site loading in 600ms when I moved from vercel to cloudflare pages.

### What's next?

1. Make an advanced editor like adding frames behind the icons. Inspiration - [Bakery](https://apps.apple.com/ne/app/bakery-simple-icon-maker/id1575220747?mt=12) & [Iconscout's Icon Editor](https://iconscout.com/icon-editor) (requires a lot a math, which I am not good at.)
2. Make a npm package for others to use the components in their own web projects.




### Tech stack
1. Nuxt 4 (fully static, prerendered)
2. Tailwind CSS
3. Hosted on Cloudflare Pages

### To run the project locally

Requires Node 22.19+ (see `.nvmrc`).

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate the static site into dist/
$ yarn generate
```

### How the site is built

- `data/icons.json` lists every icon design (name, Microsoft's keywords and description, local file names, and every size and style Microsoft publishes, with icon-font code points). `data/meta.json` records which `@fluentui/svg-icons` version and upstream commit the data matches.
- `public/icons/` holds one SVG per design and style (Filled, Regular, Color) — 24 px, or the nearest size Microsoft draws. The grids, editor and downloads only use these.
- Other sizes and the Light style load on icon pages from the pinned `@fluentui/svg-icons` package on jsDelivr (all ~20,000 variants would exceed Cloudflare Pages' 20,000-file limit). If the CDN is unreachable only those extra previews fail; everything else keeps working.
- `content/guides/*.md` are the guide articles.
- `yarn icons` (run automatically by `dev`/`generate`) turns those into `app/generated/`: a small search index for the browser, build-time icon details, topic (tag) and color lists, site counts, the sitemap and the list of pages to prerender.
- `yarn generate` prerenders every page — the icon grids, one page per icon design (`/icon/<name>/`, with every size and style), `/color/`, topic pages (`/tag/<keyword>/`), the A–Z browse pages, guides and site pages.

To pull the latest icons from Microsoft (pass the matching `@fluentui/svg-icons` version):

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/microsoft/fluentui-system-icons.git upstream
git -C upstream sparse-checkout set --no-cone '/assets/*/metadata.json' \
  '/assets/*/SVG/*_24_filled.svg' '/assets/*/SVG/*_24_regular.svg' \
  '/fonts/*.json' '/flutter/lib/src/fluent_icons.dart'
node scripts/import-upstream.mjs upstream 1.1.341
```

Icons Microsoft has retired stay on the site (marked `legacy`) so existing links keep working.

### The Material Icons site (materialicons.co)

`sites/material/` is a second site built from the same code: Google's Material Symbols with the same grid, editor, favorites, icon pages, topics, guides and analytics. The repo root is its base [Nuxt layer](https://nuxt.com/docs/getting-started/layers); `sites/material/` adds its own data, icons, guides, pages and settings.

- `app/site.js` (and `sites/material/app/site.js`) holds each site's name, URL, grid pages, file naming and footer. Shared code imports `~/site.js` and `~/generated/…`, which resolve to the site being built.
- `node scripts/import-material.mjs <version>` imports `@material-symbols/svg-400` (Outlined, fill 0 and 1, redrawn on a 24×24 viewBox) with Google Fonts' names, categories and keywords, plus Flutter names from `material_symbols_icons`. It also records each symbol's `@mui/icons-material` and Flutter `Icons` names, read from those libraries (`scripts/legacy-names.mjs`), so icon pages only show real imports. Rounded, Sharp and other weights load from jsDelivr on icon pages.
- The build adds `/category/<name>` pages from Google's categories (topic pages for the same words redirect there), writes `public/_redirects` for moved URLs, and draws a social preview image (`/og/<icon>.png`, `scripts/og/`) for the most used icons: as many as fit under Cloudflare Pages' 20,000-file limit (about 2,500); the rest use `/social.png`.
- A guide can live at its own URL with `path:` in its front matter (the old `/guides/<slug>/` redirects).
- `yarn material:dev` / `yarn material:generate` build it into `sites/material/dist` (about 19,000 files, just under the limit).
- The weekly icon update also checks for new Material Symbols releases and opens a pull request.

**Deploying it** (`.github/workflows/deploy-material.yml`) is off until you set two repository variables (Settings → Secrets and variables → Actions → Variables):

1. `MATERIAL_PAGES_PROJECT`: the Cloudflare Pages project name, e.g. `materialicons`. The next push to `main` (or a manual run) builds the site and creates the project if it doesn't exist.
2. Attach `materialicons.co` to that project in Cloudflare (Pages → the project → Custom domains), then set `MATERIAL_SITE_URL` to `https://materialicons.co` so production runs check the live site.

It uses the same Cloudflare secrets as fluenticons.co. Pushes that only change `sites/material/` don't redeploy fluenticons.co.

### Agent API, MCP server and CLI (fluenticons.co/ai)

Coding agents can search the icons by meaning and get real `@fluentui/react-icons` names.
Setup instructions for users are on [fluenticons.co/ai](https://fluenticons.co/ai/).

- **HTTP API** `/api/v1/…` and **MCP server** `/mcp` (Streamable HTTP, stateless, no auth) run as
  Cloudflare Pages Functions (`functions/`), deployed with the site. `public/_routes.json` limits
  them to `/api/*` and `/mcp`; every other URL is still a static file.
- **Code** is in `agent/`: `icons.js` (lookup, search, recommendations, code), `tools.js` (the
  operations both the API and MCP call: validation + analytics), `http.js`, `mcp.js`, `track.js`,
  `synonyms.js`. Code snippets come from `app/utils/iconCode.js`, which the icon pages use too.
- **Data**: `app/generated/api-catalog.json`, built from `data/icons.json` by
  `scripts/build-icon-data.mjs`. React names are only built from sizes/styles listed for an icon
  in `@fluentui/svg-icons`, which `@fluentui/react-icons` is generated from.
- **Search** is deterministic (no AI model): names, Microsoft's keywords and descriptions, plus
  `agent/synonyms.js` for words Microsoft doesn't use ("billing" → payment, receipt, wallet).
  `data/search-boosts.json` can nudge results from real usage:
  `{ "billing": { "receipt_money": 0.2 } }` adds 0.2 to that icon's score for that exact query.
- **Checks**: `node scripts/test-agent.mjs` after `yarn generate` (runs before every deploy).
  Locally: `npx wrangler pages dev dist` serves the site with the API and MCP server.
- **Limits**: 120 requests per minute per IP (per worker), 200-character queries, 25 items per
  recommendation, 16 KB bodies. Errors are JSON: `{ "error": { "code", "message" } }`.
- **Analytics** are sent from the server as `api_*`, `mcp_*`,
  `agent_result_selected` and `mcp_initialize` events, in their own GA4 property
  ("Fluenticons API", G-LNV7W169XW; an `AGENT_GA_ID` variable on the Pages project overrides it), and
  set `GA_API_SECRET` (a Measurement Protocol secret of that property's stream) to use the Measurement
  Protocol; without it they're sent to the same endpoint gtag uses. Requests with an
  `x-fluenticons-no-track` header (deploy checks, tests, the /ai demo) aren't counted. Website searches are joined to the
  icon people pick: `select_content`, `copy_icon`, `download_icon`, `favorite_add` and
  `copy_code` carry the `search_term` that was in the search box.
- **CLI**: `packages/cli`, packed into the site as `/cli.tgz` by the build:
  `npx -y https://fluenticons.co/cli.tgz search "user security"`. It can be published to npm
  as `fluenticons-cli` later (the name `fluenticons` is taken).
- Agent instructions: `public/ai/SKILL.md` (Claude Code skill) and `public/llms.txt`.

### Deploying

fluenticons.co is served by the Cloudflare Pages project **fluenticons-3**, a direct-upload project with no Git connection. The **Deploy to Cloudflare Pages** GitHub Action deploys it:

- **Every push to `main` goes live automatically.** The workflow builds the site, checks the output, uploads it, then confirms that fluenticons.co serves the new build. The run fails, and GitHub notifies you, if the live site isn't serving it. Pushes that only change `README.md` or `.github/` don't deploy; guide edits in `content/guides/` do deploy.
- **Previews are manual.** Go to Actions → Run workflow, keep the default branch `preview`, and you get a preview URL on fluenticons-3 without touching the live site. Running it with branch `main` redeploys production.

Cloudflare switches deployments atomically, and older deployments can be restored with **Rollback** in the dashboard (fluenticons-3 → Deployments). The workflow needs the repository secrets `CLOUDFLARE_API_TOKEN` (with the "Cloudflare Pages: Edit" permission) and `CLOUDFLARE_ACCOUNT_ID`.

The Git-connected Pages project **fluenticons** (fluenticons-alt.pages.dev) builds every push for previews. It has no custom domain.

Build settings: `yarn generate`, output `dist`, Node from `.nvmrc`. `public/_redirects` and `public/_headers` are deployed as-is. `public/sw.js` removes the service worker installed by the old version of the site.

### SVG and File Cleanup

The icons are cleaned with SVGO, so you can use the same icons in your project.

Use SVGO and run `svgo -r ./**/SVG/*.svg -o ../cleaned` to clean and minimise all the raw svg files.

Delete all sizes except 24, since Microsoft was providing thousands of icons ins multiple sizes, which was not really needed for this project.

find `<FILEPATH>` -type f \! -name "_24_"

Append -delete at the end to delete from the `<FILEPATH>`


