---
title: "Microsoft icons: every official set explained"
description: Fluent UI System Icons, Segoe Fluent Icons, Fabric MDL2, Fluent Emoji, Office and Azure icons. What each Microsoft icon set is for and how it's licensed.
date: 2026-10-02
path: /microsoft-icons
order: 10
---

Microsoft publishes several icon sets, and the right one depends on what you're building. Most people looking for "Microsoft icons" want [Fluent UI System Icons](/), the open-source set used across Microsoft 365, Teams and Windows 11 apps. This page covers each official set, what it's licensed for and where to get it.

| Icon set | What it is | Use it for | License |
| --- | --- | --- | --- |
| Fluent UI System Icons | 3,000+ interface icons in regular, filled and color styles | Any app or website: web, React, iOS, Android, Flutter, Windows | MIT |
| Segoe Fluent Icons | The Windows 11 system icon font | Apps running on Windows | Windows apps only |
| Segoe MDL2 Assets | The Windows 10 icon font, replaced by Segoe Fluent Icons | Older Windows apps | Ships with Windows |
| Fabric MDL2 icons | The Office UI Fabric / Fluent UI React v8 icon font | Apps that work with Microsoft services | Microsoft Fabric Assets License |
| Fluent Emoji | Emoji in 3D, color, flat and high-contrast styles | Chat, reactions, illustrations | MIT |
| Office and Microsoft 365 app icons | Product icons for Word, Excel, Teams and others | Linking to or opening those apps | Microsoft brand guidelines |
| Azure architecture icons | Icons for Azure services | Architecture diagrams, training, documentation | Diagrams and docs only |

## Fluent UI System Icons

This is Microsoft's main icon set for product interfaces, and the one to start with. It has more than 3,000 icons, most in sizes from 16 to 48 px, in a regular (outlined) and a filled style, with color versions of common icons. Microsoft develops it in the open at [microsoft/fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons) and releases it under the MIT License, so you can use it in commercial and open-source projects, including ones that have nothing to do with Microsoft.

The icons come as packages for each platform:

- **React:** `@fluentui/react-icons`, used by Fluent UI React v9. See [how to use Fluent icons in React](/guides/use-fluent-icons-in-react/).
- **SVG:** `@fluentui/svg-icons`, for plain HTML, Vue, Svelte or any other framework.
- **Flutter, Android and iOS:** native packages from the same repository.

Fluenticons is a free viewer for this set: [search by name or meaning](/), [browse them A–Z](/browse/), and copy the SVG, PNG or code for any icon.

## Segoe Fluent Icons

Segoe Fluent Icons is the icon font built into Windows 11. Windows apps use it through `SymbolIcon` or a `FontIcon` with a glyph code point, for example `<FontIcon FontFamily="Segoe Fluent Icons" Glyph="&#xE700;"/>`. Its glyphs follow the same Fluent design language as Fluent UI System Icons.

The font is licensed for apps running on Windows only. Microsoft offers a download for design and development, but that copy may not be shipped to other platforms, so don't use it on a website or in a cross-platform app. For those, use the matching icon from Fluent UI System Icons instead.

## Segoe MDL2 Assets

Segoe MDL2 Assets is the Windows 10 icon font. Windows 11 replaced it with Segoe Fluent Icons, which Microsoft now recommends for new apps. It still ships with Windows, so older apps keep working.

## Fabric MDL2 icons ("Fabric UI icons")

Before Fluent UI, Microsoft's web components were called Office UI Fabric, and they used an icon font of 1,100+ icons, often called the Fabric or MDL2 icons. They live on in Fluent UI React v8 as `@fluentui/font-icons-mdl2`, which you load with `initializeIcons()` and use as `<Icon iconName="Snow" />`.

The package's code is MIT licensed, but the icons and fonts it loads are covered by the [Microsoft Fabric Assets License](https://aka.ms/fluentui-assets-license). It only allows them in apps that use a Microsoft API or connect to a Microsoft service, such as a SharePoint or Teams add-in. For anything else, and for new projects, use Fluent UI System Icons, which is what Fluent UI React v9 uses.

## Fluent Emoji

[Fluent Emoji](https://github.com/microsoft/fluentui-emoji) is Microsoft's emoji set, in 3D, color, flat and high-contrast styles. It's MIT licensed, so it works well for chat apps, reactions and friendly illustrations next to Fluent UI icons.

## Office and Microsoft 365 app icons

The icons for Word, Excel, PowerPoint, Teams and the other Microsoft 365 apps are brand assets, not interface icons. You can use them to link to or open those apps, or to show that your product works with them. You can't use them to represent your own product, change them, or use them in a way that suggests Microsoft endorses you.

## Azure architecture icons

Microsoft publishes [icons for Azure services](https://learn.microsoft.com/azure/architecture/icons/) for cloud architecture diagrams. The terms allow them in architecture diagrams, training materials and documentation only. Don't crop, flip, rotate or distort them, and don't use them to represent your own product.

## Not from Microsoft: "Fluency" icons

The "Fluency" icon style on Icons8 is inspired by Fluent design, but it's made and licensed by Icons8, not Microsoft. If you need the official icons, use Fluent UI System Icons.

## Which one should I use?

- **A website, web app or cross-platform app:** Fluent UI System Icons.
- **A Windows app built with WinUI:** Segoe Fluent Icons for system glyphs, or Fluent UI System Icons for anything it doesn't cover.
- **An existing Fluent UI React v8 or SharePoint project:** keep the Fabric MDL2 icons, and move to Fluent UI System Icons when you upgrade to v9.
- **Emoji:** Fluent Emoji.
- **Linking to Word, Excel or Teams:** the official Microsoft 365 app icons.
- **An Azure architecture diagram:** Azure architecture icons.

## Are Microsoft icons free to use?

Fluent UI System Icons and Fluent Emoji are free under the MIT License, including in commercial projects; see [the Fluent icons license](/guides/fluent-icons-license/). The other sets are free to use only for what their terms allow: Windows apps for the Segoe fonts, Microsoft-connected apps for the Fabric icons, and diagrams for the Azure icons.
