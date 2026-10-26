---
title: "Lucide icons in Vue, Svelte, Angular and plain HTML"
seoTitle: "Use Lucide Icons in Vue, Svelte, Angular & HTML"
description: The current Lucide packages for Vue, Svelte 5 and Angular, how to use the icon font, and how to add icons to a page without a framework.
date: 2026-10-26
order: 2
---

Lucide publishes an official package for each framework. In 2026 several of them moved to new names under the `@lucide` scope, and the old packages are deprecated, so check which one your project uses.

| Framework | Package | Old (deprecated) package |
| --- | --- | --- |
| React | `lucide-react` | |
| Vue | `@lucide/vue` | `lucide-vue-next` |
| Svelte 5 | `@lucide/svelte` | `lucide-svelte` (Svelte 4) |
| Angular | `@lucide/angular` | `lucide-angular` |
| Solid | `lucide-solid` | |
| React Native | `lucide-react-native` | |
| Astro | `@lucide/astro` | |
| No framework | `lucide`, `lucide-static` | |

## Vue

```bash
npm install @lucide/vue
```

```vue
<script setup>
import { House } from "@lucide/vue";
</script>

<template>
  <House :size="24" :stroke-width="1.5" color="currentColor" />
</template>
```

## Svelte 5

```bash
npm install @lucide/svelte
```

```svelte
<script>
  import { House } from "@lucide/svelte";
</script>

<House size={24} strokeWidth={1.5} />
```

## Angular

`@lucide/angular` provides each icon as a standalone component used on an `svg` element:

```ts
import { Component } from "@angular/core";
import { LucideHouse } from "@lucide/angular";

@Component({
  selector: "app-example",
  imports: [LucideHouse],
  template: `<svg lucideHouse [size]="24" [strokeWidth]="1.5"></svg>`,
})
export class Example {}
```

## Plain HTML with the lucide package

Without a framework, add `data-lucide` placeholders and let the `lucide` script replace them with SVGs:

```html
<i data-lucide="house"></i>
<i data-lucide="search" width="20" height="20" stroke-width="1.5"></i>

<script src="https://unpkg.com/lucide@latest"></script>
<script>
  lucide.createIcons();
</script>
```

Pin a version (`lucide@1.61.0` rather than `@latest`) in production so icons can't change under you.

## The icon font

`lucide-static` includes an icon font, handy for CSS-only projects:

```html
<link rel="stylesheet" href="https://unpkg.com/lucide-static@latest/font/lucide.css">

<i class="icon-house"></i>
```

Fonts can't change stroke width and are blurrier at small sizes than SVG, so prefer SVGs or components when you can. Each icon page lists the icon's font class and code point.

## Plain SVG files

`lucide-static` also has every icon as an SVG file (`lucide-static/icons/house.svg`). Or download any icon from its page here, at the size and stroke width you pick.
