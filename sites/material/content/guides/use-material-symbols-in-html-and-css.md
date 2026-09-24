---
title: Using Material Symbols in HTML and CSS
description: Three ways to put Google's Material Symbols on a web page — the icon font from Google Fonts, a self-hosted font, or SVG files — with the trade-offs and the CSS you need for each.
date: 2026-09-24
order: 1
---

Material Symbols work on any website, with or without a framework. There are three common ways to use them, and the right one depends on how many icons you need and how much you want to customize them.

## Option 1: the icon font from Google Fonts

This is the quickest way to start. Add one stylesheet to your page's `<head>`:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
```

Then write the icon's name inside an element with the matching class:

```html
<span class="material-symbols-outlined">home</span>
```

The font uses *ligatures*: the browser replaces the word `home` with the home icon. For the other styles, swap `Outlined` for `Rounded` or `Sharp` in both the URL and the class name (`material-symbols-rounded`, `material-symbols-sharp`).

### Load only the icons you use

The full font is large because it contains every symbol. If you only need a few, add `icon_names` to the URL with a comma-separated, alphabetically sorted list:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=home,search,settings"
/>
```

Each icon page on this site gives you a link that loads just that icon.

### Size, color, fill and weight

The icon is text, so ordinary CSS works:

```css
.material-symbols-outlined {
  font-size: 24px; /* icon size */
  color: #1a73e8;  /* icon color */
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
```

`font-variation-settings` controls the four variable axes. See the [fill, weight, grade and optical size guide](/guides/material-symbols-fill-weight-grade-optical-size/) for what each one does.

## Option 2: self-host the font

If you'd rather not load anything from Google's servers — for privacy, performance or offline use — install the font from npm:

```bash
npm install material-symbols
```

and import the style you need in your app's entry file or main stylesheet:

```js
import "material-symbols/outlined.css";
```

The classes and ligatures work exactly as with Google Fonts. The trade-off is that you ship the whole font (there's no `icon_names` subsetting), so this suits apps that use many icons.

## Option 3: SVG files

SVGs are best when you need only a handful of icons, want zero font loading, or need icons in places fonts don't work well (emails, design tools, `<img>` tags, native apps).

Download an SVG from any icon page, or install a package with one file per style, fill and weight:

```bash
npm install @material-symbols/svg-400
```

Files are named by style and fill, for example `@material-symbols/svg-400/outlined/home.svg` and `@material-symbols/svg-400/outlined/home-fill.svg`. Other weights have their own packages, from `@material-symbols/svg-100` to `@material-symbols/svg-700`.

### Inline SVG

Paste the SVG into your HTML and set the fill to `currentColor` so it follows the surrounding text color:

```html
<button class="icon-button" aria-label="Search">
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="…" />
  </svg>
</button>
```

The SVGs on this site use a 24 × 24 viewBox. Google's original files use `viewBox="0 -960 960 960"`, which works the same way — just keep the `viewBox` that came with the file.

### SVG as an image or CSS mask

```html
<img src="/icons/home.svg" width="24" height="24" alt="Home" />
```

An `<img>` can't be recolored with CSS. If you need that, use the file as a CSS mask and color it with `background-color`:

```css
.icon-home {
  width: 24px;
  height: 24px;
  background-color: currentColor;
  mask: url("/icons/home.svg") center / contain no-repeat;
}
```

## Which should you choose?

| | Google Fonts | Self-hosted font | SVG |
| --- | --- | --- | --- |
| Setup | One `<link>` | npm + one import | Copy files or npm |
| Change fill/weight with CSS | Yes | Yes | No (pick another file) |
| Extra download | Small with `icon_names` | Whole font | Only the icons used |
| Works in emails and `<img>` | No | No | Yes |

## Accessibility

Icon fonts read their ligature text aloud ("home"). If the icon is decorative or sits next to a text label, hide it from screen readers with `aria-hidden="true"`. If the icon is the only content of a button or link, give the button an accessible name with `aria-label`, and still hide the icon itself.

```html
<button aria-label="Delete">
  <span class="material-symbols-outlined" aria-hidden="true">delete</span>
</button>
```
