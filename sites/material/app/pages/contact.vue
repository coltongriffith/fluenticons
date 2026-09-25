<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>Contact</h1>
      <p>The quickest way to reach the right place depends on what you need.</p>

      <h2>Bugs, missing icons and feature requests</h2>
      <p>
        Please open an issue on
        <a href="https://github.com/coltongriffith/fluenticons/issues" target="_blank" rel="noopener">GitHub</a>
        and mention Materialicons. Include the icon name and your browser if something doesn't look
        right. Issues are public, so others with the same problem can follow along.
      </p>
      <p>
        If an icon is missing from Material Symbols itself, you can request it in Google's
        <a href="https://github.com/google/material-design-icons/issues" target="_blank" rel="noopener">material-design-icons repository</a>.
        Materialicons shows what Google publishes.
      </p>

      <h2>Sponsorships, privacy and everything else</h2>
      <p>
        Email <a href="mailto:colton@fluenticons.co">colton@fluenticons.co</a> (the same inbox
        covers both of our sites). This is also the address for privacy requests and questions
        about this site's <NuxtLink to="/privacy-policy/">privacy policy</NuxtLink> or
        <NuxtLink to="/terms/">terms</NuxtLink>. You'll usually get a reply within a few business
        days. Sponsorship rates and placements are on the
        <NuxtLink to="/sponsor/">sponsor page</NuxtLink>.
      </p>

      <h2>Questions about the icons' license</h2>
      <p>
        The icons are Google's and are licensed under the Apache License 2.0. Our
        <NuxtLink to="/guides/material-symbols-license/">license guide</NuxtLink> answers the most
        common questions. We can't give legal advice or grant rights beyond the license.
      </p>
    </div>
  </div>
</template>

<script setup>
useSeo({
  title: "Contact",
  description: "How to report a bug, request an icon, or get in touch with Materialicons about sponsorships and privacy.",
  path: "/contact",
});
</script>
