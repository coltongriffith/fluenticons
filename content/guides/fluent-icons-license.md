---
title: "Fluent UI System Icons license: can you use them commercially?"
description: A plain-English look at the MIT License that covers Microsoft's Fluent UI System Icons — what it allows, what it asks of you, and common questions about attribution and trademarks.
date: 2026-09-23
order: 7
---

Microsoft publishes Fluent UI System Icons on GitHub under the **MIT License**, one of the most permissive open-source licenses. This guide explains what that means in practice. It isn't legal advice, so if your situation is unusual, check with a lawyer.

## The short answer

Yes, you can use the icons in commercial products, websites, apps, presentations and client work, for free. You can also modify them. The one condition is that the copyright notice and license text go along with copies of the icons.

## What the MIT License allows

The license grants permission to "use, copy, modify, merge, publish, distribute, sublicense, and/or sell" the software. For icons, that covers things like:

- Using them in a commercial app or SaaS product
- Using them on a website, including one that shows ads
- Changing colors, combining them, or redrawing parts of them
- Bundling them into your own icon package or component library
- Using them in designs you make for clients

## What it asks of you

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

In practice:

- **If you redistribute the icons** (for example, in an npm package, an open-source repo, or a downloadable app), include Microsoft's copyright line and the MIT License text. Most projects put it in a `LICENSE`, `NOTICE` or `THIRD_PARTY_NOTICES` file.
- **If you use a few icons inside a product,** it's common to list the icon set in the product's open-source or third-party notices. Many apps have an "About → Open source licenses" screen for exactly this.
- **You don't need to show a visible credit** next to each icon or on every page.

The copyright line in Microsoft's repository reads **"Copyright (c) 2020 Microsoft Corporation"**. You can read the full text on our [license page](/license/).

## What the license doesn't cover

### Trademarks

The MIT License covers the icons as copyrighted works. It doesn't give you rights to Microsoft's **trademarks**. Don't use the icons, or Microsoft's name, in a way that suggests your product is made or endorsed by Microsoft. Microsoft product logos (Word, Teams, Windows and so on) are separate trademarked assets and aren't part of this icon set.

### Warranty

The license comes "as is", without warranty. That's standard for open source and rarely matters for icons.

## Common questions

**Do I need to credit Fluenticons?**
No. Fluenticons is a viewer. The icons are Microsoft's, and the license terms are Microsoft's. A link back is always appreciated, but it's not required.

**Can I sell a product that includes these icons?**
Yes. That's explicitly allowed. What you shouldn't do is sell the icon set itself while presenting it as your own work, or remove the license notice when you redistribute it.

**Can I modify an icon and call it mine?**
You own your modifications, but the parts that come from Microsoft's icon are still covered by their copyright and license. Keep the notice if you redistribute the modified icons.

**Does the license change if I use the React package instead of the SVG files?**
No. `@fluentui/react-icons` and `@fluentui/svg-icons` are both MIT licensed by Microsoft.

**Are these the same icons as in Windows or Office?**
Many are. Fluent UI System Icons are the icons Microsoft designed for its Fluent design language, and they appear across its products. But some icons inside Microsoft products are product-specific and aren't in the open-source set. Those aren't covered by this license.

## Summary

- ✅ Free for personal and commercial use
- ✅ Modify, combine, redistribute
- 📄 Keep Microsoft's copyright notice and the MIT License text with copies you distribute
- 🚫 Don't imply Microsoft endorsement or use Microsoft's trademarks
