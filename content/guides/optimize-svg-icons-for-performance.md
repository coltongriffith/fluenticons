---
title: Optimizing SVG icons for web performance
description: How to keep icons from slowing your site down: minifying SVGs, inline vs. sprite vs. external files, caching, and loading large icon sets efficiently.
date: 2026-09-23
order: 9
---

A single icon is tiny, usually well under a kilobyte. But icons add up. A page with 60 inline icons, or a bundle that accidentally includes a whole icon library, can add hundreds of kilobytes. Here's how to keep icons fast.

## 1. Start with clean SVGs

Icons exported from design tools often carry editor metadata, unnecessary groups, IDs and overly precise numbers. Fluent UI System Icons are already clean: typically just an `<svg>` with one or two `<path>` elements. If you draw or modify your own icons, run them through [SVGO](https://github.com/svg/svgo):

```bash
npx svgo -f ./icons -o ./icons-optimized
```

SVGO strips metadata, merges paths and rounds coordinates, often cutting file size by 30–60% for design-tool exports.

## 2. Only ship the icons you use

This is the biggest win, and the easiest to get wrong.

- **With `@fluentui/react-icons`**, import icons by name (`import { Delete24Regular } from "@fluentui/react-icons"`). Modern bundlers keep only those icons.
- **Avoid** building dynamic lookups like `icons[name]` from the whole package. They force the bundler to include everything.
- **With Iconify and unplugin-icons**, each import compiles to just that icon.

Check your production bundle with a visualizer (such as `rollup-plugin-visualizer` or Next.js's bundle analyzer) at least once. It's the fastest way to catch a whole icon library sneaking in.

## 3. Pick the right delivery method

| Method | Extra requests | Cacheable | Recolor with CSS | Good for |
| --- | --- | --- | --- | --- |
| Inline SVG | None | With the page | Yes | A handful of UI icons |
| SVG sprite (`<use href>`) | One | Yes | Yes | Many repeated icons on multi-page sites |
| External file (`<img>`, CSS) | One per icon | Yes | Only with CSS masks | Large grids, content images |

### Inline SVG

Inline is fastest for the first render of a few icons: no extra requests, and no flash of missing icons. Repeating the same 800-byte path 50 times in a list isn't, though. Compression helps, but the browser still has to parse all of it.

### SVG sprites

A sprite bundles many icons into one file as `<symbol>` elements. You reference them by ID:

```html
<svg width="24" height="24" aria-hidden="true">
  <use href="/sprite.svg#delete-24-regular"></use>
</svg>
```

The sprite is downloaded and cached once, and each use is a few bytes of markup. Make the symbols' paths use `fill="currentColor"` so they still follow the text color.

### External files and CSS masks

For large grids of icons (like the icon browser on this site), each icon is loaded as its own small file and drawn with a CSS mask, which keeps `currentColor` coloring. The browser loads them in parallel over HTTP/2, caches them, and only fetches the icons that are actually on the page. See [Using Fluent icons in plain HTML and CSS](/guides/use-fluent-icons-in-html-and-css/) for the CSS.

## 4. Cache aggressively

Icon files rarely change. Serve them with long cache lifetimes, and put a hash or version in the file name if you ever need to update one:

```
Cache-Control: public, max-age=31536000, immutable
```

If you can't version file names, a shorter lifetime (a day or a week) is a sensible compromise.

## 5. Avoid layout shift

Always give icons explicit dimensions, either `width`/`height` attributes or CSS. An `<img>` without dimensions renders at 0&nbsp;×&nbsp;0 until the file arrives, and then pushes content around. That hurts your Cumulative Layout Shift score and is annoying for users.

## 6. Don't lazy-load tiny icons above the fold

`loading="lazy"` is great for large images below the fold, but can delay small icons that are visible immediately. Lazy-load icons in long lists, not in your header or toolbar.

## Checklist

- [ ] Icons minified (SVGO or already clean)
- [ ] Only used icons in the bundle, verified with a bundle analyzer
- [ ] Sprites or external files for large or repeated sets
- [ ] Long cache headers on icon files
- [ ] Explicit width and height on every icon
