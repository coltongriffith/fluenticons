<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>About Fluenticons</h1>
      <p>
        Fluenticons is a free, independent website for finding and using Microsoft's
        <strong>Fluent UI System Icons</strong>. You can search the full 24&nbsp;px set by name
        or keyword, preview any icon in your own colors, and copy or download it in the format
        your project needs: SVG, PNG, WEBP, React, Vue, HTML or CSS.
      </p>

      <h2>Why this site exists</h2>
      <p>
        Microsoft publishes thousands of Fluent icons as open source, but finding the right one
        usually means digging through a large GitHub repository or a Figma file. That works when
        you already know an icon's exact name. When you only know what you want it to mean, it's
        slow. Fluenticons started as a weekend project to fix that: one fast, searchable page
        with every icon, plus the small tools you end up needing — recoloring, exporting,
        collecting favorites.
      </p>

      <h2>Who runs it</h2>
      <p>
        The site was originally created by Fayaz Ahmed in 2020 and is now built and maintained
        by <strong>Colton Griffith</strong>. It's funded by advertising and sponsorships, which
        keeps it free for everyone. The source code is public on
        <a href="https://github.com/coltongriffith/fluenticons" target="_blank" rel="noopener">GitHub</a>.
      </p>
      <p>
        The same team runs <a href="https://materialicons.co/">Materialicons</a>, which does the
        same for Google's Material Symbols.
      </p>

      <h2>Where the icons come from</h2>
      <p>
        Every icon on this site comes from Microsoft's official
        <a href="https://github.com/microsoft/fluentui-system-icons" target="_blank" rel="noopener">fluentui-system-icons</a>
        repository and is used under the <NuxtLink to="/license/">MIT License</NuxtLink>. The
        site updates from that repository periodically. Icon names, descriptions and keywords
        come from Microsoft's metadata. The guides, tools and everything else on the site are
        written for Fluenticons.
      </p>
      <p>
        <strong>Fluenticons is not affiliated with, sponsored by or endorsed by Microsoft.</strong>
        Microsoft and Fluent are trademarks of the Microsoft group of companies.
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
    "Fluenticons is a free, independent viewer for Microsoft's open-source Fluent UI System Icons, built and maintained by Colton Griffith.",
  path: "/about",
});
useAdsense();
</script>
