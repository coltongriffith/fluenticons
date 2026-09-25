---
title: "Material Icons vs. Material Symbols: what's the difference?"
description: How Google's current Material Symbols differ from the older Material Icons — styles, variable axes, icon count, naming — and how to migrate a project from one to the other.
date: 2026-09-25
path: /material-icons-vs-material-symbols
order: 3
---

Google has two icon sets with similar names, and search results mix them up. In short: **Material Symbols** is the current, actively updated set, and **Material Icons** is the older set, which still works but no longer gets new icons.

## At a glance

| | Material Icons (classic) | Material Symbols |
| --- | --- | --- |
| Status | Maintained, but no new icons | Current, updated regularly |
| Styles | Filled, Outlined, Round, Sharp, Two-tone | Outlined, Rounded, Sharp |
| Customization | Fixed styles | Variable fill, weight, grade and optical size |
| Font classes | `material-icons`, `material-icons-outlined`, … | `material-symbols-outlined`, `material-symbols-rounded`, `material-symbols-sharp` |
| Number of icons | About 2,100 | Over 3,900 (see the [full list](/browse/)) |

## Styles: five fixed versus three variable

Material Icons shipped five separate fonts, one per style. Material Symbols has three styles — Outlined, Rounded and Sharp — and each one is a variable font:

- The classic **Filled** style corresponds to any Symbols style with **fill set to 1**.
- Classic **Outlined**, **Round** and **Sharp** map to Symbols **Outlined**, **Rounded** and **Sharp** with fill 0.
- **Two-tone** has no direct equivalent in Symbols.

On top of fill, Symbols adds weight, grade and optical size. See the [guide to the variable axes](/guides/material-symbols-fill-weight-grade-optical-size/).

## Names

Most icons have the same name in both sets, so `home`, `search` and `delete` work as they are. Some icons were renamed or merged in Symbols, and Symbols adds many icons that never existed in the classic set. If a classic name doesn't show an icon in Symbols, search this site for what the icon means.

## Migrating a website

1. **Swap the stylesheet.** Replace the Material Icons font link with the Material Symbols one:

   ```html
   <!-- Before -->
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
   <!-- After -->
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
   ```

2. **Update the class names**: `material-icons` → `material-symbols-outlined` (or rounded or sharp).

3. **Recreate the Filled look** where you need it, with `font-variation-settings: "FILL" 1`. Classic Material Icons default to the filled style, so if your existing icons look filled, you'll want fill 1 to match.

4. **Check every icon renders.** A name that doesn't exist in Symbols shows up as plain text, which makes missing icons easy to spot on the page.

## What about frameworks?

- **MUI (React):** `@mui/icons-material` contains the classic Material Icons as React components. To use Symbols with MUI, use the font with MUI's `Icon` component (set `baseClassName` to `material-symbols-outlined`) or import SVGs.
- **Angular Material:** `<mat-icon>` works with Symbols. Set `fontSet="material-symbols-outlined"` on the icon, or register it as the default font set.
- **Flutter:** Flutter's built-in `Icons` class is the classic set. The community `material_symbols_icons` package provides Symbols with fill and weight options.
- **Android:** Android Studio's Vector Asset tool includes Material icons, and you can import any Symbols SVG from this site as a vector drawable.

## Should you switch?

For new projects, use Material Symbols: it has more icons, gets updates, and one font covers every style. For an existing project on Material Icons, there's no urgency — it keeps working — but switching is usually a short find-and-replace plus a check for renamed icons.
