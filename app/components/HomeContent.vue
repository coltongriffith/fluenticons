<template>
  <section class="container mx-auto px-4 sm:px-8 pb-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h2>Free Fluent UI System Icons, ready to drop into your project</h2>
      <p>
        Fluent UI System Icons are the icons Microsoft designed for its Fluent design system —
        the same family you see across Windows 11, Microsoft 365 and Teams. Microsoft publishes
        them as open source under the MIT License. Fluenticons puts the whole set in one
        searchable place: more than {{ roughCount(stats.designs) }} designs, most of them in both a
        <strong>filled</strong> and a <strong>regular</strong> (outlined) style, for over
        {{ roughCount(stats.filled + stats.regular) }} icons in the grid — and
        {{ roughCount(stats.variants) }} size and style variants on the icon pages.
      </p>
      <p>
        Microsoft ships the icons as a large repository, a Figma file and several code packages.
        That's fine when you already know an icon's exact name. When you're hunting for "the
        calendar with a check mark" it's slow. This site is built for that: type what you're
        looking for, see every match at once, and copy the exact code you need.
      </p>

      <h2 id="whats-new">What's new</h2>
      <ul>
        <li>
          <strong>Every size and style.</strong> Each icon page now has all of Microsoft's
          hand-tuned sizes (10 to 48&nbsp;px) plus the <NuxtLink to="/color/">Color</NuxtLink>
          and Light styles where they exist, each ready to download as SVG or PNG.
        </li>
        <li>
          <strong>Code for your platform.</strong> Copy-ready snippets for React, Blazor, Flutter,
          WinUI and WPF, Android, iOS, the icon font and the SVG package — with the exact name
          for the size you picked.
        </li>
        <li>
          <strong>Power Apps.</strong> Copy any icon as a Power Fx formula for an Image control,
          from the editor or an icon page.
        </li>
        <li>
          <strong>Browse by topic.</strong> <NuxtLink to="/tag/">{{ stats.tags }} topics</NuxtLink>
          such as <NuxtLink to="/tag/arrow/">arrows</NuxtLink>,
          <NuxtLink to="/tag/chart/">charts</NuxtLink> and
          <NuxtLink to="/tag/security/">security</NuxtLink>, and a page of
          <NuxtLink to="/new/">new icons</NuxtLink> from each Microsoft release (with an
          <a href="/feed.xml">RSS feed</a>).
        </li>
        <li>
          <strong>Material Icons.</strong> Our new sister site,
          <a href="https://materialicons.co/">Materialicons</a>, does the same for Google's
          Material Symbols: every style, fill and weight, with code for HTML, React, Flutter and
          Android.
        </li>
      </ul>

      <h2>How to use Fluenticons</h2>
      <ol>
        <li>
          <strong>Search.</strong> Type a name or an idea — "arrow", "delete", "flame", "weather".
          Search covers icon names and Microsoft's own keywords, so "trash" finds
          <NuxtLink to="/icon/delete/">Delete</NuxtLink>. Press <kbd>/</kbd> anywhere to jump to
          the search box.
        </li>
        <li>
          <strong>Preview.</strong> Click an icon to open it in the editor. Try it in any color,
          or apply a linear or radial gradient, to see how it looks next to your design.
        </li>
        <li>
          <strong>Copy or download.</strong> Copy the icon as raw SVG, an HTML image, a Vue
          component, a React component or a CSS background. You can also download it as SVG, PNG
          (512&nbsp;px), WEBP or a component file. Every icon also has its own page with
          ready-to-paste code.
        </li>
        <li>
          <strong>Collect.</strong> Heart the icons you need. Your favorites are saved in your
          browser, and you can download them all at once as a ZIP.
        </li>
      </ol>

      <h2>Filled or regular?</h2>
      <p>
        Both styles share the same 24&nbsp;px grid and outer shapes, so you can mix them
        freely. A common pattern in Microsoft's own apps is regular icons for navigation and
        toolbars, and the filled version to show an active or selected state — a regular heart
        that becomes filled once you've favorited something. The
        <NuxtLink to="/guides/filled-vs-regular-icons/">filled vs. regular guide</NuxtLink>
        covers when to use each.
      </p>

      <h2>Using the icons in code</h2>
      <p>
        For React apps, Microsoft's <code>@fluentui/react-icons</code> package ships every icon as
        a tree-shakable component. Each icon page on this site shows the exact import name. For
        anything else — plain HTML, Vue, Svelte, email templates, native apps — copy the SVG.
        The paths use a single fill color, so you can recolor them with <code>currentColor</code>
        or CSS. The <NuxtLink to="/guides/">guides</NuxtLink> walk through React, Vue, HTML and
        CSS setups step by step.
      </p>

      <h2>Frequently asked questions</h2>
      <template v-for="item in faq" :key="item.q">
        <h3>{{ item.q }}</h3>
        <p v-html="item.html"></p>
      </template>

      <h2>Guides</h2>
      <ul>
        <li v-for="guide in guides" :key="guide.slug">
          <NuxtLink :to="`/guides/${guide.slug}/`">{{ guide.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import guideList from "~/generated/guides.json";

const guides = guideList.map(({ slug, title }) => ({ slug, title }));

const faq = [
  {
    q: "Are these icons free for commercial use?",
    a: "Yes. Microsoft releases Fluent UI System Icons under the MIT License, which allows commercial and personal use, modification and redistribution. The license asks that you keep Microsoft's copyright and permission notice with copies of the icons — most teams add it to their third-party notices.",
    html: 'Yes. Microsoft releases Fluent UI System Icons under the MIT License, which allows commercial and personal use, modification and redistribution. The license asks that you keep Microsoft\'s copyright and permission notice with copies of the icons — most teams add it to their third-party notices. See the <a href="/license/">license page</a> for the full text.',
  },
  {
    q: "Is Fluenticons made by Microsoft?",
    a: "No. Fluenticons is an independent, free viewer for the open-source icon set. It isn't affiliated with or endorsed by Microsoft. The icons themselves are Microsoft's work.",
    html: "No. Fluenticons is an independent, free viewer for the open-source icon set. It isn't affiliated with or endorsed by Microsoft. The icons themselves are Microsoft's work.",
  },
  {
    q: "What size are the icons?",
    a: "The grid shows the 24 px versions, the size most apps use for toolbar and navigation icons. Microsoft also draws many icons at other sizes (such as 16, 20, 28, 32 and 48 px), tuned so they stay crisp at that size. Each icon page lists every size and lets you download any of them. SVGs scale cleanly, and PNG downloads are rendered at 512 px.",
    html: "The grid shows the 24&nbsp;px versions, the size most apps use for toolbar and navigation icons. Microsoft also draws many icons at other sizes (such as 16, 20, 28, 32 and 48&nbsp;px), tuned so they stay crisp at that size. Each icon page lists every size and lets you download any of them. SVGs scale cleanly, and PNG downloads are rendered at 512&nbsp;px.",
  },
  {
    q: "How do I change an icon's color?",
    a: "Pick a color in the editor before you copy or download it. In your own code, set the SVG's fill to currentColor and the icon will follow the surrounding text color.",
    html: 'Pick a color in the editor before you copy or download it. In your own code, set the SVG\'s fill to <code>currentColor</code> and the icon will follow the surrounding text color — the <a href="/guides/change-svg-icon-color-and-size/">color and size guide</a> shows how.',
  },
  {
    q: "Why can't I find an icon I've seen in a Microsoft app?",
    a: "Some icons in Microsoft products are product-specific and aren't part of the open-source set. Try searching for what the icon means rather than what it looks like — Microsoft tags each icon with keywords such as \"trash\" for Delete.",
    html: 'Some icons in Microsoft products are product-specific and aren\'t part of the open-source set. Try searching for what the icon means rather than what it looks like — Microsoft tags each icon with keywords such as "trash" for Delete. You can also <a href="/browse/">browse every icon A–Z</a>.',
  },
];

useJsonLd({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});
</script>
