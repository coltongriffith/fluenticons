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


