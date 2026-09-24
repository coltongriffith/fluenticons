---
title: "Material Symbols fill, weight, grade and optical size explained"
description: What the four variable axes of Material Symbols do, which values to use, how to set them in CSS, and how to get the same looks as SVG files.
date: 2026-09-24
order: 2
---

Material Symbols replaced the fixed styles of the older Material Icons with a *variable font*. Instead of choosing between a handful of pre-made versions, you tune four axes. Here's what each one does and when to change it.

## The four axes at a glance

| Axis | CSS tag | Range | Default | What it changes |
| --- | --- | --- | --- | --- |
| Fill | `FILL` | 0 to 1 | 0 | Outlined (0) or solid (1) |
| Weight | `wght` | 100 to 700 | 400 | Stroke thickness |
| Grade | `GRAD` | -50 to 200 | 0 | Fine thickness adjustment without changing size |
| Optical size | `opsz` | 20 to 48 | 24 | Detail and stroke tuned for the display size |

All four are set with one CSS property:

```css
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24;
}
```

The Google Fonts URL decides which ranges are available. The full range is `opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`. If you request a single value, such as `wght@400`, the font is smaller but you can't change that axis later.

## Fill

Fill switches an icon between its outlined drawing and a solid version. Outlined icons are lighter and suit dense interfaces. Filled icons have more visual weight and read as "active".

A common pattern is to use outlined icons in navigation and fill the one for the current page:

```css
.nav-link .material-symbols-outlined {
  font-variation-settings: "FILL" 0;
  transition: font-variation-settings 0.2s;
}
.nav-link[aria-current="page"] .material-symbols-outlined {
  font-variation-settings: "FILL" 1;
}
```

Because fill is a continuous axis, the change can be animated smoothly, which isn't possible when you swap between two separate icons.

## Weight

Weight changes stroke thickness from a thin 100 to a heavy 700. Match it to the text next to the icon: regular body text pairs well with 400, a bold heading with 600 or 700. Thin weights look elegant at large sizes but can disappear at 16–20 px.

## Grade

Grade also changes thickness, but much more subtly, and without changing the icon's overall size. It's meant for fine adjustments:

- **Negative grade (around -25)** for light icons on dark backgrounds. Light-on-dark strokes tend to look heavier than they are, so a slightly lower grade balances them.
- **Positive grade (up to 200)** for emphasis, such as a selected state, without jumping to a heavier weight.

Many projects never touch grade, and that's fine.

## Optical size

Optical size adapts the drawing to how large it's displayed. At 20 px, strokes get slightly heavier and details simpler so the icon stays legible. At 48 px, strokes are thinner and there's more detail. For best results, set `opsz` to the size you display the icon at:

```css
.icon-small { font-size: 20px; font-variation-settings: "opsz" 20; }
.icon-large { font-size: 48px; font-variation-settings: "opsz" 48; }
```

## Getting the same looks as SVG

SVG files aren't variable, so each combination is a separate file. The `@material-symbols` SVG packages include every style (outlined, rounded, sharp), both fill values and seven weights:

```
@material-symbols/svg-{100…700}/{outlined|rounded|sharp}/{name}.svg
@material-symbols/svg-{100…700}/{outlined|rounded|sharp}/{name}-fill.svg
```

For example, a rounded, filled icon at weight 600 is `@material-symbols/svg-600/rounded/favorite-fill.svg`. Grade and optical size aren't in these packages, so if you need them, use the font.

Every icon page on this site has a style, fill and weight picker that previews the combination and gives you the matching SVG, PNG and code.

## Quick recommendations

- **Start with the defaults** (fill 0, weight 400, grade 0, optical size 24) and change one thing at a time.
- **Use fill for state**, not decoration: outlined by default, filled when selected or active.
- **Match weight to your typography**, so icons don't look heavier or lighter than the text beside them.
- **Only request the axis ranges you use** from Google Fonts to keep the font download small.
