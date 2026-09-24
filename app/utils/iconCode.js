// Names and code snippets for Fluent icon variants. Plain JavaScript with no
// Nuxt imports: the icon pages and the agent API (agent/, served by Cloudflare
// Pages Functions) both use it, so they always produce the same code.

export const STYLE_INFO = {
  regular: { label: "Regular (outlined)", short: "Regular", font: "Regular", variant: "outlined" },
  filled: { label: "Filled", short: "Filled", font: "Filled", variant: "filled" },
  color: { label: "Color", short: "Color" },
  light: { label: "Light", short: "Light", font: "Light" },
};
export const STYLE_ORDER = ["regular", "filled", "color", "light"];

// PascalCase name as used by @fluentui/react-icons and the Blazor/iOS packages (e.g. AddCircle).
export function pascalName(slug) {
  return slug
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
    .replace(/(\d)([a-z])/g, (_, d, l) => d + l.toUpperCase());
}

// React component for a size and style ("filled" | "regular" | "color" | "light"),
// e.g. AddCircle24Filled.
export function reactName(slug, size, style) {
  return `${pascalName(slug)}${size}${style.charAt(0).toUpperCase()}${style.slice(1)}`;
}

// A variant's file in Microsoft's @fluentui/svg-icons package (pinned version) on jsDelivr.
export const cdnUrl = (version, slug, size, style) =>
  `https://cdn.jsdelivr.net/npm/@fluentui/svg-icons@${version}/icons/${slug}_${size}_${style}.svg`;

// Code for one variant on every platform it's published for.
// variant: [size, icon-font codepoint (0 = none), in Flutter package (1/0)]
// versions: { svgIcons, upstreamCommit } from stats.json
export function codeTabs({ slug, name, style, variant, versions }) {
  const [size, codepoint, flutter] = variant;
  const stem = `${slug}_${size}_${style}`;
  const react = reactName(slug, size, style);
  const Style = STYLE_INFO[style].short;
  const mono = style === "filled" || style === "regular";
  const tabs = [
    {
      key: "react",
      label: "React",
      code: `npm install @fluentui/react-icons

import { ${react} } from "@fluentui/react-icons";

export function Example() {
  return <${react} aria-label="${name}" />;
}`,
    },
    {
      key: "svg",
      label: "SVG",
      code: `npm install @fluentui/svg-icons

import icon from "@fluentui/svg-icons/icons/${stem}.svg";

<!-- or load it from a CDN -->
<img src="${cdnUrl(versions.svgIcons, slug, size, style)}" width="${size}" height="${size}" alt="${name}">`,
    },
  ];
  if (mono) {
    tabs.push({
      key: "blazor",
      label: "Blazor",
      note: "Microsoft's Fluent UI Blazor icons package:",
      code: `dotnet add package Microsoft.FluentUI.AspNetCore.Components.Icons

<FluentIcon Value="@(new Icons.${Style}.Size${size}.${pascalName(slug)}())" />`,
    });
  }
  if (flutter) {
    tabs.push({
      key: "flutter",
      label: "Flutter",
      code: `flutter pub add fluentui_system_icons

import 'package:fluentui_system_icons/fluentui_system_icons.dart';

Icon(FluentIcons.${stem})`,
    });
  }
  if (codepoint) {
    const font = `FluentSystemIcons-${STYLE_INFO[style].font}`;
    const hex = codepoint.toString(16).toUpperCase();
    tabs.push(
      {
        key: "xaml",
        label: "WinUI / WPF",
        note: `Add ${font}.ttf from Microsoft's repository to your app, then use the glyph:`,
        code: `<!-- WinUI 3 (font in Assets/Fonts) -->
<FontIcon FontFamily="ms-appx:///Assets/Fonts/${font}.ttf#${font}" Glyph="&#x${hex};" FontSize="${size}" />

<!-- WPF (font in Fonts/, Build Action: Resource) -->
<TextBlock FontFamily="pack://application:,,,/Fonts/#${font}" Text="&#x${hex};" FontSize="${size}" />`,
      },
      {
        key: "font",
        label: "Icon font",
        code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/microsoft/fluentui-system-icons@${versions.upstreamCommit}/fonts/${font}.css">

<i class="icon-ic_fluent_${stem}"></i>

/* or use the code point in your own CSS */
.icon::before {
  font-family: "${font}";
  content: "\\${hex.toLowerCase()}";
  font-size: ${size}px;
}`,
      }
    );
  }
  if (mono) {
    tabs.push(
      {
        key: "android",
        label: "Android",
        code: `// build.gradle
implementation("com.microsoft.design:fluent-system-icons:${versions.svgIcons}@aar")

<!-- layout XML -->
<ImageView android:src="@drawable/ic_fluent_${stem}" />

// Kotlin
R.drawable.ic_fluent_${stem}`,
      },
      {
        key: "ios",
        label: "iOS",
        code: `# Podfile
pod "FluentIcons", "${versions.svgIcons}"

import FluentIcons

UIImage(fluent: .${react.charAt(0).toLowerCase()}${react.slice(1)})`,
      }
    );
  }
  tabs.push({
    key: "powerapps",
    label: "Power Apps",
    note: "Paste into an Image control's Image property. The Copy button copies the full formula with this icon's SVG.",
    code: `"data:image/svg+xml;utf8, " & EncodeUrl("<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>…</svg>")`,
  });
  return tabs;
}
