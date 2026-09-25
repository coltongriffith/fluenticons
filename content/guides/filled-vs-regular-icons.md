---
title: "Filled vs. regular icons: when to use which"
description: How Fluent's filled and regular icon styles differ, the patterns Microsoft uses them for, and practical rules for mixing them in your own interface.
date: 2026-09-23
order: 5
---

Most Fluent UI System Icons come in two styles. **Regular** icons are line drawings with open shapes. **Filled** icons are solid versions of the same designs. They share the same grid, proportions and silhouettes, so the question isn't which one looks better. It's what each one should *mean* in your interface.

## What's the difference?

- **Regular (outlined)** icons are light. They take up little visual weight, so a toolbar with ten of them still feels calm.
- **Filled** icons are heavy. They draw the eye, work at small sizes where thin lines get lost, and read as "on", "selected" or "important".

Because the two styles line up almost exactly, swapping one for the other in place doesn't make anything jump around. That's what makes the patterns below possible.

## Pattern 1: regular by default, filled for "selected"

This is the most common pattern in Microsoft's own products, and a safe default for yours:

- Navigation items use the regular icon, and the **current** page shows the filled icon.
- Toggle buttons (favorite, pin, bookmark, like) show regular when off and filled when on.
- Tabs show regular icons, with the filled icon on the active tab.

The change in weight gives a clear signal that doesn't depend on color alone, which matters for people with color vision deficiencies and in high-contrast modes.

## Pattern 2: filled for status and small sizes

Filled icons hold up better when they're tiny or sit on a busy background:

- Status indicators (a filled check-mark circle for "done", a filled warning triangle)
- Badges and small overlays on avatars or thumbnails
- Icons at 16&nbsp;px or smaller, where outlines can look faint

## Pattern 3: one style throughout

Some interfaces use only one style: all regular for a minimal, content-first app, or all filled for a bold, playful one. That's fine as long as you're consistent. Mixing styles *without* a reason (filled here, regular there, for no clear purpose) makes an interface feel unfinished, because users try to read meaning into the difference.

## Practical rules

1. **Pick a default style and write it down.** For most apps it's regular.
2. **Use the other style only to communicate something**, such as selection, state or emphasis.
3. **Keep the pair consistent.** If "favorite" uses Heart Regular and Heart Filled, don't switch to Star elsewhere.
4. **Don't rely on filled vs. regular alone for critical state.** Pair it with text, `aria-pressed` or `aria-current` so assistive technology can announce it too.
5. **Check dark mode.** Filled icons carry more visual weight on dark backgrounds, so an icon that looked balanced in light mode can feel loud in dark mode.

## Example: a favorite toggle

```html
<button type="button" aria-pressed="false" class="favorite">
  <!-- Heart Regular when off -->
  <svg class="icon-off" …>…</svg>
  <!-- Heart Filled when on -->
  <svg class="icon-on" hidden …>…</svg>
  <span>Favorite</span>
</button>
```

```js
button.addEventListener("click", () => {
  const on = button.getAttribute("aria-pressed") !== "true";
  button.setAttribute("aria-pressed", String(on));
  button.querySelector(".icon-on").hidden = !on;
  button.querySelector(".icon-off").hidden = on;
});
```

In React, `@fluentui/react-icons` has a `bundleIcon` helper that does this for you. See the [React guide](/guides/use-fluent-icons-in-react/).

## Finding both styles

Every icon page on this site shows the filled and regular versions side by side. You can also switch the main grid between [Filled](/) and [Outlined](/outlined/) while keeping your search. A small number of icons only exist in one style. Their pages say so.
