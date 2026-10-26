---
title: "Lucide vs Heroicons: which icon set should you use?"
seoTitle: "Lucide vs Heroicons: Icon Sets Compared (2026)"
description: Lucide and Heroicons compared on size, styles, frameworks, license and look, with a quick way to decide and how to switch from one to the other.
date: 2026-10-26
order: 3
---

Lucide and Heroicons are two of the most popular open-source icon sets for web apps, and both pair well with Tailwind CSS. They suit different projects.

## At a glance

| | Lucide | Heroicons |
| --- | --- | --- |
| Icons | 1,900+ | 324 |
| Styles | One: 2 px outline (stroke width adjustable) | Four: outline (24 px), solid (24 px), mini (20 px), micro (16 px) |
| Made by | Lucide contributors (a fork of Feather) | Tailwind Labs |
| License | ISC (some icons MIT, from Feather) | MIT |
| Official packages | React, Vue, Svelte, Angular, Solid, React Native, Astro, vanilla JS, icon font | React, Vue |
| Default in | shadcn/ui | Tailwind UI / Catalyst |

## Choose Lucide when

- You need breadth: product UIs quickly run out of Heroicons' 324 icons, while Lucide has icons for charts, files, developer tools, devices, weather and much more.
- You use Svelte, Angular, Solid or React Native, or want an icon font.
- You want to tune the stroke width to match your typography.
- Your project uses shadcn/ui, which already installs `lucide-react`.

## Choose Heroicons when

- You want solid (filled) icons, or icons drawn specifically for 20 px and 16 px.
- A smaller, very consistent set covers what you need.
- You're building with Tailwind UI or Catalyst components.

## Switching from Heroicons to Lucide

Most Heroicons have a direct Lucide equivalent, though names often differ: Heroicons' `HomeIcon` is Lucide's `House`, `XMarkIcon` is `X`, `TrashIcon` is `Trash`, `Cog6ToothIcon` is `Settings`, and `MagnifyingGlassIcon` is `Search`. Search for the Heroicons name here: Lucide's tags often match it. Then swap the imports one screen at a time; both sets render inline SVG and accept `className`, so styling carries over.

## Can you mix them?

You can, but icons from different sets look subtly different side by side (stroke weight, corner radius, proportions). If you need a solid style for a few states, such as a filled heart for "favorited", consider filling a Lucide icon with `fill="currentColor"` before adding a second set.
