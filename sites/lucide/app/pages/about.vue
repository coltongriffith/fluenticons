<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>About Lucideicons</h1>
      <p>
        Lucideicons is a free, independent website for finding and using
        <strong>Lucide</strong>, the open-source icon set used by shadcn/ui and thousands of other
        projects. You can search every icon by name, tag or old name, preview it in your own colors,
        and copy or download it in the format your project needs: SVG, PNG, React, Vue, Svelte,
        Angular, plain HTML, the icon font or Power Apps.
      </p>

      <h2>Why this site exists</h2>
      <p>
        Lucide's own site is the place for the library itself. Lucideicons adds the things you
        end up looking for while building: every icon's code for each framework on one page, its
        old names, its category and tags, similar icons, and the matching icon in Microsoft's
        Fluent and Google's Material sets. It comes from the team behind
        <a href="https://fluenticons.co/">Fluenticons</a> and
        <a href="https://materialicons.co/">Materialicons</a>, which do the same for Microsoft's
        and Google's icons.
      </p>

      <h2>Who runs it</h2>
      <p>
        The site is built and maintained by <strong>Colton Griffith</strong>. It's funded by
        sponsorships, which keeps it free for everyone. The source code is public on
        <a href="https://github.com/coltongriffith/fluenticons" target="_blank" rel="noopener">GitHub</a>.
      </p>

      <h2>Where the icons come from</h2>
      <p>
        Every icon on this site is from
        <a href="https://lucide.dev/" target="_blank" rel="noopener">Lucide</a>, used under the
        <NuxtLink to="/license/">ISC License</NuxtLink> (some icons came from Feather, under the MIT
        License). The SVG files come from the <code>lucide-static</code> package; names and tags come
        from the same package, and categories from Lucide's own site. The guides, tools and
        everything else on the site are written for Lucideicons.
      </p>
      <p>
        <strong>Lucideicons is not affiliated with, sponsored by or endorsed by the Lucide project or
        its contributors.</strong>
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
    "Lucideicons is a free, independent viewer for the open-source Lucide icon set, built and maintained by Colton Griffith.",
  path: "/about",
});
useAdsense();
</script>
