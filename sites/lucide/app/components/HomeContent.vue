<template>
  <section class="container mx-auto px-4 sm:px-8 pb-8">
    <HomeLinks />
    <div class="prose dark:prose-invert max-w-3xl">
      <h2>Every Lucide icon, ready to drop into your project</h2>
      <p>
        Lucide is the open-source icon set used by shadcn/ui and thousands of web apps: clean,
        consistent line icons on a 24&nbsp;px grid, released under the ISC License. Lucideicons puts
        all {{ stats.designs.toLocaleString("en-US") }} of them in one fast, searchable place, with
        each icon's code for React, Vue, Svelte, Angular, Solid, plain HTML and the icon font.
      </p>
      <p>
        Search matches icon names, Lucide's tags and the icons' old names, so "home" finds
        <NuxtLink to="/icon/house/">House</NuxtLink> and "trash" finds every delete icon. Each icon
        page also shows the matching icon in Microsoft's Fluent and Google's Material sets, for
        when you need the same idea in another design system.
      </p>

      <h2>How to use Lucideicons</h2>
      <ol>
        <li>
          <strong>Search.</strong> Type a name or an idea — "arrow", "user", "chart", "cart". Press
          <kbd>/</kbd> anywhere to jump to the search box.
        </li>
        <li>
          <strong>Preview.</strong> Click an icon to open it in the editor. Try any color or a
          linear or radial gradient to see it next to your design.
        </li>
        <li>
          <strong>Copy or download.</strong> Copy the icon as SVG, an HTML image, a Vue or React
          component, a CSS background or a Power Apps formula, or download SVG, PNG (512&nbsp;px),
          WEBP or a component file. Each icon's page has the
          <code>lucide-react</code> import and code for every other framework, plus the icon font
          class and code point.
        </li>
        <li>
          <strong>Collect.</strong> Heart the icons you need. Favorites are saved in your browser,
          and you can download them all at once as a ZIP.
        </li>
      </ol>

      <h2>Lucide icons for your framework</h2>
      <p>
        Lucide ships an official package for each framework, with every icon as a component:
        <code>lucide-react</code>, <code>@lucide/vue</code>, <code>@lucide/svelte</code>,
        <code>@lucide/angular</code>, <code>lucide-solid</code> and
        <code>lucide-react-native</code>, plus the <code>lucide</code> package for plain JavaScript
        and <code>lucide-static</code> for SVG files and the icon font. Each icon page here gives the
        exact component name and import for each one. The
        <NuxtLink to="/browse/">Lucide icons list</NuxtLink> has every icon name A–Z, and
        <NuxtLink to="/category/">categories</NuxtLink> group them the way Lucide does.
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

      <h2>Looking for Fluent or Material icons?</h2>
      <p>
        Our sister sites do the same for other open-source sets:
        <a href="https://fluenticons.co/">Fluenticons</a> for Microsoft's Fluent UI System Icons
        (Windows 11 and Microsoft 365), and <a href="https://materialicons.co/">Materialicons</a> for
        Google's Material Symbols.
      </p>
    </div>
  </section>
</template>

<script setup>
import guideList from "~/generated/guides.json";

const guides = guideList.map(({ slug, path, title }) => ({ slug, path, title }));

const faq = [
  {
    q: "Are Lucide icons free for commercial use?",
    a: "Yes. Lucide is released under the ISC License, a short permissive license like MIT, and the icons that came from Feather are also MIT licensed. You can use them in commercial and personal projects and modify them. If you redistribute the icons themselves, include the license text.",
    html: 'Yes. Lucide is released under the ISC License, a short permissive license like MIT, and the icons that came from Feather are also MIT licensed. You can use them in commercial and personal projects and modify them. If you redistribute the icons themselves, include the license text. See the <a href="/license/">license page</a> and the <a href="/guides/lucide-icons-license/">license guide</a>.',
  },
  {
    q: "What's the difference between Lucide and Feather icons?",
    a: "Lucide started as a community fork of Feather, which stopped adding icons. Lucide keeps Feather's style and has grown to many times more icons, with official packages for each framework. Feather icons still exist in Lucide, sometimes under new names.",
    html: "Lucide started as a community fork of Feather, which stopped adding icons. Lucide keeps Feather's style and has grown to many times more icons, with official packages for each framework. Feather icons still exist in Lucide, sometimes under new names: search for the old name here to find them.",
  },
  {
    q: "Is Lucideicons made by the Lucide team?",
    a: "No. Lucideicons is an independent, free viewer for the open-source icon set. It isn't affiliated with or endorsed by the Lucide project. The icons themselves are the work of Lucide's contributors.",
    html: "No. Lucideicons is an independent, free viewer for the open-source icon set. It isn't affiliated with or endorsed by the Lucide project. The icons themselves are the work of Lucide's contributors; the official site is <a href=\"https://lucide.dev/\" rel=\"noopener\">lucide.dev</a>.",
  },
  {
    q: "How do I change an icon's size, color or stroke width?",
    a: "Lucide's components take size, color and strokeWidth props (stroke-width in Vue and Svelte). Icons use currentColor, so they also follow the text color. In a plain SVG, change the width, height, stroke and stroke-width attributes on the svg element.",
    html: 'Lucide\'s components take <code>size</code>, <code>color</code> and <code>strokeWidth</code> props (<code>stroke-width</code> in Vue and Svelte). Icons use <code>currentColor</code>, so they also follow the text color. In a plain SVG, change the <code>width</code>, <code>height</code>, <code>stroke</code> and <code>stroke-width</code> attributes on the <code>svg</code> element. The <a href="/guides/use-lucide-icons-in-react/">React guide</a> has examples.',
  },
  {
    q: "Why can't I find an icon by its old name?",
    a: "Lucide renames icons now and then (home became house, for example) and keeps the old name working as an alias. Search here matches both, and each icon page lists its old names.",
    html: 'Lucide renames icons now and then (<code>home</code> became <a href="/icon/house/">house</a>, for example) and keeps the old name working as an alias. Search here matches both, and each icon page lists its old names. You can also <a href="/browse/">browse every icon A–Z</a>.',
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
