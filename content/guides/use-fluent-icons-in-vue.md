---
title: How to use Fluent UI System Icons in Vue and Nuxt
description: Three ways to use Fluent icons in Vue 3 and Nuxt — copied SVG components, SVG files with vite-svg-loader, and on-demand icons with unplugin-icons and Iconify.
date: 2026-09-23
order: 2
---

Microsoft maintains an official React package for Fluent UI System Icons, but not a Vue one. That's not a problem. The icons are simple, single-color SVGs, so there are several clean ways to use them in Vue 3 and Nuxt. This guide covers three, from zero dependencies to fully automatic.

## Option 1: copy the icon as a Vue component

For a few icons, this is the simplest approach. Open an icon on Fluenticons, choose **Vue Component** in the copy menu, and paste it into a new file:

```vue
<!-- components/icons/Delete24Regular.vue -->
<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="…" fill="currentColor" />
  </svg>
</template>
```

Make sure the path uses `fill="currentColor"`. When you copy from the editor, pick the color you want, or edit the fill afterwards. Then the icon inherits the text color wherever you use it:

```vue
<button class="text-red-600">
  <Delete24Regular class="h-5 w-5" />
  Delete
</button>
```

Vue passes `class` and other attributes through to the root `<svg>`, so sizing with CSS classes works without extra props.

**Good for:** small projects, design systems where you want full control over the markup.

## Option 2: import SVG files with vite-svg-loader

If you'd rather keep the original `.svg` files in your repo, [`vite-svg-loader`](https://www.npmjs.com/package/vite-svg-loader) turns them into Vue components at build time.

```bash
npm install -D vite-svg-loader
```

```js
// vite.config.js
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

export default {
  plugins: [vue(), svgLoader()],
};
```

Download the SVG from any icon page and import it:

```vue
<script setup>
import DeleteIcon from "@/assets/icons/ic_fluent_delete_24_regular.svg?component";
</script>

<template>
  <DeleteIcon class="h-5 w-5" aria-hidden="true" />
</template>
```

The downloaded files use a fixed dark gray fill (`#212121`). Replace it with `currentColor` once so the icons follow your text color. A quick find-and-replace across your icons folder does it.

**Good for:** teams that want the original files under version control.

## Option 3: on-demand icons with unplugin-icons

[`unplugin-icons`](https://www.npmjs.com/package/unplugin-icons) can import any icon from the [Iconify](https://iconify.design) collections as a component, and only the icons you use end up in your bundle. Iconify includes the Fluent UI System Icons under the `fluent` prefix.

```bash
npm install -D unplugin-icons @iconify-json/fluent
```

```js
// vite.config.js
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

export default {
  plugins: [vue(), Icons({ compiler: "vue3" })],
};
```

Icon names are the icon name in kebab-case, then the size and style:

```vue
<script setup>
import DeleteRegular from "~icons/fluent/delete-24-regular";
import HeartFilled from "~icons/fluent/heart-24-filled";
</script>

<template>
  <DeleteRegular />
  <HeartFilled class="text-rose-600" />
</template>
```

In **Nuxt**, add the plugin through `vite.plugins` in `nuxt.config`, or use a Nuxt icon module that supports Iconify collections.

**Good for:** larger apps that use many icons and want automatic tree-shaking.

## Toggling between filled and regular

For state toggles such as favorites, likes or selected tabs, render one or the other:

```vue
<template>
  <button type="button" :aria-pressed="isFavorite" @click="isFavorite = !isFavorite">
    <HeartFilled v-if="isFavorite" />
    <HeartRegular v-else />
    Favorite
  </button>
</template>
```

Both styles share the same grid and outer shape, so swapping them doesn't shift the layout.

## Accessibility

- If the icon sits next to visible text, add `aria-hidden="true"` to the SVG so screen readers skip it.
- If the button has only an icon, put `aria-label` on the **button**, not the SVG.
- Don't rely on color alone to communicate state. Pair it with the filled/regular change or with text.

## Which option should you choose?

| | Copied components | vite-svg-loader | unplugin-icons |
| --- | --- | --- | --- |
| Dependencies | None | 1 dev dependency | 2 dev dependencies |
| Adding a new icon | Copy and paste | Download the file | Change the import |
| Tree-shaking | Manual | Automatic | Automatic |
| Works without a build step | Yes | No | No |

If you're unsure, start with option 1 and move to option 3 once you're using more than a dozen or so icons.
