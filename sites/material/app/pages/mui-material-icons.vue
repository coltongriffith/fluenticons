<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <span>MUI Material Icons</span>
    </nav>
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>MUI Material Icons</h1>
      <p>
        <code>@mui/icons-material</code> component names for {{ list.length.toLocaleString("en-US") }}
        Google Material Icons, in five styles. Each links to the icon's SVG, PNG and code.
      </p>

      <h2>Install and import</h2>
      <CodeBlock :code="install" label="App.jsx" />
      <p>
        The plain name is the Filled style; <code>Outlined</code>, <code>Rounded</code>,
        <code>Sharp</code> and <code>TwoTone</code> suffixes give the others.
      </p>
      <CodeBlock :code="styles" label="Styles" />
      <p>
        Import from the icon's own path (<code>@mui/icons-material/Home</code>) rather than the
        package root, so development builds stay fast. Size and color come from MUI's
        <code>fontSize</code> and <code>color</code> props or the <code>sx</code> prop.
      </p>

      <h2>MUI icons vs. Material Symbols</h2>
      <p>
        <code>@mui/icons-material</code> follows the classic Material Icons, which no longer get new
        icons, and has no weight, grade or fill settings. For those, use
        <NuxtLink to="/material-symbols/">Material Symbols</NuxtLink> with MUI's <code>Icon</code>
        component:
      </p>
      <CodeBlock :code="symbols" label="App.jsx" />

      <h2>Most used MUI Material icons</h2>
    </div>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-4">
      <li v-for="[slug, name, mui] in list.slice(0, TOP)" :key="slug">
        <NuxtLink
          :to="slugToPath(slug)"
          class="flex items-center gap-3 rounded-lg border dark:border-gray-700 p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IconMask :file="`${slug}.svg`" class="h-6 w-6 shrink-0" />
          <span class="min-w-0">
            <span class="block text-sm truncate">{{ name }}</span>
            <code class="block text-xs text-gray-500 truncate">{{ mui }}Icon</code>
          </span>
        </NuxtLink>
      </li>
    </ul>

    <div class="prose dark:prose-invert max-w-3xl mt-12">
      <h2>All MUI Material icon names</h2>
      <p>A–Z.</p>
    </div>
    <ul class="mt-4 columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-6 text-sm">
      <li v-for="[slug, , mui] in alphabetical" :key="slug" class="break-inside-avoid">
        <NuxtLink :to="slugToPath(slug)" class="hover:underline"><code>{{ mui }}</code></NuxtLink>
      </li>
    </ul>

    <div class="prose dark:prose-invert max-w-3xl mt-12">
      <h2>Frequently asked questions</h2>
      <template v-for="item in FAQ" :key="item.q">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </template>
    </div>
  </div>
</template>

<script setup>
import list from "~/generated/mui.json";

const TOP = 60;
const alphabetical = [...list].sort((a, b) => a[2].localeCompare(b[2]));

const install = `npm install @mui/icons-material @mui/material @emotion/react @emotion/styled

import HomeIcon from "@mui/icons-material/Home";

export function Example() {
  return <HomeIcon fontSize="large" color="primary" />;
}`;
const styles = `import HomeIcon from "@mui/icons-material/Home";                 // Filled
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; // Outlined
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";   // Rounded
import HomeSharpIcon from "@mui/icons-material/HomeSharp";       // Sharp
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";   // Two-tone`;
const symbols = `// In index.html:
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

import Icon from "@mui/material/Icon";

<Icon baseClassName="material-symbols-outlined">home</Icon>`;

const FAQ = [
  {
    q: "How do I find the right MUI icon name?",
    a: "Search this site by meaning (\"trash\" finds Delete), open the icon and copy the import from the MUI tab. MUI names are the Material icon name in PascalCase: arrow_back becomes ArrowBack.",
  },
  {
    q: "Why is an icon missing from @mui/icons-material?",
    a: "MUI's package follows the classic Material Icons set, which stopped getting new icons. Icons added to Material Symbols since then aren't in it; use the Material Symbols font with MUI's Icon component, or the SVG from the icon's page.",
  },
  {
    q: "How do I change the size or color of an MUI icon?",
    a: "Use fontSize=\"small\", \"medium\", \"large\" or \"inherit\", and color=\"primary\", \"secondary\", \"action\", \"error\" and so on. For exact values, use the sx prop, for example sx={{ fontSize: 40, color: \"#1e88e5\" }}.",
  },
  {
    q: "Are MUI Material icons free to use?",
    a: "Yes. The @mui/icons-material package is MIT licensed, and the icon designs are Google's, released under the Apache License 2.0.",
  },
];

useSeo({
  title: "MUI Material Icons: every @mui/icons-material component name",
  description: `Find the right @mui/icons-material component: ${list.length.toLocaleString("en-US")} MUI Material icon names, the five styles, install and import code.`,
  path: "/mui-material-icons",
});
useAdsense();
useJsonLd({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
</script>
