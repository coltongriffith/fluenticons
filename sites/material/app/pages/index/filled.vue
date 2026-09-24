<template>
  <div>
    <IconGrid variant="filled" />
    <section class="container mx-auto px-4 sm:px-8 pb-8">
      <div class="prose dark:prose-invert max-w-3xl">
        <h2>Filled Material Symbols</h2>
        <p>
          Every Material Symbol has a fill axis. At fill 0 you get the outlined drawing; at fill 1
          the enclosed shapes are solid. The filled versions read as "on", "selected" or "active",
          so a common pattern is outlined icons in navigation and the filled version for the
          current page — a bookmark that fills in once it's saved.
        </p>
        <p>
          In the icon font, turn it on with <code>font-variation-settings: "FILL" 1</code>. As SVG,
          the filled files end in <code>-fill.svg</code> (for example
          <code>@material-symbols/svg-400/outlined/home-fill.svg</code>). Open any icon for the
          filled version in the rounded and sharp styles and at every weight, or read the
          <NuxtLink to="/guides/material-symbols-fill-weight-grade-optical-size/">guide to fill, weight, grade and optical size</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeo({
  title: "Filled Material Icons",
  description: `Browse ${roughCount(
    stats.filled
  )} filled Google Material Symbols. Search by keyword, recolor, and copy as SVG, React or Vue, or download PNG.`,
  path: "/filled",
});
useAdsense();
</script>
