---
title: "WPF icons: Fluent icons in WPF and WPF UI"
seoTitle: "WPF UI Icons — Fluent System Icons in WPF, XAML & WPF UI"
description: How to use Microsoft's Fluent icons in a WPF app. SymbolIcon in the WPF UI library, the Fluent System Icons font in XAML, Segoe Fluent Icons on Windows 11, and SVG paths.
date: 2026-10-11
---

WPF doesn't ship an icon set, so most modern WPF apps pick one of three routes to Microsoft's Fluent icons: the **WPF UI** library, the **Fluent System Icons font**, or **SVG path data**. All three use [Fluent UI System Icons](/), Microsoft's MIT-licensed set, so you can switch routes later without changing how your app looks.

## WPF UI (lepoco/wpfui)

[WPF UI](https://wpfui.lepo.co/) is an open-source library that gives WPF apps the Windows 11 look: Fluent controls, Mica backgrounds and navigation. It includes Fluent UI System Icons as a font and a `SymbolIcon` control. Install the `WPF-UI` NuGet package, add its namespace and resources to `App.xaml` as its docs describe, then:

```xml
<Window xmlns:ui="http://schemas.lepo.co/wpfui/2022/xaml" …>
    <StackPanel Orientation="Horizontal">
        <ui:SymbolIcon Symbol="Home24" />
        <ui:SymbolIcon Symbol="Home24" Filled="True" />
    </StackPanel>
</Window>
```

`Symbol` takes a `SymbolRegular` name, which is the Fluent icon's name plus its size: [Home](/icon/home/) at 24 px is `Home24`, [Settings](/icon/settings/) is `Settings24`. `Filled="True"` switches to the filled style. Properties that take an icon, such as a navigation item's `Icon`, accept the markup extension:

```xml
<ui:NavigationViewItem Content="Settings" Icon="{ui:SymbolIcon Settings24}" />
```

To find a name, search Fluenticons for what the icon means, then add the size: every size an icon comes in is listed on its page.

## The Fluent System Icons font (no library)

Without WPF UI, add Microsoft's icon font to your project and use a glyph from it. Each icon page's **WinUI / WPF** code tab has the exact code point. For example, with `FluentSystemIcons-Regular.ttf` in a `Fonts` folder (Build Action: Resource):

```xml
<TextBlock FontFamily="pack://application:,,,/Fonts/#FluentSystemIcons-Regular"
           Text="&#xF481;" FontSize="24" /> <!-- Home -->
```

The font files are in Microsoft's [fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons/tree/main/fonts) repository, in Regular, Filled and Light. A glyph is text, so it takes the `Foreground` color and scales with `FontSize`.

## Segoe Fluent Icons (Windows 11)

Windows 11 includes **Segoe Fluent Icons**, the system icon font, so WPF apps that only run on Windows 11 can use it without bundling anything:

```xml
<TextBlock FontFamily="Segoe Fluent Icons, Segoe MDL2 Assets" Text="&#xE713;" FontSize="16" />
```

Listing Segoe MDL2 Assets second gives Windows 10 a fallback. The [Segoe Fluent Icons list](/segoe-fluent-icons/) has every glyph and its code. The font has fewer icons than Fluent UI System Icons and is for Windows apps only.

## SVG path data

For a single icon, or to avoid a font, paste an icon's path into a `Path`:

```xml
<Path Width="24" Height="24" Stretch="Uniform" Fill="{DynamicResource TextFillColorPrimaryBrush}"
      Data="PASTE THE PATH DATA HERE" />
```

Click **Copy SVG** on an icon's page and copy the value of `d="…"`. Icons with several paths need a `GeometryGroup` or one `Path` each. Paths scale cleanly, but a font or `SymbolIcon` is easier when you use many icons.

## Which should I use?

- **New app with a modern look:** WPF UI and its `SymbolIcon`.
- **Existing app, many icons, no new dependencies:** the Fluent System Icons font.
- **Windows 11 only, system-style icons:** Segoe Fluent Icons.
- **A few icons:** SVG paths.

See also [WinUI icons](/guides/winui-icons/) for WinUI 3, and [every Microsoft icon set](/microsoft-icons/).
