<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>License &amp; attribution</h1>

      <h2>The icons</h2>
      <p>
        All icons on Materialicons are
        <a href="https://github.com/google/material-design-icons" target="_blank" rel="noopener">Material Symbols</a>
        by Google LLC, used under the Apache License 2.0 below. You're free to use them in personal
        and commercial projects, and to modify them. When you redistribute the icons themselves —
        for example in an icon pack or a library — include a copy of the license and keep any
        notices. Using icons in your app or website's interface is the normal, intended use. For a
        plain-English explanation, read
        <NuxtLink to="/guides/material-symbols-license/">Can you use Material Symbols commercially?</NuxtLink>
      </p>

      <h2>Trademarks</h2>
      <p>
        Google, Material Design and related names are trademarks of Google LLC. The Apache License
        doesn't grant rights to use those trademarks. Materialicons is an independent project and is
        not affiliated with or endorsed by Google.
      </p>

      <h2>This website</h2>
      <p>
        The Materialicons website's own content — the guides, page text and design — is
        © Materialicons. The site's source code is public on
        <a href="https://github.com/coltongriffith/fluenticons" target="_blank" rel="noopener">GitHub</a>.
        You don't need to credit Materialicons when you use an icon, but a link is always
        appreciated.
      </p>

      <h2>Apache License 2.0 (full text)</h2>
      <pre class="whitespace-pre-wrap text-sm">{{ licenseText }}</pre>
    </div>
  </div>
</template>

<script setup>
import licenseText from "~~/content/apache-2.0.txt?raw";

useSeo({
  title: "License & attribution",
  description:
    "Material Symbols are © Google LLC and licensed under the Apache License 2.0. Full license text and attribution guidance for using the icons.",
  path: "/license",
});
</script>
