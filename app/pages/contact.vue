<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>Contact</h1>
      <p>The quickest way to reach the right place depends on what you need.</p>

      <h2>Bugs, missing icons and feature requests</h2>
      <p>
        Please open an issue on
        <a href="https://github.com/coltongriffith/fluenticons/issues" target="_blank" rel="noopener">GitHub</a>.
        Include the icon name and your browser if something doesn't look right. Issues are public,
        so others with the same problem can follow along.
      </p>
      <p>
        If an icon is missing from Microsoft's set itself, you can request it in Microsoft's
        <a href="https://github.com/microsoft/fluentui-system-icons/issues" target="_blank" rel="noopener">fluentui-system-icons repository</a>.
        Fluenticons shows what Microsoft publishes.
      </p>

      <h2>Sponsorships, privacy and everything else</h2>
      <p>
        Email <a href="mailto:colton@fluenticons.co">colton@fluenticons.co</a>. This is also the
        address for privacy requests and questions about this site's
        <NuxtLink to="/privacy-policy/">privacy policy</NuxtLink> or
        <NuxtLink to="/terms/">terms</NuxtLink>. You'll usually get a reply within a few
        business days. Sponsorship rates and placements are on the
        <NuxtLink to="/sponsor/">sponsor page</NuxtLink>.
      </p>

      <h2>Questions about the icons' license</h2>
      <p>
        The icons are Microsoft's and are licensed under MIT. Our
        <NuxtLink to="/guides/fluent-icons-license/">license guide</NuxtLink> answers the most
        common questions. We can't give legal advice or grant rights beyond the license.
      </p>
    </div>
  </div>
</template>

<script setup>
useSeo({
  title: "Contact",
  description: "How to report a bug, request an icon, or get in touch with Fluenticons about sponsorships and privacy.",
  path: "/contact",
});
</script>
