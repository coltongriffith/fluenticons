---
title: "WinUI icons: SymbolIcon, FontIcon and Fluent icons in WinUI 3"
seoTitle: "WinUI Icons — SymbolIcon, FontIcon & Fluent System Icons in WinUI 3"
description: The icon elements in WinUI 3 and when to use each. SymbolIcon, FontIcon with Segoe Fluent Icons, PathIcon, and using Microsoft's Fluent UI System Icons when the system font doesn't have the icon.
date: 2026-10-11
---

WinUI 3 has several icon elements. Which one to use depends on where the icon comes from: the Windows system font, Microsoft's larger [Fluent UI System Icons](/) set, or your own artwork. All of them inherit the foreground color, so they follow light, dark and high-contrast themes.

## The icon elements

| Element | Draws | Use it for |
| --- | --- | --- |
| `SymbolIcon` | A glyph from the `Symbol` enumeration (Segoe Fluent Icons) | Common commands: Add, Delete, Edit, Save, Share |
| `FontIcon` | Any glyph from any font, by code point | Segoe Fluent Icons glyphs not in `Symbol`, or the Fluent System Icons font |
| `PathIcon` | Vector path data | One-off icons, SVG paths from an icon set |
| `ImageIcon` | An image, including SVG | Multicolor or branded icons |
| `BitmapIcon` | A bitmap tinted with the foreground | Simple single-color images |

Controls such as `AppBarButton` and `NavigationViewItem` take one of these in their `Icon` property. Templated places use the matching `*IconSource` (`SymbolIconSource`, `FontIconSource`, `PathIconSource`).

## System icons: Segoe Fluent Icons

Windows 11's icon font, Segoe Fluent Icons, covers standard commands. Use `SymbolIcon` when the icon is in the `Symbol` enumeration, and `FontIcon` with its code point otherwise:

```xml
<AppBarButton Label="Add" Icon="Add" />
<SymbolIcon Symbol="GlobalNavigationButton" />
<FontIcon FontFamily="{StaticResource SymbolThemeFontFamily}" Glyph="&#xE713;" />
```

`SymbolThemeFontFamily` resolves to Segoe Fluent Icons on Windows 11 and Segoe MDL2 Assets on Windows 10. The [Segoe Fluent Icons list](/segoe-fluent-icons/) has all 1,500+ glyphs with their codes. Microsoft designs them for 16, 20, 24, 32, 40, 48 and 64 px.

## When the system font doesn't have it: Fluent UI System Icons

Segoe Fluent Icons is built for system UI and has gaps: app features like dashboards, AI, finance or health often have no glyph. Fluent UI System Icons is Microsoft's 3,000+ icon set in the same design language, MIT licensed, with regular and filled styles. Two ways to use it in WinUI:

**The icon font.** Add `FluentSystemIcons-Regular.ttf` (and `-Filled`) from Microsoft's [fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons/tree/main/fonts) repository to `Assets/Fonts`, then use a `FontIcon`. Each icon page's **WinUI / WPF** code tab has the code point:

```xml
<FontIcon FontFamily="ms-appx:///Assets/Fonts/FluentSystemIcons-Regular.ttf#FluentSystemIcons-Regular"
          Glyph="&#xF481;" FontSize="20" /> <!-- Home -->
```

Define the font once as a resource (`<FontFamily x:Key="FluentIcons">…</FontFamily>`) so you don't repeat the path.

**A path.** For a few icons, click **Copy SVG** on an icon page and put the `d="…"` value in a `PathIcon`:

```xml
<PathIcon Data="PASTE THE PATH DATA HERE" />
```

## Filled for selected, regular for everything else

Windows uses the regular (outlined) style by default and the filled style for a selected or active state, such as the current page in a `NavigationView`. With the Fluent System Icons font that means swapping between the Regular and Filled fonts; [filled vs. regular icons](/guides/filled-vs-regular-icons/) covers the pattern.

## WinUI Gallery

Microsoft's WinUI 3 Gallery app shows each icon element live, with the code, and is the quickest way to try them. For WPF, see [WPF icons](/guides/wpf-ui-icons/); for every Microsoft set, see [Microsoft icons](/microsoft-icons/).
