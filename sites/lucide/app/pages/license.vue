<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>License &amp; attribution</h1>

      <h2>The icons</h2>
      <p>
        All icons on Lucideicons are from
        <a href="https://lucide.dev/" target="_blank" rel="noopener">Lucide</a>, © Lucide Icons and
        Contributors, under the ISC License below. Icons that came from the Feather project are also
        under the MIT License (© Cole Bemis); the list is in the license text. Both are permissive:
        you can use the icons in personal and commercial projects and modify them. When you
        redistribute the icons themselves — for example in an icon pack or a library — include the
        license text. Using icons in your app or website's interface is the normal, intended use.
        For a plain-English explanation, read
        <NuxtLink to="/guides/lucide-icons-license/">Can you use Lucide icons commercially?</NuxtLink>
      </p>

      <h2>This website</h2>
      <p>
        The Lucideicons website's own content — the guides, page text and design — is
        © Lucideicons. The site's source code is public on
        <a href="https://github.com/coltongriffith/fluenticons" target="_blank" rel="noopener">GitHub</a>.
        Lucideicons is an independent project and is not affiliated with or endorsed by the Lucide
        project. You don't need to credit Lucideicons when you use an icon, but a link is always
        appreciated.
      </p>

      <h2>Lucide license (full text)</h2>
      <pre class="whitespace-pre-wrap text-sm">{{ licenseText }}</pre>
    </div>
  </div>
</template>

<script setup>
import licenseText from "~~/content/lucide-license.txt?raw";

useSeo({
  title: "License & attribution",
  description:
    "Lucide icons are © Lucide Icons and Contributors under the ISC License (some from Feather, MIT). Full license text and attribution guidance.",
  path: "/license",
});
</script>
