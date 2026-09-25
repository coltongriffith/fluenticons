<template>
  <section class="container mx-auto px-4 sm:px-8 pb-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h2>Free Google Material Symbols, ready to drop into your project</h2>
      <p>
        Material Symbols are the icons Google designed for Material Design — the same family you
        see across Android, Gmail, Google Drive and thousands of web apps. Google publishes them as
        open source under the Apache License 2.0. Materialicons puts all
        {{ stats.designs.toLocaleString("en-US") }} of them in one fast, searchable place, each in
        three styles (<strong>outlined</strong>, <strong>rounded</strong> and
        <strong>sharp</strong>), filled or unfilled, at seven weights.
      </p>
      <p>
        Google's own icon browser is built around the variable icon font. That's great when you
        use the font, but if you need a plain SVG, a PNG for a slide, a React or Vue component, an
        Android vector drawable or a Power Apps formula, you end up converting files by hand. This
        site gives you all of those directly, with a search that also matches Google's keywords
        and categories.
      </p>

      <h2>How to use Materialicons</h2>
      <ol>
        <li>
          <strong>Search.</strong> Type a name or an idea — "arrow", "delete", "weather", "cart".
          Search covers icon names and Google's keywords, so "trash" finds
          <NuxtLink to="/icon/delete/">Delete</NuxtLink>. Press <kbd>/</kbd> anywhere to jump to
          the search box.
        </li>
        <li>
          <strong>Preview.</strong> Click an icon to open it in the editor. Try any color or a
          linear or radial gradient to see it next to your design.
        </li>
        <li>
          <strong>Copy or download.</strong> Copy the icon as SVG, an HTML image, a Vue or React
          component, a CSS background or a Power Apps formula, or download SVG, PNG (512&nbsp;px),
          WEBP or a component file. Each icon's page adds the rounded and sharp styles, every weight,
          and code for HTML, React, Vue, Angular, Flutter and Android.
        </li>
        <li>
          <strong>Collect.</strong> Heart the icons you need. Favorites are saved in your browser,
          and you can download them all at once as a ZIP.
        </li>
      </ol>

      <h2>Material Symbols or Material Icons?</h2>
      <p>
        Material Symbols are the current version. The older Material Icons set (Filled, Outlined,
        Round, Sharp and Two-tone) is no longer updated and has fewer icons. Symbols replaced its
        five fixed styles with three styles plus variable fill, weight, grade and optical size, so
        one set covers every look (try the settings on the
        <NuxtLink to="/material-symbols/">Material Symbols page</NuxtLink>). If you're starting a
        project today, use Symbols. The
        <NuxtLink to="/material-icons-vs-material-symbols/">comparison guide</NuxtLink>
        explains the differences and how to migrate.
      </p>

      <h2>Material icons for your framework</h2>
      <p>
        Every icon page has copy-ready code for your stack. For setup, see
        <NuxtLink to="/mui-material-icons/">MUI Material icons</NuxtLink> (every
        <code>@mui/icons-material</code> name), <NuxtLink to="/angular-material-icons/">Angular
        Material icons</NuxtLink> with <code>mat-icon</code>, and the
        <NuxtLink to="/material-symbols/">Material Symbols font</NuxtLink> for plain HTML, React and
        Flutter. The <NuxtLink to="/browse/">Material icons list</NuxtLink> has every icon A–Z, and
        <NuxtLink to="/category/">categories</NuxtLink> group them the way Google does.
      </p>

      <h2>Frequently asked questions</h2>
      <template v-for="item in faq" :key="item.q">
        <h3>{{ item.q }}</h3>
        <p v-html="item.html"></p>
      </template>

      <h2>Guides</h2>
      <ul>
        <li v-for="guide in guides" :key="guide.slug">
          <NuxtLink :to="`${guide.path}/`">{{ guide.title }}</NuxtLink>
        </li>
      </ul>

      <h2>Looking for Microsoft's Fluent icons?</h2>
      <p>
        Our sister site <a href="https://fluenticons.co/">Fluenticons</a> does the same for
        Microsoft's Fluent UI System Icons, the icons of Windows 11 and Microsoft 365.
      </p>
    </div>
  </section>
</template>

<script setup>
import guideList from "~/generated/guides.json";

const guides = guideList.map(({ slug, path, title }) => ({ slug, path, title }));

const faq = [
  {
    q: "Are Material Symbols free for commercial use?",
    a: "Yes. Google releases Material Symbols under the Apache License 2.0, which allows commercial and personal use, modification and redistribution. If you redistribute the icons themselves, include a copy of the license. Using them in an app or website's interface is the normal, intended use.",
    html: 'Yes. Google releases Material Symbols under the Apache License 2.0, which allows commercial and personal use, modification and redistribution. If you redistribute the icons themselves, include a copy of the license. Using them in an app or website\'s interface is the normal, intended use. See the <a href="/license/">license page</a> and the <a href="/guides/material-symbols-license/">license guide</a>.',
  },
  {
    q: "Is Materialicons made by Google?",
    a: "No. Materialicons is an independent, free viewer for the open-source icon set. It isn't affiliated with or endorsed by Google. The icons themselves are Google's work.",
    html: "No. Materialicons is an independent, free viewer for the open-source icon set. It isn't affiliated with or endorsed by Google. The icons themselves are Google's work.",
  },
  {
    q: "Should I use the icon font or SVG files?",
    a: "Use the font when you need many icons and want to change fill or weight with CSS. Use SVGs when you only need a handful of icons, want no font download, or need icons in places fonts don't work, such as emails, design tools or native apps.",
    html: 'Use the font when you need many icons and want to change fill or weight with CSS. Use SVGs when you only need a handful of icons, want no font download, or need icons in places fonts don\'t work, such as emails, design tools or native apps. The <a href="/guides/use-material-symbols-in-html-and-css/">HTML and CSS guide</a> covers both.',
  },
  {
    q: "How do I change an icon's color, fill or weight?",
    a: "With the font, set color with CSS and fill or weight with font-variation-settings. With SVG, pick the file for the fill and weight you want and set the path's fill (or use currentColor). The editor and icon pages here do both for you.",
    html: 'With the font, set <code>color</code> with CSS and fill or weight with <code>font-variation-settings</code>. With SVG, pick the file for the fill and weight you want and set the path\'s fill (or use <code>currentColor</code>). The <a href="/guides/material-symbols-fill-weight-grade-optical-size/">fill and weight guide</a> shows how.',
  },
  {
    q: "Why can't I find an icon I've seen in a Google app?",
    a: "Some icons in Google's products are product-specific and aren't in the open-source set, and some older Material Icons were renamed in Symbols. Try searching for what the icon means rather than its old name.",
    html: 'Some icons in Google\'s products are product-specific and aren\'t in the open-source set, and some older Material Icons were renamed in Symbols. Try searching for what the icon means rather than its old name, or <a href="/browse/">browse every icon A–Z</a>.',
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
