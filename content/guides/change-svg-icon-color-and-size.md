---
title: How to change an SVG icon's color and size
description: Why some SVG icons ignore CSS color, how currentColor fixes it, and the right way to resize icons without blurry edges or broken proportions.
date: 2026-09-23
order: 4
---

Icon SVGs often "refuse" to change color, or end up cropped and stretched when you resize them. Both problems come from a couple of attributes in the SVG markup. Once you know which ones, fixing them takes seconds.

## Why your icon ignores CSS `color`

Open a downloaded Fluent icon in a text editor and you'll see something like:

```html
<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="…" fill="#212121"/>
</svg>
```

The path has a hard-coded fill, `#212121`, which is Microsoft's default dark gray. CSS `color` doesn't affect it, because `color` only changes things that reference it.

### The fix: `currentColor`

Replace the fixed value with the keyword `currentColor`:

```html
<path d="…" fill="currentColor"/>
```

`currentColor` means "use this element's `color` value". Now the icon takes the text color of wherever you place it:

```css
.toolbar button { color: #424242; }
.toolbar button:hover { color: #0f6cbd; }
```

Both the button label and its icon turn blue on hover, and there's no extra CSS for the icon.

Fluenticons' copy and download options let you choose the color up front, so you can also export an icon with its final color baked in. `currentColor` is still the better choice for anything that needs hover states or dark mode.

### Overriding fill from CSS

If you can't edit the markup (a third-party component, say), CSS can override the attribute, because CSS rules win over SVG presentation attributes:

```css
.icon path { fill: currentColor; }
```

This works for inline SVG only. It doesn't work for SVGs loaded with `<img>` or `background-image`, because their contents aren't part of your page's DOM. For those, see the mask technique in [Using Fluent icons in plain HTML and CSS](/guides/use-fluent-icons-in-html-and-css/).

## Resizing without breaking the icon

### Keep the viewBox

`viewBox="0 0 24 24"` describes the coordinate system the icon was drawn in. `width` and `height` describe how big it appears. As long as the viewBox is present, you can set any size and the drawing scales to fit:

```css
.icon { width: 32px; height: 32px; }
```

If you remove the viewBox, the browser renders the paths at their original coordinates, so a 48&nbsp;px icon shows only its top-left 24&nbsp;px.

### Scale with the text

For icons inside text or buttons, size them in `em` so they grow with the font:

```css
.icon { width: 1.25em; height: 1.25em; vertical-align: -0.25em; }
```

The small negative `vertical-align` lines the icon up with the text baseline.

### Prefer multiples of the design grid

Fluent icons are drawn on a pixel grid. At the size they were designed for (24&nbsp;px here), their edges land exactly on pixels and look sharp. They scale smoothly to any size, but multiples such as 48 and 72, or the native smaller sizes Microsoft publishes (16 and 20&nbsp;px), render crispest. If an icon looks soft at 18 or 22&nbsp;px, try the nearest native size instead.

### Don't forget stroke weight

Scaling an SVG scales everything, including line thickness: double the size and the lines are twice as thick. That's usually what you want. If very large icons feel too heavy, use a size that Microsoft designed natively, since those are adjusted for their size.

## Gradients and multi-color effects

For hero graphics or marketing pages, the Fluenticons editor can apply a linear or radial gradient to an icon and export it as SVG or PNG. Under the hood it adds a `<linearGradient>` definition and points the path's fill at it:

```html
<defs>
  <linearGradient id="grad"><stop offset="0%" stop-color="#0f6cbd"/><stop offset="100%" stop-color="#8764b8"/></linearGradient>
</defs>
<path d="…" fill="url(#grad)"/>
```

If you inline several gradient icons on one page, give each gradient a unique `id`.

## Summary

- Use `fill="currentColor"` and control color with CSS `color`.
- Keep the `viewBox`; change `width` and `height` or use CSS to resize.
- Size inline icons in `em` so they follow the text.
- Native sizes and grid multiples render sharpest.
