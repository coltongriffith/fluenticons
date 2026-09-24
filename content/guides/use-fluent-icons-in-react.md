---
title: How to use Fluent UI System Icons in React
description: Install @fluentui/react-icons, pick the right component name, size and color icons, toggle filled and regular states, and keep your bundle small.
date: 2026-09-23
order: 1
---

Microsoft publishes every Fluent UI System Icon as a React component in the [`@fluentui/react-icons`](https://www.npmjs.com/package/@fluentui/react-icons) package. It's the easiest way to use these icons in a React, Next.js or Remix app, and you don't need the rest of Fluent UI to use it.

## Install the package

```bash
npm install @fluentui/react-icons
```

The package ships thousands of components, but it's written so bundlers only include the icons you import. You don't need to configure anything for that to work in Vite, Next.js or webpack 5.

## Find the component name

Component names follow a predictable pattern: the icon name in PascalCase, then the size, then the style.

| Icon | Size | Style | Component |
| --- | --- | --- | --- |
| Add Circle | 24 | Filled | `AddCircle24Filled` |
| Calendar | 20 | Regular | `Calendar20Regular` |
| Delete | 24 | Regular | `Delete24Regular` |

Every icon page on Fluenticons shows the exact import for its 24&nbsp;px versions, so the quickest route is to search for the icon here and copy the import line.

There are also **unsized** components such as `DeleteRegular` and `DeleteFilled`. They render at `1em`, so they scale with the surrounding font size. That's handy inside buttons and text. Use the sized components when you want exact pixel dimensions.

## Render an icon

```jsx
import { Delete24Regular } from "@fluentui/react-icons";

export function DeleteButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <Delete24Regular />
      Delete
    </button>
  );
}
```

The icon inherits the text color of its parent, because its fill defaults to `currentColor`. Style the button's `color` and the icon follows.

## Change the color

You have three options, from most to least flexible:

1. **Use CSS `color`.** Set `color` on the icon or any parent element. This is usually what you want, because hover and focus styles work automatically.
2. **Pass `primaryFill`.** `<Delete24Regular primaryFill="#d13438" />` sets the fill directly. It's handy for one-off cases, but it ignores CSS.
3. **Pass a `className`.** The component forwards `className` and other SVG attributes, so utility classes like Tailwind's `text-red-600` work too.

## Change the size

Sized components have a fixed `width` and `height`. To make one bigger, either import a larger size where Microsoft publishes one (`Delete28Regular`, `Delete32Regular`, and so on) or set the size with CSS. The artwork is tuned for each published size, so a native 20&nbsp;px icon will look slightly crisper than a 24&nbsp;px icon scaled down.

With unsized components, set `font-size` on the icon or its parent:

```jsx
<DeleteRegular style={{ fontSize: 32 }} />
```

## Toggle between filled and regular

A common pattern in Microsoft's apps is to show the regular icon normally and the filled icon when something is active or selected. The package includes a helper for that:

```jsx
import { bundleIcon, Heart24Filled, Heart24Regular } from "@fluentui/react-icons";

const HeartIcon = bundleIcon(Heart24Filled, Heart24Regular);

export function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button type="button" aria-pressed={isFavorite} onClick={onToggle}>
      <HeartIcon filled={isFavorite} />
      Favorite
    </button>
  );
}
```

`bundleIcon` renders both versions and shows one based on the `filled` prop, so switching doesn't cause any layout shift.

## Make icons accessible

By default the components add `aria-hidden="true"`. That's correct when the icon sits next to visible text, as in the examples above, because screen readers read the text instead.

For icon-only buttons, give the **button** an accessible name:

```jsx
<button type="button" aria-label="Delete file">
  <Delete24Regular />
</button>
```

If an icon stands alone and carries meaning (a status indicator, for example), pass `title`. The component turns it into an `aria-label` and sets `role="img"`. The [accessible icon buttons guide](/guides/accessible-icon-buttons/) covers this in more depth.

## When not to use the package

If you only need a handful of icons in a small project, or you're not using React, copying the SVG works just as well. Every icon on this site can be copied as a ready-made React component from the editor. The generated component is plain JSX, has no dependency, and forwards props to the `<svg>`.

## Quick checklist

- Import only the icons you use by name. Don't import the whole package into an object.
- Prefer CSS `color` over `primaryFill` so theming and hover states just work.
- Label icon-only buttons with `aria-label`.
- Use `bundleIcon` for filled/regular state toggles.
