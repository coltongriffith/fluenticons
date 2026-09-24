---
title: Accessible icon buttons with SVG icons
description: How to label icon-only buttons, hide decorative icons from screen readers, keep touch targets large enough, and meet contrast requirements.
date: 2026-09-23
order: 6
---

Icons make interfaces compact, but an icon on its own tells a screen reader nothing, and a tiny icon is hard to tap. Accessibility problems with icons come down to four things, and each has a small, reliable fix.

## 1. Decide: decorative or meaningful?

Every icon is one or the other.

- **Decorative:** the icon repeats information that's already in visible text. For example, a trash icon next to the word "Delete". Screen readers should skip it.
- **Meaningful:** the icon is the only way the information is shown. For example, an icon-only button, or a warning icon with no text. Screen readers need a text alternative.

## 2. Hide decorative icons

For inline SVG, add `aria-hidden="true"`:

```html
<button type="button">
  <svg aria-hidden="true" focusable="false" …>…</svg>
  Delete
</button>
```

`focusable="false"` stops older versions of Internet Explorer and legacy Edge from putting the SVG in the tab order. It's harmless to keep.

For `<img>`, use an empty `alt`:

```html
<img src="/icons/ic_fluent_delete_24_regular.svg" alt="">
```

An empty `alt` is not the same as a missing one. Without `alt`, some screen readers read out the file name, "ic fluent delete 24 regular", which is worse than nothing.

## 3. Label icon-only controls

Put the accessible name on the **interactive element**, not the icon:

```html
<button type="button" aria-label="Delete file">
  <svg aria-hidden="true" focusable="false" …>…</svg>
</button>
```

Guidelines for good labels:

- **Describe the action, not the picture.** "Delete file", not "Trash can".
- **Be specific when there are several.** On a list of files, "Delete report.pdf" is clearer than five buttons all called "Delete".
- **Match any tooltip.** If you show a tooltip, its text should match the label, so sighted and non-sighted users hear the same name.

For toggle buttons, add state:

```html
<button type="button" aria-label="Favorite" aria-pressed="true">…</button>
```

Screen readers announce "Favorite, toggle button, pressed". The filled/regular icon swap covers the visual side. See [filled vs. regular icons](/guides/filled-vs-regular-icons/).

## 4. Make targets big enough

A 24&nbsp;px icon is a comfortable size to *see*, but a small target to tap. WCAG 2.2 sets a minimum target size of 24&nbsp;×&nbsp;24 CSS pixels, with some exceptions. Many design systems aim for 40–48&nbsp;px on touch devices. You don't need a bigger icon, just more padding:

```css
.icon-button {
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  padding: 10px;
}
```

## 5. Check contrast

Icons that convey meaning need enough contrast against their background. WCAG asks for at least **3:1** for graphical objects needed to understand the content. The default Fluent gray, `#212121`, easily passes on white. Light grays often don't: `#a0a0a0` on white is below 3:1. If you use `currentColor`, the icon inherits the text color, and text colors are usually chosen with contrast in mind already.

## 6. Don't forget focus styles

Icon buttons need a visible focus indicator, just like text buttons. Avoid `outline: none` unless you replace it:

```css
.icon-button:focus-visible {
  outline: 2px solid #0f6cbd;
  outline-offset: 2px;
}
```

## Quick checklist

- [ ] Decorative icons have `aria-hidden="true"` or `alt=""`
- [ ] Icon-only buttons and links have an `aria-label` that describes the action
- [ ] Toggles use `aria-pressed` (or `aria-current` for navigation)
- [ ] Targets are at least 24&nbsp;×&nbsp;24&nbsp;px, ideally 44&nbsp;px on touch
- [ ] Meaningful icons have 3:1 contrast or better
- [ ] Focus is clearly visible
