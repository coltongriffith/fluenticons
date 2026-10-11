---
title: "Fluent icon themes for Linux, VS Code and your own apps"
seoTitle: "Fluent Icon Theme — Linux, VS Code & Windows 11 Style Icons"
description: The Fluent icon theme for Linux desktops, Fluent product icons for VS Code, and how to give your own app the Windows 11 Fluent look with Microsoft's free icons.
date: 2026-10-11
---

"Fluent icon theme" usually means one of three things: a Linux icon theme in the style of Windows 11, a VS Code theme that swaps its interface icons for Fluent ones, or a consistent Fluent icon set for an app you're building. The first two are community projects inspired by Microsoft's design; the third is Microsoft's own [Fluent UI System Icons](/).

## Fluent icon theme for Linux

The **Fluent icon theme** by vinceliuice is a popular Linux icon theme in the Windows 11 Fluent style, for GNOME, KDE Plasma, Xfce and other desktops. It covers application, folder and system icons, comes in several accent colors with light and dark variants, and is licensed under GPL-3.0. It's often paired with the same author's Fluent GTK theme.

Many distributions package it as `fluent-icon-theme`. To install the latest version from source:

```sh
git clone https://github.com/vinceliuice/Fluent-icon-theme.git
cd Fluent-icon-theme
./install.sh
```

Then pick **Fluent** under icons in GNOME Tweaks (Appearance), KDE System Settings (Colors & Themes > Icons) or your desktop's appearance settings. Run `./install.sh --help` for the color and variant options.

This theme is a fan project, not made by Microsoft, and its GPL license differs from Microsoft's icons. Use it to theme your desktop; to ship Fluent icons inside your own software, use Microsoft's MIT-licensed set below.

## Fluent icons for VS Code

VS Code separates **file icon themes** (the icons next to file names) from **product icon themes** (the icons in the activity bar, toolbars and status bar). The **Fluent Icons** product icon theme by Miguel Solorio replaces VS Code's interface icons with Fluent-style ones. Install it from the Extensions view, then run **Preferences: Product Icon Theme** from the command palette and choose it. File icons stay as they are; pair it with any file icon theme you like.

## A Fluent icon theme for your own app

If you're building an app or website and want it to look like Windows 11 or Microsoft 365, use Microsoft's own set, Fluent UI System Icons:

- **3,000+ icons**, each in regular (outlined) and filled styles, many in color, drawn at sizes from 10 to 48 px.
- **MIT licensed**, free for commercial work.
- **Every platform:** React (`@fluentui/react-icons`), SVG, Blazor, WinUI and WPF, Android, iOS and Flutter. Each icon page here has the code.

For a consistent theme, use one style per state (regular by default, filled for selected or active, as in [filled vs. regular icons](/guides/filled-vs-regular-icons/)), one size per context (20 px in dense toolbars, 24 px elsewhere), and `currentColor` so icons follow your light and dark themes ([how to change icon color and size](/guides/change-svg-icon-color-and-size/)).

## And Windows 11 itself?

Windows 11's system icons come from the **Segoe Fluent Icons** font, which is built in and licensed for Windows apps only. The [Segoe Fluent Icons list](/segoe-fluent-icons/) has every glyph. Windows doesn't support third-party icon themes the way Linux does; tools that re-skin it modify system files, so use them with care.

See [every Microsoft icon set](/microsoft-icons/) for how these fit together.
