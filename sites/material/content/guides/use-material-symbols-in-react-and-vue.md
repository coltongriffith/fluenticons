---
title: Using Material Symbols in React and Vue
description: How to use Google's Material Symbols as components in React and Vue — with the icon font or as SVG components — plus fill and weight props, accessibility, and keeping bundles small.
date: 2026-09-24
order: 4
---

There are two good ways to use Material Symbols in a React or Vue app: a small component around the **icon font**, or **SVG files imported as components**. Both work well; the font is more flexible, and SVGs load nothing extra.

## Approach 1: a component around the icon font

First load the font once, in your `index.html` or root layout (see the [HTML and CSS guide](/guides/use-material-symbols-in-html-and-css/) for options), or install it with npm:

```bash
npm install material-symbols
```

```js
// main.js / main.tsx
import "material-symbols/outlined.css";
```

### React

```jsx
export function Icon({ name, fill = 0, weight = 400, size = 24, label }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: size,
        fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}, "GRAD" 0, "opsz" ${size}`,
      }}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      {name}
    </span>
  );
}

// Usage
<Icon name="favorite" fill={1} />
```

### Vue

```vue
<script setup>
const props = defineProps({
  name: { type: String, required: true },
  fill: { type: Number, default: 0 },
  weight: { type: Number, default: 400 },
  size: { type: Number, default: 24 },
});
</script>

<template>
  <span
    class="material-symbols-outlined"
    aria-hidden="true"
    :style="{
      fontSize: `${size}px`,
      fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
    }"
  >{{ name }}</span>
</template>
```

The advantage: any icon is one prop away, and fill and weight change instantly (and can be animated). The cost is the font download, which includes every icon unless you subset it.

## Approach 2: SVG files as components

Install the SVG package for the weight you want:

```bash
npm install @material-symbols/svg-400
```

### React with Vite

Add [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) to your Vite config, then import SVGs with `?react`:

```jsx
import HomeIcon from "@material-symbols/svg-400/outlined/home.svg?react";
import FavoriteFilledIcon from "@material-symbols/svg-400/rounded/favorite-fill.svg?react";

export function Toolbar() {
  return (
    <button aria-label="Home">
      <HomeIcon width={24} height={24} fill="currentColor" aria-hidden="true" />
    </button>
  );
}
```

With Next.js or Create React App the setup differs (Next.js uses `@svgr/webpack`), but the idea is the same: each SVG becomes a component.

### Vue with Vite

Add [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader), then import with `?component`:

```vue
<script setup>
import HomeIcon from "@material-symbols/svg-400/outlined/home.svg?component";
</script>

<template>
  <HomeIcon width="24" height="24" fill="currentColor" aria-hidden="true" />
</template>
```

Each import only adds that one icon to your bundle, so this is the lightest option when you use a few dozen icons. Different fills and weights are different files (`home-fill.svg`, `@material-symbols/svg-600/…`).

## What about MUI?

`@mui/icons-material` contains Google's *classic* Material Icons, not Material Symbols. To use Symbols in an MUI app, use MUI's `Icon` component with the font:

```jsx
import Icon from "@mui/material/Icon";

<Icon baseClassName="material-symbols-outlined">home</Icon>
```

or import SVGs as shown above. See [Material Symbols vs. Material Icons](/material-icons-vs-material-symbols/) for the differences between the two sets.

## Tips

- **Don't build icon names dynamically from a huge map of SVG imports.** Importing every SVG to look them up by name puts the whole set in your bundle. If you need dynamic names, the font is the better fit.
- **Hide decorative icons from screen readers** with `aria-hidden="true"`, and give icon-only buttons an `aria-label`.
- **Use `currentColor`** so icons follow the text color and work in dark mode without extra CSS.

Every icon page on this site has ready-made React and Vue snippets for the style, fill and weight you pick.
