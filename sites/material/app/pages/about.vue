<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>About Materialicons</h1>
      <p>
        Materialicons is a free, independent website for finding and using Google's
        <strong>Material Symbols</strong>. You can search every symbol by name or keyword, preview
        it in your own colors, switch between the outlined, rounded and sharp styles, fill and
        weight, and copy or download it in the format your project needs: SVG, PNG, WEBP, React,
        Vue, HTML, CSS, Android or Power Apps.
      </p>

      <h2>Why this site exists</h2>
      <p>
        Google's icon browser is designed around its variable icon font. Many projects need
        something else — a single SVG, a PNG for a presentation, a component file, an Android
        vector drawable — and getting those usually means extra conversion steps. Materialicons
        comes from the team behind <a href="https://fluenticons.co/">Fluenticons</a>, which does
        the same for Microsoft's Fluent icons: one fast, searchable page with every icon and the
        small tools you end up needing.
      </p>

      <h2>Who runs it</h2>
      <p>
        The site is built and maintained by <strong>Colton Griffith</strong>. It's funded by
        advertising and sponsorships, which keeps it free for everyone. The source code is public
        on <a href="https://github.com/coltongriffith/fluenticons" target="_blank" rel="noopener">GitHub</a>.
      </p>

      <h2>Where the icons come from</h2>
      <p>
        Every icon on this site is one of Google's
        <a href="https://github.com/google/material-design-icons" target="_blank" rel="noopener">Material Symbols</a>,
        used under the <NuxtLink to="/license/">Apache License 2.0</NuxtLink>. The SVG files come
        from the <code>@material-symbols</code> packages, which are built from Google's releases.
        Icon names, categories and keywords come from Google Fonts' icon metadata. The guides,
        tools and everything else on the site are written for Materialicons.
      </p>
      <p>
        <strong>Materialicons is not affiliated with, sponsored by or endorsed by Google.</strong>
        Google and Material Design are trademarks of Google LLC.
      </p>

      <h2>Get in touch</h2>
      <p>
        Found a bug, missing icon or broken download? Have a sponsorship question? See the
        <NuxtLink to="/contact/">contact page</NuxtLink>.
      </p>
    </div>
  </div>
</template>

<script setup>
useSeo({
  title: "About",
  description:
    "Materialicons is a free, independent viewer for Google's open-source Material Symbols, built and maintained by Colton Griffith.",
  path: "/about",
});
useAdsense();
</script>
