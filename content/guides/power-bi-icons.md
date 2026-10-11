---
title: "Power BI icons: adding Fluent icons to reports"
seoTitle: "Power BI Icons — Free Fluent Icons for Buttons, Images & DAX SVG"
description: Free icons for Power BI reports. Add Fluent icons to buttons and images, draw them with a DAX SVG measure that changes color with your data, or use them for conditional formatting.
date: 2026-10-11
---

Power BI's own interface is built with Microsoft's Fluent design, so [Fluent UI System Icons](/) look at home in a report: the same line weight, corners and proportions as the icons in the ribbon and panes. They're free under the MIT License, including in reports you sell or publish. There are four ways to get one into a report, depending on whether the icon is fixed or should react to your data.

## 1. A button icon

For navigation, bookmarks and drill-through, use a button with a custom icon:

1. Find the icon on Fluenticons and click **PNG** on its page (a 512 px image with a transparent background).
2. In Power BI Desktop, choose **Insert > Buttons > Blank**.
3. In the **Format button** pane, open **Style > Icon**, set **Icon type** to **Custom** and select **Browse** to pick the PNG.
4. Set **Image fit** and **Icon placement**, and give the button a tooltip or text label so it's clear what it does.

Microsoft doesn't list which image types the custom icon accepts, so PNG is the safe choice. Download the icon in the color you want: the editor on the homepage recolors any icon before you download it.

## 2. An image

For a fixed icon next to a title or KPI card, use **Insert > Image** with the same PNG. Images don't change with the data, and they're scaled as pictures, so download a size at least as large as you'll show it.

## 3. A DAX measure that draws the icon (SVG)

To show an icon that changes color with a value, such as a red or green status icon in every table row, return the icon's SVG from a measure:

```dax
Status Icon =
VAR Color = IF ( [Sales vs Target] >= 0, "#107C10", "#C50F1F" )
RETURN
    "data:image/svg+xml;utf8," &
    "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>" &
    "<path fill='" & Color & "' d='PASTE THE PATH DATA HERE'/></svg>"
```

Then select the measure and, in **Measure tools**, set **Data category** to **Image URL**. Add it to a table or matrix (and set the image size under **Image size** in the formatting pane).

To get the path data, open an icon here, click **Copy SVG** and copy what's inside `d="…"`. Some icons have more than one `<path>`; copy each one. Two things trip people up:

- **Quotes.** DAX strings use double quotes, so the SVG inside must use single quotes, as above.
- **Desktop vs. the service.** A few SVG features render in one but not the other. Simple paths with plain fills, like Fluent icons, work in both; test the published report anyway.

## 4. Icons for conditional formatting

Power BI's built-in icon sets for conditional formatting are small. A report theme can add your own: put an `icons` section in the theme JSON, with each icon as a data URI.

```json
{
  "name": "My theme",
  "icons": {
    "Checkmark": {
      "description": "On target",
      "url": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23107C10' d='…'/></svg>"
    }
  }
}
```

Import the theme with **View > Themes > Browse for themes**, then pick the icons under conditional formatting **Icons** for a table or matrix. Inside a URL, write `#` in colors as `%23`.

## Which Fluent icons work well in Power BI

- **Status:** [Checkmark Circle](/icon/checkmark-circle/), [Warning](/icon/warning/), [Error Circle](/icon/error-circle/), [Info](/icon/info/)
- **Trends:** [Arrow Trending](/icon/arrow-trending/), [Arrow Up](/icon/arrow-up/), [Arrow Down](/icon/arrow-down/), [Data Trending](/icon/data-trending/)
- **Navigation:** [Home](/icon/home/), [Arrow Left](/icon/arrow-left/), [Filter](/icon/filter/), [Info](/icon/info/), [Navigation](/icon/navigation/)
- **Charts:** browse the [chart topic](/tag/chart/) for bar, pie and line icons.

Use the regular (outlined) style for most icons and the filled style for a selected or active state; [filled vs. regular icons](/guides/filled-vs-regular-icons/) explains the pattern.

## Power Apps and the rest of the Power Platform

Every icon page also has a **Power Apps** button, which copies a formula for an Image control's Image property, so canvas apps and Power BI reports can share one icon set.
