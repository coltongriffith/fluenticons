---
title: "How to use Lucide icons in React and Next.js"
seoTitle: "Lucide React: How to Use Lucide Icons in React & Next.js"
description: Install lucide-react, import icons by name, set size, color and stroke width, apply defaults with LucideProvider, and load icons by name with DynamicIcon.
date: 2026-10-26
order: 1
---

`lucide-react` is Lucide's official React package: every icon is a React component that renders an inline SVG. It's also what shadcn/ui uses, so if your project started from shadcn/ui, it's already installed.

## Install and import

```bash
npm install lucide-react
```

Import each icon by its component name. Names are the icon name in PascalCase: `house` is `House`, `arrow-left` is `ArrowLeft`, `circle-check` is `CircleCheck`. Every icon page on this site shows the exact name.

```jsx
import { House, Search, Settings } from "lucide-react";

export function Toolbar() {
  return (
    <nav>
      <House />
      <Search />
      <Settings />
    </nav>
  );
}
```

Named imports are tree-shaken by Vite, Next.js and other modern bundlers, so only the icons you import end up in your bundle.

Each icon is also exported as `HouseIcon` and `LucideHouse`, which helps when a name clashes with one of your own components (an `Image` icon next to Next.js's `Image`, for example).

## Size, color and stroke width

Icons take a few props on top of the usual SVG attributes:

```jsx
<House size={32} color="#e11d48" strokeWidth={1.5} />
```

- `size`: width and height in pixels (default 24).
- `color`: the stroke color (default `currentColor`, so icons follow the text color).
- `strokeWidth`: the line thickness (default 2).
- `absoluteStrokeWidth`: keeps the stroke the same number of pixels at any size, instead of scaling with the icon.

Because icons use `currentColor`, the simplest way to color them is with your text classes, for example `<House className="text-rose-600" />` in Tailwind.

## Defaults for every icon

To change the default size or stroke for a whole app or section, wrap it in `LucideProvider`:

```jsx
import { LucideProvider } from "lucide-react";

export default function App({ children }) {
  return (
    <LucideProvider size={20} strokeWidth={1.75}>
      {children}
    </LucideProvider>
  );
}
```

Props on an individual icon still win over the provider's.

## Icons chosen at run time

When the icon comes from data (a CMS or a database field), use `DynamicIcon`, which loads icons by their kebab-case name:

```jsx
import { DynamicIcon } from "lucide-react/dynamic";

<DynamicIcon name="house" size={24} />
```

Each icon is loaded as its own chunk the first time it's shown, so prefer static imports whenever you know the icon at build time.

## Accessibility

Lucide icons are decorative by default (`aria-hidden="true"`). When an icon carries meaning on its own, such as an icon-only button, give the button a label:

```jsx
<button aria-label="Search">
  <Search />
</button>
```

## Finding the right icon

Search on [the homepage](/) matches names, Lucide's tags and old names: "home" finds House, and "trash" finds every delete icon. Each icon page has its React import ready to copy, along with Vue, Svelte, Angular and plain HTML.
