<template>
  <div>
    <IconGrid variant="outlined" />
    <section class="container mx-auto px-4 sm:px-8 pb-8">
      <div class="prose dark:prose-invert max-w-3xl">
        <h2>Outlined (regular) Fluent icons</h2>
        <p>
          The regular style is the outlined version of each Fluent UI System Icon: line-based
          drawings on a 24&nbsp;px grid, with open shapes that keep toolbars and navigation light.
          Microsoft calls this style "Regular". In <code>@fluentui/react-icons</code> the
          components end in <code>24Regular</code> (for example <code>Home24Regular</code>).
        </p>
        <p>
          Regular icons are a good default for buttons, menus and sidebars. Pair them with the
          <NuxtLink to="/">filled icons</NuxtLink> to show a selected or active state. Read the
          <NuxtLink to="/guides/filled-vs-regular-icons/">filled vs. regular guide</NuxtLink>
          for more patterns, or <NuxtLink to="/browse/">browse every icon A–Z</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeo({
  title: "Outlined (Regular) Fluent Icons",
  description: `Browse ${roughCount(
    stats.regular
  )} outlined Fluent UI System Icons (Microsoft's Regular style). Search by keyword, recolor, and copy as SVG, React or Vue, or download PNG.`,
  path: "/outlined",
});
useAdsense();
</script>
