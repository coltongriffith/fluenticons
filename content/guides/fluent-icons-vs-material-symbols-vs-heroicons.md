---
title: "Fluent icons vs. Material Symbols vs. Heroicons vs. Lucide"
description: A practical comparison of four popular open-source icon sets — size of the set, styles, licenses, framework support — and how to choose one for your project.
date: 2026-09-23
order: 8
---

Choosing an icon set early saves a lot of rework later. Changing icons halfway through a project means touching every screen. Here's how Microsoft's Fluent UI System Icons compare with three other widely used open-source sets. The numbers below are approximate and grow as the projects add icons.

## At a glance

| | Fluent UI System Icons | Material Symbols | Heroicons | Lucide |
| --- | --- | --- | --- | --- |
| Maintained by | Microsoft | Google | Tailwind Labs | Open-source community |
| License | MIT | Apache 2.0 | MIT | ISC |
| Size of set | Thousands of designs | Thousands of designs | A few hundred | Over a thousand |
| Styles | Regular, Filled (plus Color for some icons) | Outlined, Rounded, Sharp, each with a fill option | Outline, Solid, Mini, Micro | Outline |
| Sizes | Hand-tuned sizes, commonly 16–48 px | Variable font with an optical-size axis | 24, 20 and 16 px | 24 px, stroke adjustable |
| Official React package | Yes | Via community packages | Yes | Yes |

## Fluent UI System Icons

**Strengths**

- A very large, consistent set with good coverage of productivity concepts: documents, calendars, people, text formatting, devices and communication.
- Many icons are **hand-tuned at several sizes**, so small sizes look crisp instead of just being scaled down.
- Filled and regular versions share silhouettes, which makes on/off state toggles easy. See [filled vs. regular icons](/guides/filled-vs-regular-icons/).
- MIT License, and a well-maintained React package.

**Trade-offs**

- The look is distinctly Microsoft: soft corners and a friendly geometric style. That's great for tools and productivity apps, but may clash with a very sharp or playful brand.
- Not every icon exists at every size.

**Best for:** dashboards, productivity and business apps, anything that integrates with the Microsoft ecosystem, and apps that need a very wide range of concepts.

## Material Symbols

**Strengths**

- Huge coverage, and the default choice for Android and Material Design apps.
- Delivered as a **variable font**, so you can adjust weight, fill and optical size continuously.
- Three distinct styles (Outlined, Rounded, Sharp) let you match different brand personalities.
- You can browse and download every Material Symbol, in every style, fill and weight, on our sister site [Materialicons](https://materialicons.co/).

**Trade-offs**

- The variable-font approach is powerful, but loading the full font can be heavy. Subsetting or using SVG exports is worth the effort.
- Apache 2.0 has slightly more formal notice requirements than MIT.

**Best for:** Android apps, Material Design products, and teams that want fine control through font variation axes.

## Heroicons

**Strengths**

- Small, carefully curated and extremely consistent, made by the Tailwind CSS team.
- Excellent defaults for marketing sites and SaaS interfaces, and pairs naturally with Tailwind.
- Distinct outline, solid, mini and micro variants, each tuned for its size.

**Trade-offs**

- A few hundred icons means you'll hit gaps in specialized apps, such as editors or admin tools with many actions.

**Best for:** landing pages, SaaS products and Tailwind projects with a focused feature set.

## Lucide

**Strengths**

- A community-driven continuation of Feather Icons, with a large and growing set.
- Stroke-based, so you can change **stroke width** globally for a lighter or bolder feel.
- Official packages for many frameworks.

**Trade-offs**

- Outline style only. There's no built-in filled variant for state toggles.
- Community-maintained, so style consistency depends on contributor review, although it's generally very good.

**Best for:** developers who want a clean, neutral outline style with framework packages everywhere.

## How to choose

1. **Match your platform.** Building for Windows or around Microsoft 365? Fluent will feel native. Android? Material Symbols.
2. **List the concepts you need.** Write down 30–40 icons your product needs and check each set. Coverage gaps show up fast.
3. **Decide whether you need filled states.** If toggles and selected states matter, Fluent's filled/regular pairs or Heroicons' outline/solid pairs make them straightforward.
4. **Check the license fits your distribution.** All four are permissive, but know what notice you need to include. See our [Fluent license guide](/guides/fluent-icons-license/).
5. **Don't mix sets casually.** Different sets use different stroke weights, corner radii and optical sizes. If you must fill a gap, redraw the missing icon in the style of your main set.

If Fluent looks like the right fit, [search the full set](/) or [browse it A–Z](/browse/).
